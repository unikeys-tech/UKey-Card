package net.dirox.unikeysdk.data.request;

import com.google.gson.annotations.SerializedName;

import java.io.Serializable;

public class UNKAuthUserRequest implements Serializable {

    @SerializedName("wallet_id")
    private String mWalletId;
    @SerializedName("pin_code")
    private String mPinCode;

    public UNKAuthUserRequest(String walletId, String pinCode) {
        this.mWalletId = walletId;
        this.mPinCode = pinCode;
    }

}
