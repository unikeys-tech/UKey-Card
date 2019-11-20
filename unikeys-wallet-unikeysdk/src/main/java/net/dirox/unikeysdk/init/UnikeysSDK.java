package net.dirox.unikeysdk.init;

import android.content.Context;
import net.dirox.unikeysdk.source.UNKService;
import net.dirox.unikeysdk.utils.UNKTokenExpiredAction;

public class UnikeysSDK {

    private Context mAppContext;
    private String mClientId;
    private String mClientSerect;
    private String mUrl;
    private UNKService mUNKClient;
    private UNKTokenExpiredAction mTokenExpiredAction;

    private UnikeysSDK(String clientId, String clientSecret, String url, UNKService unikeyClient, UNKTokenExpiredAction tokenExpiredAction) {
        super();
        this.mClientId = clientId;
        this.mClientSerect = clientSecret;
        this.mUrl = url;
        this.mUNKClient = unikeyClient;
        this.mTokenExpiredAction = tokenExpiredAction;
    }

    public static class Builder {
        private Context mAppContext;
        private String mClientId;
        private String mClientSecret;
        private String mUrl;
        private UNKService mUNKClient;
        private UNKTokenExpiredAction mTokenExpiredAction;

        public Builder(Context appContext, String clientId, String clientSecret) {
            this.mAppContext = appContext;
            this.mClientId = clientId;
            this.mClientSecret = clientSecret;
        }

        public Builder tokenError(UNKTokenExpiredAction tokenExpiredAction) {
            mTokenExpiredAction = tokenExpiredAction;
            return this;
        }

        public Builder baseUrl(String url) {
            this.mUrl = url;
            return this;
        }

        public Builder connection() {
            mUNKClient = new UNKService.UnikeysClientBuilder(this.mAppContext, this.mClientId, this.mClientSecret)
                    .baseUrl(this.mUrl)
                    .tokenError(mTokenExpiredAction)
                    .build();
            return this;
        }

        public UnikeysSDK build() {
            return new UnikeysSDK(this.mClientId, this.mClientSecret, this.mUrl, this.mUNKClient, mTokenExpiredAction);
        }
    }

}
