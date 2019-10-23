package com.softa.softb.mvp.model;

import com.softa.softb.root.BaseModel;
import com.google.gson.annotations.SerializedName;

public class Profile extends BaseModel {
    @SerializedName("profile")
    public User user;
}