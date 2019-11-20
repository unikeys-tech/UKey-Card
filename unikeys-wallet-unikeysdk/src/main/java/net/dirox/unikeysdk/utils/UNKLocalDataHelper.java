package net.dirox.unikeysdk.utils;

import android.content.Context;
import android.content.SharedPreferences;

public class UNKLocalDataHelper {

    public static void saveAccessToken(Context context, String accessToken) {
        SharedPreferences pref = context.getSharedPreferences(UNKConstant.UNIKEY_LOCAL_HELPER, Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = pref.edit();
        editor.putString(UNKConstant.ACCESS_TOKEN, accessToken);
        editor.apply();
    }

    public static String getAccessToken(Context context) {
        SharedPreferences pref = context.getSharedPreferences(UNKConstant.UNIKEY_LOCAL_HELPER, Context.MODE_PRIVATE);
        return pref.getString(UNKConstant.ACCESS_TOKEN, null);
    }

}
