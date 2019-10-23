package com.softa.softb.mvp.model;

import com.softa.softb.root.BaseModel;
import com.google.gson.annotations.SerializedName;


import java.io.File;
import java.io.Serializable;

public class User extends BaseModel implements Serializable {
    @SerializedName("phone")
    public String phone;
    @SerializedName("image")
    public String image;
    @SerializedName("email")
    public String email;
    @SerializedName("imageUpload")
    public File imageUpload;
    @SerializedName("firstName")
    public String firstName;
    @SerializedName("lastName")
    public String lastName;
    @SerializedName("type")
    public int type;
    @SerializedName("created")
    public String created;
    @SerializedName("modified")
    public String modified;
    @SerializedName("status")
    public int status;
    @SerializedName("ethAccount")
    public EthAccount ethAccount;

    public User(File imageUpload) {
        this.imageUpload = imageUpload;
    }

    public User(String phone, String email, String firstName, String lastName) {
        this.phone = phone;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}