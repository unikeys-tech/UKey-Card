package net.dirox.unikeysdk.source;

import android.content.Context;
import android.text.TextUtils;
import net.dirox.unikeysdk.utils.UNKConstant;
import net.dirox.unikeysdk.utils.UNKLocalDataHelper;
import net.dirox.unikeysdk.utils.UNKTokenExpiredAction;
import okhttp3.Interceptor;
import okhttp3.Request;
import okhttp3.Response;

import java.io.IOException;

@SuppressWarnings("NullableProblems")
public class UNKHandlerExpiredTokenIntercept implements Interceptor {

    private Context mAppContext;
    private UNKTokenExpiredAction mTokenExpiredAction;
    private boolean isExpiredToken = false;

    UNKHandlerExpiredTokenIntercept(Context appContext, UNKTokenExpiredAction tokenExpiredAction) {
        this.mAppContext = appContext;
        this.mTokenExpiredAction = tokenExpiredAction;
    }

    @Override
    public Response intercept(Chain chain) throws IOException {
        Request request = chain.request();
        Request.Builder builder = request.newBuilder();

        String token = UNKLocalDataHelper.getAccessToken(mAppContext);
        if (!TextUtils.isEmpty(token) && !request.url().toString().contains("/wallet/auth"))
            builder.header("Authorization", "Bearer " + token);

        request = builder.build();
        Response response = chain.proceed(request);
        if (response.code() == UNKConstant.Net.API_INVALID_TOKEN) {
            synchronized (this) {
                if (!isExpiredToken) {
                    isExpiredToken = true;
                    if (response.body() != null) {
                        String json = response.body().string();
                        if (mTokenExpiredAction != null) {
                            mTokenExpiredAction.onExpiredToken(json);
                        }
                    }
                    return chain.proceed(request);
                }
            }
        }
        return response;
    }
}
