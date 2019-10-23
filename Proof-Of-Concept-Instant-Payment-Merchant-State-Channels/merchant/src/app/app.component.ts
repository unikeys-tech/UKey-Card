import { Component } from '@angular/core';
import { ProductService } from './services/product-service.service';
import { Product } from './models/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products:Array<Product>;
  constructor(private ps:ProductService) {
    this.products = this.ps.getProducts()
  }
}
