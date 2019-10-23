import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, timer } from 'rxjs';
import { CartActionTypes, AddItem, AddItemSuccess, CheckoutSuccess } from '../actions/cart.actions';
import { ProductService } from '../services/product-service.service';
import { Action, Store } from '@ngrx/store';
import { catchError, map, mergeMap, switchMap, toArray, withLatestFrom } from 'rxjs/operators';
import { LoadMerchantBalanceOffChainSuccess } from '../actions/merchant.actions';
import * as fromRoot from '../reducers'
import { MerchantService } from '../services/merchant.service';
import { Web3Service } from '../services/web3.service';
@Injectable()
export class CartEffects {

  constructor(private store:Store<fromRoot.State>, private actions$: Actions, private ps:ProductService, private ms:MerchantService,private web3:Web3Service) {}

  @Effect()
  addItem$: Observable<Action> = this.actions$.pipe(
    ofType<AddItem>(CartActionTypes.addItem),
    map(action => new AddItemSuccess(action.payload))
  )

  @Effect()
  checkoutSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<CheckoutSuccess>(CartActionTypes.checkoutSuccess),
    withLatestFrom(this.store.select(state => state.merchant.accountNumber)),
    switchMap( ([_, addr]) => this.ms.getBalance(addr).pipe(
        map( response => new LoadMerchantBalanceOffChainSuccess(this.web3.fromWei(response.offchain))))
    )
  )
}
