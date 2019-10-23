package com.softa.softb.utils;

import org.spongycastle.util.encoders.Hex;
import org.web3j.crypto.Credentials;
import org.web3j.crypto.RawTransaction;
import org.web3j.crypto.TransactionEncoder;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.Web3jFactory;
import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.protocol.core.RemoteCall;
import org.web3j.protocol.core.methods.request.Transaction;
import org.web3j.protocol.core.methods.response.EthEstimateGas;
import org.web3j.protocol.core.methods.response.EthGetTransactionCount;
import org.web3j.protocol.core.methods.response.EthSendTransaction;
import org.web3j.protocol.core.methods.response.Log;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.protocol.http.HttpService;
import org.web3j.tx.ClientTransactionManager;
import org.web3j.tx.Transfer;
import org.web3j.utils.Convert;

import java.io.IOException;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.concurrent.ExecutionException;

import static com.softa.softb.config.ApiConstants.getApiHost;

public class TranferEthUtils {
    private static String FROM_ADDRESS = "";
    private static String TO_ADDRESS = "";
    private static final String HEAD = "0x";

    public static String sendEther(String fromAddress, String toAddress, String privateKey, Double eth, String gasLimit, String gasPrice) throws Exception {
        FROM_ADDRESS = fromAddress;
        TO_ADDRESS = toAddress;
        return new TranferEthUtils().onTransfer(privateKey, eth, gasLimit, gasPrice);
    }

    private String onTransfer(String privateKey, Double eth, String gasLimit, String gasPrice) throws ExecutionException, InterruptedException, IOException {
        Web3j web3j = Web3jFactory.build(new HttpService(getApiHost()));
        Credentials credentials = Credentials.create(privateKey);

        // get the next available nonce
        EthGetTransactionCount ethGetTransactionCount = web3j.ethGetTransactionCount(FROM_ADDRESS, DefaultBlockParameterName.LATEST).sendAsync().get();

        // create our transaction
        RawTransaction rawTransaction = RawTransaction.createEtherTransaction(
                ethGetTransactionCount.getTransactionCount(),
                Convert.toWei(gasPrice, Convert.Unit.GWEI).toBigInteger(),
                new BigInteger(gasLimit), TO_ADDRESS,
                Convert.toWei(String.valueOf(eth), Convert.Unit.ETHER).toBigInteger());

        // sign & send our transaction
        String hexValue = Hex.toHexString(TransactionEncoder.signMessage(rawTransaction, credentials));
        EthSendTransaction ethSendTransaction = web3j.ethSendRawTransaction(HEAD + hexValue).send();
        return ethSendTransaction.getTransactionHash();
    }

    public static String onCalculateTransactionFee(String GasLimit,String GasWei){
        long gasLimit = Long.parseLong(GasLimit);
        long gasWei = Long.parseLong(GasWei);
        long sumGas = gasLimit * gasWei *1000000000;
//        BigInteger feeGas = Convert.toWei(String.valueOf(sumGas), Convert.Unit.ETHER).toBigInteger();
        BigDecimal gwei = Convert.fromWei(String.valueOf(sumGas), Convert.Unit.ETHER);
        String parseValueString = String.format("%.6f%n",gwei);
        return String.valueOf(parseValueString);
    }

}