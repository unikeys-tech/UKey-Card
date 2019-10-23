package com.softa.softb.mvp.model;

import com.softa.softb.root.BaseModel;
import com.google.gson.annotations.SerializedName;

public class EthAccount extends BaseModel{
    @SerializedName("token")
    public String token;
    @SerializedName("key")
    public String key;
}