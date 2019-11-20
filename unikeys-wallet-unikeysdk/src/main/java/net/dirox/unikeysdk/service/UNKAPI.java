package net.dirox.unikeysdk.service;


import net.dirox.unikeysdk.data.request.UNKProcessTransactionRequest;
import net.dirox.unikeysdk.data.request.UNKWalletConfigRequest;
import org.json.JSONObject;
import retrofit2.Call;
import retrofit2.http.*;

import java.util.Map;

public interface UNKAPI {

    @GET("/api/private/users")
    Call<String> getUser();

    /**
     * API Authentication
     *
     * @param apiKey
     * @param apiSecret
     * @param appVersion
     * @param appType
     * @return
     */
    @FormUrlEncoded
    @POST("/wallet/auth")
    Call<String> authRequest(@Field("api_key") String apiKey,
                             @Field("api_secret") String apiSecret,
                             @Field("app_version") String appVersion,
                             @Field("app_type") String appType,
                             @Field("ip_address") String ipAddress,
                             @Field("device_user_agent") String deviceUserAgent);

    /**
     * User authenticate to enter the App using the pincode app
     *
     * @param walletId
     * @param pinCode
     * @return
     */
    @FormUrlEncoded
    @POST("/wallet/v1.0/authuser")
    Call<String> authUserRequest(@Field("wallet_id") String walletId,
                                 @Field("pincode_app") String pinCode);

    /**
     * Get the latest app version supported by the platform
     * This end point is used to compare and show the user if a new version is available for install and download
     *
     * @param appType
     * @param product
     * @return
     */
    @GET("/wallet/v1.0/getlatestappversion")
    Call<String> getLatestAppVersion(@Query("app_type") String appType, @Query("product_type") String product);

    /**
     * Record transaction in DB and then broadcast it to the blockchain
     * Type_transaction = send , exchange, receive
     * type_t values can be:
     * “send”
     * “receive”
     *
     * @param request
     * @return
     */
    @POST("/wallet/v1.0/processTransaction")
    Call<String> processTransactionRequest(@Query("wallet_id") String walletId,
                                           @Query("signed_hash") String signHash,
                                           @Body UNKProcessTransactionRequest request);

    /**
     * Create a wallet in the backend
     *
     * @param cardSerialNumber
     * @return
     */
    @FormUrlEncoded
    @POST("/wallet/v1.0/createwallet/")
    Call<String> createWallet(@Field("card_serial_number") String cardSerialNumber);

    /**
     * Record a change in the backend done in the wallet setting.
     * It can process 1 change or a multiple changes
     * Note: phone_id=unique phone identifier provided by android or ios. It needs user authorization to access it.
     *
     * @return
     */
    @Headers( "Content-Type: application/json; charset=utf-8")
    @POST("/wallet/v1.0/savewalletconf/")
    Call<String> saveWalletConfig(@HeaderMap Map<String, String> params, @Body String request);

    /**
     * Get the full Json file with all the wallet settings for a version of App
     * First Time call at sign-up, set activity_timestamp=0
     *
     * @param walletId
     * @param appVersion
     * @param appType
     * @param phoneId
     * @return
     */
    @GET("/wallet/v1.0/loadwalletconf")
    Call<String> getWalletConfig(@Query("wallet_id") String walletId,
                                 @Query("app_version") String appVersion,
                                 @Query("app_type") String appType,
                                 @Query("phone_id") String phoneId);

    /**
     * Remove the wallet settings in the database. Keep only the standard initial settings.
     *
     * @param walletId
     * @param appVersion
     * @param appType
     * @param phoneId
     * @return
     */
    @GET("/wallet/v1.0/cleanwalletconf/")
    Call<String> cleanWalletConfig(@Query("wallet_id") String walletId,
                                   @Query("app_version") String appVersion,
                                   @Query("app_type") String appType,
                                   @Query("phone_id") String phoneId);

    /**
     * Save the pincode for this wallet
     * Pincodeapp is the sha256 hash of pincodeapp+salt
     *
     * @param walletId
     * @param pincodeApp
     * @return
     */
    @FormUrlEncoded
    @POST("/wallet/v1.0/savepincodeapp/")
    Call<String> savePinCodeApp(@Field("wallet_id") String walletId,
                                @Field("pincode_app") String pincodeApp);

    /**
     * Get the counter for the number of allowed attempts for the pincode app
     *
     * @param walletId
     * @return
     */
    @GET("/wallet/v1.0/getcounterpincodeapp/")
    Call<String> getCounterPinCode(@Query("wallet_id") String walletId);

    /**
     * Get the salt that has been saved in database for the wallet
     *
     * @param walletId
     * @return
     */
    @GET("/wallet/v1.0/getsalt/")
    Call<String> getSalt(@Query("wallet_id") String walletId);

    /**
     * Get the passphrase that is stored in database to auth with the UKey card BIO Manager applet
     *
     * @param walletId
     * @return
     */
    @GET("/wallet/v1.0/getpassphrase/")
    Call<String> getPassPhrase(@Query("wallet_id") String walletId);

    /**
     * Get the pincode card that is stored in database to auth with the UKey card BCHAIN applet
     *
     * @param walletId
     * @return
     */
    @GET("/wallet/v1.0/getpincodecard/")
    Call<String> getPinCodeCard(@Query("wallet_id") String walletId);

    /**
     * Get the key to initiate a secure channel with UKey card BIO Manager applet
     *
     * @param walletId
     * @return
     */
    @GET("/wallet/v1.0/getkeyscbio/")
    Call<String> getKeyCbio(@Query("wallet_id") String walletId);

    /**
     * Get the key to initiate a secure channel with UKey card BCHAIN applet
     *
     * @param walletId
     * @return
     */
    @GET("/wallet/v1.0/getkeybscchain/")
    Call<String> getKeyBscChain(@Query("wallet_id") String walletId);

    /**
     * Change the pincode value. Both values, old and new need to be correct Pincodes are combined with salt and hashed
     *
     * @param walletId
     * @param oldPinCode
     * @param newPinCode
     * @return
     */
    @FormUrlEncoded
    @POST("/wallet/v1.0/changepincodeapp/")
    Call<String> changePinCodeApp(@Field("wallet_id") String walletId,
                                  @Field("old_pincode_app") String oldPinCode,
                                  @Field("new_pincode_app") String newPinCode);

    /**
     * Inform the platform something wrong happened in the App or card.
     * The platform will log and inform sysadmin by notification
     *
     * @param walletId
     * @param errorCode
     * @param message
     * @return
     */
    @FormUrlEncoded
    @POST("/wallet/v1.0/sysmessage/")
    Call<String> sysMessage(@Field("wallet_id") String walletId,
                            @Field("error_code") String errorCode,
                            @Field("message") String message);

    /**
     * Get the latest address available, receive or change
     *
     * @param walletId
     * @param bip44Code
     * @param accountIndex
     * @return
     */
    @GET("/wallet/v1.0/getaddress/")
    Call<String> getAddress(@Query("wallet_id") String walletId,
                            @Query("bip44_code") int bip44Code,
                            @Query("account_index") int accountIndex);

    /**
     * Save the account public key for a crypto to the backend
     *
     * @param walletId
     * @param publicKey
     * @param accountNumber
     * @param bip44Code
     * @return
     */
    @FormUrlEncoded
    @POST("/wallet/v1.0/saveaccountpublickey/")
    Call<String> saveAccountPublicKey(@Field("wallet_id") String walletId,
                                      @Field("public_key") String publicKey,
                                      @Field("account_index") int accountNumber,
                                      @Field("bip44_code") int bip44Code);

    /**
     * Return the hash of the transaction In the case of BTC, LTC, BCH, the backend will select the addresse(s) having positive amounts.
     * A transaction can involve several input addresses (for bitcoin like cryptos).
     *
     * @param walletId
     * @return
     */
    @POST("/wallet/v1.0/gethashtransaction/")
    Call<String> getHashTransaction(@Query("wallet_id") String walletId, @Body UNKProcessTransactionRequest request);

    /**
     * Generate an Account_id and a gkey in backend, save them and return to the App
     *
     * @param walletId
     * @return
     */
    @FormUrlEncoded
    @POST("/wallet/v1.0/setauthgoogle2FA/")
    Call<String> setAuthGoogle2FA(@Field("wallet_config_id") String walletId,
                                  @Field("two_factor_auth_id") int twoFactorAuthId);

    /**
     * Check 2FA pincode for google authenticator
     *
     * @param pinCode2FA
     * @return
     */
    @FormUrlEncoded
    @POST("/wallet/v1.0/checkauthgoogle2FA/")
    Call<String> checkAuthGoogle2FA(@Field("wallet_config_id") String walletConfigId,
                                    @Field("pincode2fa") int pinCode2FA,
                                    @Field("two_factor_auth_id") int authId);

    /**
     * Get the latest card information
     *
     * @param cardSerialNumber
     * @return
     */
    @GET("/wallet/v1.0/getcardinfo/")
    Call<String> getCardInfo(@Query("card_serial_number") String cardSerialNumber);

    /**
     * Decrease the biometric counter in case of finger authentication failure
     *
     * @param cardSerialNumber
     * @return
     */
    @FormUrlEncoded
    @POST("/wallet/v1.0/auth_bio_card/")
    Call<String> authBioCard(@Field("card_serial_number") String cardSerialNumber);

    /**
     * Reset the biometric counter
     *
     * @param cardSerialNumber
     * @return
     */
    @FormUrlEncoded
    @POST("/wallet/v1.0/counter_bio_card_reset/")
    Call<String> counterBioCardReset(@Field("card_serial_number") String cardSerialNumber);

    /**
     * Save battery information for the  card
     *
     * @param cardSerialNumber
     * @param cardBatteryUsage
     * @param cardBatteryCheckDate
     * @return
     */
    @FormUrlEncoded
    @POST("/wallet/v1.0/savebatteryinfo/")
    Call<String> saveBatteryInfo(@Field("card_serial_number") String cardSerialNumber,
                                 @Field("card_battery_usage") int cardBatteryUsage,
                                 @Field("card_battery_check_date") String cardBatteryCheckDate);

    /**
     * Save the ERC20 smartcontract address in the backend and return the crypto account configuration to add in the wallet configuration
     *
     * @param walletId
     * @param bip44OrEth
     * @param currency
     * @param smartContractAddress
     * @param cryptoFullName
     * @param netWorkId
     * @param accountIndex
     * @return
     */
    @FormUrlEncoded
    @POST("/wallet/v1.0/adderc20/")
    Call<String> addErc20(@Field("wallet_id") String walletId,
                          @Field("wallet_config_id") String walletConfigId,
                          @Field("bip44Code") int bip44OrEth,
                          @Field("currency") String currency,
                          @Field("smart_contract_address") String smartContractAddress,
                          @Field("crypto_full_name") String cryptoFullName,
                          @Field("network_id") int netWorkId,
                          @Field("account_index") int accountIndex);

    @POST("/wallet/v1.0/getaccountbalance/")
    Call<String> getAccountBalance(@Query("wallet_id") String walletId,
                                   @Query("account_id") int accountId);

    @POST("/cardDemo/createDemoCard")
    Call<String> createCardDemo(@Query("card_serial_number") String cardSerialNumber);

    @FormUrlEncoded
    @POST("/wallet/v1.0/resetpincodeapp/")
    Call<String> resetPinCode(@Field("wallet_id") String walletId,
                              @Field("pincode_app") String pinCode);

    @GET("/wallet/v1.0/getwalletid/")
    Call<String> getWalletId(@Query("card_serial_number") String cardSerialNumber);
}
