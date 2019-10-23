package com.softa.softb.mvp.model;

import com.softa.softb.root.BaseModel;
import com.google.gson.annotations.SerializedName;

import java.io.Serializable;

public class UpdateProfileResponse extends BaseModel implements Serializable {
    @SerializedName("data")
    public User data;
    @SerializedName("error")
    public Error error;
}