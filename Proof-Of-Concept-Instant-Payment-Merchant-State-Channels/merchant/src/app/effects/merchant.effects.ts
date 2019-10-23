import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MerchantService } from '../services/merchant.service';
import { Observable } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { ReceiveOffChainBalanceUpdate, MerchantActionTypes, InitMerchantSuccess, LoadMerchantBalanceOffChainFail, LoadMerchantBalanceOffChainSuccess, LoadMerchantBalanceOffChain,WithdrawChannelBalance, WithdrawChannelBalanceSuccess} from '../actions/merchant.actions';
import { CheckoutSuccess } from '../actions/cart.actions';
import {  switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Web3Service } from '../services/web3.service';
import * as fromRoot from '../reducers'


@Injectable()
export class MerchantEffects {

  constructor(private store:Store<fromRoot.State>, private actions$: Actions, private ms:MerchantService, private web3:Web3Service) {
  }

  @Effect()
  receiveOffChainBalanceUpdate$:Observable<Action> = this.actions$.pipe(
    ofType<ReceiveOffChainBalanceUpdate>(MerchantActionTypes.ReceiveOffChainBalanceUpdate),
    map( action => new CheckoutSuccess())
  )

  @Effect()
  InitMerchantSuccess$:Observable<Action> = this.actions$.pipe(
    ofType<InitMerchantSuccess>(MerchantActionTypes.InitMerchantSuccess),
    map( action => action.payload),
    switchMap( (data:any) => this.ms.getBalance(data.address).pipe(
        map( response => new LoadMerchantBalanceOffChainSuccess({offchain: this.web3.fromWei(response.offchain), onchain: this.web3.fromWei(response.onchain)}))
      )
    )
  );

  @Effect()
  loadMerchantBalanceOffChain$:Observable<Action> = this.actions$.pipe(
    ofType<LoadMerchantBalanceOffChain>(MerchantActionTypes.LoadMerchantBalanceOffChain),
    withLatestFrom(this.store.select(state => state.merchant.accountNumber)),
    switchMap( ([_, addr]) => this.ms.getBalance(addr).pipe(
        map( response => new LoadMerchantBalanceOffChainSuccess({offchain: this.web3.fromWei(response.offchain), onchain: this.web3.fromWei(response.onchain) }))
      )
    )
  );

  @Effect()
  withdrawChannelBalance$:Observable<Action> = this.actions$.pipe(
    ofType<WithdrawChannelBalance>(MerchantActionTypes.WithdrawChannelBalance),
    withLatestFrom(this.store.select(state => state.merchant.accountNumber)),
    switchMap( ([_, addr]) => this.ms.withdraw(addr).pipe(
      map( response => new WithdrawChannelBalanceSuccess(response))
    ))
  )



}
