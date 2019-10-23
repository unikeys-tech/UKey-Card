import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Array<Product>;

  constructor() {

    this.products = [
      {
        id: 1,
        name: 'Coca Cola',
        price: 0.001,
        icon: '/assets/coke_f.png'
      },
      {
        id: 2,
        name: 'Pepsi',
        price: 0.001,
        icon: '/assets/pepsi_f.png'

      },
      {
        id: 3,
        name: 'Seven up',
        price: 0.012,
        icon: '/assets/sevenup_f.png'
      }
    ]

   }

   getProducts() {
     return this.products;
   }
}
