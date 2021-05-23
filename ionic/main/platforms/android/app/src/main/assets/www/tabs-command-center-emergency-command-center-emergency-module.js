(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-command-center-emergency-command-center-emergency-module"],{

/***/ "2OUc":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/command-center/views/tabs/command-center-emergency/command-center-emergency.page.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>command-center-emergency</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"valid\">\r\n    <div class=\"flex flex-col items-center justify-items-center p-20\">\r\n      <p\r\n        class=\"\r\n          mt-2\r\n          text-3xl\r\n          leading-8\r\n          font-extrabold\r\n          tracking-tight\r\n          text-gray-900\r\n          sm:text-4xl\r\n        \"\r\n      >\r\n        {{timer}}\r\n      </p>\r\n      <p\r\n        class=\"\r\n          mt-2\r\n          text-3xl\r\n          leading-8\r\n          font-medium\r\n          tracking-tight\r\n          text-gray-900\r\n          sm:text-4xl\r\n        \"\r\n      >\r\n        seconds have been elapsed since the start of Emergency\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"flex flex-col items-center justify-items-center p-20\">\r\n    <button\r\n      (click)=\"startEmergency()\"\r\n      class=\"\r\n        inline-flex\r\n        items-center\r\n        justify-center\r\n        border border-transparent\r\n        text-2xl\r\n        font-bold\r\n        text-white\r\n        bg-red-600\r\n        hover:bg-red-500\r\n        mt-10\r\n        rounded-full\r\n        h-48\r\n        w-48\r\n      \"\r\n    >\r\n      START EMERGENCY\r\n    </button>\r\n\r\n    <button\r\n      (click)=\"stopEmergency()\"\r\n      class=\"\r\n        inline-flex\r\n        items-center\r\n        justify-center\r\n        border border-transparent\r\n        text-2xl\r\n        font-bold\r\n        text-white\r\n        bg-green-600\r\n        hover:bg-green-500\r\n        mt-20\r\n        rounded-full\r\n        h-48\r\n        w-48\r\n      \"\r\n    >\r\n      STOP EMERGENCY\r\n    </button>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "6obW":
/*!***************************************************************************************************************!*\
  !*** ./src/app/command-center/views/tabs/command-center-emergency/command-center-emergency-routing.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: CommandCenterEmergencyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandCenterEmergencyPageRoutingModule", function() { return CommandCenterEmergencyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _command_center_emergency_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./command-center-emergency.page */ "aELQ");




const routes = [
    {
        path: '',
        component: _command_center_emergency_page__WEBPACK_IMPORTED_MODULE_3__["CommandCenterEmergencyPage"]
    }
];
let CommandCenterEmergencyPageRoutingModule = class CommandCenterEmergencyPageRoutingModule {
};
CommandCenterEmergencyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CommandCenterEmergencyPageRoutingModule);



/***/ }),

/***/ "Ey6M":
/*!*******************************************************************************************************!*\
  !*** ./src/app/command-center/views/tabs/command-center-emergency/command-center-emergency.page.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tYW5kLWNlbnRlci1lbWVyZ2VuY3kucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "YHJo":
/*!*******************************************************************************************************!*\
  !*** ./src/app/command-center/views/tabs/command-center-emergency/command-center-emergency.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CommandCenterEmergencyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandCenterEmergencyPageModule", function() { return CommandCenterEmergencyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _command_center_emergency_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./command-center-emergency-routing.module */ "6obW");
/* harmony import */ var _command_center_emergency_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./command-center-emergency.page */ "aELQ");







let CommandCenterEmergencyPageModule = class CommandCenterEmergencyPageModule {
};
CommandCenterEmergencyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _command_center_emergency_routing_module__WEBPACK_IMPORTED_MODULE_5__["CommandCenterEmergencyPageRoutingModule"]
        ],
        declarations: [_command_center_emergency_page__WEBPACK_IMPORTED_MODULE_6__["CommandCenterEmergencyPage"]]
    })
], CommandCenterEmergencyPageModule);



/***/ }),

/***/ "aELQ":
/*!*****************************************************************************************************!*\
  !*** ./src/app/command-center/views/tabs/command-center-emergency/command-center-emergency.page.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CommandCenterEmergencyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandCenterEmergencyPage", function() { return CommandCenterEmergencyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_command_center_emergency_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./command-center-emergency.page.html */ "2OUc");
/* harmony import */ var _command_center_emergency_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./command-center-emergency.page.scss */ "Ey6M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");








let CommandCenterEmergencyPage = class CommandCenterEmergencyPage {
    constructor(http, afs) {
        this.http = http;
        this.afs = afs;
        this.timer = 0;
        this.valid = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(1000).subscribe((x) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const time = new Date().getTime() / 1000;
                const start = yield this.fireGet();
                console.log(time);
                console.log(start.timer.seconds);
                const diff = time - start.timer.seconds;
                this.timer = Math.round(diff);
            }));
            // const x: any = await this.fireGet();
            // console.log(x.timer.seconds);
        });
    }
    startEmergency() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.valid = true;
            console.log('EM');
            yield this.http
                .post('https://fcm.googleapis.com/fcm/send', {
                to: src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].FCMToken,
                notification: {
                    body: 'Body of Your Notification',
                    title: 'Title of Your Notification',
                },
            }, {
                headers: {
                    Authorization: src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].AuthToken,
                    'Content-Type': 'application/json',
                },
            })
                .toPromise();
            this.fireCreate({ timer: new Date() });
        });
    }
    fireCreate(data) {
        return new Promise((resolve, reject) => {
            this.afs
                .collection('timer')
                .doc('timer')
                .set(data)
                .then((res) => { }, (err) => reject(err));
        });
    }
    fireGet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield (yield this.afs.collection('timer').doc('timer').get().toPromise()).data();
        });
    }
    stopEmergency() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.valid = false;
            return new Promise((resolve, reject) => {
                this.afs
                    .collection('timer')
                    .doc('timer')
                    .set({})
                    .then((res) => { }, (err) => reject(err));
            });
        });
    }
};
CommandCenterEmergencyPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
];
CommandCenterEmergencyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-command-center-emergency',
        template: _raw_loader_command_center_emergency_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_command_center_emergency_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CommandCenterEmergencyPage);



/***/ })

}]);
//# sourceMappingURL=tabs-command-center-emergency-command-center-emergency-module.js.map