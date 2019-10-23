package com.softa.softb.mvp.model;

/**
 * Created by *** on 3/26/2018.
 */

public class BalanceResponse {
    private String status;
    private String message;
    private String result;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public BalanceResponse(String status, String message, String result) {
        this.status = status;
        this.message = message;
        this.result = result;
    }
}
