package net.dirox.unikeysdk.source;

import android.content.Context;
import android.text.TextUtils;
import android.util.Log;
import net.dirox.unikeysdk.service.UNKAPI;
import net.dirox.unikeysdk.utils.UNKConstant;
import net.dirox.unikeysdk.utils.UNKLocalDataHelper;
import net.dirox.unikeysdk.utils.UNKTokenExpiredAction;
import okhttp3.Interceptor;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.logging.HttpLoggingInterceptor;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import retrofit2.converter.scalars.ScalarsConverterFactory;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

@SuppressWarnings("NullableProblems")
public class UNKService {

    private Retrofit mRetrofit;
    private String mClientId;
    private String mClientSecret;
    private String mUrl;
    private Context mAppContext;
    private UNKTokenExpiredAction mTokenExpiredAction;

    private UNKService(Context appContext, String clientId, String clientSecret, String url, UNKTokenExpiredAction tokenExpiredAction) {
        super();
        this.mAppContext = appContext;
        this.mClientId = clientId;
        this.mClientSecret = clientSecret;
        this.mUrl = url;
        this.mTokenExpiredAction = tokenExpiredAction;
        initialClientService();
    }

    public static class UnikeysClientBuilder {
        private Context mAppContext;
        private String mClientId;
        private String mClientSecret;
        private String mUrl;
        private UNKTokenExpiredAction mTokenExpiredAction;

        public UnikeysClientBuilder(Context appContext, String clientId, String clientSecret) {
            super();
            this.mAppContext = appContext;
            this.mClientId = clientId;
            this.mClientSecret = clientSecret;
        }

        public UnikeysClientBuilder baseUrl(String url) {
            this.mUrl = url;
            return this;
        }

        public UnikeysClientBuilder tokenError(UNKTokenExpiredAction tokenExpiredAction) {
            this.mTokenExpiredAction = tokenExpiredAction;
            return this;
        }

        public UNKService build() {
            return new UNKService(this.mAppContext, this.mClientId, this.mClientSecret, this.mUrl, mTokenExpiredAction);
        }
    }

    private void initialClientService() {
        HttpLoggingInterceptor loggingInterceptor = new HttpLoggingInterceptor();
        loggingInterceptor.setLevel(HttpLoggingInterceptor.Level.BODY);
        mRetrofit = new Retrofit.Builder()
                .baseUrl(mUrl)
                .addConverterFactory(ScalarsConverterFactory.create())
                .addConverterFactory(GsonConverterFactory.create())
                .client(new OkHttpClient().newBuilder().addInterceptor(new Interceptor() {
                    @Override
                    public Response intercept(Chain chain) throws IOException {
                        Request request = chain.request();
                        Request.Builder builder = request.newBuilder();
                        String accessToken = UNKLocalDataHelper.getAccessToken(mAppContext);
                        if (!TextUtils.isEmpty(accessToken) && !request.url().toString().contains("/wallet/auth"))
                            builder.addHeader("Authorization", "Bearer " + accessToken);
                        return chain.proceed(builder.build());
                    }
                })
                        .addInterceptor(loggingInterceptor)
                        .addInterceptor(new UNKHandlerExpiredTokenIntercept(mAppContext, mTokenExpiredAction))
                        .readTimeout(UNKConstant.API_READ_TIMEOUT, TimeUnit.SECONDS)
                        .writeTimeout(UNKConstant.API_WRITE_TIMEOUT, TimeUnit.SECONDS)
                        .connectTimeout(UNKConstant.API_CONNECT_TIMEOUT, TimeUnit.SECONDS)
                        .build())
                .build();
        UNKAPI api = mRetrofit.create(UNKAPI.class);
        UNKRequestAPI requestAPI = new UNKRequestAPI(api, mAppContext);
        requestAPI.setClientId(mClientId);
        requestAPI.setClientSecret(mClientSecret);
    }
}
