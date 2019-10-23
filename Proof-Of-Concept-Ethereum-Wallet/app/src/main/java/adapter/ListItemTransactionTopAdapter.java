package com.softa.softb.adapter;

import android.content.Context;
import android.graphics.Color;
import android.os.Build;
import android.support.annotation.RequiresApi;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.softa.softb.R;
import com.softa.softb.mvp.model.Transaction;
import com.softa.softb.mvp.model.TransactionResponse;
import com.softa.softb.utils.FontUtils;
import com.softa.softb.utils.Utils;

import java.util.ArrayList;
import java.util.List;


/**
 * Created by *** on 2/6/2018.
 */

public class ListItemTransactionTopAdapter extends RecyclerView.Adapter<ListItemTransactionTopAdapter.ViewHolder> {


    private Context context;
    private LayoutInflater mInflater;
    private FontUtils mFontUtils;
    ArrayList<Transaction> mTransactionArray;


    onItemClickCallBack onItemClickCallBack;

    public ListItemTransactionTopAdapter.onItemClickCallBack getOnItemClickCallBack() {
        return onItemClickCallBack;
    }

    public void setOnItemClickCallBack(ListItemTransactionTopAdapter.onItemClickCallBack onItemClickCallBack) {
        this.onItemClickCallBack = onItemClickCallBack;
    }

    public ListItemTransactionTopAdapter(Context context, ArrayList<Transaction> mTransactionArray) {
        this.context = context;
        this.mInflater = LayoutInflater.from(context);
        this.mTransactionArray = mTransactionArray;
        this.mFontUtils = new FontUtils(context);
    }


    public class ViewHolder extends RecyclerView.ViewHolder {
        TextView tvTime, tvKey, tvStatus, tvCost;
        RelativeLayout mLinearClick;

        ViewHolder(View itemView) {
            super(itemView);

            tvTime = itemView.findViewById(R.id.tvTime);
            tvKey = itemView.findViewById(R.id.tvKey);
            tvStatus = itemView.findViewById(R.id.tvStatus);
            tvCost = itemView.findViewById(R.id.tvCost);
            mLinearClick = itemView.findViewById(R.id.ln_transaction_adapter);
        }
    }

    @Override
    public ListItemTransactionTopAdapter.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_transaction, parent, false);
        ListItemTransactionTopAdapter.ViewHolder vh = new ListItemTransactionTopAdapter.ViewHolder(view);
        mFontUtils.setFont(FontUtils.FRUTIGER_ROMAN_FONT, vh.tvKey);
        mFontUtils.setFont(FontUtils.FRUTIGER_LIGHT_FONT, vh.tvTime);
        mFontUtils.setFont(FontUtils.FRUTIGER_LIGHT_FONT, vh.tvStatus);
        mFontUtils.setFont(FontUtils.FRUTIGER_LIGHT_FONT, vh.tvCost);
        return vh;
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    @Override
    public void onBindViewHolder(final ListItemTransactionTopAdapter.ViewHolder holder, final int position) {
        holder.tvKey.setText(getFormatTXHashString(mTransactionArray.get(position).hash));
        holder.tvCost.setText(String.format("- ETH %s", mTransactionArray.get(position).value));
        holder.tvStatus.setText("Pending");
        holder.tvCost.setTextColor(context.getColor(R.color.color_red));
        holder.tvStatus.setTextColor(context.getColor(R.color.BgDark));
        holder.mLinearClick.setOnClickListener(view -> {
                    if (getOnItemClickCallBack() != null) {
                        onItemClickCallBack.onItemClick(position);
                    }
                }
        );
    }

    protected void doApplyFont() {

    }

    public interface onItemClickCallBack {
        void onItemClick(int position);
    }

    @Override
    public int getItemCount() {
        return mTransactionArray.size();
    }


    public void updateListTransactionTop(ArrayList<Transaction> resultBeans) {
        mTransactionArray = new ArrayList<>(resultBeans);
        notifyDataSetChanged();
    }

    public static String getFormatTXHashString(String txhash) {
        if (txhash != null && !txhash.trim().isEmpty()) {
            String hashStart = txhash.substring(0, 18);
            String hashEnd = txhash.substring(txhash.length() - 3, txhash.length());
            return hashStart + "..." + hashEnd;
        } else {
            return "";
        }
    }

}
