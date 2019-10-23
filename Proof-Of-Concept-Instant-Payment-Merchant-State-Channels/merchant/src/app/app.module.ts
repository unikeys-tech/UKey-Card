import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { BalanceComponent } from './balance/balance.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as fromCart from './reducers/cart.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from './effects/cart.effects';
import { MerchantDashboardComponent } from './merchant-dashboard/merchant-dashboard.component';
import { MerchantEffects } from './effects/merchant.effects';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResetDialogComponent } from './reset-dialog/reset-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    QrcodeComponent,
    BalanceComponent,
    CartComponent,
    ProductItemComponent,
    MerchantDashboardComponent,
    ResetDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([CartEffects, MerchantEffects]),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [
    ResetDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
