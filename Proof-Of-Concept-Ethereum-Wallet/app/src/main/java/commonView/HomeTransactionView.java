package com.softa.softb.commonView;

import android.content.Context;
import android.support.v4.widget.SwipeRefreshLayout;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.softa.softb.R;
import com.softa.softb.adapter.ListItemTransactionAdapter;
import com.softa.softb.adapter.ListItemTransactionTopAdapter;
import com.softa.softb.application.softcGlobalStorage;
import com.softa.softb.mvp.model.Transaction;
import com.softa.softb.mvp.model.TransactionList;
import com.softa.softb.mvp.model.TransactionResponse;
import com.softa.softb.mvp.view.activity.TransactionHistoryActivity;
import com.softa.softb.root.BaseActivity;
import com.softa.softb.utils.FontUtils;
import com.softa.softb.utils.LogUtils;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by *** on 3/20/2018.
 */

public class HomeTransactionView extends RelativeLayout {

    TextView mTextTitle, mTextEmpty;
    RecyclerView mRecyclerTransaction;
    RecyclerView rcTop;
    FontUtils mFonts;
    onItemClick mOnItemClick;
    ImageView mImageLine;
    ListItemTransactionAdapter mListItemTransactionAdapter;
    ListItemTransactionTopAdapter mListItemTransactionTopAdapter;
    boolean mNotEmpty = false;
    String addressWallet;
    BaseActivity baseActivity;

    public ArrayList<TransactionResponse.ResultBean> getTransactionHistoryArr() {
        return mTransactionHistoryArr;
    }

    ArrayList<TransactionResponse.ResultBean> mTransactionHistoryArr = new ArrayList<>();

    public void onSetDataAdapter(TransactionResponse transactionResponse) {
        mTransactionHistoryArr.clear();
        if (transactionResponse != null) {
            if (transactionResponse.getResult()!=null){
                if (transactionResponse.getResult().size() > 0) {
                    mNotEmpty = true;
                } else {
                    mNotEmpty = false;
                }
                mTransactionHistoryArr.addAll(transactionResponse.getResult());
                if (softcGlobalStorage.transactionList != null && softcGlobalStorage.transactionList.data != null && softcGlobalStorage.transactionList.data.size() != 0) {
                    for (int i = 0; i < softcGlobalStorage.transactionList.data.size(); i++) {
                        for (int j = 0; j < mTransactionHistoryArr.size(); j++) {
                            if (softcGlobalStorage.transactionList.data.get(i).hash.equals(mTransactionHistoryArr.get(j).getHash())) {
                                softcGlobalStorage.transactionList.data.remove(i);
                                break;
                            }
                        }
                    }
                    softcGlobalStorage.getInstance().setTransactionPending(softcGlobalStorage.transactionList);
                    onSetDataAdapterPending(softcGlobalStorage.transactionList.data);
                } else {
                    onSetDataAdapterPending(new ArrayList<>());
                    softcGlobalStorage.transactionList = new TransactionList();
                    softcGlobalStorage.transactionList.data = new ArrayList<>();
                }
            }
        }
        onCheckDataEmptyShowMessage();
        mListItemTransactionAdapter.updateListTransaction(mTransactionHistoryArr);
    }

    public void onSetDataAdapterPending(ArrayList<Transaction> list) {
        mListItemTransactionTopAdapter.updateListTransactionTop(list);
    }

    public onItemClick getOnItemClick() {
        return mOnItemClick;
    }

    public void setOnItemClick(onItemClick mOnItemClick) {
        this.mOnItemClick = mOnItemClick;
    }

    public HomeTransactionView(Context context, boolean isTitleShow, String address, BaseActivity baseActivity) {
        super(context);
        this.baseActivity = baseActivity;
        initView(context, isTitleShow, address);
    }

    private void initView(Context context, boolean isTitleShow, String addressWallet) {
        View view;
        LayoutInflater inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        view = inflater.inflate(R.layout.view_homepage_transaction, null);
        init(view);
        this.addressWallet = addressWallet;
        mFonts = new FontUtils(context);
        onApplyFonts();
        if (!isTitleShow) {
            mTextTitle.setText("Your transactions");
        }
        mListItemTransactionAdapter = new ListItemTransactionAdapter(context, getTransactionHistoryArr(), addressWallet);
        mListItemTransactionTopAdapter = new ListItemTransactionTopAdapter(context, new ArrayList<>());
        mRecyclerTransaction.setAdapter(mListItemTransactionAdapter);
        rcTop.setAdapter(mListItemTransactionTopAdapter);

        mListItemTransactionAdapter.setOnItemClickCallBack(position -> {
            if (getOnItemClick() != null) {
                mOnItemClick.onItemClick(mTransactionHistoryArr.get(position));
            }
        });
        addView(view);
    }


    private void onCheckDataEmptyShowMessage() {
        if (mNotEmpty) {
            mTextEmpty.setVisibility(GONE);
            mRecyclerTransaction.setVisibility(VISIBLE);
        } else {
            mTextEmpty.setVisibility(VISIBLE);
            mRecyclerTransaction.setVisibility(GONE);
        }
    }

    private void init(View view) {
        mTextTitle = view.findViewById(R.id.text_title_transaction);
        mRecyclerTransaction = view.findViewById(R.id.rv_homepage_transaction);
        rcTop = view.findViewById(R.id.rcTop);
        mImageLine = view.findViewById(R.id.image_line);
        mTextEmpty = view.findViewById(R.id.text_transaction_empty);
    }

    private void onApplyFonts() {
        mFonts.setFont(FontUtils.FRUTIGER_ROMAN_FONT, mTextTitle);
        mFonts.setFont(FontUtils.FRUTIGER_ROMAN_FONT, mTextEmpty);
    }

    public interface onItemClick {
        void onItemClick(TransactionResponse.ResultBean data);
    }

}
