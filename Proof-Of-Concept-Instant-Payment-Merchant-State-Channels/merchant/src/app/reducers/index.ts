import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCart from '../reducers/cart.reducer';
import * as fromMerchant from '../reducers/merchant.reducer';

export interface State {
  merchant: fromMerchant.State,
  cart: fromCart.State
}

export const reducers: ActionReducerMap<State> = {
  merchant: fromMerchant.reducer,
  cart: fromCart.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectCartState = createFeatureSelector<fromCart.State>('cart');
export const getCartItems = createSelector(selectCartState, fromCart.getItems);
export const getCartAmt = createSelector(selectCartState, fromCart.getAmount);
export const getCheckoutStatus = createSelector(selectCartState, fromCart.getCheckoutStatus);
export const getStatusMsg = createSelector(selectCartState, fromCart.getMsg);

export const selectMerchatState = createFeatureSelector<fromMerchant.State>('merchant');
export const getAddress = createSelector(selectMerchatState, fromMerchant.getAddress)
export const getPreimageHash = createSelector(selectMerchatState, fromMerchant.getPreimageHash)
export const getOnChainBalance = createSelector(selectMerchatState, fromMerchant.getOnChainBalance)
export const getOffChainBalance = createSelector(selectMerchatState, fromMerchant.getOffChainBalance)
export const getMerchantMessage = createSelector(selectMerchatState, fromMerchant.getMerchantMessage)