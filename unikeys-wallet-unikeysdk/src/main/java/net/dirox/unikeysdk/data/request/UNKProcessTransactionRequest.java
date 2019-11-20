package net.dirox.unikeysdk.data.request;

import com.google.gson.annotations.SerializedName;

import java.io.Serializable;

public class UNKProcessTransactionRequest implements Serializable {

    @SerializedName("amount")
    private Integer mAmount;
    @SerializedName("addrFrom")
    private String mAddressFrom;
    @SerializedName("addrTo")
    private String mAddressTo;
    @SerializedName("fee")
    private Integer mFee;
    @SerializedName("currency")
    private String mCurrency;
    @SerializedName("typeT")
    private String mTypeT;
    @SerializedName("cryptoAccountId")
    private String mCryptoAccountId;

    public UNKProcessTransactionRequest(
            String mCryptoAccountId,
            Integer mAmount,
            String mAddressFrom,
            String mAddressTo,
            Integer mFee,
            String mCurrency,
            String mTypeT
    ) {
        this.mAddressFrom = mAddressFrom;
        this.mAmount = mAmount;
        this.mAddressTo = mAddressTo;
        this.mFee = mFee;
        this.mCurrency = mCurrency;
        this.mTypeT = mTypeT;
        this.mCryptoAccountId = mCryptoAccountId;
    }

    public String getCryptoAccountId() {
        return mCryptoAccountId;
    }

    public Integer getAmount() {
        return mAmount;
    }

    public String getAddressTo() {
        return mAddressTo;
    }

    public String getAddressFrom() {
        return mAddressFrom;
    }

    public Integer getFee() {
        return mFee;
    }

    public String getCurrency() {
        return mCurrency;
    }

    public String getTypeT() {
        return mTypeT;
    }
}
