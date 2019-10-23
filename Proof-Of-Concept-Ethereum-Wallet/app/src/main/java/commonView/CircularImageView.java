package com.softa.softb.commonView;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.support.v4.graphics.drawable.RoundedBitmapDrawable;
import android.support.v4.graphics.drawable.RoundedBitmapDrawableFactory;
import android.util.AttributeSet;

/**
 * Created by *** on 3/19/2018.
 */

public class CircularImageView extends ForegroundImageView {
    private boolean mIsRoundedImage;

    public CircularImageView(Context context, AttributeSet attrs) {
        super(context, attrs);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            setOutlineProvider(ViewUtils.CIRCULAR_OUTLINE);
            setClipToOutline(true);
        }
    }

    @Override
    public void setImageBitmap(Bitmap bm) {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.LOLLIPOP) {
            RoundedBitmapDrawable roundedDrawable = RoundedBitmapDrawableFactory.create(getResources(), bm);
            roundedDrawable.setCircular(true);
            mIsRoundedImage = true;
            setImageDrawable(roundedDrawable);
        } else {
            super.setImageBitmap(bm);
        }
    }

    @Override
    public void setImageDrawable(Drawable drawable) {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.LOLLIPOP && !mIsRoundedImage && drawable != null) {
            BitmapDrawable bitmapDrawable = (BitmapDrawable) drawable;
            RoundedBitmapDrawable roundedDrawable = RoundedBitmapDrawableFactory.create(getResources(),
                    bitmapDrawable.getBitmap());
            roundedDrawable.setCircular(true);
            setImageDrawable(roundedDrawable);
        } else {
            super.setImageDrawable(drawable);
        }

    }

}
