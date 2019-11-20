package net.dirox.unikeysdk.data.request;

import com.google.gson.annotations.SerializedName;

import java.io.Serializable;

public class UNKAuthRequest implements Serializable {
    @SerializedName("api_key")
    private String mAPIKey;
    @SerializedName("api_secret")
    private String mAPISecret;
    @SerializedName("app_version")
    private String mAppVersion;
    @SerializedName("app_type")
    private String mAppType;

    public UNKAuthRequest(String apiKey, String apiSecret, String appVersion, String appType) {
        this.mAPIKey = apiKey;
        this.mAPISecret = apiSecret;
        this.mAppVersion = appVersion;
        this.mAppType = appType;
    }

    public String getAPIKey() {
        return mAPIKey;
    }

    public String getSecret() {
        return mAPISecret;
    }

    public String getAppVersion() {
        return mAppVersion;
    }

    public String getAppType() {
        return mAppType;
    }
}
