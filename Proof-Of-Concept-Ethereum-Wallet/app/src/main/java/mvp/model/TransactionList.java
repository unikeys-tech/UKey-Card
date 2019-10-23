package com.softa.softb.mvp.model;

import com.softa.softb.root.BaseModel;
import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;

public class TransactionList extends BaseModel {
    @SerializedName("data")
    public ArrayList<Transaction> data;
}