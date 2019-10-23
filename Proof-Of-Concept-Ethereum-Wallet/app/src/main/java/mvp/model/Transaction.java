package com.softa.softb.mvp.model;

import com.softa.softb.root.BaseModel;
import com.google.gson.annotations.SerializedName;

public class Transaction extends BaseModel {
    @SerializedName("hash")
    public String hash;
    @SerializedName("value")
    public String value;

    public Transaction(String hash, String value) {
        this.hash = hash;
        this.value = value;
    }
}