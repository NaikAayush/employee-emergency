(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-employee-sos-employee-sos-module"],{

/***/ "1U7Z":
/*!*************************************************************************!*\
  !*** ./src/app/employee/views/tabs/employee-sos/employee-sos.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS1zb3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "ZFbV":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee/views/tabs/employee-sos/employee-sos.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>employee-sos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "euJK":
/*!*********************************************************************************!*\
  !*** ./src/app/employee/views/tabs/employee-sos/employee-sos-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: EmployeeSosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeSosPageRoutingModule", function() { return EmployeeSosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _employee_sos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-sos.page */ "qn3A");




const routes = [
    {
        path: '',
        component: _employee_sos_page__WEBPACK_IMPORTED_MODULE_3__["EmployeeSosPage"]
    }
];
let EmployeeSosPageRoutingModule = class EmployeeSosPageRoutingModule {
};
EmployeeSosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EmployeeSosPageRoutingModule);



/***/ }),

/***/ "iHu8":
/*!*************************************************************************!*\
  !*** ./src/app/employee/views/tabs/employee-sos/employee-sos.module.ts ***!
  \*************************************************************************/
/*! exports provided: EmployeeSosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeSosPageModule", function() { return EmployeeSosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _employee_sos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-sos-routing.module */ "euJK");
/* harmony import */ var _employee_sos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee-sos.page */ "qn3A");







let EmployeeSosPageModule = class EmployeeSosPageModule {
};
EmployeeSosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _employee_sos_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmployeeSosPageRoutingModule"]
        ],
        declarations: [_employee_sos_page__WEBPACK_IMPORTED_MODULE_6__["EmployeeSosPage"]]
    })
], EmployeeSosPageModule);



/***/ }),

/***/ "qn3A":
/*!***********************************************************************!*\
  !*** ./src/app/employee/views/tabs/employee-sos/employee-sos.page.ts ***!
  \***********************************************************************/
/*! exports provided: EmployeeSosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeSosPage", function() { return EmployeeSosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_employee_sos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./employee-sos.page.html */ "ZFbV");
/* harmony import */ var _employee_sos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-sos.page.scss */ "1U7Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let EmployeeSosPage = class EmployeeSosPage {
    constructor() { }
    ngOnInit() {
    }
};
EmployeeSosPage.ctorParameters = () => [];
EmployeeSosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-employee-sos',
        template: _raw_loader_employee_sos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employee_sos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EmployeeSosPage);



/***/ })

}]);
//# sourceMappingURL=tabs-employee-sos-employee-sos-module.js.map