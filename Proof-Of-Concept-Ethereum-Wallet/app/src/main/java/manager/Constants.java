package com.softa.softb.manager;

/**
 * Created by *** on 3/4/15
 */
public class Constants {

    public static final String IS_TYPE = "IS_TYPE";

    public static final String IS_RECOVER_FULL = "IS_RECOVER_FULL";

    public static final String IS_REPAIR_PHONE = "IS_REPAIR_PHONE";

    public static final String IS_WRONG_PIN_TO_MUCH = "IS_WRONG_PIN_TO_MUCH";

    public static final String IS_RECOVERY_WALLET_KEY = "IS_RECOVERY_WALLET_KEY";
    //Param to check
    public static final int PASSWORD_LENGHT = 6;
    public static final String IS_RECOVERY_WITH_NEW_PIN = "IS_RECOVERY_WITH_NEW_PIN";

    //Request Code
    public static final int REQUEST_FILE_RESOTRE_CODE = 199;


    /* Request Code */
    public static final int REQUEST_CODE_CAMERA = 1000;
    public static final int REQUEST_CODE_CROP_IMAGE = 1007;
    public static final int REQUEST_CODE_GALLERY = 1001;
    /* TRANSIT CODE */
    public static final String TRANSIT_DATA_IMAGE_URL = "TRANSIT_DATA_IMAGE_URL";
    public static final String TRANSIT_DATA_IMAGE_URI = "TRANSIT_DATA_IMAGE_URI";
    public static final String TRANSIT_MESSAGE_ERROR = "TRANSIT_MESSAGE_ERROR";

    public static final String TRANSIT_DATA_RECEIVE_ADDRESS = "TRANSIT_DATA_RECEIVE_ADDRESS";
    public static final String TRANSIT_DATA_AMOUNT = "TRANSIT_DATA_AMOUNT";

    public static final String TRANSIT_DATA_GAS_LIMIT = "TRANSIT_DATA_GAS_LIMIT";
    public static final String TRANSIT_DATA_GAS_PRICE = "TRANSIT_DATA_GAS_PRICE";

    public static class TRANSFER {
        public static final String DATA_EXTRA = "DATA_EXTRAS";
        public static final String BUNDLE_DATA = "BUNDLE_DATA";
    }

    public static class TRANSACTION_STATUS {
        public static final String SUCCESS_COMPARE = "1";
        public static final String FAIL_COMPARE = "0";
        public static final String PENDING_STRING= "Pending";
        public static final String SUCCESS_STRING= "Success";
        public static final String FAIL_STRING= "Failed";
    }

    public static final int REQUEST_TRANSFER_DETAIL = 1001;

    public static final int BLOCK_ADDRESS = 5;
    public static final int BLOCK_PRIVATE_KEY = 3;

}
