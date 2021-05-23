(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["command-center-views-command-center-tabs-command-center-tabs-module"],{

/***/ "0aUf":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/command-center/views/command-center-tabs/command-center-tabs.page.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"overview\">\r\n      <ion-icon name=\"bar-chart\"></ion-icon>\r\n      <ion-label>Overview</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"map\">\r\n      <ion-icon name=\"map\"></ion-icon>\r\n      <ion-label>Map</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"approve\">\r\n      <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n      <ion-label>Approve</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"setup\">\r\n      <ion-icon name=\"build\"></ion-icon>\r\n      <ion-label>Setup</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"emergency\">\r\n      <ion-icon name=\"alert\"></ion-icon>\r\n      <ion-label>Emergency</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n");

/***/ }),

/***/ "CFed":
/*!****************************************************************************************!*\
  !*** ./src/app/command-center/views/command-center-tabs/command-center-tabs.module.ts ***!
  \****************************************************************************************/
/*! exports provided: CommandCenterTabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandCenterTabsPageModule", function() { return CommandCenterTabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _command_center_tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./command-center-tabs-routing.module */ "cgVk");
/* harmony import */ var _command_center_tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./command-center-tabs.page */ "ERHT");







let CommandCenterTabsPageModule = class CommandCenterTabsPageModule {
};
CommandCenterTabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _command_center_tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["CommandCenterTabsPageRoutingModule"]
        ],
        declarations: [_command_center_tabs_page__WEBPACK_IMPORTED_MODULE_6__["CommandCenterTabsPage"]]
    })
], CommandCenterTabsPageModule);



/***/ }),

/***/ "ERHT":
/*!**************************************************************************************!*\
  !*** ./src/app/command-center/views/command-center-tabs/command-center-tabs.page.ts ***!
  \**************************************************************************************/
/*! exports provided: CommandCenterTabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandCenterTabsPage", function() { return CommandCenterTabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_command_center_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./command-center-tabs.page.html */ "0aUf");
/* harmony import */ var _command_center_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./command-center-tabs.page.scss */ "HPba");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CommandCenterTabsPage = class CommandCenterTabsPage {
    constructor() { }
    ngOnInit() {
    }
};
CommandCenterTabsPage.ctorParameters = () => [];
CommandCenterTabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-command-center-tabs',
        template: _raw_loader_command_center_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_command_center_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CommandCenterTabsPage);



/***/ }),

/***/ "HPba":
/*!****************************************************************************************!*\
  !*** ./src/app/command-center/views/command-center-tabs/command-center-tabs.page.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tYW5kLWNlbnRlci10YWJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "cgVk":
/*!************************************************************************************************!*\
  !*** ./src/app/command-center/views/command-center-tabs/command-center-tabs-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: CommandCenterTabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandCenterTabsPageRoutingModule", function() { return CommandCenterTabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _command_center_tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./command-center-tabs.page */ "ERHT");




const routes = [
    {
        path: 'cc/cc-tabs',
        component: _command_center_tabs_page__WEBPACK_IMPORTED_MODULE_3__["CommandCenterTabsPage"],
        children: [
            {
                path: 'approve',
                loadChildren: () => __webpack_require__.e(/*! import() | tabs-command-center-approve-command-center-approve-module */ "tabs-command-center-approve-command-center-approve-module").then(__webpack_require__.bind(null, /*! ../tabs/command-center-approve/command-center-approve.module */ "A43R")).then((m) => m.CommandCenterApprovePageModule),
            },
            {
                path: 'map',
                loadChildren: () => Promise.all(/*! import() | tabs-command-center-map-command-center-map-module */[__webpack_require__.e("default~tabs-command-center-map-command-center-map-module~tabs-command-center-setup-command-center-s~f0c4ccdb"), __webpack_require__.e("default~tabs-command-center-map-command-center-map-module~tabs-employee-chat-employee-chat-module~ta~383b2688"), __webpack_require__.e("tabs-command-center-map-command-center-map-module")]).then(__webpack_require__.bind(null, /*! ../tabs/command-center-map/command-center-map.module */ "Gp1S")).then((m) => m.CommandCenterMapPageModule),
            },
            {
                path: 'overview',
                loadChildren: () => __webpack_require__.e(/*! import() | tabs-command-center-overview-command-center-overview-module */ "tabs-command-center-overview-command-center-overview-module").then(__webpack_require__.bind(null, /*! ../tabs/command-center-overview/command-center-overview.module */ "QTXK")).then((m) => m.CommandCenterOverviewPageModule),
            },
            {
                path: 'setup',
                loadChildren: () => Promise.all(/*! import() | tabs-command-center-setup-command-center-setup-module */[__webpack_require__.e("default~tabs-command-center-map-command-center-map-module~tabs-command-center-setup-command-center-s~f0c4ccdb"), __webpack_require__.e("tabs-command-center-setup-command-center-setup-module")]).then(__webpack_require__.bind(null, /*! ../tabs/command-center-setup/command-center-setup.module */ "sS0O")).then((m) => m.CommandCenterSetupPageModule),
            },
            {
                path: 'emergency',
                loadChildren: () => __webpack_require__.e(/*! import() | tabs-command-center-emergency-command-center-emergency-module */ "tabs-command-center-emergency-command-center-emergency-module").then(__webpack_require__.bind(null, /*! ../tabs/command-center-emergency/command-center-emergency.module */ "YHJo")).then((m) => m.CommandCenterEmergencyPageModule),
            },
            {
                path: '',
                redirectTo: 'cc/cc-tabs/overview',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        redirectTo: 'cc/cc-tabs/overview',
        pathMatch: 'full',
    },
];
let CommandCenterTabsPageRoutingModule = class CommandCenterTabsPageRoutingModule {
};
CommandCenterTabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CommandCenterTabsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=command-center-views-command-center-tabs-command-center-tabs-module.js.map