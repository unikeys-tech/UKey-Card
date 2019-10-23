
import {  CartItem } from '../models/product';
import {  CartActionTypes, CartActions }from '../actions/cart.actions';

export interface State {
  items: Array<CartItem>;
  amount: number;
  checkout: boolean;
  msg: string;
}

export const initialState: State = {
  items: [],
  amount: 0.0,
  checkout: false,
  msg: ''
};

export function reducer(state = initialState, action: CartActions): State {
  switch (action.type) {

    case CartActionTypes.addItemSuccess:
      let p = state.items.filter( item => item.product.id == action.payload.id)

      if (p.length== 0) {
        let c = new CartItem(action.payload, 1);
        return {
          ...state,
          items: [...state.items, c],
          amount: state.amount + action.payload.price,
        }
      }
      p[0].qty++;
      return {
        ...state,
        items: [ p[0], ...state.items.filter( item => item.product.id !== action.payload.id)],
        amount: state.amount + action.payload.price
      }



    case CartActionTypes.checkout:
      return {
        ...state,
        checkout: true,
        msg: 'Pending Payment'
      }

    case CartActionTypes.checkoutCancel:
      return {
        ...state,
        checkout: false,
        msg: 'Cancel Payment'
      }

    case CartActionTypes.checkoutSuccess:
      return {
        ...initialState,
        msg: 'Checkout Successfully'
      }
    // not implement remove item for Demo
    default:
      return state;
  }
}

export const getItems = (state:State) => state.items;
export const getAmount = (state:State) => state.amount;
export const getCheckoutStatus = (state:State) => state.checkout;
export const getMsg = (state:State) => state.msg;