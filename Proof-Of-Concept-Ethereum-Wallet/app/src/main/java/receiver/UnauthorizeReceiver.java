package com.softa.softb.receiver;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

public class UnauthorizeReceiver extends BroadcastReceiver {

    public static final String ACTION = "com.softa.softb.receiver.UnauthorizeReceiver";

    public UnauthorizeReceiver() {
    }

    @Override
    public void onReceive(Context context, Intent intent) {
        // TODO: This method is called when the BroadcastReceiver is receiving
        // an Intent broadcast.
    }
}