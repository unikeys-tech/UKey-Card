package com.softa.softb.mvp.model;

import com.google.gson.annotations.SerializedName;

public class Data {

    @SerializedName("otp")
    private String otp;

    public String getOtp() {
        return otp;
    }

    public void setOtp(String otp) {
        this.otp = otp;
    }
}
