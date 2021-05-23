(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-employee-module"],{

/***/ "425L":
/*!*********************************************************************************************!*\
  !*** ./src/app/employee/views/employee-auth/employee-sign-in/employee-sign-in.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EmployeeSignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeSignInComponent", function() { return EmployeeSignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_employee_sign_in_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./employee-sign-in.component.html */ "jZlA");
/* harmony import */ var _employee_sign_in_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-sign-in.component.scss */ "FmFQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_employee_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/employee/services/auth/auth.service */ "qeI8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








let EmployeeSignInComponent = class EmployeeSignInComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
    }
    ngOnInit() {
        this.auth.user$.subscribe((x) => {
            if (x.approved == false) {
                console.log(x);
                this.router.navigateByUrl('employee/verify');
            }
        });
    }
    checkPwd() {
        if (this.signInForm.get('password').status == 'INVALID') {
            this.pwdValid = false;
        }
        else {
            this.pwdValid = true;
        }
    }
    emailClass() {
        if (this.signInForm.get('email').status == 'VALID') {
            return { 'email-valid': true };
        }
        if (this.signInForm.get('email').touched == false) {
            return { 'email-valid': true };
        }
        else {
            return { 'email-invalid': true };
        }
    }
    pwdErrorClass() {
        if (this.signInForm.get('password').status == 'INVALID' &&
            this.signInForm.get('password').touched == true) {
            return { 'err-msg': true };
        }
        else {
            return { 'err-msg-inv': true };
        }
    }
    buttonClass() { }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.signInForm.value);
            yield this.auth.signInWithEmail(this.signInForm.value['email'], this.signInForm.value['password']);
            this.ngOnInit();
        });
    }
};
EmployeeSignInComponent.ctorParameters = () => [
    { type: src_app_employee_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
EmployeeSignInComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-employee-sign-in',
        template: _raw_loader_employee_sign_in_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employee_sign_in_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EmployeeSignInComponent);



/***/ }),

/***/ "6F2K":
/*!*********************************************************************************************!*\
  !*** ./src/app/employee/views/employee-auth/employee-verify/employee-verify.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS12ZXJpZnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "8xIB":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee/views/employee-auth/employee-sign-up/employee-sign-up.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Employee Sign Up</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<div *ngIf=\"auth.user$ | async; then authenticated else guest\">\n  <!-- template will replace this div -->\n</div>\n\n<ion-content>\n  <ng-template #guest>\n    <div class=\"min-h-screen flex items-center justify-center bg-white dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8\">\n      <div class=\"max-w-md w-full\">\n        <div>\n          <img src=\"assets/ey-logo.png\" class=\"mx-auto h-20 w-auto mb-6\" id=\"logo\">\n          <h3 class=\"mt-6 text-center text-3xl font-semibold text-gray-900\">\n            Sign Up\n          </h3>\n        </div>\n\n        <form [formGroup]=\"signUpForm\" (ngSubmit)=\"onSubmit()\" class=\"px-8 pt-6 pb-8 mb-24\">\n          <div class=\"mb-4\">\n            <label class=\"block text-gray-700 text-sm font-bold mb-2\" for=\"name\">\n              Name\n            </label>\n            <input formControlName=\"name\" class=\"input\" type=\"text\" placeholder=\"Name\">\n          </div>\n          <div class=\"mb-4\">\n            <label class=\"block text-gray-700 text-sm font-bold mb-2\" for=\"emp_id\">\n              Employee ID\n            </label>\n            <input formControlName=\"emp_id\" class=\"input\" type=\"text\" placeholder=\"Employee ID\">\n          </div>\n          <div class=\"mb-4\">\n            <label class=\"block text-gray-700 text-sm font-bold mb-2\" for=\"phone_no\">\n              Phone Number\n            </label>\n            <input formControlName=\"phone_no\" class=\"input\" type=\"tel\" placeholder=\"Phone Number\">\n          </div>\n          <div class=\"mb-4\">\n            <label class=\"block text-gray-700 text-sm font-bold mb-2\" for=\"email\">\n              Email\n            </label>\n            <input class=\"input\" formControlName=\"email\" type=\"email\" placeholder=\"Email\">\n          </div>\n          <div class=\"mb-6\">\n            <label class=\"block text-gray-700 text-sm font-bold mb-2\" for=\"password\">\n              Password\n            </label>\n            <input formControlName=\"password\" (focusout)=\"checkPwd($event)\" class=\"input\" type=\"password\"\n              placeholder=\"******************\">\n            <!-- <p [ngClass]=\"pwdErrorClass()\">Please enter a password.</p> -->\n          </div>\n          <div class=\"flex items-center justify-center\">\n            <button class=\"submit-button\" type=\"submit\" [disabled]=\"!signUpForm.valid\">\n              Sign Up\n            </button>\n          </div>\n          <!-- <a class=\"inline-block align-baseline font-bold text-sm text-gray-600 hover:text-gray-900\" href=\"#\">\n              Forgot Password?\n            </a> -->\n          <!-- </div> -->\n        </form>\n\n\n      </div>\n    </div>\n\n  </ng-template>\n\n  <ng-template #authenticated>\n    <div *ngIf=\"auth.user$ | async as user\">\n      <h1>Namaste</h1>\n      <!-- <h3>Howdy, {{ user.displayName }}</h3>\n      <img [src]=\"user.photoURL\">\n      <p>UID: {{ user.uid }}</p>\n       -->\n      <button (click)=\"auth.signOut()\">Logout</button>\n    </div>\n  </ng-template>\n\n</ion-content>");

/***/ }),

/***/ "AtH2":
/*!*********************************************!*\
  !*** ./src/app/employee/employee.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "BHzp":
/*!**********************************************************************!*\
  !*** ./src/app/employee/views/employee-tabs/employee-tabs.module.ts ***!
  \**********************************************************************/
/*! exports provided: EmployeeTabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeTabsPageModule", function() { return EmployeeTabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _employee_tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-tabs-routing.module */ "Yy77");
/* harmony import */ var _employee_tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee-tabs.page */ "fmiG");







let EmployeeTabsPageModule = class EmployeeTabsPageModule {
};
EmployeeTabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _employee_tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmployeeTabsPageRoutingModule"],
        ],
        declarations: [_employee_tabs_page__WEBPACK_IMPORTED_MODULE_6__["EmployeeTabsPage"]],
    })
], EmployeeTabsPageModule);



/***/ }),

/***/ "Bkem":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Employee</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-button color=\"success\" [routerLink]=\"['login']\">SIGN IN</ion-button>\r\n  <ion-button color=\"warning\" [routerLink]=\"['signup']\">SIGN UP</ion-button>\r\n</ion-content>\r\n");

/***/ }),

/***/ "FmFQ":
/*!***********************************************************************************************!*\
  !*** ./src/app/employee/views/employee-auth/employee-sign-in/employee-sign-in.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  height: 100%;\n}\n\n.default-input {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: 0.25rem;\n  border-width: 1px;\n  line-height: 1.25;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  --tw-text-opacity: 1;\n  color: rgba(55, 65, 81, var(--tw-text-opacity));\n  width: 100%;\n}\n\n.default-input:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.error-input {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  --tw-border-opacity: 1;\n  border-color: rgba(239, 68, 68, var(--tw-border-opacity));\n  border-radius: 0.25rem;\n  border-width: 1px;\n  line-height: 1.25;\n  margin-bottom: 0.75rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  --tw-text-opacity: 1;\n  color: rgba(55, 65, 81, var(--tw-text-opacity));\n  width: 100%;\n}\n\n.error-input:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.ng-valid.pwd, .pwd.ng-pristine {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: 0.25rem;\n  border-width: 1px;\n  line-height: 1.25;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  --tw-text-opacity: 1;\n  color: rgba(55, 65, 81, var(--tw-text-opacity));\n  width: 100%;\n}\n\n.email-valid {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: 0.25rem;\n  border-width: 1px;\n  line-height: 1.25;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  --tw-text-opacity: 1;\n  color: rgba(55, 65, 81, var(--tw-text-opacity));\n  width: 100%;\n}\n\n.email-invalid {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  --tw-border-opacity: 1;\n  border-color: rgba(239, 68, 68, var(--tw-border-opacity));\n  border-radius: 0.25rem;\n  border-width: 1px;\n  line-height: 1.25;\n  margin-bottom: 0.75rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  --tw-text-opacity: 1;\n  color: rgba(55, 65, 81, var(--tw-text-opacity));\n  width: 100%;\n}\n\n.ng-invalid.pwd.ng-touched {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  --tw-border-opacity: 1;\n  border-color: rgba(239, 68, 68, var(--tw-border-opacity));\n  border-radius: 0.25rem;\n  border-width: 1px;\n  line-height: 1.25;\n  margin-bottom: 0.75rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  --tw-text-opacity: 1;\n  color: rgba(55, 65, 81, var(--tw-text-opacity));\n  width: 100%;\n}\n\n.err-msg-inv {\n  visibility: hidden;\n}\n\n.err-msg {\n  visibility: visible;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  --tw-text-opacity: 1;\n  color: rgba(239, 68, 68, var(--tw-text-opacity));\n  font-style: italic;\n}\n\n.submit-button:disabled {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 230, 0, var(--tw-bg-opacity));\n  border-radius: 0.25rem;\n  font-weight: 700;\n}\n\n.submit-button:disabled:disabled {\n  opacity: 0.5;\n}\n\n.submit-button:disabled {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  --tw-text-opacity: 1;\n  color: rgba(31, 41, 55, var(--tw-text-opacity));\n}\n\n.submit-button:enabled {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 230, 0, var(--tw-bg-opacity));\n}\n\n.submit-button:enabled:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(252, 211, 77, var(--tw-bg-opacity));\n}\n\n.submit-button:enabled {\n  border-radius: 0.25rem;\n  font-weight: 700;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  --tw-text-opacity: 1;\n  color: rgba(31, 41, 55, var(--tw-text-opacity));\n}\n\n.submit-button:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGVtcGxveWVlLXNpZ24taW4uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdGFpbHdpbmRjc3MvbGliL2xpYi9zdWJzdGl0dXRlQ2xhc3NBcHBseUF0UnVsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBR0E7RUNIQSx3QkFBbUI7S0FBbkIscUJBQW1CO1VBQW5CLGdCQUFtQjtFQUFuQixzQkFBbUI7RUFBbkIsaUJBQW1CO0VBQW5CLGlCQUFtQjtFQUFuQixtQkFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLHFCQUFtQjtFQUFuQixzQkFBbUI7RUFBbkIsNEVBQW1CO0VBQW5CLHVHQUFtQjtFQUFuQixvQkFBbUI7RUFBbkIsK0NBQW1CO0VBQW5CLFdBQW1CO0FESW5COztBQUdBO0VDUEEsOEJBQW1CO0VBQW5CLG1CQUFtQjtFQUFuQiw0Q0FBbUI7RUFBbkIsdUdBQW1CO0FEUW5COztBQUdBO0VDWEEsd0JBQW1CO0tBQW5CLHFCQUFtQjtVQUFuQixnQkFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLHlEQUFtQjtFQUFuQixzQkFBbUI7RUFBbkIsaUJBQW1CO0VBQW5CLGlCQUFtQjtFQUFuQixzQkFBbUI7RUFBbkIsbUJBQW1CO0VBQW5CLHNCQUFtQjtFQUFuQixxQkFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLDRFQUFtQjtFQUFuQix1R0FBbUI7RUFBbkIsb0JBQW1CO0VBQW5CLCtDQUFtQjtFQUFuQixXQUFtQjtBRFluQjs7QUFFQTtFQ2RBLDhCQUFtQjtFQUFuQixtQkFBbUI7RUFBbkIsNENBQW1CO0VBQW5CLHVHQUFtQjtBRGdCbkI7O0FBRUE7RUNsQkEsd0JBQW1CO0tBQW5CLHFCQUFtQjtVQUFuQixnQkFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLGlCQUFtQjtFQUFuQixpQkFBbUI7RUFBbkIsbUJBQW1CO0VBQW5CLHNCQUFtQjtFQUFuQixxQkFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLDRFQUFtQjtFQUFuQix1R0FBbUI7RUFBbkIsb0JBQW1CO0VBQW5CLCtDQUFtQjtFQUFuQixXQUFtQjtBRG9CbkI7O0FBRUE7RUN0QkEsd0JBQW1CO0tBQW5CLHFCQUFtQjtVQUFuQixnQkFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLGlCQUFtQjtFQUFuQixpQkFBbUI7RUFBbkIsbUJBQW1CO0VBQW5CLHNCQUFtQjtFQUFuQixxQkFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLDRFQUFtQjtFQUFuQix1R0FBbUI7RUFBbkIsb0JBQW1CO0VBQW5CLCtDQUFtQjtFQUFuQixXQUFtQjtBRHdCbkI7O0FBRUE7RUMxQkEsd0JBQW1CO0tBQW5CLHFCQUFtQjtVQUFuQixnQkFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLHlEQUFtQjtFQUFuQixzQkFBbUI7RUFBbkIsaUJBQW1CO0VBQW5CLGlCQUFtQjtFQUFuQixzQkFBbUI7RUFBbkIsbUJBQW1CO0VBQW5CLHNCQUFtQjtFQUFuQixxQkFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLDRFQUFtQjtFQUFuQix1R0FBbUI7RUFBbkIsb0JBQW1CO0VBQW5CLCtDQUFtQjtFQUFuQixXQUFtQjtBRDRCbkI7O0FBRUE7RUM5QkEsd0JBQW1CO0tBQW5CLHFCQUFtQjtVQUFuQixnQkFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLHlEQUFtQjtFQUFuQixzQkFBbUI7RUFBbkIsaUJBQW1CO0VBQW5CLGlCQUFtQjtFQUFuQixzQkFBbUI7RUFBbkIsbUJBQW1CO0VBQW5CLHNCQUFtQjtFQUFuQixxQkFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLDRFQUFtQjtFQUFuQix1R0FBbUI7RUFBbkIsb0JBQW1CO0VBQW5CLCtDQUFtQjtFQUFuQixXQUFtQjtBRGdDbkI7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUN0Q0osa0JBQW1CO0VBQW5CLGlCQUFtQjtFQUFuQixvQkFBbUI7RUFBbkIsZ0RBQW1CO0VBQW5CLGtCQUFtQjtBRHlDbkI7O0FBQ0E7RUMxQ0Esa0JBQW1CO0VBQW5CLHlEQUFtQjtFQUFuQixzQkFBbUI7RUFBbkIsZ0JBQW1CO0FENkNuQjs7QUM3Q0E7RUFBQTtBQUFtQjs7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLGtCQUFtQjtFQUFuQixtQkFBbUI7RUFBbkIsb0JBQW1CO0VBQW5CO0FBQW1COztBRDhDbkI7RUM5Q0Esa0JBQW1CO0VBQW5CLHlEQUFtQjtBRGlEbkI7O0FDakRBO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1COztBQUFuQjtFQUFBLHNCQUFtQjtFQUFuQixnQkFBbUI7RUFBbkIsbUJBQW1CO0VBQW5CLHNCQUFtQjtFQUFuQixrQkFBbUI7RUFBbkIsbUJBQW1CO0VBQW5CLG9CQUFtQjtFQUFuQjtBQUFtQjs7QURrRG5CO0VDbERBLDhCQUFtQjtFQUFuQixtQkFBbUI7RUFBbkIsNENBQW1CO0VBQW5CLHVHQUFtQjtBRHFEbkIiLCJmaWxlIjoiZW1wbG95ZWUtc2lnbi1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cclxuLmRlZmF1bHQtaW5wdXR7XHJcbiAgICBAYXBwbHkgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodDtcclxufVxyXG5cclxuLmRlZmF1bHQtaW5wdXQ6Zm9jdXN7XHJcbiBAYXBwbHkgb3V0bGluZS1ub25lIHNoYWRvdy1zbTtcclxufVxyXG5cclxuLmVycm9yLWlucHV0e1xyXG4gICAgQGFwcGx5IHNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIGJvcmRlci1yZWQtNTAwIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIG1iLTMgbGVhZGluZy10aWdodDtcclxufVxyXG4uZXJyb3ItaW5wdXQ6Zm9jdXN7XHJcbiAgICBAYXBwbHkgb3V0bGluZS1ub25lIHNoYWRvdy1zbTtcclxufVxyXG5cclxuLm5nLXZhbGlkLnB3ZCwgLnB3ZC5uZy1wcmlzdGluZSwgIHtcclxuICAgIEBhcHBseSBzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0O1xyXG59XHJcblxyXG4uZW1haWwtdmFsaWR7XHJcbiAgICBAYXBwbHkgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodDtcclxufVxyXG5cclxuLmVtYWlsLWludmFsaWR7XHJcbiAgICBAYXBwbHkgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgYm9yZGVyLXJlZC01MDAgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbWItMyBsZWFkaW5nLXRpZ2h0O1xyXG59XHJcbiAgXHJcbi5uZy1pbnZhbGlkLnB3ZC5uZy10b3VjaGVkICB7XHJcbiAgICBAYXBwbHkgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgYm9yZGVyLXJlZC01MDAgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbWItMyBsZWFkaW5nLXRpZ2h0O1xyXG59XHJcblxyXG4uZXJyLW1zZy1pbnZ7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmVyci1tc2cge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIEBhcHBseSB0ZXh0LXJlZC01MDAgdGV4dC14cyBpdGFsaWNcclxufVxyXG5cclxuLnN1Ym1pdC1idXR0b246ZGlzYWJsZWR7XHJcbiAgICBAYXBwbHkgZGlzYWJsZWQ6b3BhY2l0eS01MCBiZy15ZWxsb3ctMTAwMCB0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZDtcclxufVxyXG5cclxuLnN1Ym1pdC1idXR0b246ZW5hYmxlZHtcclxuICAgIEBhcHBseSAgYmcteWVsbG93LTEwMDAgaG92ZXI6YmcteWVsbG93LTMwMCB0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFxyXG59XHJcblxyXG4uc3VibWl0LWJ1dHRvbjpmb2N1c3tcclxuICAgIEBhcHBseSBvdXRsaW5lLW5vbmUgc2hhZG93LXNtXHJcbn0iLCJAdGFpbHdpbmQgYmFzZTtcbkB0YWlsd2luZCBjb21wb25lbnRzO1xuQHRhaWx3aW5kIHV0aWxpdGllczsiXX0= */");

/***/ }),

/***/ "FvOc":
/*!*****************************************************!*\
  !*** ./src/app/employee/employee-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: EmployeePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePageRoutingModule", function() { return EmployeePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _views_employee_auth_employee_sign_in_employee_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/employee-auth/employee-sign-in/employee-sign-in.component */ "425L");
/* harmony import */ var _views_employee_auth_employee_sign_up_employee_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/employee-auth/employee-sign-up/employee-sign-up.component */ "zs74");
/* harmony import */ var _employee_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee.page */ "VcmA");
/* harmony import */ var _views_employee_auth_employee_verify_employee_verify_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/employee-auth/employee-verify/employee-verify.component */ "jjkp");







const routes = [
    {
        path: '',
        component: _employee_page__WEBPACK_IMPORTED_MODULE_5__["EmployeePage"],
    },
    {
        path: 'login',
        component: _views_employee_auth_employee_sign_in_employee_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeSignInComponent"],
    },
    {
        path: 'signup',
        component: _views_employee_auth_employee_sign_up_employee_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeSignUpComponent"],
    },
    {
        path: 'verify',
        component: _views_employee_auth_employee_verify_employee_verify_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeVerifyComponent"],
    },
    {
        path: 'employee-tabs',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./views/employee-tabs/employee-tabs.module */ "BHzp")).then((m) => m.EmployeeTabsPageModule),
    },
    {
        path: 'employee-ar',
        loadChildren: () => __webpack_require__.e(/*! import() | views-tabs-employee-ar-employee-ar-module */ "tabs-employee-ar-employee-ar-module").then(__webpack_require__.bind(null, /*! ./views/tabs/employee-ar/employee-ar.module */ "sRE8")).then((m) => m.EmployeeArPageModule),
    },
    {
        path: 'employee-sos',
        loadChildren: () => __webpack_require__.e(/*! import() | views-tabs-employee-sos-employee-sos-module */ "tabs-employee-sos-employee-sos-module").then(__webpack_require__.bind(null, /*! ./views/tabs/employee-sos/employee-sos.module */ "iHu8")).then((m) => m.EmployeeSosPageModule),
    },
    {
        path: 'employee-map',
        loadChildren: () => Promise.all(/*! import() | views-tabs-employee-map-employee-map-module */[__webpack_require__.e("default~tabs-command-center-map-command-center-map-module~tabs-command-center-setup-command-center-s~f0c4ccdb"), __webpack_require__.e("default~tabs-command-center-map-command-center-map-module~tabs-employee-chat-employee-chat-module~ta~383b2688"), __webpack_require__.e("common"), __webpack_require__.e("tabs-employee-map-employee-map-module")]).then(__webpack_require__.bind(null, /*! ./views/tabs/employee-map/employee-map.module */ "Efaf")).then((m) => m.EmployeeMapPageModule),
    },
    {
        path: 'employee-chat',
        loadChildren: () => Promise.all(/*! import() | views-tabs-employee-chat-employee-chat-module */[__webpack_require__.e("default~tabs-command-center-map-command-center-map-module~tabs-employee-chat-employee-chat-module~ta~383b2688"), __webpack_require__.e("common"), __webpack_require__.e("tabs-employee-chat-employee-chat-module")]).then(__webpack_require__.bind(null, /*! ./views/tabs/employee-chat/employee-chat.module */ "dvSG")).then((m) => m.EmployeeChatPageModule),
    },
];
let EmployeePageRoutingModule = class EmployeePageRoutingModule {
};
EmployeePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EmployeePageRoutingModule);



/***/ }),

/***/ "PgJR":
/*!*********************************************!*\
  !*** ./src/app/employee/employee.module.ts ***!
  \*********************************************/
/*! exports provided: EmployeePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePageModule", function() { return EmployeePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _employee_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-routing.module */ "FvOc");
/* harmony import */ var _employee_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee.page */ "VcmA");
/* harmony import */ var _views_employee_auth_employee_sign_in_employee_sign_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/employee-auth/employee-sign-in/employee-sign-in.component */ "425L");
/* harmony import */ var _views_employee_auth_employee_sign_up_employee_sign_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/employee-auth/employee-sign-up/employee-sign-up.component */ "zs74");
/* harmony import */ var _views_employee_tabs_employee_tabs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/employee-tabs/employee-tabs.module */ "BHzp");










let EmployeePageModule = class EmployeePageModule {
};
EmployeePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _employee_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmployeePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _views_employee_tabs_employee_tabs_module__WEBPACK_IMPORTED_MODULE_9__["EmployeeTabsPageModule"],
        ],
        declarations: [
            _employee_page__WEBPACK_IMPORTED_MODULE_6__["EmployeePage"],
            _views_employee_auth_employee_sign_in_employee_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeSignInComponent"],
            _views_employee_auth_employee_sign_up_employee_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeSignUpComponent"],
        ],
    })
], EmployeePageModule);



/***/ }),

/***/ "UzF/":
/*!***********************************************************************************************!*\
  !*** ./src/app/employee/views/employee-auth/employee-sign-up/employee-sign-up.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  height: 100%;\n}\n\n.default-input {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: 0.25rem;\n  border-width: 1px;\n  line-height: 1.25;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  --tw-text-opacity: 1;\n  color: rgba(55, 65, 81, var(--tw-text-opacity));\n  width: 100%;\n}\n\n.default-input:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.error-input {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  --tw-border-opacity: 1;\n  border-color: rgba(239, 68, 68, var(--tw-border-opacity));\n  border-radius: 0.25rem;\n  border-width: 1px;\n  line-height: 1.25;\n  margin-bottom: 0.75rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  --tw-text-opacity: 1;\n  color: rgba(55, 65, 81, var(--tw-text-opacity));\n  width: 100%;\n}\n\n.error-input:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.ng-valid.pwd, .pwd.ng-pristine {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: 0.25rem;\n  border-width: 1px;\n  line-height: 1.25;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  --tw-text-opacity: 1;\n  color: rgba(55, 65, 81, var(--tw-text-opacity));\n  width: 100%;\n}\n\n.email-valid {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: 0.25rem;\n  border-width: 1px;\n  line-height: 1.25;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  --tw-text-opacity: 1;\n  color: rgba(55, 65, 81, var(--tw-text-opacity));\n  width: 100%;\n}\n\n.input {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: 0.25rem;\n  border-width: 1px;\n  line-height: 1.25;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  --tw-text-opacity: 1;\n  color: rgba(55, 65, 81, var(--tw-text-opacity));\n  width: 100%;\n}\n\n.email-invalid {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  --tw-border-opacity: 1;\n  border-color: rgba(239, 68, 68, var(--tw-border-opacity));\n  border-radius: 0.25rem;\n  border-width: 1px;\n  line-height: 1.25;\n  margin-bottom: 0.75rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  --tw-text-opacity: 1;\n  color: rgba(55, 65, 81, var(--tw-text-opacity));\n  width: 100%;\n}\n\n.ng-invalid.pwd.ng-touched {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  --tw-border-opacity: 1;\n  border-color: rgba(239, 68, 68, var(--tw-border-opacity));\n  border-radius: 0.25rem;\n  border-width: 1px;\n  line-height: 1.25;\n  margin-bottom: 0.75rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  --tw-text-opacity: 1;\n  color: rgba(55, 65, 81, var(--tw-text-opacity));\n  width: 100%;\n}\n\n.err-msg-inv {\n  visibility: hidden;\n}\n\n.err-msg {\n  visibility: visible;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  --tw-text-opacity: 1;\n  color: rgba(239, 68, 68, var(--tw-text-opacity));\n  font-style: italic;\n}\n\n.submit-button:disabled {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 230, 0, var(--tw-bg-opacity));\n  border-radius: 0.25rem;\n  font-weight: 700;\n}\n\n.submit-button:disabled:disabled {\n  opacity: 0.5;\n}\n\n.submit-button:disabled {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  --tw-text-opacity: 1;\n  color: rgba(31, 41, 55, var(--tw-text-opacity));\n}\n\n.submit-button:enabled {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 230, 0, var(--tw-bg-opacity));\n}\n\n.submit-button:enabled:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(252, 211, 77, var(--tw-bg-opacity));\n}\n\n.submit-button:enabled {\n  border-radius: 0.25rem;\n  font-weight: 700;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  --tw-text-opacity: 1;\n  color: rgba(31, 41, 55, var(--tw-text-opacity));\n}\n\n.submit-button:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGVtcGxveWVlLXNpZ24tdXAuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdGFpbHdpbmRjc3MvbGliL2xpYi9zdWJzdGl0dXRlQ2xhc3NBcHBseUF0UnVsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUNGQSx3QkFBbUI7S0FBbkIscUJBQW1CO1VBQW5CLGdCQUFtQjtFQUFuQixzQkFBbUI7RUFBbkIsaUJBQW1CO0VBQW5CLGlCQUFtQjtFQUFuQixtQkFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLHFCQUFtQjtFQUFuQixzQkFBbUI7RUFBbkIsNEVBQW1CO0VBQW5CLHVHQUFtQjtFQUFuQixvQkFBbUI7RUFBbkIsK0NBQW1CO0VBQW5CLFdBQW1CO0FESW5COztBQUVBO0VDTkEsOEJBQW1CO0VBQW5CLG1CQUFtQjtFQUFuQiw0Q0FBbUI7RUFBbkIsdUdBQW1CO0FEUW5COztBQUVBO0VDVkEsd0JBQW1CO0tBQW5CLHFCQUFtQjtVQUFuQixnQkFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLHlEQUFtQjtFQUFuQixzQkFBbUI7RUFBbkIsaUJBQW1CO0VBQW5CLGlCQUFtQjtFQUFuQixzQkFBbUI7RUFBbkIsbUJBQW1CO0VBQW5CLHNCQUFtQjtFQUFuQixxQkFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLDRFQUFtQjtFQUFuQix1R0FBbUI7RUFBbkIsb0JBQW1CO0VBQW5CLCtDQUFtQjtFQUFuQixXQUFtQjtBRFluQjs7QUFDQTtFQ2JBLDhCQUFtQjtFQUFuQixtQkFBbUI7RUFBbkIsNENBQW1CO0VBQW5CLHVHQUFtQjtBRGdCbkI7O0FDaEJBO0VBQUEsd0JBQW1CO0tBQW5CLHFCQUFtQjtVQUFuQixnQkFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLGlCQUFtQjtFQUFuQixpQkFBbUI7RUFBbkIsbUJBQW1CO0VBQW5CLHNCQUFtQjtFQUFuQixxQkFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLDRFQUFtQjtFQUFuQix1R0FBbUI7RUFBbkIsb0JBQW1CO0VBQW5CLCtDQUFtQjtFQUFuQjtBQUFtQjs7QURzQm5CO0VDdEJBLHdCQUFtQjtLQUFuQixxQkFBbUI7VUFBbkIsZ0JBQW1CO0VBQW5CLHNCQUFtQjtFQUFuQixpQkFBbUI7RUFBbkIsaUJBQW1CO0VBQW5CLG1CQUFtQjtFQUFuQixzQkFBbUI7RUFBbkIscUJBQW1CO0VBQW5CLHNCQUFtQjtFQUFuQiw0RUFBbUI7RUFBbkIsdUdBQW1CO0VBQW5CLG9CQUFtQjtFQUFuQiwrQ0FBbUI7RUFBbkIsV0FBbUI7QUR5Qm5COztBQUNBO0VDMUJBLHdCQUFtQjtLQUFuQixxQkFBbUI7VUFBbkIsZ0JBQW1CO0VBQW5CLHNCQUFtQjtFQUFuQixpQkFBbUI7RUFBbkIsaUJBQW1CO0VBQW5CLG1CQUFtQjtFQUFuQixzQkFBbUI7RUFBbkIscUJBQW1CO0VBQW5CLHNCQUFtQjtFQUFuQiw0RUFBbUI7RUFBbkIsdUdBQW1CO0VBQW5CLG9CQUFtQjtFQUFuQiwrQ0FBbUI7RUFBbkIsV0FBbUI7QUQ2Qm5COztBQUNBO0VDOUJBLHdCQUFtQjtLQUFuQixxQkFBbUI7VUFBbkIsZ0JBQW1CO0VBQW5CLHNCQUFtQjtFQUFuQix5REFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLGlCQUFtQjtFQUFuQixpQkFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLG1CQUFtQjtFQUFuQixzQkFBbUI7RUFBbkIscUJBQW1CO0VBQW5CLHNCQUFtQjtFQUFuQiw0RUFBbUI7RUFBbkIsdUdBQW1CO0VBQW5CLG9CQUFtQjtFQUFuQiwrQ0FBbUI7RUFBbkIsV0FBbUI7QURpQ25COztBQUNBO0VDbENBLHdCQUFtQjtLQUFuQixxQkFBbUI7VUFBbkIsZ0JBQW1CO0VBQW5CLHNCQUFtQjtFQUFuQix5REFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLGlCQUFtQjtFQUFuQixpQkFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLG1CQUFtQjtFQUFuQixzQkFBbUI7RUFBbkIscUJBQW1CO0VBQW5CLHNCQUFtQjtFQUFuQiw0RUFBbUI7RUFBbkIsdUdBQW1CO0VBQW5CLG9CQUFtQjtFQUFuQiwrQ0FBbUI7RUFBbkIsV0FBbUI7QURxQ25COztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFBQTtFQUNFLG1CQUFBO0VDMUNGLGtCQUFtQjtFQUFuQixpQkFBbUI7RUFBbkIsb0JBQW1CO0VBQW5CLGdEQUFtQjtFQUFuQixrQkFBbUI7QUQ4Q25COztBQUFBO0VDOUNBLGtCQUFtQjtFQUFuQix5REFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLGdCQUFtQjtBRGtEbkI7O0FDbERBO0VBQUE7QUFBbUI7O0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CLHNCQUFtQjtFQUFuQixrQkFBbUI7RUFBbkIsbUJBQW1CO0VBQW5CLG9CQUFtQjtFQUFuQjtBQUFtQjs7QURrRG5CO0VDbERBLGtCQUFtQjtFQUFuQix5REFBbUI7QURzRG5COztBQ3REQTtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjs7QUFBbkI7RUFBQSxzQkFBbUI7RUFBbkIsZ0JBQW1CO0VBQW5CLG1CQUFtQjtFQUFuQixzQkFBbUI7RUFBbkIsa0JBQW1CO0VBQW5CLG1CQUFtQjtFQUFuQixvQkFBbUI7RUFBbkI7QUFBbUI7O0FEc0RuQjtFQ3REQSw4QkFBbUI7RUFBbkIsbUJBQW1CO0VBQW5CLDRDQUFtQjtFQUFuQix1R0FBbUI7QUQwRG5CIiwiZmlsZSI6ImVtcGxveWVlLXNpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZGVmYXVsdC1pbnB1dCB7XHJcbiAgQGFwcGx5IHNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQ7XHJcbn1cclxuXHJcbi5kZWZhdWx0LWlucHV0OmZvY3VzIHtcclxuICBAYXBwbHkgb3V0bGluZS1ub25lIHNoYWRvdy1zbTtcclxufVxyXG5cclxuLmVycm9yLWlucHV0IHtcclxuICBAYXBwbHkgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgYm9yZGVyLXJlZC01MDAgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbWItMyBsZWFkaW5nLXRpZ2h0O1xyXG59XHJcbi5lcnJvci1pbnB1dDpmb2N1cyB7XHJcbiAgQGFwcGx5IG91dGxpbmUtbm9uZSBzaGFkb3ctc207XHJcbn1cclxuXHJcbi5uZy12YWxpZC5wd2QsXHJcbi5wd2QubmctcHJpc3RpbmUge1xyXG4gIEBhcHBseSBzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0O1xyXG59XHJcblxyXG4uZW1haWwtdmFsaWQge1xyXG4gIEBhcHBseSBzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIEBhcHBseSBzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0O1xyXG59XHJcblxyXG4uZW1haWwtaW52YWxpZCB7XHJcbiAgQGFwcGx5IHNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIGJvcmRlci1yZWQtNTAwIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIG1iLTMgbGVhZGluZy10aWdodDtcclxufVxyXG5cclxuLm5nLWludmFsaWQucHdkLm5nLXRvdWNoZWQge1xyXG4gIEBhcHBseSBzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciBib3JkZXItcmVkLTUwMCByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBtYi0zIGxlYWRpbmctdGlnaHQ7XHJcbn1cclxuXHJcbi5lcnItbXNnLWludiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5lcnItbXNnIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIEBhcHBseSB0ZXh0LXJlZC01MDAgdGV4dC14cyBpdGFsaWM7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9uOmRpc2FibGVkIHtcclxuICBAYXBwbHkgZGlzYWJsZWQ6b3BhY2l0eS01MCBiZy15ZWxsb3ctMTAwMCB0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZDtcclxufVxyXG5cclxuLnN1Ym1pdC1idXR0b246ZW5hYmxlZCB7XHJcbiAgQGFwcGx5IGJnLXllbGxvdy0xMDAwIGhvdmVyOmJnLXllbGxvdy0zMDAgdGV4dC1ncmF5LTgwMCBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQ7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9uOmZvY3VzIHtcclxuICBAYXBwbHkgb3V0bGluZS1ub25lIHNoYWRvdy1zbTtcclxufVxyXG4iLCJAdGFpbHdpbmQgYmFzZTtcbkB0YWlsd2luZCBjb21wb25lbnRzO1xuQHRhaWx3aW5kIHV0aWxpdGllczsiXX0= */");

/***/ }),

/***/ "VPfe":
/*!**********************************************************************!*\
  !*** ./src/app/employee/views/employee-tabs/employee-tabs.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS10YWJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "VS7k":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee/views/employee-tabs/employee-tabs.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"sos\">\n      <ion-icon name=\"alert-circle\"></ion-icon>\n      <ion-label>SOS</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"map\">\n      <ion-icon name=\"map\"></ion-icon>\n      <ion-label>Map</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"chat\">\n      <ion-icon name=\"chatbox\"></ion-icon>\n      <ion-label>Chat</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"ar\">\n      <ion-icon name=\"phone-portrait\"></ion-icon>\n      <ion-label>AR</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ "VcmA":
/*!*******************************************!*\
  !*** ./src/app/employee/employee.page.ts ***!
  \*******************************************/
/*! exports provided: EmployeePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePage", function() { return EmployeePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_employee_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./employee.page.html */ "Bkem");
/* harmony import */ var _employee_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee.page.scss */ "AtH2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let EmployeePage = class EmployeePage {
    constructor() { }
    ngOnInit() { }
};
EmployeePage.ctorParameters = () => [];
EmployeePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-employee',
        template: _raw_loader_employee_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employee_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EmployeePage);



/***/ }),

/***/ "Yy77":
/*!******************************************************************************!*\
  !*** ./src/app/employee/views/employee-tabs/employee-tabs-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: EmployeeTabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeTabsPageRoutingModule", function() { return EmployeeTabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _employee_tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-tabs.page */ "fmiG");




const routes = [
    {
        path: 'employee/employee-tabs',
        component: _employee_tabs_page__WEBPACK_IMPORTED_MODULE_3__["EmployeeTabsPage"],
        children: [
            {
                path: 'sos',
                loadChildren: () => __webpack_require__.e(/*! import() | tabs-employee-sos-employee-sos-module */ "tabs-employee-sos-employee-sos-module").then(__webpack_require__.bind(null, /*! ../tabs/employee-sos/employee-sos.module */ "iHu8")).then((m) => m.EmployeeSosPageModule),
            },
            {
                path: 'map',
                loadChildren: () => Promise.all(/*! import() | tabs-employee-map-employee-map-module */[__webpack_require__.e("default~tabs-command-center-map-command-center-map-module~tabs-command-center-setup-command-center-s~f0c4ccdb"), __webpack_require__.e("default~tabs-command-center-map-command-center-map-module~tabs-employee-chat-employee-chat-module~ta~383b2688"), __webpack_require__.e("common"), __webpack_require__.e("tabs-employee-map-employee-map-module")]).then(__webpack_require__.bind(null, /*! ../tabs/employee-map/employee-map.module */ "Efaf")).then((m) => m.EmployeeMapPageModule),
            },
            {
                path: 'chat',
                loadChildren: () => Promise.all(/*! import() | tabs-employee-chat-employee-chat-module */[__webpack_require__.e("default~tabs-command-center-map-command-center-map-module~tabs-employee-chat-employee-chat-module~ta~383b2688"), __webpack_require__.e("common"), __webpack_require__.e("tabs-employee-chat-employee-chat-module")]).then(__webpack_require__.bind(null, /*! ../tabs/employee-chat/employee-chat.module */ "dvSG")).then((m) => m.EmployeeChatPageModule),
            },
            {
                path: 'ar',
                loadChildren: () => __webpack_require__.e(/*! import() | tabs-employee-ar-employee-ar-module */ "tabs-employee-ar-employee-ar-module").then(__webpack_require__.bind(null, /*! ../tabs/employee-ar/employee-ar.module */ "sRE8")).then((m) => m.EmployeeArPageModule),
            },
            {
                path: '',
                redirectTo: 'employee/employee-tabs/sos',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        redirectTo: 'employee/employee-tabs/sos',
        pathMatch: 'full',
    },
];
let EmployeeTabsPageRoutingModule = class EmployeeTabsPageRoutingModule {
};
EmployeeTabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EmployeeTabsPageRoutingModule);



/***/ }),

/***/ "c9li":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee/views/employee-auth/employee-verify/employee-verify.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"min-h-screen flex items-center justify-center bg-white dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8\"\n>\n  <div class=\"max-w-md w-full\">\n    <div>\n      <img src=\"assets/signup.png\" class=\"mx-auto w-auto\" id=\"verify\" />\n      <h3 class=\"text-center text-2xl font-semibold text-gray-900\">\n        Please wait until your account is verified by the administrator.\n      </h3>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "fmiG":
/*!********************************************************************!*\
  !*** ./src/app/employee/views/employee-tabs/employee-tabs.page.ts ***!
  \********************************************************************/
/*! exports provided: EmployeeTabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeTabsPage", function() { return EmployeeTabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_employee_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./employee-tabs.page.html */ "VS7k");
/* harmony import */ var _employee_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-tabs.page.scss */ "VPfe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let EmployeeTabsPage = class EmployeeTabsPage {
    constructor() { }
    ngOnInit() {
    }
};
EmployeeTabsPage.ctorParameters = () => [];
EmployeeTabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-employee-tabs',
        template: _raw_loader_employee_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employee_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EmployeeTabsPage);



/***/ }),

/***/ "jZlA":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee/views/employee-auth/employee-sign-in/employee-sign-in.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Employee Sign In</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<div *ngIf=\"auth.user$ | async; then authenticated else guest\">\n  <!-- template will replace this div -->\n</div>\n\n<ion-content>\n  <ng-template #guest>\n    <div class=\"min-h-screen flex items-center justify-center bg-white dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8\">\n      <div class=\"max-w-md w-full\">\n        <div>\n          <img src=\"assets/ey-logo.png\" class=\"mx-auto h-20 w-auto mb-6\" id=\"logo\">\n          <h3 class=\"mt-6 text-center text-3xl font-semibold text-gray-900\">\n            Sign In\n          </h3>\n        </div>\n\n        <form [formGroup]=\"signInForm\" (ngSubmit)=\"onSubmit()\" class=\"px-8 pt-6 pb-8 mb-24\">\n          <div class=\"mb-4\">\n            <label class=\"block text-gray-700 text-sm font-bold mb-2\" for=\"email\">\n              Email\n            </label>\n            <input [ngClass]=\"emailClass()\" formControlName=\"email\" class=\"email\" type=\"email\" placeholder=\"Email\">\n          </div>\n          <div class=\"mb-6\">\n            <label class=\"block text-gray-700 text-sm font-bold mb-2\" for=\"password\">\n              Password\n            </label>\n            <input formControlName=\"password\" (focusout)=\"checkPwd($event)\" class=\"pwd\" type=\"password\"\n              placeholder=\"******************\">\n            <p [ngClass]=\"pwdErrorClass()\">Please enter a password.</p>\n          </div>\n          <div class=\"flex items-center justify-between\">\n            <button class=\"submit-button\" type=\"submit\" [disabled]=\"!signInForm.valid\">\n              Sign In\n            </button>\n            <a class=\"inline-block align-baseline font-bold text-sm text-gray-600 hover:text-gray-900\" href=\"#\">\n              Forgot Password?\n            </a>\n          </div>\n        </form>\n\n\n      </div>\n    </div>\n    <!-- <section class=\"bg-white {-- h-full --}\">\n      <div class=\"mx-auto flex justify-center h-full flex-col lg:flex-row\">\n        <div\n          class=\"w-full sm:w-4/6 md:w-3/6 lg:w-2/3 text-gray-800 dark:text-gray-100 mb-12 sm:mb-0 flex flex-col justify-center px-2 sm:px-0\">\n          <div class=\"px-2 flex flex-col items-center justify-center pt-12 lg:pt-0\">\n            <img src=\"assets/ey-logo.png\" class=\"w-32 h-32\" id=\"logo\" height=\"44\" />\n          </div>\n          <form [formGroup]=\"signInForm\" (ngSubmit)=\"onSubmit()\" class=\"px-8 pt-6 pb-8 mb-4\">\n            <div class=\"mb-4\">\n              <label class=\"block text-gray-700 text-sm font-bold mb-2\" for=\"email\">\n                Email\n              </label>\n              <input formControlName=\"email\" class=\"default-input\" type=\"email\" placeholder=\"Email\">\n            </div>\n            <div class=\"mb-6\">\n              <label class=\"block text-gray-700 text-sm font-bold mb-2\" for=\"password\">\n                Password\n              </label>\n              <input formControlName=\"password\" class=\"error-input\" type=\"password\" placeholder=\"******************\">\n              <p class=\"text-red-500 text-xs italic\">Please choose a password.</p>\n            </div>\n            <div class=\"flex items-center justify-between\">\n              <button\n                class=\"bg-yellow-1000 hover:bg-yellow-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\"\n                type=\"submit\" [disabled]=\"!signInForm.valid\">\n                Sign In\n              </button>\n              <a class=\"inline-block align-baseline font-bold text-sm text-gray-800 hover:text-gray-700\" href=\"#\">\n                Forgot Password?\n              </a>\n            </div>\n          </form>\n        </div>\n      </div>\n    </section> -->\n  </ng-template>\n\n  <ng-template #authenticated>\n    <div *ngIf=\"auth.user$ | async as user\">\n      <h1>Namaste</h1>\n      <!-- <h3>Howdy, {{ user.displayName }}</h3>\n      <img [src]=\"user.photoURL\">\n      <p>UID: {{ user.uid }}</p>\n       -->\n      <button (click)=\"auth.signOut()\">Logout</button>\n    </div>\n  </ng-template>\n\n</ion-content>");

/***/ }),

/***/ "jjkp":
/*!*******************************************************************************************!*\
  !*** ./src/app/employee/views/employee-auth/employee-verify/employee-verify.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EmployeeVerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeVerifyComponent", function() { return EmployeeVerifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_employee_verify_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./employee-verify.component.html */ "c9li");
/* harmony import */ var _employee_verify_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-verify.component.scss */ "6F2K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let EmployeeVerifyComponent = class EmployeeVerifyComponent {
    constructor() { }
    ngOnInit() { }
};
EmployeeVerifyComponent.ctorParameters = () => [];
EmployeeVerifyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-employee-verify',
        template: _raw_loader_employee_verify_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employee_verify_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EmployeeVerifyComponent);



/***/ }),

/***/ "qeI8":
/*!********************************************************!*\
  !*** ./src/app/employee/services/auth/auth.service.ts ***!
  \********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







let AuthService = class AuthService {
    constructor(afAuth, afs, router) {
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.user$ = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((user) => {
            // Logged in
            if (user) {
                return this.afs.doc(`users/${user.uid}`).valueChanges();
            }
            else {
                // Logged out
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
            }
        }));
    }
    signInWithEmail(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const credential = yield this.afAuth.signInWithEmailAndPassword(email, password);
            return this.updateUserData(credential.user);
        });
    }
    signUpWithEmail(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const credential = yield this.afAuth.createUserWithEmailAndPassword(email, password);
            return credential.user;
            return this.updateUserData(credential.user);
        });
    }
    emailPasswordReset(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.afAuth.sendPasswordResetEmail(email);
            const serverMessage = 'Check your email';
        });
    }
    updateUserData(user) {
        // Sets user data to firestore on login
        const userRef = this.afs.doc(`users/${user.uid}`);
        const data = {
            uid: user.uid,
            email: user.email,
        };
        return userRef.set(data, { merge: true });
    }
    signUpData(user) {
        const userRef = this.afs.doc(`users/${user.uid}`);
        const data = {
            name: user.name,
            emp_id: user.emp_id,
            uid: user.uid,
            email: user.email,
            phone: user.phone,
            approved: false,
        };
        return userRef.set(data, { merge: true });
    }
    signOut() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.afAuth.signOut();
            this.router.navigate(['/']);
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ "zs74":
/*!*********************************************************************************************!*\
  !*** ./src/app/employee/views/employee-auth/employee-sign-up/employee-sign-up.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EmployeeSignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeSignUpComponent", function() { return EmployeeSignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_employee_sign_up_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./employee-sign-up.component.html */ "8xIB");
/* harmony import */ var _employee_sign_up_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-sign-up.component.scss */ "UzF/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_employee_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/employee/services/auth/auth.service */ "qeI8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








let EmployeeSignUpComponent = class EmployeeSignUpComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            emp_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            phone_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.auth.user$.subscribe((x) => {
                if (x.approved == false) {
                    console.log(x);
                    this.router.navigateByUrl('employee/verify');
                }
            });
        });
    }
    checkPwd() {
        if (this.signUpForm.get('password').status == 'INVALID') {
            this.pwdValid = false;
        }
        else {
            this.pwdValid = true;
        }
    }
    emailClass() {
        if (this.signUpForm.get('email').status == 'VALID') {
            return { 'email-valid': true };
        }
        if (this.signUpForm.get('email').touched == false) {
            return { 'email-valid': true };
        }
        else {
            return { 'email-invalid': true };
        }
    }
    pwdErrorClass() {
        if (this.signUpForm.get('password').status == 'INVALID' &&
            this.signUpForm.get('password').touched == true) {
            return { 'err-msg': true };
        }
        else {
            return { 'err-msg-inv': true };
        }
    }
    buttonClass() { }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.signUpForm.value);
            const creds = yield this.auth.signUpWithEmail(this.signUpForm.value['email'], this.signUpForm.value['password']);
            const user = {
                name: this.signUpForm.value['name'],
                emp_id: this.signUpForm.value['emp_id'],
                uid: creds.uid,
                email: creds.email,
                phone: this.signUpForm.value['phone_no'],
            };
            console.log(user);
            this.auth.signUpData(user);
        });
    }
};
EmployeeSignUpComponent.ctorParameters = () => [
    { type: src_app_employee_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
EmployeeSignUpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-employee-sign-up',
        template: _raw_loader_employee_sign_up_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employee_sign_up_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EmployeeSignUpComponent);



/***/ })

}]);
//# sourceMappingURL=employee-employee-module.js.map