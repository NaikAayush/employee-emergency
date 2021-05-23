(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-ert-map-ert-map-module"],{

/***/ "3LBK":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ert/views/tabs/ert-map/ert-map.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>ert-map</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "AWkR":
/*!**********************************************************!*\
  !*** ./src/app/ert/views/tabs/ert-map/ert-map.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnQtbWFwLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "Dpqo":
/*!********************************************************!*\
  !*** ./src/app/ert/views/tabs/ert-map/ert-map.page.ts ***!
  \********************************************************/
/*! exports provided: ErtMapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErtMapPage", function() { return ErtMapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ert_map_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ert-map.page.html */ "3LBK");
/* harmony import */ var _ert_map_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ert-map.page.scss */ "AWkR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ErtMapPage = class ErtMapPage {
    constructor() { }
    ngOnInit() {
    }
};
ErtMapPage.ctorParameters = () => [];
ErtMapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ert-map',
        template: _raw_loader_ert_map_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ert_map_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ErtMapPage);



/***/ }),

/***/ "FLvU":
/*!******************************************************************!*\
  !*** ./src/app/ert/views/tabs/ert-map/ert-map-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ErtMapPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErtMapPageRoutingModule", function() { return ErtMapPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ert_map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ert-map.page */ "Dpqo");




const routes = [
    {
        path: '',
        component: _ert_map_page__WEBPACK_IMPORTED_MODULE_3__["ErtMapPage"]
    }
];
let ErtMapPageRoutingModule = class ErtMapPageRoutingModule {
};
ErtMapPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ErtMapPageRoutingModule);



/***/ }),

/***/ "dl2s":
/*!**********************************************************!*\
  !*** ./src/app/ert/views/tabs/ert-map/ert-map.module.ts ***!
  \**********************************************************/
/*! exports provided: ErtMapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErtMapPageModule", function() { return ErtMapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ert_map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ert-map-routing.module */ "FLvU");
/* harmony import */ var _ert_map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ert-map.page */ "Dpqo");







let ErtMapPageModule = class ErtMapPageModule {
};
ErtMapPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ert_map_routing_module__WEBPACK_IMPORTED_MODULE_5__["ErtMapPageRoutingModule"]
        ],
        declarations: [_ert_map_page__WEBPACK_IMPORTED_MODULE_6__["ErtMapPage"]]
    })
], ErtMapPageModule);



/***/ })

}]);
//# sourceMappingURL=tabs-ert-map-ert-map-module.js.map