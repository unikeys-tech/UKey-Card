package com.softa.softb.utils;

import android.app.Activity;
import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.graphics.Color;
import android.graphics.PorterDuff;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.os.CountDownTimer;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AlertDialog;
import android.text.util.Linkify;
import android.view.View;
import android.view.Window;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;

import android.widget.LinearLayout;
import android.widget.TextView;

import com.softa.softb.R;
import com.softa.softb.manager.Constants;
import com.softa.softb.mvp.view.activity.LoginActivity;
import com.softa.softb.mvp.view.activity.PinCodeActivity;
import com.softa.softb.root.BaseActivity;
import com.softa.softb.root.PinCodeStore;


public class DialogUtil {

    private static Dialog mdialog;


    public static Dialog getMdialog() {
        return mdialog;
    }

    public interface ListenerOnClickButtonPopup {
        void onClickButtonLeft(String content);

        void onClickButtonRight(String content);
    }

    public interface ListenerOnCancelPopup extends DialogInterface.OnCancelListener {
        @Override
        void onCancel(DialogInterface dialogInterface);
    }

    ListenerOnClickButtonPopup listenerOnClickButtonPopup;

    public static void dismiss() {
        if (mdialog != null && mdialog.isShowing()) {
            mdialog.dismiss();
            mdialog = null;
        }
    }

    public static void showBasicDialog(Context context, String title, String message, DialogInterface.OnClickListener listener) {
        AlertDialog.Builder builder = new AlertDialog.Builder(context);
//        builder.setCancelable(false);
        if (title != null) {
            builder.setTitle(title);
        } else {
            builder.setTitle("Be careful!");
        }
        if (message != null) {
            builder.setMessage(message);
        } else {
            builder.setTitle("Something went wrong");
        }
        builder.setPositiveButton("OK", listener);

        builder.create().show();
    }

    public static void showBasicDialogIsCancel(Context context, String title, String message, View.OnClickListener onClickListener ,DialogUtil.ListenerOnCancelPopup onCancelListener) {
        dismiss();
        mdialog = new Dialog(context);
        mdialog.setCanceledOnTouchOutside(true);
        mdialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
        mdialog.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        FontUtils font = new FontUtils(context);
        mdialog.setOnCancelListener(onCancelListener);
        mdialog.setContentView(R.layout.dialog_warning_basic);

        TextView title1 = mdialog.findViewById(R.id.text_dialog_title);
        TextView content = mdialog.findViewById(R.id.text_dialog_content);
        Button btnOK = mdialog.findViewById(R.id.text_dialog_done);
        if (!Utils.isStringNull(title)) {
            title1.setText(title);
        }
        if (!Utils.isStringNull(message)) {
            content.setText(message);
        }
        btnOK.setOnClickListener(onClickListener);
        font.setFont(FontUtils.FRUTIGER_LIGHT_FONT, content);
        font.setFont(FontUtils.FRUTIGER_ROMAN_FONT, btnOK);
        font.setFont(FontUtils.FRUTIGER_BOLD_FONT, title1);
        if (mdialog != null && !mdialog.isShowing())
            mdialog.show();
    }
    public static void showChangePasswordDialog(Activity activity, View.OnClickListener onClickListener) {
        dismiss();

        mdialog = new Dialog(activity);
        mdialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
        mdialog.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        FontUtils font = new FontUtils(activity);
        mdialog.setContentView(R.layout.layout_dialog_change_password);
//        mdialog.setCancelable(false);
        mdialog.setCanceledOnTouchOutside(false);
        TextView title = mdialog.findViewById(R.id.text_dialog_password_title);
        TextView content = mdialog.findViewById(R.id.text_dialog_password_content);
        Button btnOK = mdialog.findViewById(R.id.text_dialog_password_done);
        btnOK.setOnClickListener(onClickListener);
        font.setFont(FontUtils.FRUTIGER_LIGHT_FONT, content);
        font.setFont(FontUtils.FRUTIGER_ROMAN_FONT, btnOK);
        font.setFont(FontUtils.FRUTIGER_BOLD_FONT, title);
        if (mdialog != null && !mdialog.isShowing())
            mdialog.show();
    }

    public static void showDialogWithImageOneButton(Activity activity, String title, String message, Drawable image, String button1Title, View.OnClickListener button1Event) {
        dismiss();
        mdialog = new Dialog(activity);
        mdialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
        mdialog.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        FontUtils font = new FontUtils(activity);
        mdialog.setContentView(R.layout.dialog_image_one_button);
//        mdialog.setCancelable(false);
        mdialog.setCanceledOnTouchOutside(true);
        TextView tvTitle = mdialog.findViewById(R.id.tvTitle);
        TextView tvMessage = mdialog.findViewById(R.id.tvMessage);
        TextView tvButton1 = mdialog.findViewById(R.id.tvButton1);
        ImageView ivLogo = mdialog.findViewById(R.id.ivLogo);
        LinearLayout llButton1 = mdialog.findViewById(R.id.llButton1);
        llButton1.setOnClickListener(button1Event);
        FontUtils fontUtils = new FontUtils(activity);

        fontUtils.setFont(FontUtils.FRUTIGER_BOLD_FONT, tvTitle);
        fontUtils.setFont(FontUtils.FRUTIGER_LIGHT_FONT, tvMessage);
        fontUtils.setFont(FontUtils.FRUTIGER_LIGHT_FONT, tvButton1);

        ivLogo.setImageDrawable(image);
        tvTitle.setText(title);
        tvMessage.setText(message);
        tvButton1.setText(button1Title);

        if (mdialog != null && !mdialog.isShowing())
            mdialog.show();
    }

    public static void showUnikeysDialog(Activity activity, boolean isNfc, View.OnClickListener onClickListener) {
        dismiss();
        mdialog = new Dialog(activity);
        mdialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
        mdialog.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        FontUtils font = new FontUtils(activity);
        mdialog.setContentView(R.layout.layout_dialog_unikeys);
//        dialog.setCancelable(false);
//        dialog.setCanceledOnTouchOutside(false);
        TextView title = mdialog.findViewById(R.id.text_dialog_unikeys_title);
        TextView content = mdialog.findViewById(R.id.text_dialog_unikeys_body);
        Button btnOK = mdialog.findViewById(R.id.button_dialog_unikeys_next);
        ImageView image = mdialog.findViewById(R.id.image_dialog_unikeys);

        font.setFont(FontUtils.FRUTIGER_LIGHT_FONT, content);
        font.setFont(FontUtils.FRUTIGER_LIGHT_FONT, btnOK);
        font.setFont(FontUtils.FRUTIGER_BOLD_FONT, title);

        if (isNfc) {
            title.setText("Use your UKey card");
            content.setText("Unlock & Tab your UKey card on your phone");
            image.setBackground(ContextCompat.getDrawable(activity, R.drawable.ico_phone_card));
            btnOK.setVisibility(View.GONE);
        }

        btnOK.setOnClickListener(onClickListener);
        if (mdialog != null && !mdialog.isShowing())
            mdialog.show();
    }

    public static void showDialogWithImage(Activity activity, String title, String message, Drawable image, View.OnClickListener ClickEvent) {
        dismiss();
        mdialog = new Dialog(activity);
        mdialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
        mdialog.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        FontUtils font = new FontUtils(activity);
        mdialog.setContentView(R.layout.dialog_image);
//        mdialog.setCancelable(false);
        mdialog.setCanceledOnTouchOutside(false);
        TextView tvTitle = mdialog.findViewById(R.id.tvTitle);
        TextView tvMessage = mdialog.findViewById(R.id.tvMessage);
        TextView tvButton1 = mdialog.findViewById(R.id.tvButton1);
        ImageView ivLogo = mdialog.findViewById(R.id.ivLogo);
        LinearLayout llDialog = mdialog.findViewById(R.id.llDialog);
        FontUtils fontUtils = new FontUtils(activity);
        fontUtils.setFont(FontUtils.FRUTIGER_BOLD_FONT, tvTitle);
        fontUtils.setFont(FontUtils.FRUTIGER_LIGHT_FONT, tvMessage);
        fontUtils.setFont(FontUtils.FRUTIGER_BOLD_FONT, tvButton1);
        ivLogo.setImageDrawable(image);
        tvTitle.setText(title);
        tvMessage.setText(message);

        llDialog.setOnClickListener(ClickEvent);
        if (mdialog != null && !mdialog.isShowing())
            mdialog.show();
    }

    public static void showDialogNFCTurnOff(Activity activity, View.OnClickListener ClickEvent) {
        dismiss();
        mdialog = new Dialog(activity);
        mdialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
        mdialog.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        FontUtils font = new FontUtils(activity);
        mdialog.setContentView(R.layout.dialog_nfc);
//        mdialog.setCancelable(false);
        mdialog.setCanceledOnTouchOutside(true);
        TextView tvTitle = mdialog.findViewById(R.id.tvTitle);
        TextView tvMessage = mdialog.findViewById(R.id.tvMessage);
        TextView tvButton1 = mdialog.findViewById(R.id.tvButton1);
        ImageView ivLogo = mdialog.findViewById(R.id.ivLogo);
        Button btnClose = mdialog.findViewById(R.id.btnClose);
        LinearLayout llButton1 = mdialog.findViewById(R.id.llButton1);
        LinearLayout llDialog = mdialog.findViewById(R.id.llDialog);
        FontUtils fontUtils = new FontUtils(activity);
        fontUtils.setFont(FontUtils.FRUTIGER_BOLD_FONT, tvTitle);
        fontUtils.setFont(FontUtils.FRUTIGER_LIGHT_FONT, tvMessage);
        fontUtils.setFont(FontUtils.FRUTIGER_BOLD_FONT, tvButton1);
        ivLogo.setImageResource(R.drawable.ico_nfc);
        tvTitle.setText(activity.getString(R.string.NFC_dialog_title));

        btnClose.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                dismiss();
            }
        });
        llButton1.setOnClickListener(ClickEvent);
        if (mdialog != null && !mdialog.isShowing())
            mdialog.show();
    }

    public static void showDialogWithImageLogin(Activity activity, String title, String message, Drawable image, View.OnClickListener ClickEvent) {
        dismiss();
        mdialog = new Dialog(activity);
        mdialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
        mdialog.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        FontUtils font = new FontUtils(activity);
        mdialog.setContentView(R.layout.dialog_image);
//        mdialog.setCancelable(true);
        mdialog.setCanceledOnTouchOutside(false);
        TextView tvTitle = mdialog.findViewById(R.id.tvTitle);
        TextView tvMessage = mdialog.findViewById(R.id.tvMessage);
        TextView tvButton1 = mdialog.findViewById(R.id.tvButton1);
        ImageView ivLogo = mdialog.findViewById(R.id.ivLogo);
        Button btnClose = mdialog.findViewById(R.id.btnClose);
        LinearLayout llDialog = mdialog.findViewById(R.id.llDialog);
        FontUtils fontUtils = new FontUtils(activity);
        fontUtils.setFont(FontUtils.FRUTIGER_BOLD_FONT, tvTitle);
        fontUtils.setFont(FontUtils.FRUTIGER_LIGHT_FONT, tvMessage);
        fontUtils.setFont(FontUtils.FRUTIGER_BOLD_FONT, tvButton1);
        ivLogo.setImageDrawable(image);
        tvTitle.setText(title);
        tvMessage.setText(message);

        btnClose.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                dismiss();
            }
        });
        llDialog.setOnClickListener(ClickEvent);
        if (mdialog != null && !mdialog.isShowing())
            mdialog.show();
    }


    public static void showInfomationDialog(Activity activity, String title, String body, String button) {
        dismiss();
        mdialog = new Dialog(activity);
        mdialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
        mdialog.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        FontUtils font = new FontUtils(activity);
        mdialog.setContentView(R.layout.layout_dialog_infomation);

        TextView mtitle = mdialog.findViewById(R.id.text_dialog_information_title);
        TextView mbody = mdialog.findViewById(R.id.text_dialog_information_body);
        EditText mbutton = mdialog.findViewById(R.id.text_dialog_information_next);
        mtitle.setText(title);
        mbody.setText(body);
        mbutton.setText(button);
        mbutton.getBackground().setColorFilter(ContextCompat.getColor(activity, R.color.colorPrimaryDark), PorterDuff.Mode.SRC_IN);
        Linkify.addLinks(mbutton, Linkify.MAP_ADDRESSES);
//        font.setFont(FontUtils.FRUTIGER_LIGHT_FONT, mbody);
        font.setFont(FontUtils.FRUTIGER_LIGHT_FONT, mbutton);
        font.setFont(FontUtils.FRUTIGER_BOLD_FONT, mtitle);
        mbutton.setOnClickListener(view -> mdialog.dismiss());
        if (mdialog != null && !mdialog.isShowing())
            mdialog.show();
    }

    public static void showPasswordDialog(Activity activity, int value, ListenerOnClickButtonPopup listenerOnClickButtonPopup) {
        dismiss();

        mdialog = new Dialog(activity);
        mdialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
        mdialog.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        FontUtils font = new FontUtils(activity);
        mdialog.setContentView(R.layout.layout_dialog_password);

        TextView mtitle = mdialog.findViewById(R.id.text_password_title);
        EditText edit = mdialog.findViewById(R.id.edit_password_dialog);
        TextView mcancel = mdialog.findViewById(R.id.button_password_dialog_cancel);
        TextView mconfirm = mdialog.findViewById(R.id.button_password_dialog_confirm);

        font.setFont(FontUtils.FRUTIGER_BOLD_FONT, mtitle);
        font.setFont(FontUtils.FRUTIGER_LIGHT_FONT, edit);
        font.setFont(FontUtils.FRUTIGER_LIGHT_FONT, mcancel);
        font.setFont(FontUtils.FRUTIGER_LIGHT_FONT, mconfirm);


        mcancel.setOnClickListener(view -> mdialog.dismiss());
        ListenerOnClickButtonPopup finalListenerOnClickButtonPopup = listenerOnClickButtonPopup;
        mconfirm.setOnClickListener(view -> {
            mdialog.dismiss();
            finalListenerOnClickButtonPopup.onClickButtonRight(edit.getText().toString());
        });

        if (mdialog != null && !mdialog.isShowing())
            mdialog.show();
    }

    //code demo func and flow
    public static void showImageDialog(Activity activity, String body, int value) {
        dismiss();

        mdialog = new Dialog(activity);
        mdialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
        mdialog.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        FontUtils font = new FontUtils(activity);
        mdialog.setContentView(R.layout.layout_dialog_image);
//        mdialog.setCancelable(false);
        mdialog.setCanceledOnTouchOutside(false);
        ImageView image = mdialog.findViewById(R.id.image_dialog_image);
        LinearLayout linear = mdialog.findViewById(R.id.ln_image);
        TextView content = mdialog.findViewById(R.id.text_dialog_image_body);
        TextView title = mdialog.findViewById(R.id.text_dialog_image_title);
        font.setFont(FontUtils.FRUTIGER_LIGHT_FONT, content);
        font.setFont(FontUtils.FRUTIGER_BOLD_FONT, title);
        if (value == 1) {
            image.setBackground(ContextCompat.getDrawable(activity, R.drawable.ic_image_connect));
            title.setText("Backup your private key");
            content.setText(body);
            new CountDownTimer(6000, 1000) {
                public void onTick(long millisUntilFinished) {
                    if (millisUntilFinished <= 2000) {
                        image.setBackground(ContextCompat.getDrawable(activity, R.drawable.ic_image_done));
                        content.setText(activity.getResources().getString(R.string.image_dialog_success));
                        title.setText("Backup your private key");
                    } else if (millisUntilFinished >= 2000 && millisUntilFinished <= 4000) {
                        image.setBackground(ContextCompat.getDrawable(activity, R.drawable.ic_image_transfer));
                        content.setText(activity.getResources().getString(R.string.image_dialog_transfer));
                        title.setText("Backup your private key");
                    }

                }

                public void onFinish() {
                    LogUtils.log("done!");
                    mdialog.dismiss();
                }
            }.start();
        } else if (value == 4) {
            image.setBackground(ContextCompat.getDrawable(activity, R.drawable.ic_image_connect));
            content.setText(body);
            title.setText("Restore your private key");
            new CountDownTimer(6000, 1000) {
                public void onTick(long millisUntilFinished) {
                    if (millisUntilFinished <= 2000) {
                        image.setBackground(ContextCompat.getDrawable(activity, R.drawable.ic_image_done));
                        content.setText(activity.getResources().getString(R.string.image_dialog_restore_success));
                        title.setText("Restore your private key");
                    } else if (millisUntilFinished >= 2000 && millisUntilFinished <= 4000) {
                        image.setBackground(ContextCompat.getDrawable(activity, R.drawable.ic_image_transfer));
                        content.setText(activity.getResources().getString(R.string.image_dialog_transfer));
                        title.setText("Restore your private key");
                    }
                }

                public void onFinish() {
                    LogUtils.log("done!");
                    mdialog.dismiss();
                }
            }.start();
        }

        if (mdialog != null && !mdialog.isShowing())
            mdialog.show();
    }

    public static void showRestoreWarning(Activity activity, String title, String message, Drawable image, View.OnClickListener ClickEvent) {
        dismiss();

        mdialog = new Dialog(activity);
        mdialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
        mdialog.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        FontUtils font = new FontUtils(activity);
        mdialog.setContentView(R.layout.layout_dialog_restore_warning);
//        mdialog.setCancelable(false);
        mdialog.setCanceledOnTouchOutside(false);
        TextView tvTitle = mdialog.findViewById(R.id.tvTitle);
        TextView tvMessage = mdialog.findViewById(R.id.tvInfo);

        TextView tvConfirm = mdialog.findViewById(R.id.tvConfirm);
        TextView tvCancel = mdialog.findViewById(R.id.tvCancel);

        ImageView ivLogo = mdialog.findViewById(R.id.image_dialog);

        FontUtils fontUtils = new FontUtils(activity);
        fontUtils.setFont(FontUtils.FRUTIGER_LIGHT_FONT, tvTitle);
        fontUtils.setFont(FontUtils.FRUTIGER_LIGHT_FONT, tvMessage);
        fontUtils.setFont(FontUtils.FRUTIGER_LIGHT_FONT, tvConfirm);
        fontUtils.setFont(FontUtils.FRUTIGER_LIGHT_FONT, tvCancel);

        ivLogo.setImageDrawable(image);
        tvTitle.setText(title);
        tvMessage.setText(message);

        tvCancel.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                mdialog.dismiss();
            }
        });
        tvConfirm.setOnClickListener(ClickEvent);
        if (mdialog != null && !mdialog.isShowing())
            mdialog.show();
    }

    public static void showRestoreConfirm(Activity activity, String title, String message, View.OnClickListener ClickEvent) {
        dismiss();
        mdialog = new Dialog(activity);
        mdialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
        mdialog.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        FontUtils font = new FontUtils(activity);
        mdialog.setContentView(R.layout.layout_dialog_restore_confirm);
//        mdialog.setCancelable(false);
        mdialog.setCanceledOnTouchOutside(false);
        TextView tvTitle = mdialog.findViewById(R.id.tvTitle);
        TextView tvMessage = mdialog.findViewById(R.id.tvInfo);

        TextView tvConfirm = mdialog.findViewById(R.id.tvConfirm);
        TextView tvCancel = mdialog.findViewById(R.id.tvCancel);

        FontUtils fontUtils = new FontUtils(activity);
        fontUtils.setFont(FontUtils.FRUTIGER_LIGHT_FONT, tvTitle);
        fontUtils.setFont(FontUtils.FRUTIGER_LIGHT_FONT, tvMessage);
        fontUtils.setFont(FontUtils.FRUTIGER_LIGHT_FONT, tvConfirm);
        fontUtils.setFont(FontUtils.FRUTIGER_LIGHT_FONT, tvCancel);

        tvTitle.setText(title);
        tvMessage.setText(message);

        tvCancel.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                mdialog.dismiss();
            }
        });
        tvConfirm.setOnClickListener(ClickEvent);
        if (mdialog != null && !mdialog.isShowing())
            mdialog.show();
    }

    public static void showRestoreCongratulation(Activity activity, String title, String message) {
        dismiss();
        mdialog = new Dialog(activity);
        mdialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
        mdialog.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        FontUtils font = new FontUtils(activity);
        mdialog.setContentView(R.layout.layout_restore_congratulation);
//        mdialog.setCancelable(false);
        mdialog.setCanceledOnTouchOutside(false);
        TextView tvTitle = mdialog.findViewById(R.id.tvTitle);
        TextView tvMessage = mdialog.findViewById(R.id.tvInfo);

        Button btnConfirm = mdialog.findViewById(R.id.btn_done);
        FontUtils fontUtils = new FontUtils(activity);
        fontUtils.setFont(FontUtils.FRUTIGER_LIGHT_FONT, tvTitle);
        fontUtils.setFont(FontUtils.FRUTIGER_LIGHT_FONT, tvMessage);
        fontUtils.setFont(FontUtils.FRUTIGER_BOLD_FONT, btnConfirm);
        tvTitle.setText(title);
        tvMessage.setText(message);

        btnConfirm.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                mdialog.dismiss();
            }
        });
        if (mdialog != null && !mdialog.isShowing())
            mdialog.show();
    }
}
