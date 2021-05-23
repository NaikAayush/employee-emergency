(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-ert-chat-ert-chat-module"],{

/***/ "OzkJ":
/*!**********************************************************!*\
  !*** ./src/app/ert/views/tabs/ert-chat/ert-chat.page.ts ***!
  \**********************************************************/
/*! exports provided: ErtChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErtChatPage", function() { return ErtChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ert_chat_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ert-chat.page.html */ "z9BM");
/* harmony import */ var _ert_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ert-chat.page.scss */ "lDRO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ErtChatPage = class ErtChatPage {
    constructor() { }
    ngOnInit() {
    }
};
ErtChatPage.ctorParameters = () => [];
ErtChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ert-chat',
        template: _raw_loader_ert_chat_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ert_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ErtChatPage);



/***/ }),

/***/ "kLxn":
/*!************************************************************!*\
  !*** ./src/app/ert/views/tabs/ert-chat/ert-chat.module.ts ***!
  \************************************************************/
/*! exports provided: ErtChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErtChatPageModule", function() { return ErtChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ert_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ert-chat-routing.module */ "oMR6");
/* harmony import */ var _ert_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ert-chat.page */ "OzkJ");







let ErtChatPageModule = class ErtChatPageModule {
};
ErtChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ert_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["ErtChatPageRoutingModule"]
        ],
        declarations: [_ert_chat_page__WEBPACK_IMPORTED_MODULE_6__["ErtChatPage"]]
    })
], ErtChatPageModule);



/***/ }),

/***/ "lDRO":
/*!************************************************************!*\
  !*** ./src/app/ert/views/tabs/ert-chat/ert-chat.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnQtY2hhdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "oMR6":
/*!********************************************************************!*\
  !*** ./src/app/ert/views/tabs/ert-chat/ert-chat-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ErtChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErtChatPageRoutingModule", function() { return ErtChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ert_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ert-chat.page */ "OzkJ");




const routes = [
    {
        path: '',
        component: _ert_chat_page__WEBPACK_IMPORTED_MODULE_3__["ErtChatPage"]
    }
];
let ErtChatPageRoutingModule = class ErtChatPageRoutingModule {
};
ErtChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ErtChatPageRoutingModule);



/***/ }),

/***/ "z9BM":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ert/views/tabs/ert-chat/ert-chat.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>ert-chat</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=tabs-ert-chat-ert-chat-module.js.map