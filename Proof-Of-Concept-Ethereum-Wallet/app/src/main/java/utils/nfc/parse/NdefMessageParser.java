package com.softa.softb.utils.nfc.parse;

import android.nfc.NdefMessage;
import android.nfc.NdefRecord;

import com.softa.softb.utils.nfc.ParseNFCRecord;
import com.softa.softb.utils.nfc.SmartPoster;
import com.softa.softb.utils.nfc.TextRecord;
import com.softa.softb.utils.nfc.UriRecord;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by ****** on 2/7/18.
 */

public class NdefMessageParser {

    private NdefMessageParser() {
    }

    public static List<ParseNFCRecord> parse(NdefMessage message) {
        return getRecords(message.getRecords());
    }

    public static List<ParseNFCRecord> getRecords(NdefRecord[] records) {
        List<ParseNFCRecord> elements = new ArrayList<ParseNFCRecord>();

        for (final NdefRecord record : records) {
            if (UriRecord.isUri(record)) {
                elements.add(UriRecord.parse(record));
            } else if (TextRecord.isText(record)) {
                elements.add(TextRecord.parse(record));
            } else if (SmartPoster.isPoster(record)) {
                elements.add(SmartPoster.parse(record));
            } else {
                elements.add(new ParseNFCRecord() {
                    public String str() {
                        return new String(record.getPayload());
                    }
                });
            }
        }

        return elements;
    }
}
