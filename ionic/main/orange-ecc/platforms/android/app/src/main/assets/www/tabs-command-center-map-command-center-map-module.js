(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-command-center-map-command-center-map-module"],{

/***/ "9aS3":
/*!*****************************************************************************************!*\
  !*** ./src/app/command-center/views/tabs/command-center-map/command-center-map.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: CommandCenterMapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandCenterMapPage", function() { return CommandCenterMapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_command_center_map_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./command-center-map.page.html */ "xi9/");
/* harmony import */ var _command_center_map_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./command-center-map.page.scss */ "z861");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fabric */ "epSk");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_employee_services_pathfinding_pathfinding_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/employee/services/pathfinding/pathfinding.service */ "SPPf");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");







let CommandCenterMapPage = class CommandCenterMapPage {
    constructor(pathfinding) {
        this.pathfinding = pathfinding;
        this.uuidMap = 'a246ddf4-3ded-49b9-bacf-fbf7b700e49e';
        // user ids to monitor
        this.userIds = ["592s1XmfNwYujg7Y1thbkDyOTZf2", "brr", "LxhvXHuCJxUXITPfzmYAnKJb6uf2", "abc"];
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
        this.choices = ['exit', 'entry', 'beacon'];
        this.userMarkers = {};
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // initialize canvas
            this.canvas = new fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].Canvas('mapFabricCanvas');
            this.canvas.selection = false;
            this.canvas.height = 0;
            this.canvas.width = 0;
            // setup icons
            this.choices.forEach((choice) => {
                let choiceInfo = this.choicesInfo[choice];
                choiceInfo.iconEl = new Image();
                choiceInfo.iconEl.src = choiceInfo.iconSrc;
            });
            let orig_img = yield this.pathfinding.initialize(this.uuidMap);
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
            const height = this.canvas.getHeight();
            console.log('height is ', height);
            this.canvas.hoverCursor = 'auto';
            let orig_img_f = new fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].Image(orig_img, {
                left: 0,
                top: 0,
                lockMovementX: true,
                lockMovementY: true,
                lockScalingX: true,
                selectable: false,
            });
            this.canvas.add(orig_img_f);
            this.addMarkers();
            this.startMonitoring();
        });
    }
    addMarkers() {
        this.pathfinding.mapDoc
            .get()
            .toPromise()
            .then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const mapData = res.data();
            console.log(mapData);
            for (let marker of mapData.markers) {
                let iconImg = new fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].Image(this.choicesInfo[marker.name].iconEl, {
                    left: marker.left,
                    top: marker.top,
                    selectable: false,
                    width: marker.width,
                    height: marker.height,
                });
                iconImg.data = { name: marker.name };
                this.canvas.add(iconImg);
            }
        }));
    }
    startMonitoring() {
        this.userIds.forEach((uid) => {
            const listenWs = new WebSocket(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].wsEndpoint}listen?id=${uid}`);
            listenWs.addEventListener('open', function () {
                listenWs.send('Hello Server!');
            });
            listenWs.addEventListener('message', (event) => {
                try {
                    let data = JSON.parse(event.data);
                    console.log('Message from server ', data);
                    if (this.userMarkers[uid]) {
                        console.log("found");
                        // this.userMarkers[uid].set({
                        //   // left: data.x,
                        //   top: data.y,
                        // });
                        fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].util.animate({ startValue: this.userMarkers[uid].left, endValue: data.x, onChange: (val) => { this.userMarkers[uid].left = val; this.userMarkers[uid].setCoords(); this.canvas.renderAll(); } });
                        fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].util.animate({ startValue: this.userMarkers[uid].top, endValue: data.y, onChange: (val) => { this.userMarkers[uid].top = val; this.userMarkers[uid].setCoords(); this.canvas.renderAll(); } });
                        // this.userMarkers[uid].setCoords();
                        // this.canvas.renderAll();
                    }
                    else {
                        let color = "red";
                        if (data.ert) {
                            color = "blue";
                        }
                        let reect = new fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].Rect({
                            height: 10,
                            width: 10,
                            fill: color,
                            originX: "center",
                            originY: "center"
                        });
                        let text = new fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].Text(data.name, {
                            fontSize: 10,
                            top: 10,
                            originX: "center",
                            originY: "center"
                        });
                        this.userMarkers[uid] = new fabric__WEBPACK_IMPORTED_MODULE_4__["fabric"].Group([reect, text], {
                            left: data.x,
                            top: data.y,
                            selectable: false
                        });
                        this.canvas.add(this.userMarkers[uid]);
                    }
                }
                catch (error) {
                    console.log('Bad data from WS', error);
                }
            });
        });
    }
};
CommandCenterMapPage.ctorParameters = () => [
    { type: src_app_employee_services_pathfinding_pathfinding_service__WEBPACK_IMPORTED_MODULE_5__["PathfindingService"] }
];
CommandCenterMapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-command-center-map',
        template: _raw_loader_command_center_map_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_command_center_map_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CommandCenterMapPage);



/***/ }),

/***/ "Gp1S":
/*!*******************************************************************************************!*\
  !*** ./src/app/command-center/views/tabs/command-center-map/command-center-map.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: CommandCenterMapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandCenterMapPageModule", function() { return CommandCenterMapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _command_center_map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./command-center-map-routing.module */ "vJiP");
/* harmony import */ var _command_center_map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./command-center-map.page */ "9aS3");







let CommandCenterMapPageModule = class CommandCenterMapPageModule {
};
CommandCenterMapPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _command_center_map_routing_module__WEBPACK_IMPORTED_MODULE_5__["CommandCenterMapPageRoutingModule"]
        ],
        declarations: [_command_center_map_page__WEBPACK_IMPORTED_MODULE_6__["CommandCenterMapPage"]]
    })
], CommandCenterMapPageModule);



/***/ }),

/***/ "vJiP":
/*!***************************************************************************************************!*\
  !*** ./src/app/command-center/views/tabs/command-center-map/command-center-map-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: CommandCenterMapPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandCenterMapPageRoutingModule", function() { return CommandCenterMapPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _command_center_map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./command-center-map.page */ "9aS3");




const routes = [
    {
        path: '',
        component: _command_center_map_page__WEBPACK_IMPORTED_MODULE_3__["CommandCenterMapPage"]
    }
];
let CommandCenterMapPageRoutingModule = class CommandCenterMapPageRoutingModule {
};
CommandCenterMapPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CommandCenterMapPageRoutingModule);



/***/ }),

/***/ "xi9/":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/command-center/views/tabs/command-center-map/command-center-map.page.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>command-center-map</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n<canvas id=\"mapFabricCanvas\"></canvas>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "z861":
/*!*******************************************************************************************!*\
  !*** ./src/app/command-center/views/tabs/command-center-map/command-center-map.page.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tYW5kLWNlbnRlci1tYXAucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=tabs-command-center-map-command-center-map-module.js.map