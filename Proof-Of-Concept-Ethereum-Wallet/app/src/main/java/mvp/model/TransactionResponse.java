package com.softa.softb.mvp.model;

import android.os.Parcel;
import android.os.Parcelable;

import java.util.List;

/**
 * Created by ****** on 2/28/18.
 */

public class TransactionResponse {

    /**
     * status : 1
     * message : OK
     * result : [{"blockNumber":"1682765","timeStamp":"1517311199","hash":"0x8164ce256381389229d3389f1d872a5802c33c155b0ee81f32aaea5170a41e66","nonce":"2","blockHash":"0xc4b7adeef8859e960a66c11e474a41cf2af6861be416fbf0b16d4bd082e6ab86","transactionIndex":"248","from":"0xee5be7ea4ae4a5318e196e0c3b804fdbedc87e71","to":"0x7680e76f8c757b5ab771d701d4b7b85dc3cc32d9","value":"5000000000000000000","gas":"21000","gasPrice":"20000000000","isError":"0","txreceipt_status":"1","input":"0x","contractAddress":"","cumulativeGasUsed":"6865672","gasUsed":"21000","confirmations":"166017"},{"blockNumber":"1682782","timeStamp":"1517311454","hash":"0xd7bbc41d67efe7782c643a58128bbf7c3f758698ce456b5fb66c9d39190a9b3a","nonce":"0","blockHash":"0x85c9e0847cb2cb91ccb405f6b941f6656ef2cddf4b172e1650c065261432454e","transactionIndex":"252","from":"0x7680e76f8c757b5ab771d701d4b7b85dc3cc32d9","to":"0xee5be7ea4ae4a5318e196e0c3b804fdbedc87e71","value":"1000000000000000000","gas":"21000","gasPrice":"15000000000","isError":"0","txreceipt_status":"1","input":"0x","contractAddress":"","cumulativeGasUsed":"6943482","gasUsed":"21000","confirmations":"166000"},{"blockNumber":"1722607","timeStamp":"1517908906","hash":"0x3a1c2362f134725e03271257f7843c9ee5a3776d7585b6a93a5b699dfb73f671","nonce":"1","blockHash":"0x7205d36093e3957448b0d8b069c126cc86b5198d613324586b82be42072d2d52","transactionIndex":"3","from":"0x7680e76f8c757b5ab771d701d4b7b85dc3cc32d9","to":"0x7680e76f8c757b5ab771d701d4b7b85dc3cc32d9","value":"1000000000000000000","gas":"21000","gasPrice":"6000000000","isError":"0","txreceipt_status":"1","input":"0x","contractAddress":"","cumulativeGasUsed":"116080","gasUsed":"21000","confirmations":"126175"},{"blockNumber":"1722607","timeStamp":"1517908906","hash":"0x6728a72aae0af9bd4d482969b9837f889605b11c814de823e297368c2cf6e0f4","nonce":"2","blockHash":"0x7205d36093e3957448b0d8b069c126cc86b5198d613324586b82be42072d2d52","transactionIndex":"4","from":"0x7680e76f8c757b5ab771d701d4b7b85dc3cc32d9","to":"0xee5be7ea4ae4a5318e196e0c3b804fdbedc87e71","value":"1000000000000000000","gas":"21000","gasPrice":"5000000000","isError":"0","txreceipt_status":"1","input":"0x","contractAddress":"","cumulativeGasUsed":"137080","gasUsed":"21000","confirmations":"126175"},{"blockNumber":"1722609","timeStamp":"1517908936","hash":"0xe060a3711659761e57cf008f1dc219dd8cd4251729b9e4cabf8cef017744e421","nonce":"3","blockHash":"0x7c6e1c3d2f4139f8a86bf9a8c231da0547e5e68fc57eace53ae5d89914f29fae","transactionIndex":"5","from":"0x7680e76f8c757b5ab771d701d4b7b85dc3cc32d9","to":"0xee5be7ea4ae4a5318e196e0c3b804fdbedc87e71","value":"1000000000000000000","gas":"21000","gasPrice":"5000000000","isError":"0","txreceipt_status":"1","input":"0x","contractAddress":"","cumulativeGasUsed":"250958","gasUsed":"21000","confirmations":"126173"},{"blockNumber":"1843171","timeStamp":"1519717557","hash":"0x1ddfb10e663d0c8c9fd05c855d0a470e27f27db0902daaddde686d1b55bbb8a2","nonce":"4","blockHash":"0xb37006a9e6c4e796f3a9f9653ea88b19c91eb1cce73fa7a37a7f7fd6e3dcfe23","transactionIndex":"18","from":"0x7680e76f8c757b5ab771d701d4b7b85dc3cc32d9","to":"0x6566e8d27883e7ee5fdcb5df6367fb331ca31862","value":"1000000000000000000","gas":"21000","gasPrice":"1000000000","isError":"0","txreceipt_status":"1","input":"0x","contractAddress":"","cumulativeGasUsed":"2250649","gasUsed":"21000","confirmations":"5611"},{"blockNumber":"1843204","timeStamp":"1519718052","hash":"0x47b1b3b84f5c235a0fde43abb42e12611eb74e40d99959a612d0aece00caac20","nonce":"4","blockHash":"0x3ca8c290fd2cff10a42d5d5223222cf1e68af1140b95fc5187bf2be1df2317a5","transactionIndex":"6","from":"0xee5be7ea4ae4a5318e196e0c3b804fdbedc87e71","to":"0x7680e76f8c757b5ab771d701d4b7b85dc3cc32d9","value":"5000000000000000000","gas":"21000","gasPrice":"1000000000","isError":"0","txreceipt_status":"1","input":"0x","contractAddress":"","cumulativeGasUsed":"203775","gasUsed":"21000","confirmations":"5578"},{"blockNumber":"1843210","timeStamp":"1519718142","hash":"0x77c7a5ddf5c3e0d4fc45fa82472dc4c7934a11d34a10645b1bdd1aca58145b08","nonce":"5","blockHash":"0x5da429f117c1773a64b3e20003028521ea75e04f601928a2585733c2a2322ec2","transactionIndex":"9","from":"0x7680e76f8c757b5ab771d701d4b7b85dc3cc32d9","to":"0x6566e8d27883e7ee5fdcb5df6367fb331ca31862","value":"1500000000000000000","gas":"21000","gasPrice":"1000000000","isError":"0","txreceipt_status":"1","input":"0x","contractAddress":"","cumulativeGasUsed":"997838","gasUsed":"21000","confirmations":"5572"},{"blockNumber":"1843210","timeStamp":"1519718142","hash":"0xfccb39ffda24a63239b5833ec9f6d85844b0680916399b16aed3dabcc5fec9be","nonce":"6","blockHash":"0x5da429f117c1773a64b3e20003028521ea75e04f601928a2585733c2a2322ec2","transactionIndex":"10","from":"0x7680e76f8c757b5ab771d701d4b7b85dc3cc32d9","to":"0x50692598fa6a1f15a01c85fd5387e73bffc4b76c","value":"800000000000000000","gas":"21000","gasPrice":"1000000000","isError":"0","txreceipt_status":"1","input":"0x","contractAddress":"","cumulativeGasUsed":"1018838","gasUsed":"21000","confirmations":"5572"},{"blockNumber":"1843597","timeStamp":"1519723971","hash":"0xa22985f2051b2e15c878b92e5dfc82e5a99f93fb22c2f835a7612924ed51ae62","nonce":"7","blockHash":"0x56999a5003bca8d24e94f7e2aded2ec63f22bb206cc47a41d2e117748b034e36","transactionIndex":"14","from":"0x7680e76f8c757b5ab771d701d4b7b85dc3cc32d9","to":"0x307a44aef53d2468fe75c676116e45271cbaf78c","value":"870000000000000000","gas":"21000","gasPrice":"1000000000","isError":"0","txreceipt_status":"1","input":"0x","contractAddress":"","cumulativeGasUsed":"2428591","gasUsed":"21000","confirmations":"5185"},{"blockNumber":"1843606","timeStamp":"1519724106","hash":"0x99e57fdf0ee4c94e0f2e5c1e7a55f5140334ff61348249717cd8199424978b2d","nonce":"0","blockHash":"0xd39739ea8fb41b130ecc0905edad820a364d53dcada36239cc0434e57de49262","transactionIndex":"2","from":"0x307a44aef53d2468fe75c676116e45271cbaf78c","to":"0x7680e76f8c757b5ab771d701d4b7b85dc3cc32d9","value":"500000000000000000","gas":"21000","gasPrice":"20000000000","isError":"0","txreceipt_status":"1","input":"0x","contractAddress":"","cumulativeGasUsed":"109004","gasUsed":"21000","confirmations":"5176"},{"blockNumber":"1847869","timeStamp":"1519788051","hash":"0xb9539e00154060a8f3785d90101290f23e683454ecee9fb1f6100c684bacddf0","nonce":"8","blockHash":"0x23d53fb11c40e2921144f4fe97b4a80382728c0bab5df44d565e66851bf8f637","transactionIndex":"1","from":"0x7680e76f8c757b5ab771d701d4b7b85dc3cc32d9","to":"0xf17091f605eda4a675657eb0c3eb5928d73474fd","value":"1000000000000000000","gas":"21000","gasPrice":"1000000000","isError":"0","txreceipt_status":"1","input":"0x","contractAddress":"","cumulativeGasUsed":"521000","gasUsed":"21000","confirmations":"913"},{"blockNumber":"1848081","timeStamp":"1519791231","hash":"0xc0bb2582f29afce5347d5096bff18807bb7091326beb374226a74cd8451e0959","nonce":"9","blockHash":"0x7d1fed6b8f2b4ccc21eed6d523059813ab92f433a42cfa68c93ef021b4335c2a","transactionIndex":"7","from":"0x7680e76f8c757b5ab771d701d4b7b85dc3cc32d9","to":"0x28dde5319092cfc7d0b5f10be71af7d94291cc7c","value":"100000000000000000","gas":"21000","gasPrice":"2000000000","isError":"0","txreceipt_status":"1","input":"0x","contractAddress":"","cumulativeGasUsed":"1649552","gasUsed":"21000","confirmations":"701"}]
     */

    private String status;
    private String message;
    private List<ResultBean> result;

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

    public List<ResultBean> getResult() {
        return result;
    }

    public void setResult(List<ResultBean> result) {
        this.result = result;
    }

    public static class ResultBean implements Parcelable {
        /**
         * blockNumber : 1682765
         * timeStamp : 1517311199
         * hash : 0x8164ce256381389229d3389f1d872a5802c33c155b0ee81f32aaea5170a41e66
         * nonce : 2
         * blockHash : 0xc4b7adeef8859e960a66c11e474a41cf2af6861be416fbf0b16d4bd082e6ab86
         * transactionIndex : 248
         * from : 0xee5be7ea4ae4a5318e196e0c3b804fdbedc87e71
         * to : 0x7680e76f8c757b5ab771d701d4b7b85dc3cc32d9
         * value : 50000000000000000004
         * gas : 21000
         * gasPrice : 20000000000
         * isError : 0
         * txreceipt_status : 1
         * input : 0x
         * contractAddress :
         * cumulativeGasUsed : 6865672
         * gasUsed : 21000
         * confirmations : 166017
         */

        private String blockNumber;
        private long timeStamp;
        private String hash;
        private String nonce;
        private String blockHash;
        private String transactionIndex;
        private String from;
        private String to;
        private String value;
        private String gas;
        private String gasPrice;
        private String isError;
        private String txreceipt_status;
        private String input;
        private String contractAddress;
        private String cumulativeGasUsed;
        private String gasUsed;
        private String confirmations;

        protected ResultBean(Parcel in) {
            blockNumber = in.readString();
            timeStamp = in.readLong();
            hash = in.readString();
            nonce = in.readString();
            blockHash = in.readString();
            transactionIndex = in.readString();
            from = in.readString();
            to = in.readString();
            value = in.readString();
            gas = in.readString();
            gasPrice = in.readString();
            isError = in.readString();
            txreceipt_status = in.readString();
            input = in.readString();
            contractAddress = in.readString();
            cumulativeGasUsed = in.readString();
            gasUsed = in.readString();
            confirmations = in.readString();
        }

        public ResultBean(String _hash, String _isError, String _value) {
            hash = _hash;
            value = _value;
            isError = _isError;
        }

        public static final Creator<ResultBean> CREATOR = new Creator<ResultBean>() {
            @Override
            public ResultBean createFromParcel(Parcel in) {
                return new ResultBean(in);
            }

            @Override
            public ResultBean[] newArray(int size) {
                return new ResultBean[size];
            }
        };

        public String getBlockNumber() {
            return blockNumber;
        }

        public void setBlockNumber(String blockNumber) {
            this.blockNumber = blockNumber;
        }

        public long getTimeStamp() {
            return timeStamp;
        }

        public void setTimeStamp(long timeStamp) {
            this.timeStamp = timeStamp;
        }

        public String getHash() {
            return hash;
        }

        public void setHash(String hash) {
            this.hash = hash;
        }

        public String getNonce() {
            return nonce;
        }

        public void setNonce(String nonce) {
            this.nonce = nonce;
        }

        public String getBlockHash() {
            return blockHash;
        }

        public void setBlockHash(String blockHash) {
            this.blockHash = blockHash;
        }

        public String getTransactionIndex() {
            return transactionIndex;
        }

        public void setTransactionIndex(String transactionIndex) {
            this.transactionIndex = transactionIndex;
        }

        public String getFrom() {
            return from;
        }

        public void setFrom(String from) {
            this.from = from;
        }

        public String getTo() {
            return to;
        }

        public void setTo(String to) {
            this.to = to;
        }

        public String getValue() {
            return value;
        }

        public void setValue(String value) {
            this.value = value;
        }

        public String getGas() {
            return gas;
        }

        public void setGas(String gas) {
            this.gas = gas;
        }

        public String getGasPrice() {
            return gasPrice;
        }

        public void setGasPrice(String gasPrice) {
            this.gasPrice = gasPrice;
        }

        public String getIsError() {
            return isError;
        }

        public void setIsError(String isError) {
            this.isError = isError;
        }

        public String getTxreceipt_status() {
            return txreceipt_status;
        }

        public void setTxreceipt_status(String txreceipt_status) {
            this.txreceipt_status = txreceipt_status;
        }

        public String getInput() {
            return input;
        }

        public void setInput(String input) {
            this.input = input;
        }

        public String getContractAddress() {
            return contractAddress;
        }

        public void setContractAddress(String contractAddress) {
            this.contractAddress = contractAddress;
        }

        public String getCumulativeGasUsed() {
            return cumulativeGasUsed;
        }

        public void setCumulativeGasUsed(String cumulativeGasUsed) {
            this.cumulativeGasUsed = cumulativeGasUsed;
        }

        public String getGasUsed() {
            return gasUsed;
        }

        public void setGasUsed(String gasUsed) {
            this.gasUsed = gasUsed;
        }

        public String getConfirmations() {
            return confirmations;
        }

        public void setConfirmations(String confirmations) {
            this.confirmations = confirmations;
        }

        @Override
        public int describeContents() {
            return 0;
        }

        @Override
        public void writeToParcel(Parcel parcel, int i) {
            parcel.writeString(this.blockNumber);
            parcel.writeLong(this.timeStamp);
            parcel.writeString(this.hash);
            parcel.writeString(this.nonce);
            parcel.writeString(this.blockHash);
            parcel.writeString(this.transactionIndex);
            parcel.writeString(this.from);
            parcel.writeString(this.to);
            parcel.writeString(this.value);
            parcel.writeString(this.gas);
            parcel.writeString(this.gasPrice);
            parcel.writeString(this.isError);
            parcel.writeString(this.txreceipt_status);
            parcel.writeString(this.input);
            parcel.writeString(this.contractAddress);
            parcel.writeString(this.cumulativeGasUsed);
            parcel.writeString(this.gasUsed);
            parcel.writeString(this.confirmations);
        }
    }
}
