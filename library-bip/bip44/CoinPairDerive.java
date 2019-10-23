package com.soft.crypto.bip44;

import com.soft.crypto.CoinTypes;
import com.soft.crypto.ECKeyPair;
import com.soft.crypto.bip32.ExtendedKey;
import com.soft.crypto.bip32.Index;
import com.soft.crypto.bip32.ValidationException;
import com.soft.crypto.bitcoin.BitCoinECKeyPair;
import com.soft.crypto.ethereum.EthECKeyPair;

import java.util.Map;
import java.util.WeakHashMap;

/**
 * @author QuincySx
 * @date 2018/3/5 下午3:48
 */
public class CoinPairDerive {
    private static Map<String, ExtendedKey> sExtendedKeyMap = new WeakHashMap<>();

    private ExtendedKey mExtendedKey;

    public CoinPairDerive(ExtendedKey extendedKey) {
        mExtendedKey = extendedKey;
    }

    public ExtendedKey deriveByExtendedKey(AddressIndex addressIndex) throws ValidationException {
        ExtendedKey extendedKey = sExtendedKeyMap.get(addressIndex.toString());
        if (extendedKey != null) {
            return extendedKey;
        }
        int address = addressIndex.getValue();
        int change = addressIndex.getParent().getValue();
        int account = addressIndex.getParent().getParent().getValue();
        CoinTypes coinType = addressIndex.getParent().getParent().getParent().getValue();
        int purpose = addressIndex.getParent().getParent().getParent().getParent().getValue();

        ExtendedKey child = mExtendedKey
                .getChild(Index.hard(purpose))
                .getChild(Index.hard(coinType.coinType()))
                .getChild(Index.hard(account))
                .getChild(change)
                .getChild(address);
        sExtendedKeyMap.put(addressIndex.toString(), child);
        return child;
    }

    public ECKeyPair derive(AddressIndex addressIndex) throws ValidationException {
        CoinTypes coinType = addressIndex.getParent().getParent().getParent().getValue();
        ExtendedKey child = deriveByExtendedKey(addressIndex);
        ECKeyPair ecKeyPair = convertKeyPair(child, coinType);
        return ecKeyPair;
    }

    public ECKeyPair convertKeyPair(ExtendedKey child, CoinTypes coinType) throws ValidationException {
        switch (coinType) {
            case BitcoinTest:
                return BitCoinECKeyPair.parse(child.getMaster(), true);// convertBitcoinKeyPair(new BigInteger(1, child.getMaster().getPrivate()), true);
            case Ethereum:
                return EthECKeyPair.parse(child.getMaster());//convertEthKeyPair(new BigInteger(1, child.getMaster().getPrivate()));
            case Bitcoin:
            default:
                return BitCoinECKeyPair.parse(child.getMaster(), false);//convertBitcoinKeyPair(new BigInteger(1, child.getMaster().getPrivate()), false);
        }
    }
}
