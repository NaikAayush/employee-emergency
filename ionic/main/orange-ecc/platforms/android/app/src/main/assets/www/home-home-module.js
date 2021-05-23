(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_slider_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-slider/home.page */ "MBCS");




const routes = [
    {
        path: '',
        component: _home_slider_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "LPYW":
/*!*************************************************!*\
  !*** ./src/app/home/home-slider/home.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "MBCS":
/*!***********************************************!*\
  !*** ./src/app/home/home-slider/home.page.ts ***!
  \***********************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "RLzv");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "LPYW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let HomePage = class HomePage {
    constructor(router) {
        this.router = router;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
        };
    }
    ngOnInit() { }
    swipeNext() {
        this.slides.slideNext();
    }
    navigateToEmployee() {
        this.router.navigateByUrl('/employee');
    }
    navigateToERT() {
        this.router.navigateByUrl('/ert');
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HomePage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['mySlider',] }]
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ }),

/***/ "RLzv":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-slider/home.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Home</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n<!-- <ion-content>\r\n  <div\r\n    class=\"bg-home-1 bg-cover h-full flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8\"\r\n  >\r\n    <div class=\"max-w-md w-full space-y-8\">\r\n      <img\r\n        class=\"mx-auto h-auto w-auto\"\r\n        src=\"assets/home/screen1.png\"\r\n        alt=\"Workflow\"\r\n      />\r\n      <h2 class=\"mt-6 text-center text-2xl font-semibold text-gray-900\">\r\n        This is the Title\r\n      </h2>\r\n      <p class=\"mt-6 text-center text-base font-normal text-gray-900\">\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\r\n        tempor incididunt ut labore et dolore magna aliqua.\r\n      </p>\r\n    </div>\r\n  </div>\r\n</ion-content> -->\r\n\r\n<ion-content>\r\n  <ion-slides [options]=\"slideOpts\" #mySlider>\r\n    <!-- TEST -->\r\n    <!-- <ion-slide\r\n      class=\"h-full flex flex-col items-end justify-center bg-yellow-1000\"\r\n    >\r\n      <div class=\"h-1/3 w-full flex items-center justify-center\">\r\n        <img\r\n          class=\"mx-auto h-auto w-auto\"\r\n          src=\"assets/home/screen1.png\"\r\n          alt=\"Workflow\"\r\n        />\r\n      </div>\r\n      <div\r\n        class=\"bg-white rounded-t-3xl h-2/3 w-full flex items-center justify-center\"\r\n      >\r\n        <div class=\"max-w-md w-full space-y-8\">\r\n          <h2 class=\"mt-6 text-center text-4xl font-bold text-gray-900\">\r\n            This is the Title\r\n          </h2>\r\n          <p class=\"mt-6 text-center text-base font-normal text-gray-900\">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r\n            eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n          </p>\r\n          <div class=\"flex flex-col items-end\">\r\n            <button\r\n              (click)=\"swipeNext()\"\r\n              class=\"transition duration-200 ease-in-out transform hover:scale-110 shadow-lg rounded-full h-14 w-14 text-right flex items-center justify-center bg-yellow-1000 hover:bg-yellow-1200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50 mr-8\"\r\n            >\r\n              <ion-icon name=\"arrow-forward-outline\" color=\"black\"></ion-icon>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n       </div> -->\r\n    <!-- </div> -->\r\n    <!-- </ion-slide> -->\r\n    <!-- TEST -->\r\n\r\n    <ion-slide\r\n      class=\"\r\n        bg-home-1 bg-cover\r\n        h-full\r\n        flex\r\n        items-center\r\n        justify-center\r\n        bg-gray-50\r\n        py-12\r\n        px-4\r\n        sm:px-6\r\n        lg:px-8\r\n      \"\r\n    >\r\n      <!-- <div\r\n        class=\"bg-home-1 bg-cover h-full flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8\"\r\n      > -->\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <img\r\n          class=\"mx-auto h-auto w-auto\"\r\n          src=\"assets/home/screen1.png\"\r\n          alt=\"Workflow\"\r\n        />\r\n        <h2 class=\"mt-6 text-center text-2xl font-semibold text-gray-900\">\r\n          This is the Title\r\n        </h2>\r\n        <p class=\"mt-6 text-center text-base font-normal text-gray-900\">\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r\n          eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n        </p>\r\n        <div class=\"flex flex-col items-end\">\r\n          <button\r\n            (click)=\"swipeNext()\"\r\n            class=\"\r\n              transition\r\n              duration-200\r\n              ease-in-out\r\n              transform\r\n              hover:scale-110\r\n              shadow-lg\r\n              rounded-full\r\n              h-14\r\n              w-14\r\n              text-right\r\n              flex\r\n              items-center\r\n              justify-center\r\n              bg-yellow-1100\r\n              hover:bg-yellow-1200\r\n              focus:outline-none\r\n              focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50\r\n              mr-8\r\n            \"\r\n          >\r\n            <ion-icon name=\"arrow-forward-outline\" color=\"light\"></ion-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <!-- </div> -->\r\n    </ion-slide>\r\n    <ion-slide\r\n      class=\"\r\n        bg-home-2 bg-cover\r\n        h-full\r\n        flex\r\n        items-center\r\n        justify-center\r\n        bg-gray-50\r\n        py-12\r\n        px-4\r\n        sm:px-6\r\n        lg:px-8\r\n      \"\r\n    >\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <img\r\n          class=\"mx-auto h-auto w-auto\"\r\n          src=\"assets/home/screen2.png\"\r\n          alt=\"Workflow\"\r\n        />\r\n        <h2 class=\"mt-6 text-center text-2xl font-semibold text-gray-900\">\r\n          This is the Title\r\n        </h2>\r\n        <p class=\"mt-6 text-center text-base font-normal text-gray-900\">\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r\n          eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n        </p>\r\n        <div class=\"flex flex-col items-end\">\r\n          <button\r\n            (click)=\"swipeNext()\"\r\n            class=\"\r\n              transition\r\n              duration-200\r\n              ease-in-out\r\n              transform\r\n              hover:scale-110\r\n              shadow-lg\r\n              rounded-full\r\n              h-14\r\n              w-14\r\n              text-right\r\n              flex\r\n              items-center\r\n              justify-center\r\n              bg-yellow-1100\r\n              hover:bg-yellow-1200\r\n              focus:outline-none\r\n              focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50\r\n              mr-8\r\n            \"\r\n          >\r\n            <ion-icon name=\"arrow-forward-outline\" color=\"light\"></ion-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </ion-slide>\r\n    <ion-slide\r\n      class=\"\r\n        bg-home-3 bg-cover\r\n        h-full\r\n        flex\r\n        items-center\r\n        justify-center\r\n        bg-gray-50\r\n        py-12\r\n        px-4\r\n        sm:px-6\r\n        lg:px-8\r\n      \"\r\n    >\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <img\r\n          class=\"mx-auto h-auto w-auto\"\r\n          src=\"assets/home/screen3.png\"\r\n          alt=\"Workflow\"\r\n        />\r\n        <h2 class=\"mt-6 text-center text-2xl font-semibold text-gray-900\">\r\n          This is the Title\r\n        </h2>\r\n        <p class=\"mt-6 text-center text-base font-normal text-gray-900\">\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r\n          eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n        </p>\r\n        <div class=\"flex flex-col items-end\">\r\n          <button\r\n            (click)=\"swipeNext()\"\r\n            class=\"\r\n              p-4\r\n              rounded-full\r\n              h-auto\r\n              w-auto\r\n              text-right\r\n              flex\r\n              items-center\r\n              justify-center\r\n              bg-yellow-1100\r\n              hover:bg-yellow-1200\r\n              text-white\r\n              focus:outline-none\r\n              focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50\r\n              mr-8\r\n            \"\r\n          >\r\n            Get Started<ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </ion-slide>\r\n\r\n    <ion-slide\r\n      class=\"\r\n        bg-home-3 bg-cover\r\n        h-full\r\n        flex\r\n        items-center\r\n        justify-center\r\n        bg-gray-50\r\n        py-12\r\n        px-4\r\n        sm:px-6\r\n        lg:px-8\r\n      \"\r\n    >\r\n      <div class=\"max-w-md w-full space-y-8\">\r\n        <img\r\n          class=\"mx-auto h-auto w-auto\"\r\n          src=\"assets/home/auth.png\"\r\n          alt=\"Workflow\"\r\n        />\r\n        <div class=\"flex flex-col items-center\">\r\n          <button\r\n            (click)=\"navigateToEmployee()\"\r\n            class=\"\r\n              p-4\r\n              rounded-full\r\n              h-auto\r\n              w-auto\r\n              text-right\r\n              flex\r\n              items-center\r\n              justify-center\r\n              bg-yellow-1100\r\n              hover:bg-yellow-1200\r\n              text-white\r\n              focus:outline-none\r\n              focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50\r\n            \"\r\n          >\r\n            Login as Employee<ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n          </button>\r\n        </div>\r\n        <div class=\"flex flex-col items-center\">\r\n          <button\r\n            (click)=\"navigateToERT()\"\r\n            class=\"\r\n              p-4\r\n              rounded-full\r\n              h-auto\r\n              w-auto\r\n              text-right\r\n              flex\r\n              items-center\r\n              justify-center\r\n              bg-yellow-1100\r\n              hover:bg-yellow-1200\r\n              text-white\r\n              focus:outline-none\r\n              focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50\r\n            \"\r\n          >\r\n            Login as ERT<ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-content>\r\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _home_slider_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-slider/home.page */ "MBCS");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
        declarations: [_home_slider_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
    })
], HomePageModule);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map