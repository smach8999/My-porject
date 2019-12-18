(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apod-apod-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/apod/apod.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/apod/apod.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title *ngIf=\"apod\">{{ apod.title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngIf=\"apod\"> \n    <ion-button style=\"margin:0;\" expand=\"full\" size=\"large\" [routerLink]=\"['/apod', date]\">Random</ion-button>\n    <ion-img *ngIf=\"apod.media_type=='image'\" [src]=\"apod.url\" alt=\"{{ apod.title }}\"></ion-img>\n    <div id=\"apodVideo\" *ngIf=\"apod.media_type=='video'\">\n      <iframe [src]=\"apod.url | safe: 'resourceUrl'\" frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n    <ion-card-header>\n      <ion-card-subtitle>\n        <span *ngIf=\"apod.copyright\">&copy; {{  apod.copyright }},</span>\n        {{ apod.date | date }}\n      </ion-card-subtitle>\n      <ion-card-title>{{ apod.title }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      {{ apod.explanation }}\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./node_modules/safe-pipe/index.js":
/*!*****************************************!*\
  !*** ./node_modules/safe-pipe/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./safe.pipe */ "./node_modules/safe-pipe/safe.pipe.js"));
__export(__webpack_require__(/*! ./safe.module */ "./node_modules/safe-pipe/safe.module.js"));
//# sourceMappingURL=/home/embarq/.projects/safe-pipe/index.js.map

/***/ }),

/***/ "./node_modules/safe-pipe/safe.module.js":
/*!***********************************************!*\
  !*** ./node_modules/safe-pipe/safe.module.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var safe_pipe_1 = __webpack_require__(/*! ./safe.pipe */ "./node_modules/safe-pipe/safe.pipe.js");
var SafePipeModule = (function () {
    function SafePipeModule() {
    }
    return SafePipeModule;
}());
SafePipeModule = __decorate([
    core_1.NgModule({
        declarations: [safe_pipe_1.SafePipe],
        exports: [safe_pipe_1.SafePipe],
        imports: [common_1.CommonModule]
    })
], SafePipeModule);
exports.SafePipeModule = SafePipeModule;
//# sourceMappingURL=/home/embarq/.projects/safe-pipe/safe.module.js.map

/***/ }),

/***/ "./node_modules/safe-pipe/safe.pipe.js":
/*!*********************************************!*\
  !*** ./node_modules/safe-pipe/safe.pipe.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error("SafePipe unable to bypass security for invalid type: " + type);
        }
    };
    return SafePipe;
}());
SafePipe = __decorate([
    core_1.Pipe({
        name: 'safe'
    }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], SafePipe);
exports.SafePipe = SafePipe;
//# sourceMappingURL=/home/embarq/.projects/safe-pipe/safe.pipe.js.map

/***/ }),

/***/ "./src/app/apod.service.ts":
/*!*********************************!*\
  !*** ./src/app/apod.service.ts ***!
  \*********************************/
/*! exports provided: ApodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApodService", function() { return ApodService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ng_apod_config_ng_apod_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ng-apod/config/ng-apod.config */ "../ng-apod/config/ng-apod.config.ts");




let ApodService = class ApodService {
    constructor(http, ngApodConfig) {
        this.http = http;
        this.ngApodConfig = ngApodConfig;
        this.url = `https://api.nasa.gov/planetary/apod?api_key=${this.ngApodConfig.key}`;
    }
    getApod(date) {
        return this.http.get(`${this.url}&date=${date}`);
    }
};
ApodService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ng_apod_config_ng_apod_config__WEBPACK_IMPORTED_MODULE_3__["NgApodConfig"] }
];
ApodService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ng_apod_config_ng_apod_config__WEBPACK_IMPORTED_MODULE_3__["NgApodConfig"]])
], ApodService);



/***/ }),

/***/ "./src/app/apod/apod.module.ts":
/*!*************************************!*\
  !*** ./src/app/apod/apod.module.ts ***!
  \*************************************/
/*! exports provided: ApodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApodPageModule", function() { return ApodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _apod_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apod.page */ "./src/app/apod/apod.page.ts");
/* harmony import */ var safe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! safe-pipe */ "./node_modules/safe-pipe/index.js");
/* harmony import */ var safe_pipe__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(safe_pipe__WEBPACK_IMPORTED_MODULE_7__);








const routes = [
    {
        path: '',
        component: _apod_page__WEBPACK_IMPORTED_MODULE_6__["ApodPage"]
    }
];
let ApodPageModule = class ApodPageModule {
};
ApodPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            safe_pipe__WEBPACK_IMPORTED_MODULE_7__["SafePipeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_apod_page__WEBPACK_IMPORTED_MODULE_6__["ApodPage"]]
    })
], ApodPageModule);



/***/ }),

/***/ "./src/app/apod/apod.page.scss":
/*!*************************************!*\
  !*** ./src/app/apod/apod.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fwb2QvYXBvZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/apod/apod.page.ts":
/*!***********************************!*\
  !*** ./src/app/apod/apod.page.ts ***!
  \***********************************/
/*! exports provided: ApodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApodPage", function() { return ApodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _apod_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apod.service */ "./src/app/apod.service.ts");




let ApodPage = class ApodPage {
    constructor(apodService, route) {
        this.apodService = apodService;
        this.route = route;
    }
    ionViewWillEnter() {
        this.route.params.subscribe((params) => {
            if (params['date']) {
                this.getApod(params['date']);
                // }else{
                //   this.getApod(new Date().toISOString().slice(0, 10));
                // }
            }
            else {
                var date = new Date;
                date.setDate(date.getDate() - 1);
                this.getApod(date.toISOString().slice(0, 10));
            }
        });
    }
    randomDate(start, end) {
        let date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return new Date((date.getTime() - date.getTimezoneOffset() * 60000)).toISOString().slice(0, 10);
    }
    getApod(date) {
        this.apodService.getApod(date)
            .subscribe((result) => {
            this.apod = result;
            this.date = this.randomDate(new Date(2019, 10, 20), new Date());
        });
    }
};
ApodPage.ctorParameters = () => [
    { type: _apod_service__WEBPACK_IMPORTED_MODULE_3__["ApodService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ApodPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-apod',
        template: __webpack_require__(/*! raw-loader!./apod.page.html */ "./node_modules/raw-loader/index.js!./src/app/apod/apod.page.html"),
        styles: [__webpack_require__(/*! ./apod.page.scss */ "./src/app/apod/apod.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_apod_service__WEBPACK_IMPORTED_MODULE_3__["ApodService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], ApodPage);



/***/ })

}]);
//# sourceMappingURL=apod-apod-module-es2015.js.map