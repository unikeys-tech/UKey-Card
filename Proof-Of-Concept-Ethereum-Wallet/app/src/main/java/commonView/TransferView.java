package com.softa.softb.commonView;

import android.content.Context;
import android.support.annotation.Nullable;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.AttributeSet;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.inputmethod.EditorInfo;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.softa.softb.R;
import com.softa.softb.utils.FontUtils;

import butterknife.BindView;

/**
 * Created by *** on 3/20/2018.
 */

public class TransferView extends RelativeLayout {

    TextView mTextTitle;
    EditText mEditAddress;
    TextView mEditAmount;
    Button mButtonTransfer;
    TextView mTextBody;
    ImageView mImageQRCode;
    ImageView mImageNFC;
    onTransferView mOnTransferView;

    public onTransferView getOnTransferView() {
        return mOnTransferView;
    }

    public void setOnTransferView(onTransferView mOnTransferView) {
        this.mOnTransferView = mOnTransferView;
    }

    FontUtils mFonts;
    public TransferView(Context context) {
        super(context);
        initView(context);
    }

    public TransferView(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
        initView(context);
    }

    public TransferView(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        initView(context);
    }

    private void initView(Context context){
        View view;
        LayoutInflater inflater = (LayoutInflater)context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        view = inflater.inflate(R.layout.view_homepage_transfer, null);
        init(view);
        mFonts =  new FontUtils(context);
        onApplyFonts();
        initHandle();
        addView(view);
    }

    public void setAddressTransfer(String address){
        mEditAddress.setText(address);
    }

    private void init(View view){
        mTextTitle= view.findViewById(R.id.text_transfer_title);
        mEditAddress= view.findViewById(R.id.edit_transfer_address);
        mEditAmount= view.findViewById(R.id.edit_transfer_amount);
        mButtonTransfer= view.findViewById(R.id.button_transfer);
        mTextBody= view.findViewById(R.id.text_transfer_body);
        mImageQRCode= view.findViewById(R.id.image_home_qr_code_click);
        mImageNFC= view.findViewById(R.id.image_home_nfc_click);
    }

    private void onApplyFonts(){
        mFonts.setFont(FontUtils.FRUTIGER_ROMAN_FONT, mTextTitle);

        mFonts.setFont(FontUtils.FRUTIGER_LIGHT_FONT, mEditAddress);
        mFonts.setFont(FontUtils.FRUTIGER_LIGHT_FONT, mEditAmount);
        mFonts.setFont(FontUtils.FRUTIGER_LIGHT_FONT, mTextBody);

        mFonts.setFont(FontUtils.FRUTIGER_ROMAN_FONT, mButtonTransfer);
    }

    private void initHandle(){
        mImageQRCode.setOnClickListener(view -> {
            if (getOnTransferView()!=null){
                mOnTransferView.onQRCodeClick();
            }
        });
        mImageNFC.setOnClickListener(view -> {
            if (getOnTransferView()!=null){
                mOnTransferView.onUnikeyCardClick();
            }
        });

        mEditAddress.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence charSequence, int i, int i1, int i2) {
            }
            @Override
            public void onTextChanged(CharSequence charSequence, int i, int i1, int i2) {
                if (mEditAddress.getText().toString().length() != 0 && mEditAmount.getText().toString().length() != 0) {
                    mButtonTransfer.setVisibility(View.VISIBLE);
                } else mButtonTransfer.setVisibility(View.INVISIBLE);
            }

            @Override
            public void afterTextChanged(Editable editable) {

            }
        });

        mEditAmount.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence charSequence, int i, int i1, int i2) {
            }
            @Override
            public void onTextChanged(CharSequence charSequence, int i, int i1, int i2) {
                if (mEditAddress.getText().toString().length() != 0 && mEditAmount.getText().toString().length() != 0) {
                    mButtonTransfer.setVisibility(View.VISIBLE);
                } else mButtonTransfer.setVisibility(View.INVISIBLE);
            }

            @Override
            public void afterTextChanged(Editable editable) {

            }
        });


        mButtonTransfer.setOnClickListener(view -> {
            if (getOnTransferView()!=null){
                mOnTransferView.onTransferClick(mEditAddress.getText().toString().trim(), mEditAmount.getText().toString().trim());
            }
        });
        mEditAddress.setOnKeyListener((view, i, keyEvent) -> {
            if (i == EditorInfo.IME_ACTION_SEARCH ||
                    i == EditorInfo.IME_ACTION_DONE ||
                    keyEvent.getAction() == KeyEvent.ACTION_DOWN &&
                            keyEvent.getKeyCode() == KeyEvent.KEYCODE_ENTER) {
                mEditAmount.setFocusable(true);

            }return false;
        });
    }

    public interface onTransferView{

        void onQRCodeClick();

        void onUnikeyCardClick();

        void onTransferClick( String address, String amount);
    }

}
