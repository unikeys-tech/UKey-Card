package net.dirox.unikeysdk.data.request;

import com.google.gson.annotations.SerializedName;

import java.io.Serializable;
import java.util.List;

public class UNKWalletConfigRequest implements Serializable {

    @SerializedName("walletConfig")
    private WalletConfig walletConfig;

    public static class WalletConfig implements Serializable {
        @SerializedName("walletCryptoDisplays")
        private List<UNKWalletCryptoDisplay> mWalletConfigs;
    }

    public static class UNKWalletCryptoDisplay implements Serializable {
        @SerializedName("wcid")
        private int mWcid;
        @SerializedName("enabled")
        private boolean isEnabled;
        @SerializedName("crypto")
        private Crypto crypto;
    }

    public static class Crypto implements Serializable {
        @SerializedName("cryptoId")
        private int mCryptoId;
        @SerializedName("bip44Code")
        private int mBip44Code;
        @SerializedName("currency")
        private String mCurrency;
        @SerializedName("erc20")
        private boolean isErc20;
        @SerializedName("cryptoLogo")
        private String mCryptoLogo;
        @SerializedName("cryptoFullName")
        private String mCryptoFullName;
        @SerializedName("dateCreation")
        private String mDateCreation;
        @SerializedName("smartcontractAddress")
        private String mSmartContractAddress;
        @SerializedName("cryptoNetwork")
        private CryptoNetwork mCryptoNetwork;

        public Crypto(int mCryptoId, int mBip44Code, String mCurrency, boolean isErc20, String mCryptoLogo, String mCryptoFullName, String mDateCreation, String mSmartContractAddress, CryptoNetwork mCryptoNetwork) {
            this.mCryptoId = mCryptoId;
            this.mBip44Code = mBip44Code;
            this.mCurrency = mCurrency;
            this.isErc20 = isErc20;
            this.mCryptoLogo = mCryptoLogo;
            this.mCryptoFullName = mCryptoFullName;
            this.mDateCreation = mDateCreation;
            this.mSmartContractAddress = mSmartContractAddress;
            this.mCryptoNetwork = mCryptoNetwork;
        }
    }

    public static class CryptoNetwork implements Serializable {
        @SerializedName("networkId")
        private int mNetworkId;
        @SerializedName("networkType")
        private String mNetworkType;
        @SerializedName("enabled")
        private boolean isEnabled;
        @SerializedName("createdDate")
        private String mCreatedDate;

        public CryptoNetwork(int mNetworkId, String mNetworkType, boolean isEnabled, String mCreatedDate) {
            this.mNetworkId = mNetworkId;
            this.mNetworkType = mNetworkType;
            this.isEnabled = isEnabled;
            this.mCreatedDate = mCreatedDate;
        }
    }


}
