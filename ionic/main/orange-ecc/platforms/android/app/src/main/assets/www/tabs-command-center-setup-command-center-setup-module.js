(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-command-center-setup-command-center-setup-module"],{

/***/ "3O4o":
/*!***********************************************************************************************!*\
  !*** ./src/app/command-center/views/tabs/command-center-setup/command-center-setup.page.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tYW5kLWNlbnRlci1zZXR1cC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "4fRq":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "9Pa8":
/*!****************************************************************************************!*\
  !*** ./src/app/command-center/views/tabs/command-center-setup/services/api.service.ts ***!
  \****************************************************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
    }
    get(route, params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}${route}`;
            if (params) {
                url += '?' + new URLSearchParams(params);
            }
            return yield this.http.get(url).toPromise();
        });
    }
    post(route, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.http
                .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}${route}`, data, { responseType: 'json' })
                .toPromise();
        });
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], ApiService);



/***/ }),

/***/ "DZCl":
/*!*********************************************************************************************!*\
  !*** ./src/app/command-center/views/tabs/command-center-setup/command-center-setup.page.ts ***!
  \*********************************************************************************************/
/*! exports provided: CommandCenterSetupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandCenterSetupPage", function() { return CommandCenterSetupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_command_center_setup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./command-center-setup.page.html */ "za4o");
/* harmony import */ var _command_center_setup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./command-center-setup.page.scss */ "3O4o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CommandCenterSetupPage = class CommandCenterSetupPage {
    constructor() { }
    ngOnInit() {
    }
};
CommandCenterSetupPage.ctorParameters = () => [];
CommandCenterSetupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-command-center-setup',
        template: _raw_loader_command_center_setup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_command_center_setup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CommandCenterSetupPage);



/***/ }),

/***/ "EcEN":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "xDdU");
var v4 = __webpack_require__(/*! ./v4 */ "xk4V");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "I2ZF":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "R+Tk":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/command-center/views/tabs/command-center-setup/command-center-upload-map/command-center-upload-map.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex items-center flex-col w-full\">\r\n  <h1\r\n    class=\"\r\n      text-base\r\n      tracking-tight\r\n      font-extrabold\r\n      text-gray-900\r\n      sm:text-5xl\r\n      md:text-6xl\r\n      mt-10\r\n      mb-10\r\n    \"\r\n  >\r\n    <span class=\"block xl:inline\">Upload </span>\r\n    <span class=\"block text-yellow-1100 xl:inline\">Floor Map</span>\r\n  </h1>\r\n  <div class=\"form-group\">\r\n    <!-- <label for=\"file\">Choose File</label> -->\r\n    <!-- <input type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target)\"> -->\r\n\r\n    <input\r\n      #imageInput\r\n      hidden=\"true\"\r\n      type=\"file\"\r\n      onclick=\"this.value=null\"\r\n      (change)=\"handleFileInput($event.target)\"\r\n      accept=\"image/*\"\r\n    />\r\n    <!-- <div class=\"rounded-md shadow\"> -->\r\n    <button\r\n      (click)=\"imageInput.click()\"\r\n      class=\"\r\n        w-full\r\n        flex\r\n        items-center\r\n        justify-center\r\n        px-8\r\n        py-3\r\n        border border-transparent\r\n        text-base\r\n        font-medium\r\n        rounded-md\r\n        text-white\r\n        bg-yellow-1100\r\n        hover:bg-yellow-1200\r\n        md:py-4\r\n        md:text-lg\r\n        md:px-10\r\n      \"\r\n    >\r\n      Choose Map Image\r\n    </button>\r\n    <!-- <ion-button color=\"primary\" (click)=\"imageInput.click()\">\r\n      Choose Map Image\r\n    </ion-button> -->\r\n  </div>\r\n\r\n  <style>\r\n    .marker-radio-group {\r\n      display: flex;\r\n      flex-direction: column;\r\n      margin: 15px 0;\r\n    }\r\n\r\n    .marker-radio-button {\r\n      margin: 5px;\r\n    }\r\n  </style>\r\n\r\n  <div *ngIf=\"view\" class=\"form-group flex flex-col items-center\">\r\n    <label id=\"markerChoiceLabel\">Choose marker to place</label>\r\n    <ion-radio-group\r\n      class=\"marker-radio-group\"\r\n      name=\"markerChoice\"\r\n      aria-labelledby=\"markerChoiceLabel\"\r\n      [(ngModel)]=\"markerChoice\"\r\n    >\r\n      <ion-item>\r\n        <ion-label>Entry</ion-label>\r\n        <ion-radio class=\"marker-radio-button\" name=\"markerChoice\" value=\"entry\"\r\n          >Entry</ion-radio\r\n        ></ion-item\r\n      >\r\n      <ion-item>\r\n        <ion-label>Exit</ion-label>\r\n        <ion-radio\r\n          checked=\"true\"\r\n          class=\"marker-radio-button\"\r\n          name=\"markerChoice\"\r\n          value=\"exit\"\r\n          >Exit\r\n        </ion-radio>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Beacon</ion-label>\r\n        <ion-radio\r\n          class=\"marker-radio-button\"\r\n          name=\"markerChoice\"\r\n          value=\"beacon\"\r\n          >Beacon</ion-radio\r\n        >\r\n      </ion-item>\r\n    </ion-radio-group>\r\n    <!-- <ion-button color=\"primary\" (click)=\"submit()\">Submit</ion-button> -->\r\n    <button\r\n      (click)=\"submit()\"\r\n      class=\"\r\n        w-auto\r\n        flex\r\n        items-center\r\n        justify-center\r\n        px-8\r\n        py-3\r\n        border border-transparent\r\n        text-base\r\n        font-medium\r\n        rounded-md\r\n        text-white\r\n        bg-yellow-1100\r\n        hover:bg-yellow-1200\r\n        mb-10\r\n      \"\r\n    >\r\n      Submit\r\n    </button>\r\n  </div>\r\n\r\n  <canvas id=\"mapFabricCanvas\"></canvas>\r\n</div>\r\n");

/***/ }),

/***/ "VKZz":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/command-center/views/tabs/command-center-setup/command-center-upload-map/command-center-upload-map.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: CommandCenterUploadMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandCenterUploadMapComponent", function() { return CommandCenterUploadMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_command_center_upload_map_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./command-center-upload-map.component.html */ "R+Tk");
/* harmony import */ var _command_center_upload_map_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./command-center-upload-map.component.scss */ "lpnZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "9Pa8");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fabric */ "epSk");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "EcEN");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_8__);









class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
let CommandCenterUploadMapComponent = class CommandCenterUploadMapComponent {
    constructor(api, firestore, storage) {
        this.api = api;
        this.firestore = firestore;
        this.storage = storage;
        this.view = false;
        this.title = 'command-center';
        this.mapId = '';
        // private markerLocs: any = {};
        this.markerChoice = 'exit';
        // choices, so many choices
        this.choicesInfo = {
            exit: {
                iconEl: this.exitIcon,
                iconSrc: 'assets/img/exit.svg',
            },
            entry: {
                iconEl: this.entryIcon,
                iconSrc: 'assets/img/entry.svg',
            },
            beacon: {
                iconEl: this.beaconIcon,
                iconSrc: 'assets/img/beacon.svg',
            },
        };
        // for use in ngFor ig
        this.choices = ['exit', 'entry', 'beacon'];
        this.mapDoc = firestore.doc('map/unknown');
    }
    ngOnInit() {
        this.canvas = new fabric__WEBPACK_IMPORTED_MODULE_5__["fabric"].Canvas('mapFabricCanvas');
        this.canvas.selection = false;
        this.canvas.on('mouse:down', (e) => {
            if (e.pointer === undefined) {
                console.log('aaaaa undefined');
            }
            else {
                console.log(e.pointer.x, e.pointer.y, this.markerChoice);
                const iconSize = 20;
                let x = e.pointer.x - iconSize / 2;
                let y = e.pointer.y - iconSize / 2;
                let intersects = false;
                let intObject;
                this.canvas.getObjects('image').some((obj) => {
                    let inter = obj.intersectsWithRect(new fabric__WEBPACK_IMPORTED_MODULE_5__["fabric"].Point(x, y), new fabric__WEBPACK_IMPORTED_MODULE_5__["fabric"].Point(x + iconSize, y + iconSize));
                    if (inter) {
                        intersects = true;
                        intObject = obj;
                        return true;
                    }
                    return false;
                });
                if (intersects &&
                    intObject !== null &&
                    intObject.left !== undefined &&
                    intObject.top !== undefined) {
                    const tl = new fabric__WEBPACK_IMPORTED_MODULE_5__["fabric"].Point(x + iconSize / 4, y + iconSize / 4);
                    const br = new fabric__WEBPACK_IMPORTED_MODULE_5__["fabric"].Point(x + (3 * iconSize) / 4, y + (3 * iconSize) / 4);
                    const smolRect = new fabric__WEBPACK_IMPORTED_MODULE_5__["fabric"].Rect({
                        left: intObject.left + iconSize / 4,
                        top: intObject.top + iconSize / 4,
                        width: iconSize / 2,
                        height: iconSize / 2,
                    });
                    if (smolRect.intersectsWithRect(tl, br)) {
                        this.canvas.remove(intObject);
                    }
                }
                else {
                    let iconImg = new fabric__WEBPACK_IMPORTED_MODULE_5__["fabric"].Image(this.choicesInfo[this.markerChoice].iconEl, {
                        left: x,
                        top: y,
                        selectable: false,
                        width: iconSize,
                        height: iconSize,
                    });
                    iconImg.data = { name: this.markerChoice };
                    this.canvas.add(iconImg);
                }
            }
        });
    }
    handleMouseEvent(e) { }
    ngAfterViewInit() {
        this.canvas.height = 0;
        this.canvas.width = 0;
        this.exitIcon = new Image();
        this.exitIcon.src = 'assets/img/exit.svg';
        this.choices.forEach((choice) => {
            let choiceInfo = this.choicesInfo[choice];
            choiceInfo.iconEl = new Image();
            choiceInfo.iconEl.src = choiceInfo.iconSrc;
        });
    }
    handleFileInput(target) {
        this.view = true;
        this.mapId = Object(uuid__WEBPACK_IMPORTED_MODULE_8__["v4"])();
        this.mapDoc = this.firestore.doc('map/' + this.mapId);
        let files = target.files;
        let file = files[0];
        console.log(file);
        let formData = new FormData();
        formData.append('file', file);
        this.api
            .post('/map/processImage', formData)
            .then((res) => {
            let orig_img = new Image();
            orig_img.src = 'data:image/jpg;base64,' + res.orig_img;
            orig_img.onload = () => {
                this.canvas.setWidth(orig_img.width);
                // this.canvas.height = orig_img.height;
                this.canvas.setHeight(orig_img.height);
                // this.canvas.width = orig_img.width;
                this.canvas.setDimensions({
                    width: '100%',
                    height: '',
                }, {
                    cssOnly: true,
                });
                this.canvas.hoverCursor = 'pointer';
                let orig_img_f = new fabric__WEBPACK_IMPORTED_MODULE_5__["fabric"].Image(orig_img, {
                    left: 0,
                    top: 0,
                    lockMovementX: true,
                    lockMovementY: true,
                    lockScalingX: true,
                    selectable: false,
                });
                this.canvas.add(orig_img_f);
            };
            let map_img = new Image();
            map_img.src = 'data:image/jpg;base64,' + res.proc_img;
            this.origImg = orig_img;
            this.mapImg = map_img;
        })
            .catch((err) => {
            console.log('error in upload image', err);
        });
        // TODO: aaaaaaaaaaaaaa
    }
    uploadImage(img, id, name, cback) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const imgPath = '/map/' + id + '/' + name;
            const ref = this.storage.ref(imgPath);
            const res = yield (yield fetch(img.src)).blob();
            const value = yield ref.put(res, { contentType: 'image/png' });
            console.log(name + ' Image upload done', value.state, value.totalBytes);
            if (cback) {
                cback();
            }
        });
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const markers = [];
            this.canvas.forEachObject((obj) => {
                if (obj.data !== undefined) {
                    if (obj.left !== undefined &&
                        obj.top !== undefined &&
                        obj.width !== undefined &&
                        obj.height !== undefined) {
                        let newMarker = {
                            name: obj.data.name,
                            top: obj.top,
                            left: obj.left,
                            width: obj.width,
                            height: obj.height,
                        };
                        markers.push(newMarker);
                    }
                    else {
                        console.log('Got some undefined in this object!!', obj);
                    }
                }
            });
            const mapInfo = {
                markers: markers,
            };
            console.log(mapInfo);
            yield Promise.all([
                this.uploadImage(this.origImg, this.mapId, 'orig'),
                this.uploadImage(this.mapImg, this.mapId, 'map'),
                this.mapDoc.set(mapInfo),
            ]);
            this.api
                .get('/map/processMarkers', { id_: this.mapId })
                .then((res) => {
                console.log('Process markers done', res);
            })
                .catch((err) => {
                console.log('Error in process markers', err);
            });
        });
    }
};
CommandCenterUploadMapComponent.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"] }
];
CommandCenterUploadMapComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-command-center-upload-map',
        template: _raw_loader_command_center_upload_map_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_command_center_upload_map_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CommandCenterUploadMapComponent);



/***/ }),

/***/ "jqID":
/*!*******************************************************************************************************!*\
  !*** ./src/app/command-center/views/tabs/command-center-setup/command-center-setup-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CommandCenterSetupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandCenterSetupPageRoutingModule", function() { return CommandCenterSetupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _command_center_setup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./command-center-setup.page */ "DZCl");




const routes = [
    {
        path: '',
        component: _command_center_setup_page__WEBPACK_IMPORTED_MODULE_3__["CommandCenterSetupPage"]
    }
];
let CommandCenterSetupPageRoutingModule = class CommandCenterSetupPageRoutingModule {
};
CommandCenterSetupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CommandCenterSetupPageRoutingModule);



/***/ }),

/***/ "lpnZ":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/command-center/views/tabs/command-center-setup/command-center-upload-map/command-center-upload-map.component.scss ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tYW5kLWNlbnRlci11cGxvYWQtbWFwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "sS0O":
/*!***********************************************************************************************!*\
  !*** ./src/app/command-center/views/tabs/command-center-setup/command-center-setup.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: CommandCenterSetupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandCenterSetupPageModule", function() { return CommandCenterSetupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _command_center_setup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./command-center-setup-routing.module */ "jqID");
/* harmony import */ var _command_center_setup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./command-center-setup.page */ "DZCl");
/* harmony import */ var _command_center_upload_map_command_center_upload_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./command-center-upload-map/command-center-upload-map.component */ "VKZz");








let CommandCenterSetupPageModule = class CommandCenterSetupPageModule {
};
CommandCenterSetupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _command_center_setup_routing_module__WEBPACK_IMPORTED_MODULE_5__["CommandCenterSetupPageRoutingModule"],
        ],
        declarations: [_command_center_setup_page__WEBPACK_IMPORTED_MODULE_6__["CommandCenterSetupPage"], _command_center_upload_map_command_center_upload_map_component__WEBPACK_IMPORTED_MODULE_7__["CommandCenterUploadMapComponent"]],
    })
], CommandCenterSetupPageModule);



/***/ }),

/***/ "xDdU":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "4fRq");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "I2ZF");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "xk4V":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "4fRq");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "I2ZF");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "za4o":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/command-center/views/tabs/command-center-setup/command-center-setup.page.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Setup</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-command-center-upload-map></app-command-center-upload-map>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=tabs-command-center-setup-command-center-setup-module.js.map