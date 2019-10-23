import { Action } from '@ngrx/store';

export enum MerchantActionTypes {
  LoadMerchantBalanceOnChain = '[Merchant] Load Merchant On Chain Balance',
  LoadMerchantBalanceOffChain = '[Merchant] Load Merchant Off chain balance',
  InitMerchantSuccess = '[Merchant] Init Merchant Success',
  ConnectionFail = '[Merchant] Connection Fail',
  LoadMerchantBalanceOnChainSuccess = '[Merchant] Load Merchant On Chain Balance Success',
  LoadMerchantBalanceOnChainFail = '[Merchant] Load Merchant On Chain Balance Fail',
  LoadMerchantBalanceOffChainSuccess = '[Merchant] Load Merchant Off chain balance Success',
  LoadMerchantBalanceOffChainFail = '[Merchant] Load Merchant Off chain balance Fail',
  ReceiveOffChainBalanceUpdate = '[Merchant] Receive Off Chain balance update',
  WithdrawChannelBalance = '[Merchant] Witdraw channel balance',
  WithdrawChannelBalanceSuccess = '[Merchant] Witdraw channel balance success',
  WithdrawChannelBalanceFail = '[Merchant] Witdraw channel balance fail',
}


export class InitMerchantSuccess implements Action {
  readonly type = MerchantActionTypes.InitMerchantSuccess
  constructor(public payload:any) {}
}

export class ConnectionFail implements Action {
  readonly type = MerchantActionTypes.ConnectionFail
}

export class LoadMerchantBalanceOffChain implements Action {
  readonly type = MerchantActionTypes.LoadMerchantBalanceOffChain
}

export class LoadMerchantBalanceOffChainSuccess implements Action {
  readonly type = MerchantActionTypes.LoadMerchantBalanceOffChainSuccess
  constructor(public payload:any) {}  // offchain balance
} 

export class LoadMerchantBalanceOffChainFail implements Action {
  readonly type = MerchantActionTypes.LoadMerchantBalanceOffChainFail
}

export class LoadMerchantBalanceOnChain implements Action {
  readonly type = MerchantActionTypes.LoadMerchantBalanceOnChain
}

export class LoadMerchantBalanceOnChainSuccess implements Action {
  readonly type = MerchantActionTypes.LoadMerchantBalanceOnChainSuccess
  constructor(public payload:number) {} // onchain balance
}

export class LoadMerchantBalanceOnChainFail implements Action {
  readonly type = MerchantActionTypes.LoadMerchantBalanceOnChainFail
}

export class ReceiveOffChainBalanceUpdate implements Action {
  readonly type = MerchantActionTypes.ReceiveOffChainBalanceUpdate
  constructor(public payload:number ) {} // receive update from server
}


export class WithdrawChannelBalance implements Action {
  readonly type = MerchantActionTypes.WithdrawChannelBalance

}

export class WithdrawChannelBalanceSuccess implements Action {
  readonly type = MerchantActionTypes.WithdrawChannelBalanceSuccess
  constructor(public payload:any) {}

}
export class WithdrawChannelBalanceFail implements Action {
  readonly type = MerchantActionTypes.WithdrawChannelBalanceFail

}

export type MerchantActions =  LoadMerchantBalanceOffChain | LoadMerchantBalanceOffChainSuccess |
 LoadMerchantBalanceOffChainFail | ConnectionFail | InitMerchantSuccess | LoadMerchantBalanceOnChain | LoadMerchantBalanceOnChainFail | LoadMerchantBalanceOnChainSuccess |
 ReceiveOffChainBalanceUpdate  | WithdrawChannelBalance | WithdrawChannelBalanceSuccess | WithdrawChannelBalanceFail;
