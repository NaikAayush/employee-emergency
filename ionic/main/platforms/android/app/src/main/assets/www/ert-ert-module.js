(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ert-ert-module"],{

/***/ "0Cyb":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ert/views/ert-tabs/ert-tabs.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"chat\">\r\n      <ion-icon name=\"chatbox\"></ion-icon>\r\n      <ion-label>Chat</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"map\">\r\n      <ion-icon name=\"map\"></ion-icon>\r\n      <ion-label>Map</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n");

/***/ }),

/***/ "BFBS":
/*!*************************************************************************!*\
  !*** ./src/app/ert/views/ert-auth/ert-sign-in/ert-sign-in.component.ts ***!
  \*************************************************************************/
/*! exports provided: ErtSignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErtSignInComponent", function() { return ErtSignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ert_sign_in_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ert-sign-in.component.html */ "Yl5w");
/* harmony import */ var _ert_sign_in_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ert-sign-in.component.scss */ "WvWH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ErtSignInComponent = class ErtSignInComponent {
    constructor() { }
    ngOnInit() { }
};
ErtSignInComponent.ctorParameters = () => [];
ErtSignInComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ert-sign-in',
        template: _raw_loader_ert_sign_in_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ert_sign_in_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ErtSignInComponent);



/***/ }),

/***/ "GvCS":
/*!*******************************************************!*\
  !*** ./src/app/ert/views/ert-tabs/ert-tabs.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnQtdGFicy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "QNtM":
/*!*******************************************************!*\
  !*** ./src/app/ert/views/ert-tabs/ert-tabs.module.ts ***!
  \*******************************************************/
/*! exports provided: ErtTabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErtTabsPageModule", function() { return ErtTabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ert_tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ert-tabs-routing.module */ "Zt9U");
/* harmony import */ var _ert_tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ert-tabs.page */ "Qlfr");







let ErtTabsPageModule = class ErtTabsPageModule {
};
ErtTabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ert_tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["ErtTabsPageRoutingModule"]
        ],
        declarations: [_ert_tabs_page__WEBPACK_IMPORTED_MODULE_6__["ErtTabsPage"]]
    })
], ErtTabsPageModule);



/***/ }),

/***/ "Qlfr":
/*!*****************************************************!*\
  !*** ./src/app/ert/views/ert-tabs/ert-tabs.page.ts ***!
  \*****************************************************/
/*! exports provided: ErtTabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErtTabsPage", function() { return ErtTabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ert_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ert-tabs.page.html */ "0Cyb");
/* harmony import */ var _ert_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ert-tabs.page.scss */ "GvCS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ErtTabsPage = class ErtTabsPage {
    constructor() { }
    ngOnInit() {
    }
};
ErtTabsPage.ctorParameters = () => [];
ErtTabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ert-tabs',
        template: _raw_loader_ert_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ert_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ErtTabsPage);



/***/ }),

/***/ "WvWH":
/*!***************************************************************************!*\
  !*** ./src/app/ert/views/ert-auth/ert-sign-in/ert-sign-in.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnQtc2lnbi1pbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Yl5w":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ert/views/ert-auth/ert-sign-in/ert-sign-in.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  ert-sign-in works!\r\n</p>\r\n");

/***/ }),

/***/ "YziJ":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ert/views/ert-auth/ert-verify/ert-verify.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  ert-verify works!\r\n</p>\r\n");

/***/ }),

/***/ "Z0TI":
/*!*********************************!*\
  !*** ./src/app/ert/ert.page.ts ***!
  \*********************************/
/*! exports provided: ErtPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErtPage", function() { return ErtPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ert_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ert.page.html */ "dZTI");
/* harmony import */ var _ert_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ert.page.scss */ "ujkb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ErtPage = class ErtPage {
    constructor() { }
    ngOnInit() {
    }
};
ErtPage.ctorParameters = () => [];
ErtPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ert',
        template: _raw_loader_ert_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ert_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ErtPage);



/***/ }),

/***/ "Zt9U":
/*!***************************************************************!*\
  !*** ./src/app/ert/views/ert-tabs/ert-tabs-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ErtTabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErtTabsPageRoutingModule", function() { return ErtTabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ert_tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ert-tabs.page */ "Qlfr");




const routes = [
    {
        path: 'ert/ert-tabs',
        component: _ert_tabs_page__WEBPACK_IMPORTED_MODULE_3__["ErtTabsPage"],
        children: [
            {
                path: 'map',
                loadChildren: () => __webpack_require__.e(/*! import() | tabs-ert-map-ert-map-module */ "tabs-ert-map-ert-map-module").then(__webpack_require__.bind(null, /*! ../tabs/ert-map/ert-map.module */ "dl2s")).then((m) => m.ErtMapPageModule),
            },
            {
                path: 'chat',
                loadChildren: () => __webpack_require__.e(/*! import() | tabs-ert-chat-ert-chat-module */ "tabs-ert-chat-ert-chat-module").then(__webpack_require__.bind(null, /*! ../tabs/ert-chat/ert-chat.module */ "kLxn")).then((m) => m.ErtChatPageModule),
            },
            {
                path: '',
                redirectTo: 'ert/ert-tabs/chat',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        redirectTo: 'ert/ert-tabs/chat',
        pathMatch: 'full',
    },
];
let ErtTabsPageRoutingModule = class ErtTabsPageRoutingModule {
};
ErtTabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ErtTabsPageRoutingModule);



/***/ }),

/***/ "aUGT":
/*!*************************************************************************!*\
  !*** ./src/app/ert/views/ert-auth/ert-verify/ert-verify.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnQtdmVyaWZ5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "dZTI":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ert/ert.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>ERT</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-button color=\"success\" [routerLink]=\"['login']\">SIGN IN</ion-button>\r\n  <ion-button color=\"warning\" [routerLink]=\"['signup']\">SIGN UP</ion-button>\r\n</ion-content>\r\n");

/***/ }),

/***/ "eJ6T":
/*!*************************************************************************!*\
  !*** ./src/app/ert/views/ert-auth/ert-sign-up/ert-sign-up.component.ts ***!
  \*************************************************************************/
/*! exports provided: ErtSignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErtSignUpComponent", function() { return ErtSignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ert_sign_up_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ert-sign-up.component.html */ "spwj");
/* harmony import */ var _ert_sign_up_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ert-sign-up.component.scss */ "vhYu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ErtSignUpComponent = class ErtSignUpComponent {
    constructor() { }
    ngOnInit() { }
};
ErtSignUpComponent.ctorParameters = () => [];
ErtSignUpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ert-sign-up',
        template: _raw_loader_ert_sign_up_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ert_sign_up_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ErtSignUpComponent);



/***/ }),

/***/ "hdd2":
/*!***********************************!*\
  !*** ./src/app/ert/ert.module.ts ***!
  \***********************************/
/*! exports provided: ErtPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErtPageModule", function() { return ErtPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ert_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ert-routing.module */ "pPCl");
/* harmony import */ var _ert_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ert.page */ "Z0TI");
/* harmony import */ var _views_ert_auth_ert_sign_in_ert_sign_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/ert-auth/ert-sign-in/ert-sign-in.component */ "BFBS");
/* harmony import */ var _views_ert_auth_ert_sign_up_ert_sign_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/ert-auth/ert-sign-up/ert-sign-up.component */ "eJ6T");
/* harmony import */ var _views_ert_tabs_ert_tabs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/ert-tabs/ert-tabs.module */ "QNtM");
/* harmony import */ var _views_ert_auth_ert_verify_ert_verify_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/ert-auth/ert-verify/ert-verify.component */ "x+uW");











let ErtPageModule = class ErtPageModule {
};
ErtPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ert_routing_module__WEBPACK_IMPORTED_MODULE_5__["ErtPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _views_ert_tabs_ert_tabs_module__WEBPACK_IMPORTED_MODULE_9__["ErtTabsPageModule"],
        ],
        declarations: [
            _ert_page__WEBPACK_IMPORTED_MODULE_6__["ErtPage"],
            _views_ert_auth_ert_sign_in_ert_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["ErtSignInComponent"],
            _views_ert_auth_ert_sign_up_ert_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["ErtSignUpComponent"],
            _views_ert_auth_ert_verify_ert_verify_component__WEBPACK_IMPORTED_MODULE_10__["ErtVerifyComponent"],
        ],
    })
], ErtPageModule);



/***/ }),

/***/ "pPCl":
/*!*******************************************!*\
  !*** ./src/app/ert/ert-routing.module.ts ***!
  \*******************************************/
/*! exports provided: ErtPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErtPageRoutingModule", function() { return ErtPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ert_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ert.page */ "Z0TI");
/* harmony import */ var _views_ert_auth_ert_sign_in_ert_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/ert-auth/ert-sign-in/ert-sign-in.component */ "BFBS");
/* harmony import */ var _views_ert_auth_ert_sign_up_ert_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/ert-auth/ert-sign-up/ert-sign-up.component */ "eJ6T");
/* harmony import */ var _views_ert_auth_ert_verify_ert_verify_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/ert-auth/ert-verify/ert-verify.component */ "x+uW");







const routes = [
    {
        path: '',
        component: _ert_page__WEBPACK_IMPORTED_MODULE_3__["ErtPage"],
    },
    {
        path: 'login',
        component: _views_ert_auth_ert_sign_in_ert_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["ErtSignInComponent"],
    },
    {
        path: 'signup',
        component: _views_ert_auth_ert_sign_up_ert_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["ErtSignUpComponent"],
    },
    {
        path: 'verify',
        component: _views_ert_auth_ert_verify_ert_verify_component__WEBPACK_IMPORTED_MODULE_6__["ErtVerifyComponent"],
    },
    {
        path: 'ert-tabs',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./views/ert-tabs/ert-tabs.module */ "QNtM")).then((m) => m.ErtTabsPageModule),
    },
    {
        path: 'ert-chat',
        loadChildren: () => __webpack_require__.e(/*! import() | views-tabs-ert-chat-ert-chat-module */ "tabs-ert-chat-ert-chat-module").then(__webpack_require__.bind(null, /*! ./views/tabs/ert-chat/ert-chat.module */ "kLxn")).then((m) => m.ErtChatPageModule),
    },
    {
        path: 'ert-map',
        loadChildren: () => __webpack_require__.e(/*! import() | views-tabs-ert-map-ert-map-module */ "tabs-ert-map-ert-map-module").then(__webpack_require__.bind(null, /*! ./views/tabs/ert-map/ert-map.module */ "dl2s")).then((m) => m.ErtMapPageModule),
    },
];
let ErtPageRoutingModule = class ErtPageRoutingModule {
};
ErtPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ErtPageRoutingModule);



/***/ }),

/***/ "spwj":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ert/views/ert-auth/ert-sign-up/ert-sign-up.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  ert-sign-up works!\r\n</p>\r\n");

/***/ }),

/***/ "ujkb":
/*!***********************************!*\
  !*** ./src/app/ert/ert.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "vhYu":
/*!***************************************************************************!*\
  !*** ./src/app/ert/views/ert-auth/ert-sign-up/ert-sign-up.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnQtc2lnbi11cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "x+uW":
/*!***********************************************************************!*\
  !*** ./src/app/ert/views/ert-auth/ert-verify/ert-verify.component.ts ***!
  \***********************************************************************/
/*! exports provided: ErtVerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErtVerifyComponent", function() { return ErtVerifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ert_verify_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ert-verify.component.html */ "YziJ");
/* harmony import */ var _ert_verify_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ert-verify.component.scss */ "aUGT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ErtVerifyComponent = class ErtVerifyComponent {
    constructor() { }
    ngOnInit() { }
};
ErtVerifyComponent.ctorParameters = () => [];
ErtVerifyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ert-verify',
        template: _raw_loader_ert_verify_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ert_verify_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ErtVerifyComponent);



/***/ })

}]);
//# sourceMappingURL=ert-ert-module.js.map