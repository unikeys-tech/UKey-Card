(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions/cart.actions.ts":
/*!*****************************************!*\
  !*** ./src/app/actions/cart.actions.ts ***!
  \*****************************************/
/*! exports provided: CartActionTypes, InitCart, AddItem, AddItemSuccess, RemoveItem, Checkout, CheckoutCancel, CheckoutSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartActionTypes", function() { return CartActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitCart", function() { return InitCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItem", function() { return AddItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemSuccess", function() { return AddItemSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveItem", function() { return RemoveItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkout", function() { return Checkout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutCancel", function() { return CheckoutCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutSuccess", function() { return CheckoutSuccess; });
var CartActionTypes;
(function (CartActionTypes) {
    CartActionTypes["initCart"] = "[Cart] Init Cart";
    CartActionTypes["addItem"] = "[Cart] Add Item";
    CartActionTypes["addItemSuccess"] = "[Cart] Add Item Success";
    CartActionTypes["removeItem"] = "[Cart] Remove Item";
    CartActionTypes["checkout"] = "[Cart] Check out";
    CartActionTypes["checkoutCancel"] = "[Cart] Check out cancel";
    CartActionTypes["checkoutSuccess"] = "[Cart] Check out success";
})(CartActionTypes || (CartActionTypes = {}));
var InitCart = /** @class */ (function () {
    function InitCart() {
        this.type = CartActionTypes.initCart;
    }
    return InitCart;
}());

var AddItem = /** @class */ (function () {
    function AddItem(payload) {
        this.payload = payload;
        this.type = CartActionTypes.addItem;
    }
    return AddItem;
}());

var AddItemSuccess = /** @class */ (function () {
    function AddItemSuccess(payload) {
        this.payload = payload;
        this.type = CartActionTypes.addItemSuccess;
    }
    return AddItemSuccess;
}());

var RemoveItem = /** @class */ (function () {
    function RemoveItem() {
        this.type = CartActionTypes.removeItem;
    }
    return RemoveItem;
}());

var Checkout = /** @class */ (function () {
    function Checkout() {
        this.type = CartActionTypes.checkout;
    }
    return Checkout;
}());

var CheckoutCancel = /** @class */ (function () {
    function CheckoutCancel() {
        this.type = CartActionTypes.checkoutCancel;
    }
    return CheckoutCancel;
}());

var CheckoutSuccess = /** @class */ (function () {
    function CheckoutSuccess() {
        this.type = CartActionTypes.checkoutSuccess;
    }
    return CheckoutSuccess;
}());



/***/ }),

/***/ "./src/app/actions/merchant.actions.ts":
/*!*********************************************!*\
  !*** ./src/app/actions/merchant.actions.ts ***!
  \*********************************************/
/*! exports provided: MerchantActionTypes, InitMerchantSuccess, ConnectionFail, LoadMerchantBalanceOffChain, LoadMerchantBalanceOffChainSuccess, LoadMerchantBalanceOffChainFail, LoadMerchantBalanceOnChain, LoadMerchantBalanceOnChainSuccess, LoadMerchantBalanceOnChainFail, ReceiveOffChainBalanceUpdate, WithdrawChannelBalance, WithdrawChannelBalanceSuccess, WithdrawChannelBalanceFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantActionTypes", function() { return MerchantActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitMerchantSuccess", function() { return InitMerchantSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionFail", function() { return ConnectionFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMerchantBalanceOffChain", function() { return LoadMerchantBalanceOffChain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMerchantBalanceOffChainSuccess", function() { return LoadMerchantBalanceOffChainSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMerchantBalanceOffChainFail", function() { return LoadMerchantBalanceOffChainFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMerchantBalanceOnChain", function() { return LoadMerchantBalanceOnChain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMerchantBalanceOnChainSuccess", function() { return LoadMerchantBalanceOnChainSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMerchantBalanceOnChainFail", function() { return LoadMerchantBalanceOnChainFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiveOffChainBalanceUpdate", function() { return ReceiveOffChainBalanceUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawChannelBalance", function() { return WithdrawChannelBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawChannelBalanceSuccess", function() { return WithdrawChannelBalanceSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawChannelBalanceFail", function() { return WithdrawChannelBalanceFail; });
var MerchantActionTypes;
(function (MerchantActionTypes) {
    MerchantActionTypes["LoadMerchantBalanceOnChain"] = "[Merchant] Load Merchant On Chain Balance";
    MerchantActionTypes["LoadMerchantBalanceOffChain"] = "[Merchant] Load Merchant Off chain balance";
    MerchantActionTypes["InitMerchantSuccess"] = "[Merchant] Init Merchant Success";
    MerchantActionTypes["ConnectionFail"] = "[Merchant] Connection Fail";
    MerchantActionTypes["LoadMerchantBalanceOnChainSuccess"] = "[Merchant] Load Merchant On Chain Balance Success";
    MerchantActionTypes["LoadMerchantBalanceOnChainFail"] = "[Merchant] Load Merchant On Chain Balance Fail";
    MerchantActionTypes["LoadMerchantBalanceOffChainSuccess"] = "[Merchant] Load Merchant Off chain balance Success";
    MerchantActionTypes["LoadMerchantBalanceOffChainFail"] = "[Merchant] Load Merchant Off chain balance Fail";
    MerchantActionTypes["ReceiveOffChainBalanceUpdate"] = "[Merchant] Receive Off Chain balance update";
    MerchantActionTypes["WithdrawChannelBalance"] = "[Merchant] Witdraw channel balance";
    MerchantActionTypes["WithdrawChannelBalanceSuccess"] = "[Merchant] Witdraw channel balance success";
    MerchantActionTypes["WithdrawChannelBalanceFail"] = "[Merchant] Witdraw channel balance fail";
})(MerchantActionTypes || (MerchantActionTypes = {}));
var InitMerchantSuccess = /** @class */ (function () {
    function InitMerchantSuccess(payload) {
        this.payload = payload;
        this.type = MerchantActionTypes.InitMerchantSuccess;
    }
    return InitMerchantSuccess;
}());

var ConnectionFail = /** @class */ (function () {
    function ConnectionFail() {
        this.type = MerchantActionTypes.ConnectionFail;
    }
    return ConnectionFail;
}());

var LoadMerchantBalanceOffChain = /** @class */ (function () {
    function LoadMerchantBalanceOffChain() {
        this.type = MerchantActionTypes.LoadMerchantBalanceOffChain;
    }
    return LoadMerchantBalanceOffChain;
}());

var LoadMerchantBalanceOffChainSuccess = /** @class */ (function () {
    function LoadMerchantBalanceOffChainSuccess(payload) {
        this.payload = payload;
        this.type = MerchantActionTypes.LoadMerchantBalanceOffChainSuccess;
    } // offchain balance
    return LoadMerchantBalanceOffChainSuccess;
}());

var LoadMerchantBalanceOffChainFail = /** @class */ (function () {
    function LoadMerchantBalanceOffChainFail() {
        this.type = MerchantActionTypes.LoadMerchantBalanceOffChainFail;
    }
    return LoadMerchantBalanceOffChainFail;
}());

var LoadMerchantBalanceOnChain = /** @class */ (function () {
    function LoadMerchantBalanceOnChain() {
        this.type = MerchantActionTypes.LoadMerchantBalanceOnChain;
    }
    return LoadMerchantBalanceOnChain;
}());

var LoadMerchantBalanceOnChainSuccess = /** @class */ (function () {
    function LoadMerchantBalanceOnChainSuccess(payload) {
        this.payload = payload;
        this.type = MerchantActionTypes.LoadMerchantBalanceOnChainSuccess;
    } // onchain balance
    return LoadMerchantBalanceOnChainSuccess;
}());

var LoadMerchantBalanceOnChainFail = /** @class */ (function () {
    function LoadMerchantBalanceOnChainFail() {
        this.type = MerchantActionTypes.LoadMerchantBalanceOnChainFail;
    }
    return LoadMerchantBalanceOnChainFail;
}());

var ReceiveOffChainBalanceUpdate = /** @class */ (function () {
    function ReceiveOffChainBalanceUpdate(payload) {
        this.payload = payload;
        this.type = MerchantActionTypes.ReceiveOffChainBalanceUpdate;
    } // receive update from server
    return ReceiveOffChainBalanceUpdate;
}());

var WithdrawChannelBalance = /** @class */ (function () {
    function WithdrawChannelBalance() {
        this.type = MerchantActionTypes.WithdrawChannelBalance;
    }
    return WithdrawChannelBalance;
}());

var WithdrawChannelBalanceSuccess = /** @class */ (function () {
    function WithdrawChannelBalanceSuccess(payload) {
        this.payload = payload;
        this.type = MerchantActionTypes.WithdrawChannelBalanceSuccess;
    }
    return WithdrawChannelBalanceSuccess;
}());

var WithdrawChannelBalanceFail = /** @class */ (function () {
    function WithdrawChannelBalanceFail() {
        this.type = MerchantActionTypes.WithdrawChannelBalanceFail;
    }
    return WithdrawChannelBalanceFail;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-row {\n    background-color: rgb(225,240, 345);\n    padding: 10px 0;\n    margin: 0px 0;\n}\n\n.container {\n    margin-top: 40px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n        <div class=\"col-md-12\">\n            <h3>Demo Merchant</h3>\n        </div>\n      <div class=\"row product-row\">\n        <div class=\"col-md-4\" *ngFor=\"let product of products\">\n            <product-item  [product]=\"product\"></product-item>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <merchant-dashboard></merchant-dashboard>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <cart></cart>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/product-service.service */ "./src/app/services/product-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(ps) {
        this.ps = ps;
        this.products = this.ps.getProducts();
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_product_service_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./qrcode/qrcode.component */ "./src/app/qrcode/qrcode.component.ts");
/* harmony import */ var _balance_balance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./balance/balance.component */ "./src/app/balance/balance.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-item/product-item.component */ "./src/app/product-item/product-item.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _effects_cart_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./effects/cart.effects */ "./src/app/effects/cart.effects.ts");
/* harmony import */ var _merchant_dashboard_merchant_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./merchant-dashboard/merchant-dashboard.component */ "./src/app/merchant-dashboard/merchant-dashboard.component.ts");
/* harmony import */ var _effects_merchant_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./effects/merchant.effects */ "./src/app/effects/merchant.effects.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _reset_dialog_reset_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./reset-dialog/reset-dialog.component */ "./src/app/reset-dialog/reset-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _qrcode_qrcode_component__WEBPACK_IMPORTED_MODULE_3__["QrcodeComponent"],
                _balance_balance_component__WEBPACK_IMPORTED_MODULE_4__["BalanceComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"],
                _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_7__["ProductItemComponent"],
                _merchant_dashboard_merchant_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["MerchantDashboardComponent"],
                _reset_dialog_reset_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ResetDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_9__["reducers"], { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_9__["metaReducers"] }),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument() : [],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsModule"].forRoot([_effects_cart_effects__WEBPACK_IMPORTED_MODULE_13__["CartEffects"], _effects_merchant_effects__WEBPACK_IMPORTED_MODULE_15__["MerchantEffects"]]),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"]
            ],
            entryComponents: [
                _reset_dialog_reset_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ResetDialogComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/balance/balance.component.css":
/*!***********************************************!*\
  !*** ./src/app/balance/balance.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/balance/balance.component.html":
/*!************************************************!*\
  !*** ./src/app/balance/balance.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  balance works!\n</p>\n"

/***/ }),

/***/ "./src/app/balance/balance.component.ts":
/*!**********************************************!*\
  !*** ./src/app/balance/balance.component.ts ***!
  \**********************************************/
/*! exports provided: BalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceComponent", function() { return BalanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BalanceComponent = /** @class */ (function () {
    function BalanceComponent() {
    }
    BalanceComponent.prototype.ngOnInit = function () {
    };
    BalanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-balance',
            template: __webpack_require__(/*! ./balance.component.html */ "./src/app/balance/balance.component.html"),
            styles: [__webpack_require__(/*! ./balance.component.css */ "./src/app/balance/balance.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BalanceComponent);
    return BalanceComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n    padding: 10px 15px;\n    border: solid;\n    border-width: 1px;\n    border-color: lightblue;\n    border-radius: 5px;\n    width: 100%;\n    background-color: rgb(225,240, 345);\n    display: block;\n}\n\n.cart {\n    height: 320px;\n}\n\nspan {\n    padding: 2px 5px;\n}\n\n.qrcode-box {\n    background: white;\n    padding: 5px 10px;\n    align-content: center;\n}\n\nbutton {\n    margin: 10px auto;\n}\n\n.cart-item-title {\n    font-size: 1.3em;\n    padding: 5px 4px 5px 0;\n    margin: 0px auto;\n    font-weight: 800;\n}"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box text-left\">\n  <h3>Shopping Cart</h3>\n  <div class=\"cart\">\n    <ul class=\"list-group\" *ngFor=\"let item of cart$ | async\">\n      <li class=\"list-group-item\">\n        <div class=\"cart-item-title\"> {{ item.product.name }}</div> <div class=\"cart-item-text\">QTY: {{ item.qty }}<span style=\"float:right\">{{ (item.product.price * item.qty).toFixed(4) }} ETH</span></div>\n      </li>\n    </ul>\n  </div>\n  <div class=\"qrcode-box\">\n    <div>\n      <div class=\"cart-item-text\">TOTAL: <span style=\"float: right\">{{ (amount$ | async).toFixed(4) }} ETH</span></div>\n    </div>\n    <div *ngIf=\"!(checkout$ | async)\">\n      <button class=\"btn btn-success btn-block\" [disabled]=\"(amount$ | async) <= 0\" (click)=\"onCheckout()\" >Check out with UniKeys</button>\n    </div>\n    <div style=\"text-align: center\" *ngIf=\"(checkout$ | async)\">\n        <qrcode [amount]=\"(amount$ | async).toFixed(4)\" ></qrcode> \n        <button class=\"btn btn-danger btn-block\" (click)=\"onCancelCheckout()\"> Cancel Checkout </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_cart_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/cart.actions */ "./src/app/actions/cart.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartComponent = /** @class */ (function () {
    function CartComponent(store) {
        this.store = store;
        this.cart$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_1__["getCartItems"]));
        this.amount$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_1__["getCartAmt"]));
        this.checkout$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_1__["getCheckoutStatus"]));
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent.prototype.onCheckout = function () {
        this.store.dispatch(new _actions_cart_actions__WEBPACK_IMPORTED_MODULE_3__["Checkout"]());
    };
    CartComponent.prototype.onCancelCheckout = function () {
        this.store.dispatch(new _actions_cart_actions__WEBPACK_IMPORTED_MODULE_3__["CheckoutCancel"]());
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/effects/cart.effects.ts":
/*!*****************************************!*\
  !*** ./src/app/effects/cart.effects.ts ***!
  \*****************************************/
/*! exports provided: CartEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartEffects", function() { return CartEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _actions_cart_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/cart.actions */ "./src/app/actions/cart.actions.ts");
/* harmony import */ var _services_product_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/product-service.service */ "./src/app/services/product-service.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_merchant_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/merchant.actions */ "./src/app/actions/merchant.actions.ts");
/* harmony import */ var _services_merchant_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/merchant.service */ "./src/app/services/merchant.service.ts");
/* harmony import */ var _services_web3_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/web3.service */ "./src/app/services/web3.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CartEffects = /** @class */ (function () {
    function CartEffects(store, actions$, ps, ms, web3) {
        var _this = this;
        this.store = store;
        this.actions$ = actions$;
        this.ps = ps;
        this.ms = ms;
        this.web3 = web3;
        this.addItem$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_3__["CartActionTypes"].addItem), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (action) { return new _actions_cart_actions__WEBPACK_IMPORTED_MODULE_3__["AddItemSuccess"](action.payload); }));
        this.checkoutSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_3__["CartActionTypes"].checkoutSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(function (state) { return state.merchant.accountNumber; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (_a) {
            var _ = _a[0], addr = _a[1];
            return _this.ms.getBalance(addr).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) { return new _actions_merchant_actions__WEBPACK_IMPORTED_MODULE_7__["LoadMerchantBalanceOffChainSuccess"](_this.web3.fromWei(response.offchain)); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], CartEffects.prototype, "addItem$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], CartEffects.prototype, "checkoutSuccess$", void 0);
    CartEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"], _services_product_service_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _services_merchant_service__WEBPACK_IMPORTED_MODULE_8__["MerchantService"], _services_web3_service__WEBPACK_IMPORTED_MODULE_9__["Web3Service"]])
    ], CartEffects);
    return CartEffects;
}());



/***/ }),

/***/ "./src/app/effects/merchant.effects.ts":
/*!*********************************************!*\
  !*** ./src/app/effects/merchant.effects.ts ***!
  \*********************************************/
/*! exports provided: MerchantEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantEffects", function() { return MerchantEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _services_merchant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/merchant.service */ "./src/app/services/merchant.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_merchant_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/merchant.actions */ "./src/app/actions/merchant.actions.ts");
/* harmony import */ var _actions_cart_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/cart.actions */ "./src/app/actions/cart.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_web3_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/web3.service */ "./src/app/services/web3.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MerchantEffects = /** @class */ (function () {
    function MerchantEffects(store, actions$, ms, web3) {
        var _this = this;
        this.store = store;
        this.actions$ = actions$;
        this.ms = ms;
        this.web3 = web3;
        this.receiveOffChainBalanceUpdate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_merchant_actions__WEBPACK_IMPORTED_MODULE_5__["MerchantActionTypes"].ReceiveOffChainBalanceUpdate), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (action) { return new _actions_cart_actions__WEBPACK_IMPORTED_MODULE_6__["CheckoutSuccess"](); }));
        this.InitMerchantSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_merchant_actions__WEBPACK_IMPORTED_MODULE_5__["MerchantActionTypes"].InitMerchantSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (data) { return _this.ms.getBalance(data.address).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) { return new _actions_merchant_actions__WEBPACK_IMPORTED_MODULE_5__["LoadMerchantBalanceOffChainSuccess"]({ offchain: _this.web3.fromWei(response.offchain), onchain: _this.web3.fromWei(response.onchain) }); })); }));
        this.loadMerchantBalanceOffChain$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_merchant_actions__WEBPACK_IMPORTED_MODULE_5__["MerchantActionTypes"].LoadMerchantBalanceOffChain), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["withLatestFrom"])(this.store.select(function (state) { return state.merchant.accountNumber; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (_a) {
            var _ = _a[0], addr = _a[1];
            return _this.ms.getBalance(addr).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) { return new _actions_merchant_actions__WEBPACK_IMPORTED_MODULE_5__["LoadMerchantBalanceOffChainSuccess"]({ offchain: _this.web3.fromWei(response.offchain), onchain: _this.web3.fromWei(response.onchain) }); }));
        }));
        this.withdrawChannelBalance$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_merchant_actions__WEBPACK_IMPORTED_MODULE_5__["MerchantActionTypes"].WithdrawChannelBalance), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["withLatestFrom"])(this.store.select(function (state) { return state.merchant.accountNumber; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (_a) {
            var _ = _a[0], addr = _a[1];
            return _this.ms.withdraw(addr).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) { return new _actions_merchant_actions__WEBPACK_IMPORTED_MODULE_5__["WithdrawChannelBalanceSuccess"](response); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], MerchantEffects.prototype, "receiveOffChainBalanceUpdate$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], MerchantEffects.prototype, "InitMerchantSuccess$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], MerchantEffects.prototype, "loadMerchantBalanceOffChain$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], MerchantEffects.prototype, "withdrawChannelBalance$", void 0);
    MerchantEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"], _services_merchant_service__WEBPACK_IMPORTED_MODULE_2__["MerchantService"], _services_web3_service__WEBPACK_IMPORTED_MODULE_8__["Web3Service"]])
    ], MerchantEffects);
    return MerchantEffects;
}());



/***/ }),

/***/ "./src/app/merchant-dashboard/merchant-dashboard.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/merchant-dashboard/merchant-dashboard.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n    width: 100%;\n    border: 1px solid lightblue;\n    border-radius: 5px;\n    margin-top: 10px;\n    padding: 15px 20px;\n    background-color: rgb(225,240, 345);\n}\n\nh3.dashboard {\n    background-color: white;\n    padding: 12px 8px;\n    margin: 0px auto;\n    font-size: 1.4em;\n}\n\nhr {\n    padding: 0 10px;\n    margin: 0 auto;\n    width: 80%;\n}"

/***/ }),

/***/ "./src/app/merchant-dashboard/merchant-dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/merchant-dashboard/merchant-dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n<h3>Merchant Dashboard</h3>\n    <h3 class=\"dashboard\">Address: {{ address$ | async }} </h3>\n    <hr />\n    <h3  class=\"dashboard\">Message: <span style=\"color:red\">{{ msg$ | async }}</span> </h3>\n    <hr />\n    <h3  class=\"dashboard\"> Balance:  {{ offchainBalance$ | async }} ETH</h3>\n    <h3  class=\"dashboard\"> OnChain Balance:  {{ onchainBalance$ | async }} ETH</h3>\n    <h3 class=\"dashboard\"><button (click)=\"withdraw()\" class=\"btn btn-success\">Withdraw from Channel</button> </h3>\n    <h3 class=\"dashboard\">Merchant Message: <span style=\"color:red\">{{ mmsg$ |  async }} </span> </h3>\n    <h3 class=\"dashboard\">System Operation: <button (click)=\"resetChannel()\" class=\"btn btn-danger\">Reset Channel</button></h3>\n</div>\n"

/***/ }),

/***/ "./src/app/merchant-dashboard/merchant-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/merchant-dashboard/merchant-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: MerchantDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantDashboardComponent", function() { return MerchantDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _actions_merchant_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/merchant.actions */ "./src/app/actions/merchant.actions.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _reset_dialog_reset_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reset-dialog/reset-dialog.component */ "./src/app/reset-dialog/reset-dialog.component.ts");
/* harmony import */ var _services_merchant_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/merchant.service */ "./src/app/services/merchant.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MerchantDashboardComponent = /** @class */ (function () {
    function MerchantDashboardComponent(store, dialog, ms) {
        this.store = store;
        this.dialog = dialog;
        this.ms = ms;
        this.address$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["getAddress"]));
        this.onchainBalance$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["getOnChainBalance"]));
        this.offchainBalance$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["getOffChainBalance"]));
        this.msg$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["getStatusMsg"]));
        this.mmsg$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["getMerchantMessage"]));
    }
    MerchantDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(5000).subscribe(function (x) {
            _this.store.dispatch(new _actions_merchant_actions__WEBPACK_IMPORTED_MODULE_4__["LoadMerchantBalanceOffChain"]());
        });
    };
    MerchantDashboardComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MerchantDashboardComponent.prototype.withdraw = function () {
        this.store.dispatch(new _actions_merchant_actions__WEBPACK_IMPORTED_MODULE_4__["WithdrawChannelBalance"]());
    };
    MerchantDashboardComponent.prototype.resetChannel = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_reset_dialog_reset_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ResetDialogComponent"], {
            width: '250px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'RESET') {
                _this.ms.resetState().subscribe();
            }
        });
    };
    MerchantDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'merchant-dashboard',
            template: __webpack_require__(/*! ./merchant-dashboard.component.html */ "./src/app/merchant-dashboard/merchant-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./merchant-dashboard.component.css */ "./src/app/merchant-dashboard/merchant-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _services_merchant_service__WEBPACK_IMPORTED_MODULE_7__["MerchantService"]])
    ], MerchantDashboardComponent);
    return MerchantDashboardComponent;
}());



/***/ }),

/***/ "./src/app/models/product.ts":
/*!***********************************!*\
  !*** ./src/app/models/product.ts ***!
  \***********************************/
/*! exports provided: Product, CartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
var Product = /** @class */ (function () {
    function Product() {
        this.id = 0;
        this.price = 0.0;
        this.name = '';
        this.icon = '';
    }
    return Product;
}());

var CartItem = /** @class */ (function () {
    function CartItem(p, qty) {
        this.product = null;
        this.qty = 0;
        this.product = p;
        this.qty = qty;
    }
    return CartItem;
}());



/***/ }),

/***/ "./src/app/product-item/product-item.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-item/product-item.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n    border: solid;\n    border-width: 1px;\n    border-color: black;\n    border-radius: 5px;\n    width: 180px;\n    display: block;\n    background-color: white;\n}\n\n\nimg {\n    width: 90%;\n    padding: 0 0;\n}\n\n\n.detail {\n    padding: 10px 15px 0px 15px;\n    font-size: 1.1em;\n    font-weight: 600;\n}\n\n\n.btn-dark {\n    background-color: black;\n    color: white;\n    padding: 2px 4px;\n    font-size: 1.2em;\n    margin-bottom: 10px;\n}"

/***/ }),

/***/ "./src/app/product-item/product-item.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-item/product-item.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <div class=\"text-center\">\n    <div class=\"detail\">\n      <img src=\"{{product.icon}}\" />\n      <div> {{product.price}} ETH</div>\n    </div>\n    <button class=\"btn btn-dark\" (click)=\"addToCart()\" [disabled]=\"checkout$ | async\"> Add to Cart</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product-item/product-item.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-item/product-item.component.ts ***!
  \********************************************************/
/*! exports provided: ProductItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function() { return ProductItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/product */ "./src/app/models/product.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/index */ "./src/app/reducers/index.ts");
/* harmony import */ var _actions_cart_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/cart.actions */ "./src/app/actions/cart.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductItemComponent = /** @class */ (function () {
    function ProductItemComponent(store) {
        this.store = store;
        this.checkout$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers_index__WEBPACK_IMPORTED_MODULE_3__["getCheckoutStatus"]));
    }
    ProductItemComponent.prototype.ngOnInit = function () {
    };
    ProductItemComponent.prototype.addToCart = function () {
        this.store.dispatch(new _actions_cart_actions__WEBPACK_IMPORTED_MODULE_4__["AddItem"](this.product));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_product__WEBPACK_IMPORTED_MODULE_1__["Product"])
    ], ProductItemComponent.prototype, "product", void 0);
    ProductItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product-item',
            template: __webpack_require__(/*! ./product-item.component.html */ "./src/app/product-item/product-item.component.html"),
            styles: [__webpack_require__(/*! ./product-item.component.css */ "./src/app/product-item/product-item.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ProductItemComponent);
    return ProductItemComponent;
}());



/***/ }),

/***/ "./src/app/qrcode/qrcode.component.css":
/*!*********************************************!*\
  !*** ./src/app/qrcode/qrcode.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/qrcode/qrcode.component.html":
/*!**********************************************!*\
  !*** ./src/app/qrcode/qrcode.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas #myCanvas></canvas>\n"

/***/ }),

/***/ "./src/app/qrcode/qrcode.component.ts":
/*!********************************************!*\
  !*** ./src/app/qrcode/qrcode.component.ts ***!
  \********************************************/
/*! exports provided: QrcodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrcodeComponent", function() { return QrcodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./src/app/reducers/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QrcodeComponent = /** @class */ (function () {
    function QrcodeComponent(store) {
        this.store = store;
    }
    QrcodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["selectMerchatState"])).subscribe(function (merchant) {
            // for debug
            console.log(JSON.stringify({
                "from": "0xa49aad37c34e92236690b93e291ae5f10daf7cbe",
                "to": merchant.accountNumber,
                "amount": _this.amount,
                "nonce": "1234"
            }));
            QRCode.toCanvas(_this.canvas.nativeElement, "sprite:" + merchant.accountNumber + "&tok=ETH&amt=" + _this.amount + "&preimagehash=" + merchant.preimage_hash, function (err) {
                if (err)
                    console.error(err);
                console.log('success!');
            });
        });
    };
    QrcodeComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myCanvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], QrcodeComponent.prototype, "canvas", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], QrcodeComponent.prototype, "amount", void 0);
    QrcodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'qrcode',
            template: __webpack_require__(/*! ./qrcode.component.html */ "./src/app/qrcode/qrcode.component.html"),
            styles: [__webpack_require__(/*! ./qrcode.component.css */ "./src/app/qrcode/qrcode.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], QrcodeComponent);
    return QrcodeComponent;
}());



/***/ }),

/***/ "./src/app/reducers/cart.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/reducers/cart.reducer.ts ***!
  \******************************************/
/*! exports provided: initialState, reducer, getItems, getAmount, getCheckoutStatus, getMsg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItems", function() { return getItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAmount", function() { return getAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckoutStatus", function() { return getCheckoutStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMsg", function() { return getMsg; });
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/product */ "./src/app/models/product.ts");
/* harmony import */ var _actions_cart_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/cart.actions */ "./src/app/actions/cart.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = {
    items: [],
    amount: 0.0,
    checkout: false,
    msg: ''
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_cart_actions__WEBPACK_IMPORTED_MODULE_1__["CartActionTypes"].addItemSuccess:
            var p = state.items.filter(function (item) { return item.product.id == action.payload.id; });
            if (p.length == 0) {
                var c = new _models_product__WEBPACK_IMPORTED_MODULE_0__["CartItem"](action.payload, 1);
                return __assign({}, state, { items: state.items.concat([c]), amount: state.amount + action.payload.price });
            }
            p[0].qty++;
            return __assign({}, state, { items: [p[0]].concat(state.items.filter(function (item) { return item.product.id !== action.payload.id; })), amount: state.amount + action.payload.price });
        case _actions_cart_actions__WEBPACK_IMPORTED_MODULE_1__["CartActionTypes"].checkout:
            return __assign({}, state, { checkout: true, msg: 'Pending Payment' });
        case _actions_cart_actions__WEBPACK_IMPORTED_MODULE_1__["CartActionTypes"].checkoutCancel:
            return __assign({}, state, { checkout: false, msg: 'Cancel Payment' });
        case _actions_cart_actions__WEBPACK_IMPORTED_MODULE_1__["CartActionTypes"].checkoutSuccess:
            return __assign({}, initialState, { msg: 'Checkout Successfully' });
        // not implement remove item for Demo
        default:
            return state;
    }
}
var getItems = function (state) { return state.items; };
var getAmount = function (state) { return state.amount; };
var getCheckoutStatus = function (state) { return state.checkout; };
var getMsg = function (state) { return state.msg; };


/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, metaReducers, selectCartState, getCartItems, getCartAmt, getCheckoutStatus, getStatusMsg, selectMerchatState, getAddress, getPreimageHash, getOnChainBalance, getOffChainBalance, getMerchantMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCartState", function() { return selectCartState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCartItems", function() { return getCartItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCartAmt", function() { return getCartAmt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckoutStatus", function() { return getCheckoutStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatusMsg", function() { return getStatusMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMerchatState", function() { return selectMerchatState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddress", function() { return getAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreimageHash", function() { return getPreimageHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOnChainBalance", function() { return getOnChainBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffChainBalance", function() { return getOffChainBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMerchantMessage", function() { return getMerchantMessage; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _reducers_cart_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/cart.reducer */ "./src/app/reducers/cart.reducer.ts");
/* harmony import */ var _reducers_merchant_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/merchant.reducer */ "./src/app/reducers/merchant.reducer.ts");




var reducers = {
    merchant: _reducers_merchant_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"],
    cart: _reducers_cart_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"]
};
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? [] : [];
var selectCartState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('cart');
var getCartItems = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCartState, _reducers_cart_reducer__WEBPACK_IMPORTED_MODULE_2__["getItems"]);
var getCartAmt = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCartState, _reducers_cart_reducer__WEBPACK_IMPORTED_MODULE_2__["getAmount"]);
var getCheckoutStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCartState, _reducers_cart_reducer__WEBPACK_IMPORTED_MODULE_2__["getCheckoutStatus"]);
var getStatusMsg = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCartState, _reducers_cart_reducer__WEBPACK_IMPORTED_MODULE_2__["getMsg"]);
var selectMerchatState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('merchant');
var getAddress = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectMerchatState, _reducers_merchant_reducer__WEBPACK_IMPORTED_MODULE_3__["getAddress"]);
var getPreimageHash = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectMerchatState, _reducers_merchant_reducer__WEBPACK_IMPORTED_MODULE_3__["getPreimageHash"]);
var getOnChainBalance = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectMerchatState, _reducers_merchant_reducer__WEBPACK_IMPORTED_MODULE_3__["getOnChainBalance"]);
var getOffChainBalance = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectMerchatState, _reducers_merchant_reducer__WEBPACK_IMPORTED_MODULE_3__["getOffChainBalance"]);
var getMerchantMessage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectMerchatState, _reducers_merchant_reducer__WEBPACK_IMPORTED_MODULE_3__["getMerchantMessage"]);


/***/ }),

/***/ "./src/app/reducers/merchant.reducer.ts":
/*!**********************************************!*\
  !*** ./src/app/reducers/merchant.reducer.ts ***!
  \**********************************************/
/*! exports provided: initialState, reducer, getPreimageHash, getAddress, getOnChainBalance, getOffChainBalance, getMerchantMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreimageHash", function() { return getPreimageHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddress", function() { return getAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOnChainBalance", function() { return getOnChainBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffChainBalance", function() { return getOffChainBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMerchantMessage", function() { return getMerchantMessage; });
/* harmony import */ var _actions_merchant_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/merchant.actions */ "./src/app/actions/merchant.actions.ts");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = {
    accountNumber: '',
    offChainBalance: 0,
    onChainBalance: 0,
    preimage_hash: null,
    mmsg: ''
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    var web3 = new web3__WEBPACK_IMPORTED_MODULE_1__(new web3__WEBPACK_IMPORTED_MODULE_1__["providers"].HttpProvider("https://ropsten.infura.io/Up1Fq6adM0sKtKgGmDJW"));
    switch (action.type) {
        case _actions_merchant_actions__WEBPACK_IMPORTED_MODULE_0__["MerchantActionTypes"].InitMerchantSuccess:
            return __assign({}, state, { accountNumber: action.payload.address, preimage_hash: action.payload.preimage_hash });
        case _actions_merchant_actions__WEBPACK_IMPORTED_MODULE_0__["MerchantActionTypes"].ConnectionFail:
            return __assign({}, state, { accountNumber: 'cannot get merchant account', onChainBalance: 0, offChainBalance: 0, preimage_hash: null });
        //case MerchantActionTypes.ReceiveOffChainBalanceUpdate:
        case _actions_merchant_actions__WEBPACK_IMPORTED_MODULE_0__["MerchantActionTypes"].LoadMerchantBalanceOffChainSuccess:
            return __assign({}, state, { offChainBalance: action.payload.offchain, onChainBalance: action.payload.onchain });
        case _actions_merchant_actions__WEBPACK_IMPORTED_MODULE_0__["MerchantActionTypes"].WithdrawChannelBalance:
            return __assign({}, state, { mmsg: 'Withdrawing...' });
        case _actions_merchant_actions__WEBPACK_IMPORTED_MODULE_0__["MerchantActionTypes"].WithdrawChannelBalanceSuccess:
            return __assign({}, state, { mmsg: "Withdraw " + web3.fromWei(action.payload.toWithdraw) + " success!  GAS FEE: " + web3.fromWei(action.payload.txhash.gasUsed, 'ether') + " ETH" });
        default:
            return state;
    }
}
var getPreimageHash = function (state) { return state.preimage_hash; };
var getAddress = function (state) { return state.accountNumber; };
var getOnChainBalance = function (state) { return state.onChainBalance; };
var getOffChainBalance = function (state) { return state.offChainBalance; };
var getMerchantMessage = function (state) { return state.mmsg; };


/***/ }),

/***/ "./src/app/reset-dialog/reset-dialog.component.css":
/*!*********************************************************!*\
  !*** ./src/app/reset-dialog/reset-dialog.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reset-dialog/reset-dialog.component.html":
/*!**********************************************************!*\
  !*** ./src/app/reset-dialog/reset-dialog.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Reset Channel State</h1>\n<div mat-dialog-content>\n  <p>Are you sure you want to reset the Channel state?  </p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\" class=\"btn\">No Thanks</button>\n  <button mat-button (click)=\"onYesClick()\" class=\"btn btn-danger\" cdkFocusInitial>Yes</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/reset-dialog/reset-dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/reset-dialog/reset-dialog.component.ts ***!
  \********************************************************/
/*! exports provided: ResetDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetDialogComponent", function() { return ResetDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResetDialogComponent = /** @class */ (function () {
    function ResetDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ResetDialogComponent.prototype.ngOnInit = function () {
    };
    ResetDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ResetDialogComponent.prototype.onYesClick = function () {
        this.dialogRef.close('RESET');
    };
    ResetDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-dialog',
            template: __webpack_require__(/*! ./reset-dialog.component.html */ "./src/app/reset-dialog/reset-dialog.component.html"),
            styles: [__webpack_require__(/*! ./reset-dialog.component.css */ "./src/app/reset-dialog/reset-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], ResetDialogComponent);
    return ResetDialogComponent;
}());



/***/ }),

/***/ "./src/app/services/merchant.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/merchant.service.ts ***!
  \**********************************************/
/*! exports provided: MerchantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantService", function() { return MerchantService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/webSocket */ "./node_modules/rxjs/_esm5/webSocket/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_merchant_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/merchant.actions */ "./src/app/actions/merchant.actions.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MerchantService = /** @class */ (function () {
    function MerchantService(store, http) {
        var _this = this;
        this.store = store;
        this.http = http;
        console.log('websocket connect');
        this.socket$ = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_1__["webSocket"])('ws://18.136.161.95:40510');
        this.socket$.subscribe(function (message) {
            switch (message.msgType) {
                case 'init':
                    _this.store.dispatch(new _actions_merchant_actions__WEBPACK_IMPORTED_MODULE_3__["InitMerchantSuccess"](message.data));
                    break;
                case 'paid':
                    _this.store.dispatch(new _actions_merchant_actions__WEBPACK_IMPORTED_MODULE_3__["ReceiveOffChainBalanceUpdate"](message.data.balance));
                default:
                    break;
            }
        }, function (err) {
            console.error(err);
            _this.store.dispatch(new _actions_merchant_actions__WEBPACK_IMPORTED_MODULE_3__["ConnectionFail"]());
        });
    }
    MerchantService.prototype.getBalance = function (address) {
        console.log(address);
        return this.http.get('http://18.136.161.95:3001/balance?address=' + address);
    };
    MerchantService.prototype.withdraw = function (address) {
        console.log(address);
        return this.http.get('http://18.136.161.95/withdraw?address=' + address);
    };
    // to reset state in the server by open a new channel
    MerchantService.prototype.resetState = function () {
        return this.http.post('http://18.136.161.95/reset', '');
    };
    MerchantService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], MerchantService);
    return MerchantService;
}());



/***/ }),

/***/ "./src/app/services/product-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/product-service.service.ts ***!
  \*****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductService = /** @class */ (function () {
    function ProductService() {
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
        ];
    }
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/web3.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/web3.service.ts ***!
  \******************************************/
/*! exports provided: Web3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web3Service", function() { return Web3Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Web3Service = /** @class */ (function () {
    function Web3Service(store) {
        this.store = store;
        this.web3 = new web3__WEBPACK_IMPORTED_MODULE_1__(new web3__WEBPACK_IMPORTED_MODULE_1__["providers"].HttpProvider("https://ropsten.infura.io/Up1Fq6adM0sKtKgGmDJW"));
        // this.store.select(fromRoot.getAddress).subscribe(address => {
        //   if (this.web3.isAddress(address)) {
        //     var onChainBalance = this.web3.fromWei(this.web3.eth.getBalance(address), 'ether')
        //     this.store.dispatch(new LoadMerchantBalanceOnChainSuccess(onChainBalance.toNumber()))
        //   }
        // })
    }
    Web3Service.prototype.toWei = function (wei) {
        return this.web3.toWei(wei, 'ether');
    };
    Web3Service.prototype.fromWei = function (wei) {
        return this.web3.fromWei(wei, 'ether');
    };
    Web3Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], Web3Service);
    return Web3Service;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sunny/Documents/sprites-demo/merchant/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map