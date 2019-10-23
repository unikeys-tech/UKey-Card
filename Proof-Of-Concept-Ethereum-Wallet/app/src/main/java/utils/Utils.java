package com.softa.softb.utils;


import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.support.v4.content.ContextCompat;
import android.support.v4.graphics.drawable.RoundedBitmapDrawable;
import android.support.v4.graphics.drawable.RoundedBitmapDrawableFactory;
import android.text.SpannableString;
import android.text.format.*;
import android.text.style.ForegroundColorSpan;
import android.text.style.UnderlineSpan;
import android.util.Log;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.request.target.BitmapImageViewTarget;
import com.softa.softb.R;
import com.softa.softb.config.ApiConstants;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;

import org.ocpsoft.prettytime.PrettyTime;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.Web3jFactory;
import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.protocol.core.methods.response.EthGetBalance;
import org.web3j.protocol.http.HttpService;
import org.web3j.utils.Convert;

import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.TimeZone;
import java.util.concurrent.ExecutionException;

import io.github.novacrypto.bip39.MnemonicValidator;
import io.github.novacrypto.bip39.Validation.InvalidChecksumException;
import io.github.novacrypto.bip39.Validation.InvalidWordCountException;
import io.github.novacrypto.bip39.Validation.UnexpectedWhiteSpaceException;
import io.github.novacrypto.bip39.Validation.WordNotFoundException;
import io.github.novacrypto.bip39.wordlists.English;

import static com.softa.softb.config.ApiConstants.getApiHost;

/**
 * Created by ****** on 2/8/18.
 */

public class Utils {
    private static final int ADDRESS_ETHEREUM_LENGTH = 42;
    private static final String ADDRESS_STRING_ETHEREUM = "0x";

    public static boolean isValidatorMnemonicWords(String words) {
        try {
            MnemonicValidator
                    .ofWordList(English.INSTANCE)
                    .validate(words);
            return true;
        } catch (UnexpectedWhiteSpaceException e) {
            return false;
        } catch (InvalidWordCountException e) {
            return false;
        } catch (InvalidChecksumException e) {
            return false;
        } catch (WordNotFoundException e) {
            return false;
        }
    }

    public static boolean isStringNull(String text) {
        return text == null || text.equals("");
    }

    public static boolean iSCompareStringSame(String text1, String text2) {
        return !(isStringNull(text1) && isStringNull(text2)) && text1.equals(text2);
    }

    public static void onSetAvatarCircle(Context context, String picture, ImageView imageView) {
        if (!Utils.isStringNull(picture)) {
            Glide.with(context).load(String.format(Locale.US, "%s%s?w=%s&h=%s", "", picture, "200", "200"))
                    .asBitmap().centerCrop()
                    .error(R.drawable.avatar)
                    .into(new BitmapImageViewTarget(imageView) {
                        @Override
                        protected void setResource(Bitmap resource) {
                            RoundedBitmapDrawable circularBitmapDrawable =
                                    RoundedBitmapDrawableFactory.create(context.getResources(), resource);
                            circularBitmapDrawable.setCircular(true);
                            imageView.setImageDrawable(circularBitmapDrawable);
                        }
                    });
        } else {
            imageView.setImageResource(R.drawable.avatar);
        }

    }


    public static String getFormatTXHashString(String txhash) {
        if (!isStringNull(txhash)) {
            String hashStart = txhash.substring(0, 18);
            String hashEnd = txhash.substring(txhash.length() - 3, txhash.length());
            return hashStart + "..." + hashEnd;
        } else {
            return "";
        }
    }

    public static String getFormatStatus(String isError) {
        if (Integer.valueOf(isError) == 0) {
            return "Success";
        } else
            return "Fail";
    }

    public static String getFormatValueETH(String ETHValue) {
        if (ETHValue.length() > 0) {
            BigDecimal value = Convert.fromWei(ETHValue, Convert.Unit.ETHER);
            String parseValueString = String.valueOf(value);
            return parseValueString + " ETH";
        } else {
            return 0 + " ETH";
        }
    }

    public static String getFormatValueETHDetail(String ETHValue, String sFrom, String sAddress) {
        if (ETHValue.length() > 0) {
            BigDecimal value = Convert.fromWei(ETHValue, Convert.Unit.ETHER);
            String parseValueString = String.valueOf(value);
            if (sFrom.equals(sAddress))
                return "- " + "ETH " + parseValueString;
            else
                return "+ " + "ETH " + parseValueString;
        } else {
            return "ETH" + 0;
        }
    }

    public static boolean getTypeReceipt(String sFrom, String sAddress) {
        if (sFrom.equals(sAddress))
            return false;
        else
            return true;
    }

    public static String getFormatGwei(String value) {
        if (value.length() > 0) {
            BigDecimal gwei = Convert.fromWei(value, Convert.Unit.GWEI);
            String parseValueString = String.valueOf(gwei);
            return parseValueString + " Gwei";
        } else {
            return 0 + " Gwei";
        }
    }

    public static String getBalanceETH(String ETH) {
        if (!isStringNull(ETH)) {
            Web3j web3 = Web3jFactory.build(new HttpService(getApiHost()));
            EthGetBalance m = null;
            try {
                m = web3.ethGetBalance(ETH, DefaultBlockParameterName.LATEST).sendAsync().get();
            } catch (InterruptedException e) {
                e.printStackTrace();
            } catch (ExecutionException e) {
                e.printStackTrace();
            }
            BigDecimal value = Convert.fromWei(m.getBalance().toString(), Convert.Unit.ETHER);
            String parseValueString = String.valueOf(value);
            if (parseValueString.length() > 7) {
                return parseValueString.substring(0, 7);
            } else {
                return parseValueString;
            }
        } else {
            return "0";
        }
    }
    public static CharSequence getTextOrHint(EditText tv) {
        return(isStringNull(tv.getText().toString()) ? tv.getHint().toString() : tv.getText().toString());
    }

    public static String getHoursTransaction(long time) {
        Calendar cal = Calendar.getInstance(Locale.getDefault());
//        cal.setTimeInMillis(time);
        String date = DateFormat.format("hh:mm:ss", time).toString();
        return date;
    }

    public static String onGetDateTime(long time) {
        Calendar cal = Calendar.getInstance(Locale.ENGLISH);
        cal.setTimeInMillis(time * 1000L);
        String date = DateFormat.format("dd/MM/yyyy hh:mm:ss", cal).toString();
        return date;
    }

    public static String onGetFullDateTime(long time) {
        String format = "MMM-dd-yyyy hh:mm:ss aa";
        Calendar calendar = Calendar.getInstance();
        calendar.setTimeInMillis(time * 1000);
        Date time1 = calendar.getTime();
        SimpleDateFormat outputFmt = new SimpleDateFormat(format, Locale.US);
        outputFmt.setTimeZone(TimeZone.getTimeZone("GMT"));
        String dateAsString = outputFmt.format(time1);
        return String.format("(%s +UTC)", dateAsString);
    }

    public static String
    onGetTimeCompareCurrent(long time) {
        Calendar cal = Calendar.getInstance(Locale.getDefault());
        cal.setTimeInMillis(time * 1000L);
        PrettyTime prettyTime = new PrettyTime();
        return prettyTime.format(new Date(cal.getTimeInMillis()));
    }

    public static String onFormatTextWithAnotherColor(String text2) {
        return String.format("<font color=#c9ced4>( %s  block confirmations )</font>", text2);
    }

    public static String onFormatGasPriceToString(String text1, String text2) {
        return String.format("%s ( %s )", getFormatValueETH(text1), getFormatGwei(text2));
    }

    public static SpannableString onFormatStringReturnWithUnderLine(String text) {
        SpannableString content = new SpannableString(text);
        content.setSpan(new UnderlineSpan(), 0, text.length(), 0);
        return content;
    }

    public static String onFormatKeyWordsListToString(List<String> strings) {
        if (strings.size() == 24) {
            return String.format("%s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s", strings.get(0),
                    strings.get(1), strings.get(2), strings.get(3), strings.get(4), strings.get(5), strings.get(6), strings.get(7)
                    , strings.get(8), strings.get(9), strings.get(10), strings.get(11), strings.get(12), strings.get(13), strings.get(14)
                    , strings.get(15), strings.get(16), strings.get(17), strings.get(18), strings.get(19), strings.get(20), strings.get(21)
                    , strings.get(22), strings.get(23));
        } else {
            return "Generate Error";
        }

    }

    public static boolean onIsAddressCorrect(String address) {
        if (address.length()>40){
            if (address.substring(0, 2).equalsIgnoreCase(ADDRESS_STRING_ETHEREUM)) {
                if (address.length() == ADDRESS_ETHEREUM_LENGTH) {
                    return true;
                } else return false;
            } else return false;
        }else{
            return false;
        }

    }

    public static Bitmap onGenerateQRCode(String code) {
        QRCodeWriter writer = new QRCodeWriter();
        try {
            BitMatrix bitMatrix = writer.encode(code, BarcodeFormat.QR_CODE, 275
                    , 275);
            int width = bitMatrix.getWidth();
            int height = bitMatrix.getHeight();
            Bitmap bmp = Bitmap.createBitmap(width, height, Bitmap.Config.RGB_565);
            for (int x = 0; x < width; x++) {
                for (int y = 0; y < height; y++) {
                    bmp.setPixel(x, y, bitMatrix.get(x, y) ? Color.BLACK : Color.WHITE);
                }
            }
            return bmp;

        } catch (WriterException e) {
            e.printStackTrace();
            return null;
        }
    }

}
