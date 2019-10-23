import { Action } from '@ngrx/store';
import { Product, CartItem } from '../models/product';

export enum CartActionTypes {
  initCart = '[Cart] Init Cart',
  addItem = '[Cart] Add Item',
  addItemSuccess = '[Cart] Add Item Success',
  removeItem = '[Cart] Remove Item',
  checkout = '[Cart] Check out',
  checkoutCancel = '[Cart] Check out cancel',
  checkoutSuccess = '[Cart] Check out success'
}

export class InitCart implements Action {
  readonly type = CartActionTypes.initCart
}

export class AddItem implements Action {
  readonly type = CartActionTypes.addItem
  constructor(public payload:Product) {}
}

export class AddItemSuccess implements Action {
  readonly type = CartActionTypes.addItemSuccess
  constructor(public payload:Product) {}
}

export class RemoveItem implements Action {
  readonly type = CartActionTypes.removeItem
}

export class Checkout implements Action {
  readonly type = CartActionTypes.checkout
}

export class CheckoutCancel implements Action {
  readonly type = CartActionTypes.checkoutCancel
}

export class CheckoutSuccess implements Action {
  readonly type = CartActionTypes.checkoutSuccess
}

export type CartActions = InitCart | AddItem | RemoveItem
   | AddItemSuccess | Checkout | CheckoutCancel | CheckoutSuccess;
