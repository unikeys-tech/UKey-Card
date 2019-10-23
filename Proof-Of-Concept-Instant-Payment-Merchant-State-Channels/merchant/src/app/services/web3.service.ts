import { Injectable } from '@angular/core';
import * as Web3 from 'web3';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { LoadMerchantBalanceOnChainSuccess } from '../actions/merchant.actions';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  private web3 =new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/Up1Fq6adM0sKtKgGmDJW"));

  constructor(private store:Store<fromRoot.State>) {
    // this.store.select(fromRoot.getAddress).subscribe(address => {
    //   if (this.web3.isAddress(address)) {
    //     var onChainBalance = this.web3.fromWei(this.web3.eth.getBalance(address), 'ether')
    //     this.store.dispatch(new LoadMerchantBalanceOnChainSuccess(onChainBalance.toNumber()))
    //   }
    // })
  }

  toWei(wei) {
    return this.web3.toWei(wei, 'ether');
  }

  fromWei(wei) {
    return this.web3.fromWei(wei, 'ether')
  }
}
