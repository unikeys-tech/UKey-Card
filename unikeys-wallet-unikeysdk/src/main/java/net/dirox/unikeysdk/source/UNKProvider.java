package net.dirox.unikeysdk.source;


import org.json.JSONObject;

public interface UNKProvider {

    interface Callback {
        void onResponse(String rawData);

        void onFailure(String rawData);
    }

    void authRequest(String app_version,
                     String appType,
                     String ipAddress,
                     String deviceUserAgent,
                     Callback callback);

    void authUserRequest(String walletId,
                         String pinCode,
                         Callback callback);

    void getLatestAppVersion(String appType,
                             String product,
                             Callback callback);

    void processTransactionRequest(String walletId,
                                   String cryptoAccountId,
                                   Integer amount,
                                   String addressFrom,
                                   String addressTo,
                                   Integer fee,
                                   String currency,
                                   String typeT,
                                   String signHash,
                                   Callback callback);

    void createWallet(String cardSerialNumber,
                      Callback callback);

    void saveWalletConfig(String appVersion,
                          String appType,
                          String walletId,
                          String phoneId,
                          JSONObject json,
                          Callback callback);

    void getWalletConfig(String walletId,
                         String appVersion,
                         String appType,
                         String phoneId,
                         Callback callback);

    void cleanWalletConfig(String walletId,
                           String appVersion,
                           String appType,
                           String phoneId,
                           Callback callback);

    void savePinCodeApp(String walletId,
                        String pincodeApp,
                        Callback callback);

    void getCounterPinCode(String walletId,
                           Callback callback);

    void getSalt(String walletId,
                 Callback callback);

    void getPassPhrase(String walletId,
                       Callback callback);

    void getPinCodeCard(String walletId,
                        Callback callback);

    void getKeyCbio(String walletId,
                    Callback callback);

    void getKeyBscChain(String walletId,
                        Callback callback);

    void changePinCodeApp(String walletId,
                          String oldPinCode,
                          String newPinCode,
                          Callback callback);

    void sysMessage(String walletId,
                    String errorCode,
                    String message,
                    Callback callback);

    void getAddress(String walletId,
                    int bip44Code,
                    int accountIndex,
                    Callback callback);

    void saveAccountPublicKey(String walletId,
                              String publicKey,
                              int accountNumber,
                              int bip44Code,
                              Callback callback);

    void getHashTransaction(String walletId,
                            String cryptoAccountId,
                            Integer amount,
                            String addressFrom,
                            String addressTo,
                            Integer fee,
                            String currency,
                            String typeT,
                            Callback callback);

    void setAuthGoogle2FA(String walletId,
                          int twoFactorAuthId,
                          Callback callback);

    void checkAuthGoogle2FA(String walletConfig,
                            int pinCode2FA,
                            int authId,
                            Callback callback);

    void getCardInfo(String cardSerialNumber,
                     Callback callback);

    void authBioCard(String cardSerialNumber,
                     Callback callback);

    void counterBioCardReset(String cardSerialNumber,
                             Callback callback);

    void saveBatteryInfo(String cardSerialNumber,
                         int cardBatteryUsage,
                         String cardBatteryCheckDate,
                         Callback callback);

    void addErc20(String walletId,
                  String walletConfigId,
                  int bip44OrEth,
                  String currency,
                  String smartContractAddress,
                  String cryptoFullName,
                  int netWorkId,
                  int accountIndex,
                  Callback callback);

    void getAccountBalance(String walletId,
                           int accountId,
                           Callback callback);

    void createCardDemo(String cardSerialNumber,
                        Callback callback);

    void resetPinCode(String walletId, String pinCode, Callback callback);

    void getWalletId(String cardSerialNumber, Callback callback);
}
