package com.softa.softb.smartracNfc;

/*
 * *#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*
 * SMARTRAC SDK for Android NFC NTAG
 * ===============================================================================
 * Copyright (C) 2016 SMARTRAC TECHNOLOGY GROUP
 * ===============================================================================
 * SMARTRAC SDK
 * (C) Copyright 2016, Smartrac Technology Fletcher, Inc.
 * 267 Cane Creek Rd, Fletcher, NC, 28732, USA
 * All Rights Reserved.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#
 */


import android.nfc.Tag;
import android.nfc.tech.NfcA;
import android.nfc.tech.TagTechnology;

import com.softa.softb.root.AES;

import java.io.IOException;
import java.util.ArrayList;

import static com.softa.softb.manager.Constants.BLOCK_ADDRESS;
import static com.softa.softb.manager.Constants.BLOCK_PRIVATE_KEY;

public class NfcNtag implements TagTechnology {

    // Static constructor using the android.nfc.Tag object
    public static NfcNtag get(Tag tag) {
        return new NfcNtag(tag);
    }

    public NfcNtag(Tag tag) {
        nfca = NfcA.get(tag);
        maxTransceiveLength = nfca.getMaxTransceiveLength();
    }

    public void connect() throws IOException {
        nfca.connect();
    }

    public void close() throws IOException {
        nfca.close();
    }

    public int getMaxTransceiveLength() {
        return maxTransceiveLength;
    }

    public Tag getTag() {
        return nfca.getTag();
    }

    public boolean isConnected() {
        return nfca.isConnected();
    }

    // NTAG GET_VERSION
    public byte[] getVersion() {
        byte[] req = new byte[1];
        byte[] resp;

        req[0] = NfcNtagOpcode.GET_VERSION;

        try {
            resp = nfca.transceive(req);
        } catch (IOException ex) {
            resp = null;
        }
        return resp;
    }

    // NTAG READ
    public byte[] read(int addr) {
        byte[] req = new byte[2];
        byte[] resp;

        req[0] = NfcNtagOpcode.READ;
        req[1] = (byte) (addr & 0xFF);

        try {
            resp = nfca.transceive(req);
        } catch (IOException ex) {
            resp = null;
        }
        return resp;
    }

    // NTAG READ
    public byte[] readPage(int addr) { // Page begin 0 end 125 (count 125 Page)
        byte[] response = new byte[0];
        byte[] responsePage = new byte[4];
        try {
            response = nfca.transceive(new byte[]{
                    NfcNtagOpcode.READ, // READ
                    (byte) (addr & 0xFF)  // page address
            });
            for (int i = 0; i < 4; i++) {
                responsePage[i] = response[i];
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return responsePage;
    }

    public ArrayList<byte[]> readBlock(int block) { // Block begin 0 end 7 (count 8 blocks)
        int addr = block * 16;
        byte[] response = new byte[0];
        ArrayList<byte[]> responseBlock = new ArrayList();
        try {
            for (int i = 0; i < 4; i++) {
                response = nfca.transceive(new byte[]{
                        NfcNtagOpcode.READ, // READ
                        (byte) (addr & 0xFF)  // page address
                });
                responseBlock.add(response);
                addr = addr + 4;
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return responseBlock;
    }

    public String readBlockString(int block) { // Block begin 0 end 7 (count 8 blocks)
        String stringReponse = "";
        ArrayList<byte[]> responseBlock = new ArrayList();
        responseBlock = readBlock(block);
        for (int i = 0; i < responseBlock.size(); i++) {
            stringReponse = stringReponse + new String(responseBlock.get(i)).trim();
        }
        return stringReponse;
    }

    public String readBlockAddressOrPrivateKey(int blockType) { // Block begin 0 end 7 (count 8 blocks)
        String stringReponse = "";
        ArrayList<byte[]> responseBlock = new ArrayList();
        responseBlock = readBlock(3);
        for (int i = 0; i < responseBlock.size(); i++) {
            stringReponse = stringReponse + AES.byteArrayToStringByteArray(responseBlock.get(i)).trim();
        }
        if (blockType == BLOCK_ADDRESS)
            return stringReponse.substring(24, 64);
        else if (blockType == BLOCK_PRIVATE_KEY)
            return stringReponse.substring(64, 128);
        else
            return stringReponse;
    }

    public void writePage(int addr, byte[] data) { // Page begin 0 end 125 (count 125 Page)
        try {
            nfca.transceive(new byte[]{
                    NfcNtagOpcode.WRITE,
                    (byte) (addr & 0xFF),
                    data[0], data[1], data[2], data[3] // Write all 4 PWD bytes into Page addr
            });
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void writePage(byte addr, byte[] data) { // Page begin 0 end 125 (count 125 Page)
        try {
            nfca.transceive(new byte[]{
                    NfcNtagOpcode.WRITE,
                    addr,
                    data[0], data[1], data[2], data[3] // Write all 4 PWD bytes into Page addr
            });
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void writeBlock(int block, byte[] data) { // Block begin 0 end 7 (count 8 blocks)
        int addr = block * 16;
        byte[] result = new byte[64];
        System.arraycopy(data, 0, result, 0, data.length);
        try {
            for (int i = 0; i < 64; i = i + 4) {
                nfca.transceive(new byte[]{
                        NfcNtagOpcode.WRITE,
                        (byte) (addr & 0xFF),
                        result[i], result[i + 1], result[i + 2], result[i + 3] // Write all 4 PWD bytes into Page addr
                });
                addr = addr + 1;
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void writeBlockAddressAndPrivateKey(byte[] data) { // Block begin 0 end 7 (count 8 blocks)
        int addr = 17;
        byte[] result = new byte[64];
        System.arraycopy(data, 0, result, 0, data.length);
        try {
            for (int i = 0; i < 52; i = i + 4) {
                nfca.transceive(new byte[]{
                        NfcNtagOpcode.WRITE,
                        (byte) (addr & 0xFF),
                        result[i], result[i + 1], result[i + 2], result[i + 3] // Write all 4 PWD bytes into Page addr
                });
                addr = addr + 1;
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // NTAG FAST_READ
    public byte[] fastRead(int startAddr, int endAddr) {

        if (endAddr < startAddr)
            return null;

        boolean bOk = true;
        byte[] resp = new byte[4 * (endAddr - startAddr + 1)];
        int maxReadLength = (maxTransceiveLength / 4) - 1;
        if (maxReadLength < 1)
            return null;
        int iNumReads = 1 + (endAddr - startAddr + 1) / maxReadLength;
        int i = 0;

        while ((i < iNumReads) && bOk) {
            int endSnippet;
            int startSnippet = startAddr + i * maxReadLength;
            if (i == iNumReads - 1)
                endSnippet = endAddr;
            else
                endSnippet = startSnippet + maxReadLength - 1;

            byte[] respSnippet = fastReadHelper(startSnippet, endSnippet);
            if (respSnippet == null) {
                bOk = false;
            } else {
                if (respSnippet.length != 4 * (endSnippet - startSnippet + 1)) {
                    bOk = false;
                } else {
                    System.arraycopy(respSnippet, 0, resp, i * maxReadLength, respSnippet.length);
                }
            }
            i++;
        }
        if (bOk) {
            return resp;
        }
        return null;
    }

    private byte[] fastReadHelper(int startAddr, int endAddr) {

        byte[] req = new byte[3];
        byte[] resp;

        req[0] = NfcNtagOpcode.FAST_READ;
        req[1] = (byte) (startAddr & 0xFF);
        req[2] = (byte) (endAddr & 0xFF);

        try {
            resp = nfca.transceive(req);
        } catch (IOException ex) {
            resp = null;
        }
        return resp;
    }

    // NTAG WRITE
    public boolean write(int addr, byte[] data) {

        if (data == null) {
            return false;
        }
        if (data.length != 4) {
            return false;
        }

        byte[] req = new byte[6];
        req[0] = NfcNtagOpcode.WRITE;
        req[1] = (byte) (addr & 0xFF);

        try {
            System.arraycopy(data, 0, req, 2, 4);
            nfca.transceive(req);
        } catch (IOException ex) {
            return false;
        }
        return true;
    }

    // NTAG READ_CNT
    public int readCnt() {
        byte[] req = new byte[2];
        byte[] resp;
        int cnt;

        req[0] = NfcNtagOpcode.READ_CNT;
        req[1] = 0x02;

        try {
            resp = nfca.transceive(req);
            cnt = resp[0] + resp[1] * 256 + resp[2] * 65536;
        } catch (IOException ex) {
            return -1;
        }
        return cnt;
    }

    // NTAG PWD_AUTH
    public byte[] pwdAuth(byte[] password) {

        if (password == null) {
            return null;
        }
        if (password.length != 4) {
            return null;
        }

        byte[] req = new byte[5];
        byte[] resp;

        req[0] = NfcNtagOpcode.PWD_AUTH;

        try {
            System.arraycopy(password, 0, req, 1, 4);
            resp = nfca.transceive(req);
        } catch (IOException ex) {
            resp = null;
        }
        return resp;    // result will be the PACK
    }

    // NTAG READ_SIG
    public byte[] readSig() {
        byte[] req = new byte[2];
        byte[] resp;

        req[0] = NfcNtagOpcode.READ_SIG;
        req[1] = 0x00;

        try {
            resp = nfca.transceive(req);
        } catch (IOException ex) {
            resp = null;
        }
        return resp;    // result will be the NTAG signature
    }

    // NTAG SECTOR_SELECT
    public boolean sectorSelect(byte sector) {
        byte[] req1 = new byte[2];
        byte[] req2 = new byte[4];

        req1[0] = NfcNtagOpcode.SECTOR_SELECT;
        req1[1] = (byte) 0xFF;

        try {
            nfca.transceive(req1);
        } catch (IOException ex) {
            return false;
        }

        req2[0] = sector;
        req2[1] = 0x00;

        // The second part of this command works with negative acknowledge:
        // If the tag does not respond, the command worked OK.
        try {
            nfca.transceive(req2);
        } catch (IOException ex) {
            return true;
        }
        return false;
    }

    // NTAG READ_TT_STATUS
    public NfcNtagTtStatus readTtStatus() {
        byte[] req = new byte[2];
        byte[] resp;

        req[0] = NfcNtagOpcode.READ_TT_STATUS;
        req[1] = 0x00;

        try {
            resp = nfca.transceive(req);
        } catch (IOException ex) {
            return null;
        }

        NfcNtagTtStatus ttStatus;
        try {
            ttStatus = new NfcNtagTtStatus(resp);
        } catch (IllegalArgumentException ex) {
            return null;
        }

        return ttStatus;    // result will be the NTAG signature
    }


    // MF UL-C AUTHENTICATE part 1
    public byte[] mfulcAuth1() {
        byte[] req = new byte[2];
        byte[] resp;

        req[0] = NfcNtagOpcode.MFULC_AUTH1;
        req[1] = 0x00;

        try {
            resp = nfca.transceive(req);
        } catch (IOException ex) {
            resp = null;
        }
        return resp;    // result will be "AFh" + ekRndB
    }

    // MF UL-C AUTHENTICATE part 2
    public byte[] mfulcAuth2(byte[] ekRndAB) {
        if (ekRndAB == null) {
            return null;
        }
        if (ekRndAB.length != 16) {
            return null;
        }

        byte[] req = new byte[17];
        byte[] resp;

        req[0] = NfcNtagOpcode.MFULC_AUTH2;

        try {
            System.arraycopy(ekRndAB, 0, req, 1, 16);
            resp = nfca.transceive(req);
        } catch (IOException ex) {
            return null;
        }
        return resp;    // result will be ekRndA'
    }

    private NfcA nfca;
    private int maxTransceiveLength;
}
