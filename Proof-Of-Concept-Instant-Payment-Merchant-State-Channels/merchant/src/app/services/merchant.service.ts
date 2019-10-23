import { Injectable } from '@angular/core';
import { webSocket,WebSocketSubject } from 'rxjs/webSocket'
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { InitMerchantSuccess, ConnectionFail, ReceiveOffChainBalanceUpdate } from '../actions/merchant.actions';
import { Message } from '../models/message';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  private socket$:WebSocketSubject<Message>
  constructor(private store:Store<fromRoot.State>, private http:HttpClient) {
    console.log('websocket connect')

    this.socket$ = webSocket<Message>('ws://18.136.161.95:40510')
    this.socket$.subscribe(

      (message) => {
        switch (message.msgType) {
          case 'init':
            this.store.dispatch(new InitMerchantSuccess(message.data))
            break;
          case 'paid':
            this.store.dispatch(new ReceiveOffChainBalanceUpdate(message.data.balance))
          default:
            break;
        }

      },
      (err) => {
        console.error(err)
        this.store.dispatch(new ConnectionFail())
      }
    )
  }

  getBalance(address) {
    console.log(address)
    return this.http.get<any>('http://18.136.161.95:3001/balance?address=' + address)
  }

  withdraw(address) {
    console.log(address)
    return this.http.get<any>('http://merchantpoc.unikeys.io/withdraw?address=' + address)
  }


  // to reset state in the server by open a new channel
  resetState() {
    return this.http.post<any>('http://merchantpoc.unikeys.io/reset', '')
  }
}
