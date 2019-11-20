package net.dirox.unikeysdk.source;

import android.content.Context;
import android.util.Log;
import com.google.gson.Gson;
import net.dirox.unikeysdk.data.request.UNKProcessTransactionRequest;
import net.dirox.unikeysdk.service.UNKAPI;
import net.dirox.unikeysdk.utils.UNKLocalDataHelper;
import org.json.JSONException;
import org.json.JSONObject;
import retrofit2.Call;
import retrofit2.Response;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@SuppressWarnings("NullableProblems")
public class UNKRequestAPI implements UNKProvider {

    private UNKAPI mApi;
    private Context mAppContext;
    private static UNKProvider INSTANCE;
    private String mClientId;
    private String mClientSecret;


    @SuppressWarnings("unused")
    private UNKRequestAPI() {
    }

    public static UNKProvider getInstance() {
        return INSTANCE;
    }

    UNKRequestAPI(final UNKAPI api, final Context appContext) {
        this.mApi = api;
        this.mAppContext = appContext;
        INSTANCE = this;
    }

    void setClientId(String clientId) {
        this.mClientId = clientId;
    }

    void setClientSecret(String clientSecret) {
        this.mClientSecret = clientSecret;
    }

    @Override
    public void authRequest(String appVersion, String appType, String ipAddress,
                            String deviceUserAgent, final Callback callback) {
        mApi.authRequest(mClientId, mClientSecret, appVersion, appType, ipAddress, deviceUserAgent).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                try {
                    String json = response.body();
                    if (json != null) {
                        JSONObject jsonObject = new JSONObject(json);
                        if (jsonObject.has("response")) {
                            JSONObject jsonResponse = jsonObject.getJSONObject("response");
                            if (jsonResponse != null && jsonResponse.has("token")) {
                                String token = jsonResponse.get("token").toString();
                                UNKLocalDataHelper.saveAccessToken(mAppContext, token);
                            }
                        }
                    }
                    callback.onResponse(json);
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                callback.onFailure(t.getMessage());
            }
        });
    }

    @Override
    public void authUserRequest(String walletId, String pinCode, final Callback callback) {
        mApi.authUserRequest(walletId, pinCode).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                callback.onFailure(t.getMessage());
            }
        });
    }

    @Override
    public void getLatestAppVersion(String appType, String product, final Callback callback) {
        mApi.getLatestAppVersion(appType, product).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                callback.onFailure(t.getMessage());
            }
        });
    }


    @Override
    public void processTransactionRequest(String walletId, String cryptAccountId, Integer amount, String addressFrom, String addressTo, Integer fee, String currency, String typeT, String signHash, final Callback callback) {
        UNKProcessTransactionRequest request = new UNKProcessTransactionRequest(cryptAccountId, amount, addressFrom, addressTo, fee, currency, typeT);
        Log.i("xxxx SIGNED HASH", signHash);
        Log.i("xxxx request processTransaction", new Gson().toJson(request));
        mApi.processTransactionRequest(walletId, signHash, request).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                if (callback == null) return;
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                callback.onFailure(t.getMessage());
            }
        });
    }

    @Override
    public void createWallet(String cardSerialNumber, final Callback callback) {
        mApi.createWallet(cardSerialNumber).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                callback.onFailure(t.getMessage());
            }
        });
    }

    @Override
    public void saveWalletConfig(String appVersion, String appType, String walletId, String phoneId, JSONObject jsonObject, final Callback callback) {
        // UNKWalletConfigRequest request = new Gson().fromJson(json, UNKWalletConfigRequest.class);
        Map<String, String> dict = new HashMap<>();
        dict.put("app_version", appVersion);
        dict.put("app_type", appType);
        dict.put("wallet_id", walletId);
        dict.put("phone_id", phoneId);
        mApi.saveWalletConfig(dict, jsonObject.toString()).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                if (callback == null) return;
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody() != null ? response.errorBody().string() : "");
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                if (callback == null) return;
                callback.onFailure(t.getMessage());
            }
        });
    }

    @Override
    public void getWalletConfig(String walletId, String appVersion, String appType, String phoneId, final Callback callback) {
        mApi.getWalletConfig(walletId, appVersion, appType, phoneId).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                if (callback == null) return;
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                if (callback == null) return;
                callback.onFailure(t.getMessage());
            }
        });
    }

    @Override
    public void cleanWalletConfig(String walletId, String appVersion, String appType, String phoneId, final Callback callback) {
        mApi.cleanWalletConfig(walletId, appVersion, appType, phoneId).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                if (callback == null) return;
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                if (callback == null) return;
                callback.onFailure(t.getMessage());
            }
        });
    }

    @Override
    public void savePinCodeApp(String walletId, String pincodeApp, final Callback callback) {
        mApi.savePinCodeApp(walletId, pincodeApp).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                if (callback == null) return;
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                if (callback == null) return;
                callback.onFailure(t.getMessage());
            }
        });
    }

    @Override
    public void getCounterPinCode(String walletId, final Callback callback) {
        mApi.getCounterPinCode(walletId).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                if (callback == null) return;
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                if (callback == null) return;
                callback.onFailure(t.getMessage());
            }
        });
    }

    @Override
    public void getSalt(String walletId, final Callback callback) {
        mApi.getSalt(walletId).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                if (callback == null) return;
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                if (callback == null) return;
                callback.onFailure(t.getMessage());
            }
        });
    }

    @Override
    public void getPassPhrase(String walletId, final Callback callback) {
        mApi.getPassPhrase(walletId).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                if (callback == null) return;
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                if (callback == null) return;
                callback.onFailure(t.getMessage());
            }
        });
    }

    @Override
    public void getPinCodeCard(String walletId, final Callback callback) {
        mApi.getPinCodeCard(walletId).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                if (callback == null) return;
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                if (callback == null) return;
                callback.onFailure(t.getMessage());
            }
        });
    }

    @Override
    public void getKeyCbio(String walletId, final Callback callback) {
        mApi.getKeyCbio(walletId).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                if (callback == null) return;
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                if (callback == null) return;
                callback.onFailure(t.getMessage());
            }
        });
    }

    @Override
    public void getKeyBscChain(String walletId, final Callback callback) {
        mApi.getKeyBscChain(walletId).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                if (callback == null) return;
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                if (callback == null) return;
                callback.onFailure(t.getMessage());
            }
        });
    }

    @Override
    public void changePinCodeApp(String walletId, String oldPinCode, String newPinCode, final Callback callback) {
        mApi.changePinCodeApp(walletId, oldPinCode, newPinCode).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                if (callback == null) return;
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                if (callback == null) return;
                callback.onFailure(t.getMessage());
            }
        });
    }

    @Override
    public void sysMessage(String walletId, String errorCode, String message, final Callback callback) {
        mApi.sysMessage(walletId, errorCode, message).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                if (callback == null) return;
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                if (callback == null) return;
                callback.onFailure(t.getMessage());
            }
        });
    }

    @Override
    public void getAddress(String walletId, int bip44Code, int accountIndex, final Callback callback) {
        Call<String> call = mApi.getAddress(walletId, bip44Code, accountIndex);
        try {
            Response<String> response = call.execute();
            if (response.isSuccessful()) {
                if (callback == null) return;
                callback.onResponse(response.body() != null ? response.body() : "");
            } else {
                if (callback == null) return;
                JSONObject jsonObject = new JSONObject(response.errorBody().string());
                callback.onResponse(jsonObject.toString());
            }
        } catch (IOException e) {
            e.printStackTrace();
            callback.onFailure(e.getMessage());
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void saveAccountPublicKey(final String walletId, final String publicKey, final int accountNumber, final int bip44Code, final Callback callback) {
        Call<String> call = mApi.saveAccountPublicKey(walletId, publicKey, accountNumber, bip44Code);
        try {
            Response<String> response = call.execute();
            if (response.isSuccessful()) {
                if (callback == null) return;
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            } else {
                if (callback == null) return;
                callback.onFailure(response.errorBody() != null ? response.errorBody().string() : "");
            }
        } catch (IOException e) {
            e.printStackTrace();
            callback.onFailure(e.getMessage());
        }
    }

    @Override
    public void getHashTransaction(String walletId, String cryptAccountId, Integer amount, String addressFrom, String addressTo, Integer fee, String currency, String typeT, final Callback callback) {
        UNKProcessTransactionRequest request = new UNKProcessTransactionRequest(cryptAccountId, amount, addressFrom, addressTo, fee, currency, typeT);
        Log.i("xxxx request getHashTransaction", new Gson().toJson(request));
        mApi.getHashTransaction(walletId, request).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                if (callback == null) return;
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                if (callback == null) return;
                callback.onFailure(t.getMessage());
            }
        });
    }

    @Override
    public void setAuthGoogle2FA(String walletId, int twoFactorAuthId, final Callback callback) {
        mApi.setAuthGoogle2FA(walletId, twoFactorAuthId).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                if (callback == null) return;
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                if (callback == null) return;
                callback.onFailure(t.getMessage());
            }
        });
    }

    @Override
    public void checkAuthGoogle2FA(String walletConfigId, int pinCode2FA, int authId, final Callback callback) {
        mApi.checkAuthGoogle2FA(walletConfigId, pinCode2FA, authId).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                if (callback == null) return;
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                if (callback == null) return;
                callback.onFailure(t.getMessage());
            }
        });
    }

    @Override
    public void getCardInfo(String cardSerialNumber, final Callback callback) {
        mApi.getCardInfo(cardSerialNumber).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                if (callback == null) return;
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                if (callback == null) return;
                callback.onFailure(t.getMessage());
            }
        });
    }

    @Override
    public void authBioCard(String cardSerialNumber, final Callback callback) {
        mApi.authBioCard(cardSerialNumber).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                if (callback == null) return;
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                if (callback == null) return;
                callback.onFailure(t.getMessage());
            }
        });
    }

    @Override
    public void counterBioCardReset(String cardSerialNumber, final Callback callback) {
        mApi.counterBioCardReset(cardSerialNumber).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                if (callback == null) return;
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                if (callback == null) return;
                callback.onFailure(t.getMessage());
            }
        });
    }

    @Override
    public void saveBatteryInfo(String cardSerialNumber, int cardBatteryUsage, String cardBatteryCheckDate, final Callback callback) {
        mApi.saveBatteryInfo(cardSerialNumber, cardBatteryUsage, cardBatteryCheckDate).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                if (callback == null) return;
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                if (callback == null) return;
                callback.onFailure(t.getMessage());
            }
        });
    }

    @Override
    public void addErc20(String walletId, String walletConfigId, int bip44OrEth, String currency, String smartContractAddress, String cryptoFullName, int netWorkId, int accountIndex, final Callback callback) {
        mApi.addErc20(walletId, walletConfigId, bip44OrEth, currency, smartContractAddress, cryptoFullName, netWorkId, accountIndex).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                if (callback == null) return;
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                if (callback == null) return;
                callback.onFailure(t.getMessage());
            }
        });
    }

    @Override
    public void getAccountBalance(String walletId, int accountId, final Callback callback) {
        Call<String> call = mApi.getAccountBalance(walletId, accountId);
        try {
            Response<String> response = call.execute();
            if (response.isSuccessful()) {
                if (callback == null) return;
                callback.onResponse(response.body() != null ? response.body() : "");
            } else {
                if (callback == null) return;
                JSONObject jsonObject = new JSONObject(response.errorBody().string());
                callback.onResponse(jsonObject.toString());
            }
        } catch (IOException e) {
            e.printStackTrace();
            callback.onFailure(e.getMessage());
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void createCardDemo(String cardSerialNumber, final Callback callback) {
        mApi.createCardDemo(cardSerialNumber).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                if (callback == null) return;
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                if (callback == null) return;
                callback.onFailure(t.getMessage());
            }
        });
    }

    @Override
    public void resetPinCode(String walletId, String pinCode, final Callback callback) {
        mApi.resetPinCode(walletId, pinCode).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                if (callback == null) return;
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                if (callback == null) return;
                callback.onFailure(t.getMessage());
            }
        });
    }

    @Override
    public void getWalletId(String cardSerialNumber, final Callback callback) {
        mApi.getWalletId(cardSerialNumber).enqueue(new retrofit2.Callback<String>() {
            @Override
            public void onResponse(Call<String> call, Response<String> response) {
                if (callback == null) return;
                try {
                    if (response.isSuccessful()) {
                        callback.onResponse(response.body() != null ? response.body() : "");
                    } else {
                        JSONObject jsonObject = new JSONObject(response.errorBody().string());
                        callback.onResponse(jsonObject.toString());
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                    callback.onFailure(e.getMessage());
                }
            }

            @Override
            public void onFailure(Call<String> call, Throwable t) {
                if (callback == null) return;
                callback.onFailure(t.getMessage());
            }
        });
    }
}
