(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-test-module"],{

/***/ "8JG8":
/*!***************************************************!*\
  !*** ./src/app/test/beacon/beacon.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZWFjb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "9V8B":
/*!***********************************!*\
  !*** ./src/app/test/test.page.ts ***!
  \***********************************/
/*! exports provided: TestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPage", function() { return TestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_test_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./test.page.html */ "hXkP");
/* harmony import */ var _test_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test.page.scss */ "pvUL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let TestPage = class TestPage {
    constructor() { }
    ngOnInit() {
    }
};
TestPage.ctorParameters = () => [];
TestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-test',
        template: _raw_loader_test_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_test_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TestPage);



/***/ }),

/***/ "BLls":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test/beacon/beacon.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  beacon works!\n</p>\n");

/***/ }),

/***/ "FScs":
/*!*************************************!*\
  !*** ./src/app/test/test.module.ts ***!
  \*************************************/
/*! exports provided: TestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageModule", function() { return TestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _test_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-routing.module */ "NBQd");
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test.page */ "9V8B");
/* harmony import */ var _beacon_beacon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./beacon/beacon.component */ "p94a");








let TestPageModule = class TestPageModule {
};
TestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _test_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestPageRoutingModule"]],
        declarations: [_test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"], _beacon_beacon_component__WEBPACK_IMPORTED_MODULE_7__["BeaconComponent"]],
    })
], TestPageModule);



/***/ }),

/***/ "IfVR":
/*!*********************************************!*\
  !*** ./src/app/test/wifi/wifi.component.ts ***!
  \*********************************************/
/*! exports provided: WifiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WifiComponent", function() { return WifiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_wifi_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./wifi.component.html */ "VLed");
/* harmony import */ var _wifi_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wifi.component.scss */ "Plvv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_wifi_wizard_2_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/wifi-wizard-2/ngx */ "ASgJ");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");






let WifiComponent = class WifiComponent {
    constructor(wifiWizard2) {
        this.wifiWizard2 = wifiWizard2;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(1000).subscribe((x) => {
            this.startWifiScan();
        });
    }
    ngOnInit() { }
    startWifiScan() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // const SSID = await this.wifiWizard2.getConnectedSSID();
            // console.log(SSID);
            // const BSSID = await this.wifiWizard2.getConnectedBSSID();
            // console.log(BSSID);
            const scan = yield this.wifiWizard2.scan();
            console.log(scan);
            const x = yield this.wifiWizard2.getScanResults(this.options);
            console.log(x);
        });
    }
};
WifiComponent.ctorParameters = () => [
    { type: _ionic_native_wifi_wizard_2_ngx__WEBPACK_IMPORTED_MODULE_4__["WifiWizard2"] }
];
WifiComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-wifi',
        template: _raw_loader_wifi_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_wifi_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WifiComponent);



/***/ }),

/***/ "NBQd":
/*!*********************************************!*\
  !*** ./src/app/test/test-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageRoutingModule", function() { return TestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _beacon_beacon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./beacon/beacon.component */ "p94a");
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test.page */ "9V8B");
/* harmony import */ var _wifi_wifi_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wifi/wifi.component */ "IfVR");






const routes = [
    {
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_4__["TestPage"],
    },
    {
        path: 'beacon',
        component: _beacon_beacon_component__WEBPACK_IMPORTED_MODULE_3__["BeaconComponent"],
    },
    {
        path: 'wifi',
        component: _wifi_wifi_component__WEBPACK_IMPORTED_MODULE_5__["WifiComponent"],
    },
];
let TestPageRoutingModule = class TestPageRoutingModule {
};
TestPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TestPageRoutingModule);



/***/ }),

/***/ "Plvv":
/*!***********************************************!*\
  !*** ./src/app/test/wifi/wifi.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWZpLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "VLed":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test/wifi/wifi.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  wifi works!\n</p>\n");

/***/ }),

/***/ "hXkP":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>test</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "p94a":
/*!*************************************************!*\
  !*** ./src/app/test/beacon/beacon.component.ts ***!
  \*************************************************/
/*! exports provided: BeaconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeaconComponent", function() { return BeaconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_beacon_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./beacon.component.html */ "BLls");
/* harmony import */ var _beacon_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./beacon.component.scss */ "8JG8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_ibeacon_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/ibeacon/ngx */ "HKOV");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let BeaconComponent = class BeaconComponent {
    constructor(ibeacon, platform, changeRef) {
        this.ibeacon = ibeacon;
        this.platform = platform;
        this.changeRef = changeRef;
        this.uuid = '74278bda-b644-4520-8f0c-720eaf059935';
        // uuid = '06f5959f-d546-7399-9f41-43001325cc5b';
        this.beaconData = [];
        this.scanStatus = false;
        this.delegate = null;
        this.beaconRegion = null;
        this.iosDevice = false;
        this.platform.ready().then(() => {
            this.requestLocPermissoin();
            this.enableDebugLogs();
        });
        this.startScanning();
    }
    ngOnInit() {
        if (!this.platform.is('ios')) {
            this.iosDevice = true;
        }
    }
    requestLocPermissoin() {
        // Request permission to use location on iOS
        if (this.platform.is('ios')) {
            this.ibeacon.requestAlwaysAuthorization();
            console.log(`: request ios permisson`);
        }
    }
    enableDebugLogs() {
        this.ibeacon.enableDebugLogs();
        this.ibeacon.enableDebugNotifications();
    }
    onScanClicked() {
        if (!this.scanStatus) {
            this.startScanning();
            this.scanStatus = true;
        }
        else {
            this.scanStatus = false;
            this.stopScannning();
        }
    }
    stopScannning() {
        // stop ranging
        this.ibeacon
            .stopRangingBeaconsInRegion(this.beaconRegion)
            .then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(`Stopped ranging beacon region:`, this.beaconRegion);
        }))
            .catch((error) => {
            console.log(`Failed to stop ranging beacon region: `, this.beaconRegion);
        });
    }
    startScanning() {
        // create a new delegate and register it with the native layer
        this.delegate = this.ibeacon.Delegate();
        this.ibeacon.setDelegate(this.delegate);
        this.beaconUuid = this.uuid;
        console.log('--===--- Bluetooth state: ', this.ibeacon.isBluetoothEnabled());
        // Check bluetooth status Y.Q
        this.ibeacon.isBluetoothEnabled().then((data) => console.log('-------=== Enabled', data), (error) => console.error('-------=== Disabled', error));
        // Subscribe to some of the delegate's event handlers
        this.delegate.didRangeBeaconsInRegion().subscribe((pluginResult) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('didRangeBeaconsInRegion: ', pluginResult);
            console.log('found beacons size: ' + pluginResult.beacons.length);
            if (pluginResult.beacons.length > 0) {
                this.beaconData = pluginResult.beacons;
                this.changeRef.detectChanges(); // Check for data change to update view Y.Q
            }
            else {
                console.log('no beacons nearby');
            }
        }), (error) => console.error(`Failure during ranging: `, error));
        this.delegate.didStartMonitoringForRegion().subscribe((pluginResult) => console.log('didStartMonitoringForRegion: ', pluginResult), (error) => console.error(`Failure during starting of monitoring: `, error));
        console.log(`Creating BeaconRegion with UUID of: `, this.uuid);
        // uuid is required, identifier and range are optional.
        this.beaconRegion = this.ibeacon.BeaconRegion('EST3', this.uuid);
        this.ibeacon.startMonitoringForRegion(this.beaconRegion).then(() => console.log('Native layer recieved the request to monitoring'), (error) => console.error('Native layer failed to begin monitoring: ', error));
        this.ibeacon
            .startRangingBeaconsInRegion(this.beaconRegion)
            .then(() => {
            console.log(`Started ranging beacon region: `, this.beaconRegion);
        })
            .catch((error) => {
            console.error(`Failed to start ranging beacon region: `, this.beaconRegion);
        });
    }
};
BeaconComponent.ctorParameters = () => [
    { type: _ionic_native_ibeacon_ngx__WEBPACK_IMPORTED_MODULE_4__["IBeacon"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
BeaconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-beacon',
        template: _raw_loader_beacon_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_beacon_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BeaconComponent);



/***/ }),

/***/ "pvUL":
/*!*************************************!*\
  !*** ./src/app/test/test.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=test-test-module.js.map