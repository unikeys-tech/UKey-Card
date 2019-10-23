import { Action } from '@ngrx/store';
import { MerchantActions, MerchantActionTypes } from '../actions/merchant.actions';
import * as Web3 from 'web3';

export interface State {
  accountNumber:string;
  offChainBalance:number;
  onChainBalance:number;
  preimage_hash:string;
  mmsg:string;
}

export const initialState: State = {

  accountNumber : '',
  offChainBalance : 0,
  onChainBalance : 0,
  preimage_hash: null,
  mmsg:''
};

export function reducer(state = initialState, action: MerchantActions): State {
  var web3 =new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/Up1Fq6adM0sKtKgGmDJW"));

  switch (action.type) {
    case MerchantActionTypes.InitMerchantSuccess:
      return {
        ...state,
        accountNumber: action.payload.address,
        preimage_hash: action.payload.preimage_hash
      }
    case MerchantActionTypes.ConnectionFail:
      return {
        ...state,
        accountNumber: 'cannot get merchant account',
        onChainBalance: 0,
        offChainBalance: 0,
        preimage_hash: null
      }
    //case MerchantActionTypes.ReceiveOffChainBalanceUpdate:
    case MerchantActionTypes.LoadMerchantBalanceOffChainSuccess:
      return {
        ...state,
        offChainBalance: action.payload.offchain,
        onChainBalance: action.payload.onchain
      }
    case MerchantActionTypes.WithdrawChannelBalance:
      return {
        ...state,
        mmsg: 'Withdrawing...'
      }
    case MerchantActionTypes.WithdrawChannelBalanceSuccess:
      return {
        ...state,
        mmsg: `Withdraw ${web3.fromWei(action.payload.toWithdraw)} success!  GAS FEE: ${web3.fromWei(action.payload.txhash.gasUsed, 'ether')} ETH`
      }
    default:
      return state;
  }
}

export const getPreimageHash = (state:State) => state.preimage_hash
export const getAddress = (state:State) => state.accountNumber;
export const getOnChainBalance = (state:State) => state.onChainBalance;
export const getOffChainBalance = (state:State) => state.offChainBalance;
export const getMerchantMessage = (state:State) => state.mmsg;