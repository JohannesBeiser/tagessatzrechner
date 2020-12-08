(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Settings => Home, Settings => Groups, Groups => Home', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Home => Settings, Home => Groups, Groups => Settings', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ])
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _screens_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/home/home.component */ "./src/app/screens/home/home.component.ts");
/* harmony import */ var _screens_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/settings/settings.component */ "./src/app/screens/settings/settings.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _screens_groups_groups_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screens/groups/groups.component */ "./src/app/screens/groups/groups.component.ts");









const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _screens_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], data: { animation: 'Home' } },
    { path: 'settings', component: _screens_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"], data: { animation: 'Settings' } },
    { path: 'groups', component: _screens_groups_groups_component__WEBPACK_IMPORTED_MODULE_6__["GroupsComponent"], data: { animation: 'Groups' } },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_slider_slider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/slider/slider.service */ "./src/app/services/slider/slider.service.ts");
/* harmony import */ var _services_filter_filter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/filter/filter.service */ "./src/app/services/filter/filter.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _screens_add_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./screens/add/add.component */ "./src/app/screens/add/add.component.ts");
/* harmony import */ var _screens_search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./screens/search/search.component */ "./src/app/screens/search/search.component.ts");














function AppComponent_app_header_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r71.appHeadline);
} }
function AppComponent_app_header_1_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_app_header_1_i_2_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r82.filterService.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_back_ios");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_app_header_1_i_4_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_app_header_1_i_4_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r84.resetTemporary(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_app_header_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r78.appHeadline);
} }
function AppComponent_app_header_1_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_app_header_1_i_11_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_app_header_1_i_11_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r86.filterService.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "filter_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_app_header_1_div_13_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r88.filterTitles.date);
} }
function AppComponent_app_header_1_div_13_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_app_header_1_div_13_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r90.filterTitles.group);
} }
function AppComponent_app_header_1_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_app_header_1_div_13_Template_i_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r91.filterService.switchMonth("decrement"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_app_header_1_div_13_Template_div_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r93.filterService.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_app_header_1_div_13_span_5_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_app_header_1_div_13_span_6_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_app_header_1_div_13_span_7_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_app_header_1_div_13_Template_i_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r94.filterService.switchMonth("increment"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](!_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 9, ctx_r81.filterService.filterShown$) && ctx_r81.appHeadline == "Overview" ? "slideInDown" : "slideOutUp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx_r81.currentFilter$.value.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r81.filterTitles == null ? null : ctx_r81.filterTitles.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r81.filterTitles == null ? null : ctx_r81.filterTitles.date) && (ctx_r81.filterTitles == null ? null : ctx_r81.filterTitles.group));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r81.filterTitles == null ? null : ctx_r81.filterTitles.group);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx_r81.currentFilter$.value.date);
} }
function AppComponent_app_header_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_app_header_1_i_2_Template, 2, 0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_app_header_1_i_4_Template, 2, 0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_app_header_1_span_7_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_app_header_1_span_9_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_app_header_1_i_11_Template, 2, 0, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_app_header_1_div_13_Template, 10, 11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx_r72.filterService.filterShown$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, ctx_r72.filterService.filterState$).temporaryFilter && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 10, ctx_r72.filterService.filterShown$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 12, ctx_r72.filterService.filterShown$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 14, ctx_r72.filterService.filterShown$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 16, ctx_r72.filterService.filterShown$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r72.filterTitles == null ? null : ctx_r72.filterTitles.date) || (ctx_r72.filterTitles == null ? null : ctx_r72.filterTitles.group));
} }
function AppComponent_app_add_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-add");
} }
function AppComponent_app_search_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-search");
} }
class AppComponent {
    constructor(router, sliderService, filterService, datePipe) {
        this.router = router;
        this.sliderService = sliderService;
        this.filterService = filterService;
        this.datePipe = datePipe;
        this.title = 'Expenses';
        this.appHeadline = "ExpenseManager";
        this.currentFilter$ = this.filterService.getFilter();
        this.filterTitles = null;
        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"])).subscribe((event) => {
            let url = event.url.substring(1);
            switch (url) {
                case "home":
                    this.appHeadline = "Overview";
                    break;
                case "groups":
                    this.appHeadline = "Groups";
                    this.resetTemporary();
                    break;
                case "settings":
                    this.appHeadline = "Settings";
                    this.resetTemporary();
                    break;
                default:
                    this.appHeadline = "Overview";
                    break;
            }
        });
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.currentFilter$, this.filterService.monthSwitched$).subscribe(([filter, monthSwitch]) => {
            let tempString = {
                date: null,
                group: null
            };
            if (monthSwitch) {
                tempString.date = this.datePipe.transform(`${monthSwitch.year}-${monthSwitch.month}-01`, 'MMM y');
            }
            else {
                if (filter.date) {
                    tempString.date = this.datePipe.transform(`${filter.date.year}-${filter.date.month}-01`, 'MMM y');
                }
                else if (filter.last30Active) {
                    tempString.date = "Last 30 days";
                }
            }
            if (filter.groups) {
                // TODO not just first but all
                tempString.group = `${filter.groups[0]}`;
                for (let i = 1; i < filter.groups.length; i++) {
                    tempString.group += `, ${filter.groups[i]}`;
                }
            }
            this.filterTitles = tempString;
        });
    }
    resetTemporary() {
        this.filterService.resetFilter();
        // this.router.navigate(['/groups']);
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_5__["SliderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_6__["FilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 7, consts: [[4, "ngIf"], [1, "router-body"], ["outlet", "outlet"], [1, "app-slider"], [1, "flexbox", "justify", "align", "h-100"], [1, "home-general-header", "flexbox", "justify", "align", "h-100"], ["class", "material-icons-outlined back-icon", 3, "click", 4, "ngIf"], ["class", "material-icons-outlined filter-icon", 3, "click", 4, "ngIf"], ["class", "home-component-header animated faster", 3, "className", 4, "ngIf"], [1, "material-icons-outlined", "back-icon", 3, "click"], [1, "material-icons-outlined", "filter-icon", 3, "click"], [1, "home-component-header", "animated", "faster"], [1, "material-icons", 3, "click"], [1, "filter-title", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_header_0_Template, 4, 1, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_header_1_Template, 14, 18, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_app_add_7_Template, 1, 0, "app-add", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_app_search_8_Template, 1, 0, "app-search", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appHeadline !== "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appHeadline === "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r73));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("sliderActive", ctx.sliderService.getActiveComponent());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sliderService.activeComponent === "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sliderService.activeComponent === "search");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _screens_add_add_component__WEBPACK_IMPORTED_MODULE_10__["AddComponent"], _screens_search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".router-body[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1;\n  background: #eee;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.back-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  padding: 12px;\n  font-size: 18px;\n}\n.filter-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  padding: 8px 12px 8px 8px;\n}\n.app-slider[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n  display: none;\n}\n.app-slider[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #eee;\n  display: -webkit-box;\n  display: flex;\n}\n.app-slider.sliderActive[_ngcontent-%COMP%] {\n  display: block;\n}\n.home-general-header[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  background: #76757b;\n}\n.home-component-header[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  background: #76757b;\n  -webkit-box-align: center;\n          align-items: center;\n  min-height: 22px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.home-component-header[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n.home-component-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n}\n.home-component-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child {\n  padding-right: 16px;\n}\n.home-component-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:last-child {\n  padding-left: 16px;\n}\n.home-component-header[_ngcontent-%COMP%]   i.disabled[_ngcontent-%COMP%] {\n  opacity: 0.2;\n}\n.home-component-header[_ngcontent-%COMP%]   .filter-title[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1;\n  text-align: center;\n  font-family: \"Roboto-Light\";\n  font-size: 14px;\n}\n.home-component-header[_ngcontent-%COMP%]   .filter-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white;\n}\n.home-component-header[_ngcontent-%COMP%]   .filter-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::first-letter {\n  text-transform: uppercase;\n}\n.hiddenHeader[_ngcontent-%COMP%] {\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTovRG9jdW1lbnRzL1Byb2pla3RlL2V4cGVuc2VtYW5hZ2VyMi0wL2Zyb250ZW5kL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNGSjtBREtBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7QUNISjtBRE9BO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNMSjtBREFBO0VBUVEsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDTFI7QURRSTtFQUNJLGNBQUE7QUNOUjtBRFdBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNUSjtBRFlBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNWSjtBRElBO0VBU00sWUFBQTtBQ1ZOO0FEQ0E7RUFhTSxZQUFBO0FDWE47QURZTTtFQUNFLG1CQUFBO0FDVlI7QURZTTtFQUNFLGtCQUFBO0FDVlI7QURhTTtFQUNFLFlBQUE7QUNYUjtBRFhBO0VBMkJNLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FDYk47QURqQkE7RUFxQ1EsWUFBQTtBQ2pCUjtBRGFRO0VBQ0UseUJBQUE7QUNYVjtBRG1CRTtFQUNFLGtCQUFBO0FDakJKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3ZhcmlhYmxlc1wiO1xuXG4ucm91dGVyLWJvZHkge1xuICAgIGZsZXggICAgOiAxO1xuICAgIGJhY2tncm91bmQ6IEBhcHAtbGlnaHQ7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5iYWNrLWljb257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5maWx0ZXItaWNvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZzogOHB4IDEycHggOHB4IDhweDtcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5hcHAtc2xpZGVyIHtcbiAgICBwb3NpdGlvbiAgICA6IGZpeGVkO1xuICAgIHdpZHRoICAgICAgIDogMTAwJTtcbiAgICBoZWlnaHQgICAgICA6IDEwMCU7XG4gICAgei1pbmRleCAgICAgOiAxMDAwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgXG4gICAgPip7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAmLnNsaWRlckFjdGl2ZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxuXG4uaG9tZS1nZW5lcmFsLWhlYWRlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgICBiYWNrZ3JvdW5kOiBAYXBwLWhlYWRlci1jb2xvcjtcbn1cblxuLmhvbWUtY29tcG9uZW50LWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiBAYXBwLWhlYWRlci1jb2xvcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDIycHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgXG4gICAgPip7XG4gICAgICBwYWRkaW5nOiA0cHg7XG4gICAgfVxuXG4gICAgaSB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgICAgfVxuICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICB9XG4gIFxuICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC5maWx0ZXItdGl0bGUge1xuICAgICAgZmxleDogMTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90by1MaWdodFwiO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICBcbiAgICAgIHNwYW4ge1xuICAgICAgICAmOjpmaXJzdC1sZXR0ZXIge1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5oaWRkZW5IZWFkZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9IiwiLnJvdXRlci1ib2R5IHtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLmJhY2staWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMTJweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmZpbHRlci1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogOHB4IDEycHggOHB4IDhweDtcbn1cbi5hcHAtc2xpZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuLmFwcC1zbGlkZXIgPiAqIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmFwcC1zbGlkZXIuc2xpZGVyQWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaG9tZS1nZW5lcmFsLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgYmFja2dyb3VuZDogIzc2NzU3Yjtcbn1cbi5ob21lLWNvbXBvbmVudC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiAjNzY3NTdiO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5ob21lLWNvbXBvbmVudC1oZWFkZXIgPiAqIHtcbiAgcGFkZGluZzogNHB4O1xufVxuLmhvbWUtY29tcG9uZW50LWhlYWRlciBpIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmhvbWUtY29tcG9uZW50LWhlYWRlciBpOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cbi5ob21lLWNvbXBvbmVudC1oZWFkZXIgaTpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLmhvbWUtY29tcG9uZW50LWhlYWRlciBpLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC4yO1xufVxuLmhvbWUtY29tcG9uZW50LWhlYWRlciAuZmlsdGVyLXRpdGxlIHtcbiAgZmxleDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJSb2JvdG8tTGlnaHRcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmhvbWUtY29tcG9uZW50LWhlYWRlciAuZmlsdGVyLXRpdGxlIHNwYW4ge1xuICBjb2xvcjogd2hpdGU7XG59XG4uaG9tZS1jb21wb25lbnQtaGVhZGVyIC5maWx0ZXItdGl0bGUgc3Bhbjo6Zmlyc3QtbGV0dGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5oaWRkZW5IZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4iXX0= */"], data: { animation: [
            _animations__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]
            // animation triggers go here
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less'],
                animations: [
                    _animations__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]
                    // animation triggers go here
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_slider_slider_service__WEBPACK_IMPORTED_MODULE_5__["SliderService"] }, { type: _services_filter_filter_service__WEBPACK_IMPORTED_MODULE_6__["FilterService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _screens_add_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./screens/add/add.component */ "./src/app/screens/add/add.component.ts");
/* harmony import */ var _screens_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./screens/home/home.component */ "./src/app/screens/home/home.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _screens_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./screens/settings/settings.component */ "./src/app/screens/settings/settings.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _screens_groups_groups_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./screens/groups/groups.component */ "./src/app/screens/groups/groups.component.ts");
/* harmony import */ var _screens_search_search_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./screens/search/search.component */ "./src/app/screens/search/search.component.ts");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _screens_filter_filter_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./screens/filter/filter.component */ "./src/app/screens/filter/filter.component.ts");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _pipes_pretty_currency_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipes/pretty-currency.pipe */ "./src/app/pipes/pretty-currency.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _pipes_date_duration_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pipes/date-duration.pipe */ "./src/app/pipes/date-duration.pipe.ts");
/* harmony import */ var _pipes_date_long_short_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pipes/date-long-short.pipe */ "./src/app/pipes/date-long-short.pipe.ts");
/* harmony import */ var _components_expense_list_expense_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/expense-list/expense-list.component */ "./src/app/components/expense-list/expense-list.component.ts");
/* harmony import */ var _screens_edit_edit_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./screens/edit/edit.component */ "./src/app/screens/edit/edit.component.ts");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _components_expense_list_expense_bottom_sheet_expense_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/expense-list/expense-bottom-sheet/expense-bottom-sheet.component */ "./src/app/components/expense-list/expense-bottom-sheet/expense-bottom-sheet.component.ts");
/* harmony import */ var _screens_settings_settings_bottom_sheet_settings_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./screens/settings/settings-bottom-sheet/settings-bottom-sheet.component */ "./src/app/screens/settings/settings-bottom-sheet/settings-bottom-sheet.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _components_recurring_expense_list_recurring_expense_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/recurring-expense-list/recurring-expense-list.component */ "./src/app/components/recurring-expense-list/recurring-expense-list.component.ts");
/* harmony import */ var _components_recurring_expense_list_expense_bottom_sheet_recurring_expense_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/recurring-expense-list/expense-bottom-sheet/recurring-expense-bottom-sheet.component */ "./src/app/components/recurring-expense-list/expense-bottom-sheet/recurring-expense-bottom-sheet.component.ts");
/* harmony import */ var _pipes_duration_week_day_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pipes/duration-week-day.pipe */ "./src/app/pipes/duration-week-day.pipe.ts");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/__ivy_ngcc__/fesm2015/highcharts-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common/locales/de */ "./node_modules/@angular/common/locales/de.js");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _components_stt_recorder_stt_recorder_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/stt-recorder/stt-recorder.component */ "./src/app/components/stt-recorder/stt-recorder.component.ts");












































Object(_angular_common__WEBPACK_IMPORTED_MODULE_24__["registerLocaleData"])(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_39___default.a, 'de');
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_24__["DatePipe"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__["MatTabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            highcharts_angular__WEBPACK_IMPORTED_MODULE_37__["HighchartsChartModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_38__["HttpClientModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _screens_add_add_component__WEBPACK_IMPORTED_MODULE_7__["AddComponent"],
        _screens_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
        _screens_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"],
        _screens_groups_groups_component__WEBPACK_IMPORTED_MODULE_18__["GroupsComponent"],
        _screens_search_search_component__WEBPACK_IMPORTED_MODULE_19__["SearchComponent"],
        _screens_filter_filter_component__WEBPACK_IMPORTED_MODULE_21__["FilterComponent"],
        _pipes_pretty_currency_pipe__WEBPACK_IMPORTED_MODULE_23__["PrettyCurrencyPipe"],
        _pipes_date_duration_pipe__WEBPACK_IMPORTED_MODULE_26__["DateDurationPipe"],
        _pipes_date_long_short_pipe__WEBPACK_IMPORTED_MODULE_27__["DateLongShortPipe"],
        _components_expense_list_expense_list_component__WEBPACK_IMPORTED_MODULE_28__["ExpenseListComponent"],
        _screens_edit_edit_component__WEBPACK_IMPORTED_MODULE_29__["EditComponent"],
        _components_expense_list_expense_bottom_sheet_expense_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_31__["ExpenseBottomSheetComponent"],
        _screens_settings_settings_bottom_sheet_settings_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_32__["SettingsBottomSheetComponent"],
        _components_recurring_expense_list_recurring_expense_list_component__WEBPACK_IMPORTED_MODULE_34__["RecurringExpenseListComponent"],
        _components_recurring_expense_list_expense_bottom_sheet_recurring_expense_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_35__["RecurringExpenseBottomSheetComponent"],
        _pipes_duration_week_day_pipe__WEBPACK_IMPORTED_MODULE_36__["DurationWeekDayPipe"],
        _components_stt_recorder_stt_recorder_component__WEBPACK_IMPORTED_MODULE_40__["SttRecorderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__["MatTabsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
        highcharts_angular__WEBPACK_IMPORTED_MODULE_37__["HighchartsChartModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_38__["HttpClientModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _screens_add_add_component__WEBPACK_IMPORTED_MODULE_7__["AddComponent"],
                    _screens_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                    _screens_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"],
                    _screens_groups_groups_component__WEBPACK_IMPORTED_MODULE_18__["GroupsComponent"],
                    _screens_search_search_component__WEBPACK_IMPORTED_MODULE_19__["SearchComponent"],
                    _screens_filter_filter_component__WEBPACK_IMPORTED_MODULE_21__["FilterComponent"],
                    _pipes_pretty_currency_pipe__WEBPACK_IMPORTED_MODULE_23__["PrettyCurrencyPipe"],
                    _pipes_date_duration_pipe__WEBPACK_IMPORTED_MODULE_26__["DateDurationPipe"],
                    _pipes_date_long_short_pipe__WEBPACK_IMPORTED_MODULE_27__["DateLongShortPipe"],
                    _components_expense_list_expense_list_component__WEBPACK_IMPORTED_MODULE_28__["ExpenseListComponent"],
                    _screens_edit_edit_component__WEBPACK_IMPORTED_MODULE_29__["EditComponent"],
                    _components_expense_list_expense_bottom_sheet_expense_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_31__["ExpenseBottomSheetComponent"],
                    _screens_settings_settings_bottom_sheet_settings_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_32__["SettingsBottomSheetComponent"],
                    _components_recurring_expense_list_recurring_expense_list_component__WEBPACK_IMPORTED_MODULE_34__["RecurringExpenseListComponent"],
                    _components_recurring_expense_list_expense_bottom_sheet_recurring_expense_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_35__["RecurringExpenseBottomSheetComponent"],
                    _pipes_duration_week_day_pipe__WEBPACK_IMPORTED_MODULE_36__["DurationWeekDayPipe"],
                    _components_stt_recorder_stt_recorder_component__WEBPACK_IMPORTED_MODULE_40__["SttRecorderComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__["MatTabsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                    highcharts_angular__WEBPACK_IMPORTED_MODULE_37__["HighchartsChartModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_38__["HttpClientModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production })
                ],
                providers: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_24__["DatePipe"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/expense-list/expense-bottom-sheet/expense-bottom-sheet.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/expense-list/expense-bottom-sheet/expense-bottom-sheet.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ExpenseBottomSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseBottomSheetComponent", function() { return ExpenseBottomSheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var src_app_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/slider/slider.service */ "./src/app/services/slider/slider.service.ts");
/* harmony import */ var src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/expenses/expense.service */ "./src/app/services/expenses/expense.service.ts");






class ExpenseBottomSheetComponent {
    constructor(expense, sliderService, expenseService, bottomSheetRef) {
        this.expense = expense;
        this.sliderService = sliderService;
        this.expenseService = expenseService;
        this.bottomSheetRef = bottomSheetRef;
    }
    ngOnInit() {
        this.bottomSheetRef.backdropClick().subscribe(() => {
            document.body.style.backgroundColor = "#76757b";
        });
    }
    deleteExpense(e, key) {
        e.stopPropagation();
        if (confirm("Do you really want to delete this expense?")) {
            this.expenseService.deleteExpense(key, "expenses");
            this.dismiss();
        }
        // this.detailViewShownForIndex = null;
    }
    editExpense(e) {
        this.sliderService.show('add', this.expense);
        this.dismiss();
        event.preventDefault();
    }
    close(event) {
        this.dismiss();
        event.preventDefault();
    }
    dismiss() {
        document.body.style.backgroundColor = "#76757b";
        this.bottomSheetRef.dismiss();
    }
}
ExpenseBottomSheetComponent.ɵfac = function ExpenseBottomSheetComponent_Factory(t) { return new (t || ExpenseBottomSheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_2__["SliderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_3__["ExpenseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"])); };
ExpenseBottomSheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpenseBottomSheetComponent, selectors: [["app-expense-bottom-sheet"]], decls: 8, vars: 0, consts: [[1, "expense-menu"], [1, "option-container"], [1, "edit", "menu-item", 3, "click"], [1, "delete", "menu-item", 3, "click"], [1, "cancel", "menu-item", 3, "click"]], template: function ExpenseBottomSheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpenseBottomSheetComponent_Template_div_click_2_listener($event) { return ctx.editExpense($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpenseBottomSheetComponent_Template_div_click_4_listener($event) { return ctx.deleteExpense($event, ctx.expense.key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpenseBottomSheetComponent_Template_div_click_6_listener($event) { return ctx.close($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".expense-menu[_ngcontent-%COMP%] {\n  background: none;\n  margin: 8px;\n  z-index: 9999;\n  margin-bottom: env(safe-area-inset-top, 8px);\n}\n.expense-menu[_ngcontent-%COMP%]   .option-container[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 12px;\n}\n.expense-menu[_ngcontent-%COMP%]   .option-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid #d8d8d8;\n}\n.expense-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  height: 55px;\n  color: #0c7def;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 1.3em;\n}\n.expense-menu[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 12px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlbnNlLWxpc3QvZXhwZW5zZS1ib3R0b20tc2hlZXQvRTovRG9jdW1lbnRzL1Byb2pla3RlL2V4cGVuc2VtYW5hZ2VyMi0wL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9leHBlbnNlLWxpc3QvZXhwZW5zZS1ib3R0b20tc2hlZXQvZXhwZW5zZS1ib3R0b20tc2hlZXQuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZXhwZW5zZS1saXN0L2V4cGVuc2UtYm90dG9tLXNoZWV0L2V4cGVuc2UtYm90dG9tLXNoZWV0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDRDQUFBO0FDQ0o7QURMQTtFQU9RLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtBQ0NSO0FERVk7RUFDSSxnQ0FBQTtBQ0FoQjtBRGJBO0VBbUJRLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtBQ0hSO0FEckJBO0VBNEJRLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0pSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9leHBlbnNlLWxpc3QvZXhwZW5zZS1ib3R0b20tc2hlZXQvZXhwZW5zZS1ib3R0b20tc2hlZXQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwZW5zZS1tZW51eyBcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG1hcmdpbjogOHB4O1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgbWFyZ2luLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC10b3AsIDhweCk7XG5cbiAgICAub3B0aW9uLWNvbnRhaW5lcntcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjk1KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcblxuICAgICAgICA+ZGl2e1xuICAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpe1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm1lbnUtaXRlbXtcbiAgICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgICBjb2xvcjogIzBjN2RlZjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgfVxuXG4gICAgLmNhbmNlbHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjk1KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufSIsIi5leHBlbnNlLW1lbnUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBtYXJnaW46IDhweDtcbiAgei1pbmRleDogOTk5OTtcbiAgbWFyZ2luLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC10b3AsIDhweCk7XG59XG4uZXhwZW5zZS1tZW51IC5vcHRpb24tY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbi5leHBlbnNlLW1lbnUgLm9wdGlvbi1jb250YWluZXIgPiBkaXY6bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDhkOGQ4O1xufVxuLmV4cGVuc2UtbWVudSAubWVudS1pdGVtIHtcbiAgaGVpZ2h0OiA1NXB4O1xuICBjb2xvcjogIzBjN2RlZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59XG4uZXhwZW5zZS1tZW51IC5jYW5jZWwge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpenseBottomSheetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-expense-bottom-sheet',
                templateUrl: './expense-bottom-sheet.component.html',
                styleUrls: ['./expense-bottom-sheet.component.less']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"]]
            }] }, { type: src_app_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_2__["SliderService"] }, { type: src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_3__["ExpenseService"] }, { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/expense-list/expense-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/expense-list/expense-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ExpenseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseListComponent", function() { return ExpenseListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _expense_bottom_sheet_expense_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expense-bottom-sheet/expense-bottom-sheet.component */ "./src/app/components/expense-list/expense-bottom-sheet/expense-bottom-sheet.component.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/expenses/expense.service */ "./src/app/services/expenses/expense.service.ts");
/* harmony import */ var src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/category/category.service */ "./src/app/services/category/category.service.ts");
/* harmony import */ var src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/filter/filter.service */ "./src/app/services/filter/filter.service.ts");
/* harmony import */ var src_app_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/slider/slider.service */ "./src/app/services/slider/slider.service.ts");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_date_long_short_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/date-long-short.pipe */ "./src/app/pipes/date-long-short.pipe.ts");
/* harmony import */ var _pipes_pretty_currency_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/pretty-currency.pipe */ "./src/app/pipes/pretty-currency.pipe.ts");













function ExpenseListComponent_div_0_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExpenseListComponent_div_0_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expense_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](expense_r127.description);
} }
function ExpenseListComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpenseListComponent_div_0_div_1_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const i_r128 = ctx.index; const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r132.toggleHelpMenu(i_r128); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExpenseListComponent_div_0_div_1_span_1_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "dateLongShort");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "prettyCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ExpenseListComponent_div_0_div_1_div_14_Template, 3, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Group:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpenseListComponent_div_0_div_1_Template_i_click_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const expense_r127 = ctx.$implicit; const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r134.openBottomSheet($event, expense_r127); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expense_r127 = ctx.$implicit;
    const i_r128 = ctx.index;
    const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", expense_r127.recurring);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r126.categoryService.categoryColors[expense_r127.category]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, expense_r127.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](expense_r127.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 11, expense_r127.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideInOut", ctx_r126.helpMenuOpenForIndex(i_r128));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", expense_r127.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", expense_r127.group, "");
} }
function ExpenseListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpenseListComponent_div_0_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r135.stopPropagation($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExpenseListComponent_div_0_div_1_Template, 24, 13, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r125.expenses);
} }
class ExpenseListComponent {
    constructor(expenseService, categoryService, filterService, sliderService, bottomSheet) {
        this.expenseService = expenseService;
        this.categoryService = categoryService;
        this.filterService = filterService;
        this.sliderService = sliderService;
        this.bottomSheet = bottomSheet;
        this.refresh = true;
        this.helper = {};
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.expenseService.expenseDeletedNotifier, this.collapseNotifier).subscribe(() => {
            this.helper = {};
        });
        //TODO : Quick fix for testing --> Debug! 
        this.filterService.sortMethod$.subscribe(() => {
            this.refresh = false;
            setTimeout(() => {
                this.refresh = true;
            }, 0);
        });
    }
    helpMenuOpenForIndex(index) {
        return this.helper[index] || 'out';
    }
    toggleHelpMenu(index) {
        if (this.helper[index]) {
            //already exists --> is open
            this.helper = {};
        }
        else {
            this.helper = {};
            this.helper[index] = 'in';
        }
    }
    stopPropagation(e) {
        e.stopPropagation();
    }
    openBottomSheet(e, expense) {
        e.stopPropagation();
        document.body.style.backgroundColor = "#4f5053";
        this.bottomSheet.open(_expense_bottom_sheet_expense_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_1__["ExpenseBottomSheetComponent"], { data: expense });
    }
}
ExpenseListComponent.ɵfac = function ExpenseListComponent_Factory(t) { return new (t || ExpenseListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_4__["ExpenseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_6__["FilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_7__["SliderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheet"])); };
ExpenseListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpenseListComponent, selectors: [["app-expense-list"]], inputs: { expenses: "expenses", collapseNotifier: "collapseNotifier" }, decls: 1, vars: 1, consts: [["class", "expense-list", 3, "click", 4, "ngIf"], [1, "expense-list", 3, "click"], ["class", "expense-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "expense-item", 3, "click"], ["class", "recurring", 4, "ngIf"], [1, "category-indicator"], [1, "item-content"], [1, "minimal-info"], [1, "date", "info-item"], [1, "name", "info-item"], [1, "amount", "info-item"], [1, "more-info"], ["class", "description flexbox", 4, "ngIf"], [1, "group"], [1, "group-title", "flexbox", "align"], [1, "group-name"], [1, "action-buttons"], [1, "material-icons", 3, "click"], [1, "recurring"], [1, "description", "flexbox"]], template: function ExpenseListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExpenseListComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.refresh);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], pipes: [_pipes_date_long_short_pipe__WEBPACK_IMPORTED_MODULE_10__["DateLongShortPipe"], _pipes_pretty_currency_pipe__WEBPACK_IMPORTED_MODULE_11__["PrettyCurrencyPipe"]], styles: [".expense-list[_ngcontent-%COMP%] {\n  box-shadow: -3px 2px 20px 0px #d8d8d8;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%] {\n  background: #fff;\n  margin: 6px 0;\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .recurring[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0px 4px;\n  font-size: 0.6em;\n  background: #969696;\n  color: white;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .category-indicator[_ngcontent-%COMP%] {\n  background: #444;\n  width: 6px;\n  opacity: 0.9;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%] {\n  padding: 14px 8px;\n  -webkit-box-flex: 1;\n          flex: 1;\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .minimal-info[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .minimal-info[_ngcontent-%COMP%]   .info-item.amount[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .minimal-info[_ngcontent-%COMP%]   .info-item.name[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .minimal-info[_ngcontent-%COMP%]   .info-item.name[_ngcontent-%COMP%], .expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .minimal-info[_ngcontent-%COMP%]   .info-item.name[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .minimal-info[_ngcontent-%COMP%]   .info-item.date[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  padding-top: 16px;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .group-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .group-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  padding: 8px;\n  padding-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlbnNlLWxpc3QvRTovRG9jdW1lbnRzL1Byb2pla3RlL2V4cGVuc2VtYW5hZ2VyMi0wL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9leHBlbnNlLWxpc3QvZXhwZW5zZS1saXN0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL2V4cGVuc2UtbGlzdC9leHBlbnNlLWxpc3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxxQ0FBQTtBQ0RKO0FEQUE7RUFJTSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtBQ0ROO0FETkE7RUFVUSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0RSO0FEZkE7RUFvQlEsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0ZSO0FEcEJBO0VBMEJRLGlCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNIUjtBRDNCQTtFQWlDVSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtBQ0hWO0FEUVk7RUFDRSxpQkFBQTtBQ05kO0FEU1k7RUFDRSxtQkFBQTtVQUFBLE9BQUE7QUNQZDtBRFFjOztFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0xoQjtBRFNZO0VBQ0Usa0JBQUE7QUNQZDtBRGVZO0VBQ0UsaUJBQUE7QUNiZDtBRGpEQTtFQW1FWSxjQUFBO0FDZlo7QURwREE7RUF1RVksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ2hCWjtBRHhEQTtFQTJFYyxpQkFBQTtBQ2hCZDtBRDNEQTtFQStFYyxnQkFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQ2pCZDtBRC9EQTtFQW9GYyxvQkFBQTtFQUFBLGFBQUE7QUNsQmQ7QURsRUE7RUFzRmdCLFlBQUE7RUFDQSxrQkFBQTtBQ2pCaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4cGVuc2UtbGlzdC9leHBlbnNlLWxpc3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdmFyaWFibGVzXCI7XG5cbi5leHBlbnNlLWxpc3Qge1xuICAgIGJveC1zaGFkb3c6IC0zcHggMnB4IDIwcHggMHB4ICNkOGQ4ZDg7XG4gICAgXG4gICAgLmV4cGVuc2UtaXRlbSB7XG4gICAgICBiYWNrZ3JvdW5kOiBAYXBwLXdoaXRlO1xuICAgICAgbWFyZ2luOiA2cHggMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC5yZWN1cnJpbmd7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgcGFkZGluZzogMHB4IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjZlbTtcbiAgICAgICAgYmFja2dyb3VuZDogIzk2OTY5NjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuXG4gICAgICAuY2F0ZWdvcnktaW5kaWNhdG9yIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzQ0NDtcbiAgICAgICAgd2lkdGg6IDZweDtcbiAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgfVxuXG4gICAgICAuaXRlbS1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMTRweCA4cHg7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgLm1pbmltYWwtaW5mbyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAuaW5mby1pdGVtIHtcblxuXG4gICAgICAgICAgICAmLmFtb3VudCB7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLm5hbWUge1xuICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAmLCAmID4gKiB7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZGF0ZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubW9yZS1pbmZvIHtcblxuICAgICAgICAgID5kaXYge1xuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZ3JvdXAge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC5ncm91cC10aXRsZSB7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZ3JvdXAtbmFtZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgID5pe1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDs7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IiwiLmV4cGVuc2UtbGlzdCB7XG4gIGJveC1zaGFkb3c6IC0zcHggMnB4IDIwcHggMHB4ICNkOGQ4ZDg7XG59XG4uZXhwZW5zZS1saXN0IC5leHBlbnNlLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW46IDZweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZXhwZW5zZS1saXN0IC5leHBlbnNlLWl0ZW0gLnJlY3VycmluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogMHB4IDRweDtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgYmFja2dyb3VuZDogIzk2OTY5NjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmV4cGVuc2UtbGlzdCAuZXhwZW5zZS1pdGVtIC5jYXRlZ29yeS1pbmRpY2F0b3Ige1xuICBiYWNrZ3JvdW5kOiAjNDQ0O1xuICB3aWR0aDogNnB4O1xuICBvcGFjaXR5OiAwLjk7XG59XG4uZXhwZW5zZS1saXN0IC5leHBlbnNlLWl0ZW0gLml0ZW0tY29udGVudCB7XG4gIHBhZGRpbmc6IDE0cHggOHB4O1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmV4cGVuc2UtbGlzdCAuZXhwZW5zZS1pdGVtIC5pdGVtLWNvbnRlbnQgLm1pbmltYWwtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5leHBlbnNlLWxpc3QgLmV4cGVuc2UtaXRlbSAuaXRlbS1jb250ZW50IC5taW5pbWFsLWluZm8gLmluZm8taXRlbS5hbW91bnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5leHBlbnNlLWxpc3QgLmV4cGVuc2UtaXRlbSAuaXRlbS1jb250ZW50IC5taW5pbWFsLWluZm8gLmluZm8taXRlbS5uYW1lIHtcbiAgZmxleDogMTtcbn1cbi5leHBlbnNlLWxpc3QgLmV4cGVuc2UtaXRlbSAuaXRlbS1jb250ZW50IC5taW5pbWFsLWluZm8gLmluZm8taXRlbS5uYW1lLFxuLmV4cGVuc2UtbGlzdCAuZXhwZW5zZS1pdGVtIC5pdGVtLWNvbnRlbnQgLm1pbmltYWwtaW5mbyAuaW5mby1pdGVtLm5hbWUgPiAqIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uZXhwZW5zZS1saXN0IC5leHBlbnNlLWl0ZW0gLml0ZW0tY29udGVudCAubWluaW1hbC1pbmZvIC5pbmZvLWl0ZW0uZGF0ZSB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cbi5leHBlbnNlLWxpc3QgLmV4cGVuc2UtaXRlbSAuaXRlbS1jb250ZW50IC5tb3JlLWluZm8gPiBkaXY6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cbi5leHBlbnNlLWxpc3QgLmV4cGVuc2UtaXRlbSAuaXRlbS1jb250ZW50IC5tb3JlLWluZm8gLmRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogOHB4IDA7XG59XG4uZXhwZW5zZS1saXN0IC5leHBlbnNlLWl0ZW0gLml0ZW0tY29udGVudCAubW9yZS1pbmZvIC5ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZXhwZW5zZS1saXN0IC5leHBlbnNlLWl0ZW0gLml0ZW0tY29udGVudCAubW9yZS1pbmZvIC5ncm91cCAuZ3JvdXAtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5leHBlbnNlLWxpc3QgLmV4cGVuc2UtaXRlbSAuaXRlbS1jb250ZW50IC5tb3JlLWluZm8gLmdyb3VwIC5ncm91cC1uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgZmxleDogMTtcbn1cbi5leHBlbnNlLWxpc3QgLmV4cGVuc2UtaXRlbSAuaXRlbS1jb250ZW50IC5tb3JlLWluZm8gLmdyb3VwIC5hY3Rpb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZXhwZW5zZS1saXN0IC5leHBlbnNlLWl0ZW0gLml0ZW0tY29udGVudCAubW9yZS1pbmZvIC5ncm91cCAuYWN0aW9uLWJ1dHRvbnMgPiBpIHtcbiAgcGFkZGluZzogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: '0',
                    overflow: 'hidden',
                    height: '0px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: '1',
                    overflow: 'hidden',
                    height: '*',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('150ms ease-in-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('150ms ease-in-out'))
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpenseListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-expense-list',
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideInOut', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: '0',
                            overflow: 'hidden',
                            height: '0px',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: '1',
                            overflow: 'hidden',
                            height: '*',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('150ms ease-in-out')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('150ms ease-in-out'))
                    ])
                ],
                templateUrl: './expense-list.component.html',
                styleUrls: ['./expense-list.component.less']
            }]
    }], function () { return [{ type: src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_4__["ExpenseService"] }, { type: src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] }, { type: src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_6__["FilterService"] }, { type: src_app_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_7__["SliderService"] }, { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheet"] }]; }, { expenses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], collapseNotifier: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/slider/slider.service */ "./src/app/services/slider/slider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _stt_recorder_stt_recorder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stt-recorder/stt-recorder.component */ "./src/app/components/stt-recorder/stt-recorder.component.ts");





class FooterComponent {
    constructor(sliderService) {
        this.sliderService = sliderService;
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_1__["SliderService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 12, vars: 0, consts: [[1, "footer-component-container"], ["routerLink", "/home", "routerLinkActive", "active", 1, "flex-1", "flexbox", "justify", "h-100", "align"], [1, "image-icon", "home"], ["routerLink", "/groups", "routerLinkActive", "active", 1, "flex-1", "flexbox", "justify", "h-100", "align"], [1, "image-icon", "groups"], [1, "flex-1", "flexbox", "justify", "h-100", "align", 3, "click"], [1, "image-icon", "add"], [1, "image-icon", "search"], ["routerLink", "/settings", "routerLinkActive", "active", 1, "flex-1", "flexbox", "justify", "h-100", "align"], [1, "image-icon", "settings"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_span_click_5_listener($event) { return ctx.sliderService.show("add"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_span_click_7_listener($event) { return ctx.sliderService.show("search"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-stt-recorder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _stt_recorder_stt_recorder_component__WEBPACK_IMPORTED_MODULE_3__["SttRecorderComponent"]], styles: [".footer-component-container[_ngcontent-%COMP%] {\n  min-height: 40px;\n  width: 100%;\n  border-top: 1px solid #e6e6e6;\n  background: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.footer-component-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.footer-component-container[_ngcontent-%COMP%]   i.active[_ngcontent-%COMP%] {\n  font-family: 'Material Icons';\n}\n.footer-component-container[_ngcontent-%COMP%]   .image-icon[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  background-size: contain;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.footer-component-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.footer-component-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .home[_ngcontent-%COMP%] {\n  background-image: url('home_outlined.png');\n}\n.footer-component-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .groups[_ngcontent-%COMP%] {\n  background-image: url('folder_outlined.png');\n}\n.footer-component-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%] {\n  background-image: url('add.png');\n}\n.footer-component-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  background-image: url('search.png');\n}\n.footer-component-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%] {\n  background-image: url('settings_outlined.png');\n}\n.footer-component-container[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%]   .home[_ngcontent-%COMP%] {\n  background-image: url('home_filled.png');\n}\n.footer-component-container[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%]   .groups[_ngcontent-%COMP%] {\n  background-image: url('folder.png');\n}\n.footer-component-container[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%] {\n  background-image: url('settings_filled.png');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvRTovRG9jdW1lbnRzL1Byb2pla3RlL2V4cGVuc2VtYW5hZ2VyMi0wL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEVEE7RUFXSSxtQkFBQTtVQUFBLE9BQUE7QUNDSjtBRENJO0VBQ0UsNkJBQUE7QUNDTjtBRGZBO0VBbUJJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDREo7QURyQkE7RUEyQk0sNEJBQUE7RUFDQSwyQkFBQTtBQ0hOO0FEekJBO0VBZ0NNLDBDQUFBO0FDSk47QUQ1QkE7RUFvQ00sNENBQUE7QUNMTjtBRC9CQTtFQXdDTSxnQ0FBQTtBQ05OO0FEbENBO0VBNENNLG1DQUFBO0FDUE47QURyQ0E7RUFnRE0sOENBQUE7QUNSTjtBRFdJO0VBRUksd0NBQUE7QUNWUjtBRFFJO0VBTUksbUNBQUE7QUNYUjtBREtJO0VBVUksNENBQUE7QUNaUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItY29tcG9uZW50LWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaSB7XG4gICAgZmxleDogMTtcblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICAgIH1cbiAgfVxuXG4gIC5pbWFnZS1pY29uIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgc3BhbiB7XG4gICAgPioge1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuaG9tZSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZV9vdXRsaW5lZC5wbmcnKTtcbiAgICB9XG5cbiAgICAuZ3JvdXBzIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9mb2xkZXJfb3V0bGluZWQucG5nJyk7XG4gICAgfVxuXG4gICAgLmFkZCB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWRkLnBuZycpO1xuICAgIH1cblxuICAgIC5zZWFyY2gge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NlYXJjaC5wbmcnKTtcbiAgICB9XG5cbiAgICAuc2V0dGluZ3Mge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NldHRpbmdzX291dGxpbmVkLnBuZycpO1xuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgIC5ob21lIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWVfZmlsbGVkLnBuZycpO1xuICAgICAgfVxuXG4gICAgICAuZ3JvdXBzIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ZvbGRlci5wbmcnKTtcbiAgICAgIH1cblxuICAgICAgLnNldHRpbmdzIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NldHRpbmdzX2ZpbGxlZC5wbmcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSIsIi5mb290ZXItY29tcG9uZW50LWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9vdGVyLWNvbXBvbmVudC1jb250YWluZXIgaSB7XG4gIGZsZXg6IDE7XG59XG4uZm9vdGVyLWNvbXBvbmVudC1jb250YWluZXIgaS5hY3RpdmUge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbn1cbi5mb290ZXItY29tcG9uZW50LWNvbnRhaW5lciAuaW1hZ2UtaWNvbiB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZm9vdGVyLWNvbXBvbmVudC1jb250YWluZXIgc3BhbiA+ICoge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4uZm9vdGVyLWNvbXBvbmVudC1jb250YWluZXIgc3BhbiAuaG9tZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lX291dGxpbmVkLnBuZycpO1xufVxuLmZvb3Rlci1jb21wb25lbnQtY29udGFpbmVyIHNwYW4gLmdyb3VwcyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9mb2xkZXJfb3V0bGluZWQucG5nJyk7XG59XG4uZm9vdGVyLWNvbXBvbmVudC1jb250YWluZXIgc3BhbiAuYWRkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2FkZC5wbmcnKTtcbn1cbi5mb290ZXItY29tcG9uZW50LWNvbnRhaW5lciBzcGFuIC5zZWFyY2gge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2VhcmNoLnBuZycpO1xufVxuLmZvb3Rlci1jb21wb25lbnQtY29udGFpbmVyIHNwYW4gLnNldHRpbmdzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NldHRpbmdzX291dGxpbmVkLnBuZycpO1xufVxuLmZvb3Rlci1jb21wb25lbnQtY29udGFpbmVyIHNwYW4uYWN0aXZlIC5ob21lIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWVfZmlsbGVkLnBuZycpO1xufVxuLmZvb3Rlci1jb21wb25lbnQtY29udGFpbmVyIHNwYW4uYWN0aXZlIC5ncm91cHMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZm9sZGVyLnBuZycpO1xufVxuLmZvb3Rlci1jb21wb25lbnQtY29udGFpbmVyIHNwYW4uYWN0aXZlIC5zZXR0aW5ncyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zZXR0aW5nc19maWxsZWQucG5nJyk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.less']
            }]
    }], function () { return [{ type: src_app_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_1__["SliderService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class HeaderComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "header-component-container"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  z-index: 2;\n}\n.header-component-container[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 100%;\n  background: #76757b;\n  font-family: 'Roboto-Regular';\n  padding-top: env(safe-area-inset-top, 0px);\n}\n.header-component-container[_ngcontent-%COMP%]     * {\n  color: #efefef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRTovRG9jdW1lbnRzL1Byb2pla3RlL2V4cGVuc2VtYW5hZ2VyMi0wL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxVQUFBO0FDREo7QURJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDBDQUFBO0FDRko7QURIQTtFQVNZLGNBQUE7QUNIWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi92YXJpYWJsZXNcIjtcblxuOmhvc3R7XG4gICAgei1pbmRleDogMjtcbn1cblxuLmhlYWRlci1jb21wb25lbnQtY29udGFpbmVye1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGJhY2tncm91bmQ6IEBhcHAtaGVhZGVyLWNvbG9yO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvLVJlZ3VsYXInO1xuICAgIHBhZGRpbmctdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCwgMHB4KTtcbiAgICBcbiAgICA6Om5nLWRlZXB7XG4gICAgICAgICp7XG4gICAgICAgICAgICBjb2xvcjogI2VmZWZlZjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCI6aG9zdCB7XG4gIHotaW5kZXg6IDI7XG59XG4uaGVhZGVyLWNvbXBvbmVudC1jb250YWluZXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjNzY3NTdiO1xuICBmb250LWZhbWlseTogJ1JvYm90by1SZWd1bGFyJztcbiAgcGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wLCAwcHgpO1xufVxuLmhlYWRlci1jb21wb25lbnQtY29udGFpbmVyIDo6bmctZGVlcCAqIHtcbiAgY29sb3I6ICNlZmVmZWY7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/recurring-expense-list/expense-bottom-sheet/recurring-expense-bottom-sheet.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/components/recurring-expense-list/expense-bottom-sheet/recurring-expense-bottom-sheet.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: RecurringExpenseBottomSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecurringExpenseBottomSheetComponent", function() { return RecurringExpenseBottomSheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var src_app_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/slider/slider.service */ "./src/app/services/slider/slider.service.ts");
/* harmony import */ var src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/expenses/expense.service */ "./src/app/services/expenses/expense.service.ts");






class RecurringExpenseBottomSheetComponent {
    constructor(expense, sliderService, expenseService, bottomSheetRef) {
        this.expense = expense;
        this.sliderService = sliderService;
        this.expenseService = expenseService;
        this.bottomSheetRef = bottomSheetRef;
    }
    ngOnInit() {
        this.bottomSheetRef.backdropClick().subscribe(() => {
            document.body.style.backgroundColor = "#76757b";
        });
    }
    deleteExpense(e, key) {
        e.stopPropagation();
        if (confirm("Do you really want to delete this recurring expense? Past entries won't be deleted!")) {
            this.expenseService.deleteExpense(key, "recurringExpenses");
            this.dismiss();
        }
        // this.detailViewShownForIndex = null;
    }
    editExpense(e) {
        this.sliderService.show('add', this.expense);
        this.dismiss();
        event.preventDefault();
    }
    close(event) {
        this.dismiss();
        event.preventDefault();
    }
    dismiss() {
        document.body.style.backgroundColor = "#76757b";
        this.bottomSheetRef.dismiss();
    }
}
RecurringExpenseBottomSheetComponent.ɵfac = function RecurringExpenseBottomSheetComponent_Factory(t) { return new (t || RecurringExpenseBottomSheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_2__["SliderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_3__["ExpenseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"])); };
RecurringExpenseBottomSheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecurringExpenseBottomSheetComponent, selectors: [["app-recurring-expense-bottom-sheet"]], decls: 8, vars: 0, consts: [[1, "expense-menu"], [1, "option-container"], [1, "edit", "menu-item", 3, "click"], [1, "delete", "menu-item", 3, "click"], [1, "cancel", "menu-item", 3, "click"]], template: function RecurringExpenseBottomSheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecurringExpenseBottomSheetComponent_Template_div_click_2_listener($event) { return ctx.editExpense($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecurringExpenseBottomSheetComponent_Template_div_click_4_listener($event) { return ctx.deleteExpense($event, ctx.expense.key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecurringExpenseBottomSheetComponent_Template_div_click_6_listener($event) { return ctx.close($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".expense-menu[_ngcontent-%COMP%] {\n  background: none;\n  margin: 8px;\n}\n.expense-menu[_ngcontent-%COMP%]   .option-container[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 12px;\n}\n.expense-menu[_ngcontent-%COMP%]   .option-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid #d8d8d8;\n}\n.expense-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  height: 55px;\n  color: #0c7def;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 1.3em;\n}\n.expense-menu[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 12px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWN1cnJpbmctZXhwZW5zZS1saXN0L2V4cGVuc2UtYm90dG9tLXNoZWV0L0U6L0RvY3VtZW50cy9Qcm9qZWt0ZS9leHBlbnNlbWFuYWdlcjItMC9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvcmVjdXJyaW5nLWV4cGVuc2UtbGlzdC9leHBlbnNlLWJvdHRvbS1zaGVldC9yZWN1cnJpbmctZXhwZW5zZS1ib3R0b20tc2hlZXQuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVjdXJyaW5nLWV4cGVuc2UtbGlzdC9leHBlbnNlLWJvdHRvbS1zaGVldC9yZWN1cnJpbmctZXhwZW5zZS1ib3R0b20tc2hlZXQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUNDSjtBREhBO0VBS1EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FDQ1I7QURFWTtFQUNJLGdDQUFBO0FDQWhCO0FEWEE7RUFpQlEsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0FDSFI7QURuQkE7RUEwQlEscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDSlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlY3VycmluZy1leHBlbnNlLWxpc3QvZXhwZW5zZS1ib3R0b20tc2hlZXQvcmVjdXJyaW5nLWV4cGVuc2UtYm90dG9tLXNoZWV0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGVuc2UtbWVudXsgXG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBtYXJnaW46IDhweDtcblxuICAgIC5vcHRpb24tY29udGFpbmVye1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOTUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuXG4gICAgICAgID5kaXZ7XG4gICAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCl7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubWVudS1pdGVte1xuICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICAgIGNvbG9yOiAjMGM3ZGVmO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICB9XG5cbiAgICAuY2FuY2Vse1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOTUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59IiwiLmV4cGVuc2UtbWVudSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG1hcmdpbjogOHB4O1xufVxuLmV4cGVuc2UtbWVudSAub3B0aW9uLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG4uZXhwZW5zZS1tZW51IC5vcHRpb24tY29udGFpbmVyID4gZGl2Om5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcbn1cbi5leHBlbnNlLW1lbnUgLm1lbnUtaXRlbSB7XG4gIGhlaWdodDogNTVweDtcbiAgY29sb3I6ICMwYzdkZWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuLmV4cGVuc2UtbWVudSAuY2FuY2VsIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecurringExpenseBottomSheetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recurring-expense-bottom-sheet',
                templateUrl: './recurring-expense-bottom-sheet.component.html',
                styleUrls: ['./recurring-expense-bottom-sheet.component.less']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"]]
            }] }, { type: src_app_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_2__["SliderService"] }, { type: src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_3__["ExpenseService"] }, { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/recurring-expense-list/recurring-expense-list.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/recurring-expense-list/recurring-expense-list.component.ts ***!
  \***************************************************************************************/
/*! exports provided: RecurringExpenseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecurringExpenseListComponent", function() { return RecurringExpenseListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _expense_bottom_sheet_recurring_expense_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expense-bottom-sheet/recurring-expense-bottom-sheet.component */ "./src/app/components/recurring-expense-list/expense-bottom-sheet/recurring-expense-bottom-sheet.component.ts");
/* harmony import */ var src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/expenses/expense.service */ "./src/app/services/expenses/expense.service.ts");
/* harmony import */ var src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/category/category.service */ "./src/app/services/category/category.service.ts");
/* harmony import */ var src_app_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/slider/slider.service */ "./src/app/services/slider/slider.service.ts");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_pretty_currency_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pretty-currency.pipe */ "./src/app/pipes/pretty-currency.pipe.ts");










function RecurringExpenseListComponent_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expense_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](expense_r138.description);
} }
function RecurringExpenseListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecurringExpenseListComponent_div_1_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r143); const i_r139 = ctx.index; const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r142.toggleHelpMenu(i_r139); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "prettyCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RecurringExpenseListComponent_div_1_div_10_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Since:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Group:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecurringExpenseListComponent_div_1_Template_i_click_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r143); const expense_r138 = ctx.$implicit; const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r144.openBottomSheet($event, expense_r138); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expense_r138 = ctx.$implicit;
    const i_r139 = ctx.index;
    const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r137.categoryService.categoryColors[expense_r138.category]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](expense_r138.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, expense_r138.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideInOut", ctx_r137.helpMenuOpenForIndex(i_r139));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", expense_r138.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 10, expense_r138.date, "MMM y"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", expense_r138.group, "");
} }
class RecurringExpenseListComponent {
    constructor(expenseService, categoryService, sliderService, bottomSheet) {
        this.expenseService = expenseService;
        this.categoryService = categoryService;
        this.sliderService = sliderService;
        this.bottomSheet = bottomSheet;
        this.helper = {};
    }
    ngOnInit() {
        this.expenseService.expenseDeletedNotifier.subscribe(() => {
            this.helper = {};
        });
        this.collapseNotifier.subscribe(() => {
            this.helper = {};
        });
    }
    helpMenuOpenForIndex(index) {
        return this.helper[index] || 'out';
    }
    toggleHelpMenu(index) {
        if (this.helper[index]) {
            //already exists --> is open
            this.helper = {};
        }
        else {
            this.helper = {};
            this.helper[index] = 'in';
        }
    }
    stopPropagation(e) {
        e.stopPropagation();
    }
    // public toggleDetailView(index: number) {
    //   if (this.detailViewShownForIndex != null && this.detailViewShownForIndex == index) {
    //     this.detailViewShownForIndex = null;
    //   } else {
    //     this.detailViewShownForIndex = index;
    //   }
    // }
    openBottomSheet(e, expense) {
        e.stopPropagation();
        document.body.style.backgroundColor = "#4f5053";
        this.bottomSheet.open(_expense_bottom_sheet_recurring_expense_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_2__["RecurringExpenseBottomSheetComponent"], { data: expense });
        // ExpenseBottomSheetComponent.
    }
}
RecurringExpenseListComponent.ɵfac = function RecurringExpenseListComponent_Factory(t) { return new (t || RecurringExpenseListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_3__["ExpenseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_5__["SliderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheet"])); };
RecurringExpenseListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecurringExpenseListComponent, selectors: [["app-recurring-expense-list"]], inputs: { expenses: "expenses", collapseNotifier: "collapseNotifier" }, decls: 2, vars: 1, consts: [[1, "expense-list", 3, "click"], ["class", "expense-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "expense-item", 3, "click"], [1, "category-indicator"], [1, "item-content"], [1, "minimal-info"], [1, "name", "info-item"], [1, "amount", "info-item"], [1, "more-info"], ["class", "description", 4, "ngIf"], [1, "group"], [1, "group-title"], [1, "group-name"], [1, "action-buttons"], [1, "material-icons", 3, "click"], [1, "description"]], template: function RecurringExpenseListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecurringExpenseListComponent_Template_div_click_0_listener($event) { return ctx.stopPropagation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecurringExpenseListComponent_div_1_Template, 25, 13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.expenses);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [_pipes_pretty_currency_pipe__WEBPACK_IMPORTED_MODULE_8__["PrettyCurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".expense-list[_ngcontent-%COMP%] {\n  box-shadow: -3px 2px 20px 0px #d8d8d8;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%] {\n  background: #fff;\n  margin: 6px 0;\n  display: -webkit-box;\n  display: flex;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .category-indicator[_ngcontent-%COMP%] {\n  background: #444;\n  width: 6px;\n  opacity: 0.9;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%] {\n  padding: 14px 8px;\n  -webkit-box-flex: 1;\n          flex: 1;\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .minimal-info[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .minimal-info[_ngcontent-%COMP%]   .info-item.amount[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .minimal-info[_ngcontent-%COMP%]   .info-item.name[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .minimal-info[_ngcontent-%COMP%]   .info-item.name[_ngcontent-%COMP%], .expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .minimal-info[_ngcontent-%COMP%]   .info-item.name[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .minimal-info[_ngcontent-%COMP%]   .info-item.date[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  padding-top: 16px;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .group-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .group-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n.expense-list[_ngcontent-%COMP%]   .expense-item[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  padding: 8px;\n  padding-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWN1cnJpbmctZXhwZW5zZS1saXN0L0U6L0RvY3VtZW50cy9Qcm9qZWt0ZS9leHBlbnNlbWFuYWdlcjItMC9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvcmVjdXJyaW5nLWV4cGVuc2UtbGlzdC9yZWN1cnJpbmctZXhwZW5zZS1saXN0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL3JlY3VycmluZy1leHBlbnNlLWxpc3QvcmVjdXJyaW5nLWV4cGVuc2UtbGlzdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHFDQUFBO0FDREo7QURBQTtFQUlNLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0ROO0FETEE7RUFTUSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDRFI7QURWQTtFQWVRLGlCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNGUjtBRGpCQTtFQXNCVSxvQkFBQTtFQUFBLGFBQUE7QUNGVjtBREtZO0VBQ0UsaUJBQUE7QUNIZDtBRE1ZO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0FDSmQ7QURLYzs7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNGaEI7QURNWTtFQUNFLGtCQUFBO0FDSmQ7QURZWTtFQUNFLGlCQUFBO0FDVmQ7QUR0Q0E7RUFxRFksY0FBQTtBQ1paO0FEekNBO0VBeURZLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNiWjtBRDdDQTtFQTZEYyxpQkFBQTtBQ2JkO0FEaERBO0VBaUVjLGdCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDZGQ7QURwREE7RUFzRWMsb0JBQUE7RUFBQSxhQUFBO0FDZmQ7QUR2REE7RUF3RWdCLFlBQUE7RUFDQSxrQkFBQTtBQ2RoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjdXJyaW5nLWV4cGVuc2UtbGlzdC9yZWN1cnJpbmctZXhwZW5zZS1saXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlc1wiO1xuXG4uZXhwZW5zZS1saXN0IHtcbiAgICBib3gtc2hhZG93OiAtM3B4IDJweCAyMHB4IDBweCAjZDhkOGQ4O1xuICAgIFxuICAgIC5leHBlbnNlLWl0ZW0ge1xuICAgICAgYmFja2dyb3VuZDogQGFwcC13aGl0ZTtcbiAgICAgIG1hcmdpbjogNnB4IDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAuY2F0ZWdvcnktaW5kaWNhdG9yIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzQ0NDtcbiAgICAgICAgd2lkdGg6IDZweDtcbiAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgfVxuXG4gICAgICAuaXRlbS1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMTRweCA4cHg7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgLm1pbmltYWwtaW5mbyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgIC5pbmZvLWl0ZW0ge1xuICAgICAgICAgICAgJi5hbW91bnQge1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5uYW1lIHtcbiAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgJiwgJiA+ICoge1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmRhdGUge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm1vcmUtaW5mbyB7XG5cbiAgICAgICAgICA+ZGl2IHtcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmdyb3VwIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAuZ3JvdXAtdGl0bGUge1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmdyb3VwLW5hbWUge1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWN0aW9uLWJ1dHRvbnMge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICA+aXtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSIsIi5leHBlbnNlLWxpc3Qge1xuICBib3gtc2hhZG93OiAtM3B4IDJweCAyMHB4IDBweCAjZDhkOGQ4O1xufVxuLmV4cGVuc2UtbGlzdCAuZXhwZW5zZS1pdGVtIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiA2cHggMDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5leHBlbnNlLWxpc3QgLmV4cGVuc2UtaXRlbSAuY2F0ZWdvcnktaW5kaWNhdG9yIHtcbiAgYmFja2dyb3VuZDogIzQ0NDtcbiAgd2lkdGg6IDZweDtcbiAgb3BhY2l0eTogMC45O1xufVxuLmV4cGVuc2UtbGlzdCAuZXhwZW5zZS1pdGVtIC5pdGVtLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNHB4IDhweDtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5leHBlbnNlLWxpc3QgLmV4cGVuc2UtaXRlbSAuaXRlbS1jb250ZW50IC5taW5pbWFsLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmV4cGVuc2UtbGlzdCAuZXhwZW5zZS1pdGVtIC5pdGVtLWNvbnRlbnQgLm1pbmltYWwtaW5mbyAuaW5mby1pdGVtLmFtb3VudCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmV4cGVuc2UtbGlzdCAuZXhwZW5zZS1pdGVtIC5pdGVtLWNvbnRlbnQgLm1pbmltYWwtaW5mbyAuaW5mby1pdGVtLm5hbWUge1xuICBmbGV4OiAxO1xufVxuLmV4cGVuc2UtbGlzdCAuZXhwZW5zZS1pdGVtIC5pdGVtLWNvbnRlbnQgLm1pbmltYWwtaW5mbyAuaW5mby1pdGVtLm5hbWUsXG4uZXhwZW5zZS1saXN0IC5leHBlbnNlLWl0ZW0gLml0ZW0tY29udGVudCAubWluaW1hbC1pbmZvIC5pbmZvLWl0ZW0ubmFtZSA+ICoge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5leHBlbnNlLWxpc3QgLmV4cGVuc2UtaXRlbSAuaXRlbS1jb250ZW50IC5taW5pbWFsLWluZm8gLmluZm8taXRlbS5kYXRlIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuLmV4cGVuc2UtbGlzdCAuZXhwZW5zZS1pdGVtIC5pdGVtLWNvbnRlbnQgLm1vcmUtaW5mbyA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuLmV4cGVuc2UtbGlzdCAuZXhwZW5zZS1pdGVtIC5pdGVtLWNvbnRlbnQgLm1vcmUtaW5mbyAuZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiA4cHggMDtcbn1cbi5leHBlbnNlLWxpc3QgLmV4cGVuc2UtaXRlbSAuaXRlbS1jb250ZW50IC5tb3JlLWluZm8gLmdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5leHBlbnNlLWxpc3QgLmV4cGVuc2UtaXRlbSAuaXRlbS1jb250ZW50IC5tb3JlLWluZm8gLmdyb3VwIC5ncm91cC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmV4cGVuc2UtbGlzdCAuZXhwZW5zZS1pdGVtIC5pdGVtLWNvbnRlbnQgLm1vcmUtaW5mbyAuZ3JvdXAgLmdyb3VwLW5hbWUge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBmbGV4OiAxO1xufVxuLmV4cGVuc2UtbGlzdCAuZXhwZW5zZS1pdGVtIC5pdGVtLWNvbnRlbnQgLm1vcmUtaW5mbyAuZ3JvdXAgLmFjdGlvbi1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5leHBlbnNlLWxpc3QgLmV4cGVuc2UtaXRlbSAuaXRlbS1jb250ZW50IC5tb3JlLWluZm8gLmdyb3VwIC5hY3Rpb24tYnV0dG9ucyA+IGkge1xuICBwYWRkaW5nOiA4cHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    opacity: '0',
                    overflow: 'hidden',
                    height: '0px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    opacity: '1',
                    overflow: 'hidden',
                    height: '*',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms ease-in-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms ease-in-out'))
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecurringExpenseListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recurring-expense-list',
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOut', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: '0',
                            overflow: 'hidden',
                            height: '0px',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: '1',
                            overflow: 'hidden',
                            height: '*',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms ease-in-out')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms ease-in-out'))
                    ])
                ],
                templateUrl: './recurring-expense-list.component.html',
                styleUrls: ['./recurring-expense-list.component.less']
            }]
    }], function () { return [{ type: src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_3__["ExpenseService"] }, { type: src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] }, { type: src_app_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_5__["SliderService"] }, { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheet"] }]; }, { expenses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], collapseNotifier: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/stt-recorder/stt-recorder.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/stt-recorder/stt-recorder.component.ts ***!
  \*******************************************************************/
/*! exports provided: SttRecorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SttRecorderComponent", function() { return SttRecorderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_audio_audio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/audio/audio.service */ "./src/app/services/audio/audio.service.ts");






class SttRecorderComponent {
    constructor(audioService, zone) {
        this.audioService = audioService;
        this.zone = zone;
        this.recordingState$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('inactive');
        this.results = [];
        this.inputBuffer = [];
    }
    ngOnInit() {
    }
    startRecording() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.recordingState$.value === 'inactive') {
                let audioStream = yield this.audioService.getUserMediaStream();
                this.recordingState$.next("recording");
                this.data = new Int16Array();
                this.resampleStream(audioStream).subscribe((data) => {
                    this.data = new Int16Array([...this.data, ...data]);
                });
            }
        });
    }
    stopRecording() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.recordingState$.value === 'recording') {
                this.stopResampling();
                this.recordingState$.next('inactive');
                let result = yield this.audioService.getTextFromAudio(this.data);
                alert(result.transcription);
                // if (metadataResult.transcription !== "") {
                //   this.results.push(metadataResult);
                // }
            }
        });
    }
    resampleStream(sourceStream, emitInterval = Number.MAX_SAFE_INTEGER / 10) {
        this.gumStream = sourceStream;
        this.resampledFrames$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        //TODO: Fix 'as any'
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        let audioSource = this.audioContext.createMediaStreamSource(sourceStream);
        let node = this.audioContext.createScriptProcessor(4096, 1, 1);
        node.onaudioprocess = (e) => {
            this.processAudioFrame(e.inputBuffer.getChannelData(0), audioSource.context.sampleRate);
        };
        audioSource.connect(node);
        node.connect(this.audioContext.destination);
        this.streamEndNotifier$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.resampledStream$ = this.resampledFrames$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.streamEndNotifier$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["bufferTime"])(emitInterval), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.mergeInt16Arrays));
        return this.resampledStream$;
    }
    mergeInt16Arrays(arrays) {
        return arrays.reduce((previous, current) => {
            return new Int16Array([...previous, ...current]);
        }, new Int16Array());
    }
    processAudioFrame(inputFrame, inputSampleRate) {
        for (let i = 0; i < inputFrame.length; i++) {
            this.inputBuffer.push((inputFrame[i]) * 32767);
        }
        const goalSampleRate = 16000;
        const frameLength = 512;
        while ((this.inputBuffer.length * goalSampleRate / inputSampleRate) > frameLength) {
            let outputFrame = new Int16Array(frameLength);
            let sum = 0;
            let num = 0;
            let outputIndex = 0;
            let inputIndex = 0;
            while (outputIndex < frameLength) {
                sum = 0;
                num = 0;
                while (inputIndex < Math.min(this.inputBuffer.length, (outputIndex + 1) * inputSampleRate / goalSampleRate)) {
                    sum += this.inputBuffer[inputIndex];
                    num++;
                    inputIndex++;
                }
                outputFrame[outputIndex] = sum / num;
                outputIndex++;
            }
            this.resampledFrames$.next(outputFrame);
            this.inputBuffer = this.inputBuffer.slice(inputIndex);
        }
    }
    stopResampling() {
        //emit last ping since intervall won't ping last time at say 800ms 
        this.streamEndNotifier$.next();
        this.audioContext.close();
        this.gumStream.getAudioTracks()[0].stop();
        this.inputBuffer = [];
    }
}
SttRecorderComponent.ɵfac = function SttRecorderComponent_Factory(t) { return new (t || SttRecorderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_audio_audio_service__WEBPACK_IMPORTED_MODULE_4__["AudioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
SttRecorderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SttRecorderComponent, selectors: [["app-stt-recorder"]], decls: 3, vars: 0, consts: [[1, "recorder", 3, "pointerdown", "pointerup"]], template: function SttRecorderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "stt-recorder works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pointerdown", function SttRecorderComponent_Template_div_pointerdown_2_listener($event) { return ctx.startRecording(); })("pointerup", function SttRecorderComponent_Template_div_pointerup_2_listener($event) { return ctx.stopRecording(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".recorder[_ngcontent-%COMP%] {\n  background: tomato;\n  width: 100px;\n  height: 100px;\n  position: fixed;\n  top: 50%;\n  left: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdHQtcmVjb3JkZXIvRTovRG9jdW1lbnRzL1Byb2pla3RlL2V4cGVuc2VtYW5hZ2VyMi0wL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9zdHQtcmVjb3JkZXIvc3R0LXJlY29yZGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL3N0dC1yZWNvcmRlci9zdHQtcmVjb3JkZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N0dC1yZWNvcmRlci9zdHQtcmVjb3JkZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjb3JkZXJ7XG4gICAgYmFja2dyb3VuZDogdG9tYXRvO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiAxMDBweDtcbn0iLCIucmVjb3JkZXIge1xuICBiYWNrZ3JvdW5kOiB0b21hdG87XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMTAwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SttRecorderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-stt-recorder',
                templateUrl: './stt-recorder.component.html',
                styleUrls: ['./stt-recorder.component.less']
            }]
    }], function () { return [{ type: src_app_services_audio_audio_service__WEBPACK_IMPORTED_MODULE_4__["AudioService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pipes/date-duration.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/date-duration.pipe.ts ***!
  \*********************************************/
/*! exports provided: DateDurationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateDurationPipe", function() { return DateDurationPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");



class DateDurationPipe {
    constructor() {
        this.monthsAbbrev = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dez"];
    }
    transform(value) {
        let fromDate = new Date(value.firstExpenseDate);
        let toDate = new Date(value.lastExpenseDate);
        // 25 Feb. 2020
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameDay"])(fromDate, toDate)) {
            return `${Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getDate"])(fromDate)} ${this.monthsAbbrev[Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getMonth"])(fromDate)]}. ${Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getYear"])(fromDate)}`;
        }
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameMonth"])(fromDate, toDate)) {
            return `${Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getDate"])(fromDate)} - ${Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getDate"])(toDate)} ${this.monthsAbbrev[Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getMonth"])(fromDate)]}. ${Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getYear"])(fromDate)}`;
        }
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameYear"])(fromDate, toDate)) {
            return `${Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getDate"])(fromDate)} ${this.monthsAbbrev[Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getMonth"])(fromDate)]}. - ${Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getDate"])(toDate)} ${this.monthsAbbrev[Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getMonth"])(toDate)]}.  ${Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getYear"])(fromDate)}`;
        }
        return `${Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getDate"])(fromDate)} ${this.monthsAbbrev[Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getMonth"])(fromDate)]}. ${Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getYear"])(fromDate)} - ${Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getDate"])(toDate)} ${this.monthsAbbrev[Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getMonth"])(toDate)]}.  ${Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getYear"])(toDate)}`;
    }
}
DateDurationPipe.ɵfac = function DateDurationPipe_Factory(t) { return new (t || DateDurationPipe)(); };
DateDurationPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dateDuration", type: DateDurationPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateDurationPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'dateDuration'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/date-long-short.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/pipes/date-long-short.pipe.ts ***!
  \***********************************************/
/*! exports provided: DateLongShortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateLongShortPipe", function() { return DateLongShortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class DateLongShortPipe {
    constructor(datePipe) {
        this.datePipe = datePipe;
    }
    transform(date) {
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getYear"])(new Date(date)) == Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getYear"])(new Date())) {
            return this.datePipe.transform(date, 'd MMM');
        }
        else {
            return this.datePipe.transform(date, 'd MMM y');
        }
    }
}
DateLongShortPipe.ɵfac = function DateLongShortPipe_Factory(t) { return new (t || DateLongShortPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"])); };
DateLongShortPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dateLongShort", type: DateLongShortPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateLongShortPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'dateLongShort'
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pipes/duration-week-day.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/pipes/duration-week-day.pipe.ts ***!
  \*************************************************/
/*! exports provided: DurationWeekDayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationWeekDayPipe", function() { return DurationWeekDayPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DurationWeekDayPipe {
    transform(value) {
        let result = [];
        let years = parseInt((value / (365)).toString().split(".")[0]);
        let months = parseInt(((value - years * 365) / 30.4167).toString().split(".")[0]);
        let weeks = parseInt(((value - years * 365 - months * 30.4167) / 7).toString().split(".")[0]);
        let days = parseInt((value - weeks * 7 - months * 30.4167 - years * 365).toFixed(0));
        // if(value >400){
        //   debugger;
        // }
        if (years > 0) {
            result.push(`${years} ${this.pluralizeYear(years)}`);
        }
        if (months > 0) {
            result.push(`${months} ${this.pluralizeMonth(months)}`);
        }
        if (weeks > 0) {
            result.push(`${weeks} ${this.pluralizeWeek(weeks)}`);
        }
        if (days > 0 && years == 0) {
            result.push(`${days} ${this.pluralizeDay(days)}`);
        }
        return result.join(", ");
    }
    pluralizeYear(years) {
        if (years > 0) {
            return "year";
        }
        else {
            return "years";
        }
    }
    pluralizeMonth(months) {
        if (months > 1) {
            return "months";
        }
        else {
            return "month";
        }
    }
    pluralizeWeek(weeks) {
        if (weeks > 1) {
            return "weeks";
        }
        else {
            return "week";
        }
    }
    pluralizeDay(days) {
        if (days > 1) {
            return "days";
        }
        else {
            return "day";
        }
    }
}
DurationWeekDayPipe.ɵfac = function DurationWeekDayPipe_Factory(t) { return new (t || DurationWeekDayPipe)(); };
DurationWeekDayPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "durationWeekDay", type: DurationWeekDayPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DurationWeekDayPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'durationWeekDay'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/pretty-currency.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/pipes/pretty-currency.pipe.ts ***!
  \***********************************************/
/*! exports provided: PrettyCurrencyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrettyCurrencyPipe", function() { return PrettyCurrencyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PrettyCurrencyPipe {
    transform(value) {
        return `${value.toFixed(2)}€`;
    }
}
PrettyCurrencyPipe.ɵfac = function PrettyCurrencyPipe_Factory(t) { return new (t || PrettyCurrencyPipe)(); };
PrettyCurrencyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "prettyCurrency", type: PrettyCurrencyPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrettyCurrencyPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'prettyCurrency'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/screens/add/add.component.ts":
/*!**********************************************!*\
  !*** ./src/app/screens/add/add.component.ts ***!
  \**********************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/slider/slider.service */ "./src/app/services/slider/slider.service.ts");
/* harmony import */ var src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/expenses/expense.service */ "./src/app/services/expenses/expense.service.ts");
/* harmony import */ var src_app_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/groups/groups.service */ "./src/app/services/groups/groups.service.ts");
/* harmony import */ var src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/category/category.service */ "./src/app/services/category/category.service.ts");
/* harmony import */ var src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/filter/filter.service */ "./src/app/services/filter/filter.service.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
















const _c0 = ["focusInputAdd"];
const _c1 = ["autosize"];
function AddComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Max. 35 characters allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Amount is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddComponent_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", group_r17.groupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r17.groupName);
} }
function AddComponent_mat_error_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Max. 200 characters allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddComponent_mat_error_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddComponent_mat_error_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Max. 35 characters allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddComponent_mat_error_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Amount is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddComponent_option_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", group_r18.groupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r18.groupName);
} }
function AddComponent_mat_error_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Max. 200 characters allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddComponent {
    constructor(sliderService, expenseService, groupsService, categoryService, filterService, _ngZone) {
        this.sliderService = sliderService;
        this.expenseService = expenseService;
        this.groupsService = groupsService;
        this.categoryService = categoryService;
        this.filterService = filterService;
        this._ngZone = _ngZone;
    }
    triggerResize() {
        // Wait for changes to be applied, then trigger textarea resize.
        this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(() => this.autosize.resizeToFitContent(true));
    }
    ngOnInit() {
        var _a;
        this.initialData = this.sliderService.currentExpenseForEdit;
        this.selectedTabIndex = ((_a = this.initialData) === null || _a === void 0 ? void 0 : _a.lastUpdate) ? 1 : 0;
        this.expenseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(35)]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.currentDate(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.categoryService.defaultCategory, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            group: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("General", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200))
        });
        this.recurringForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name_recurring: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(35)]),
            amount_recurring: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            month_recurring: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.filterService.getCurrentMonthFilter(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            category_recurring: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('general', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            group_recurring: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("General", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description_recurring: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200)),
        });
        //TODO : Dirty workaround
        if (this.initialData) {
            setTimeout(() => {
                if (this.initialData.lastUpdate) {
                    this.recurringForm.reset({
                        name_recurring: this.initialData.name,
                        amount_recurring: this.initialData.amount,
                        month_recurring: this.initialData.date.substring(0, 7),
                        category_recurring: this.initialData.category,
                        group_recurring: this.initialData.group,
                        description_recurring: this.initialData.description
                    });
                }
                else {
                    this.expenseForm.reset({
                        name: this.initialData.name,
                        amount: this.initialData.amount,
                        date: this.initialData.date,
                        category: this.initialData.category,
                        group: this.initialData.group,
                        description: this.initialData.description
                    });
                }
            }, 100);
        }
        else {
            setTimeout(() => {
                this.expenseForm.reset({
                    name: '',
                    amount: '',
                    date: this.currentDate(),
                    category: this.categoryService.defaultCategory,
                    group: this.groupsService.defaultGroup,
                    description: ''
                });
            }, 100);
        }
        this.groups$ = this.groupsService.getGroupsWithoutUpdate();
    }
    ngAfterViewInit() {
        if (!this.initialData) {
            this.focusInput.nativeElement.focus();
        }
    }
    tabChanged(e) {
        this.selectedTabIndex = e.index;
    }
    hasError(controlName, errorName, formType) {
        var _a, _b;
        if (formType === "single") {
            return this.expenseForm.controls[controlName].hasError(errorName);
        }
        else {
            return (_b = (_a = this.recurringForm) === null || _a === void 0 ? void 0 : _a.controls[controlName]) === null || _b === void 0 ? void 0 : _b.hasError(errorName);
        }
    }
    setFormGroupTouched(formGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            control.markAsTouched({ onlySelf: true });
        });
    }
    currentDate() {
        const currentDate = new Date();
        return `${currentDate.getFullYear()}-${this.filterService.parseMonth(currentDate.getMonth() + 1)}-${this.filterService.parseMonth(currentDate.getDate())}`;
    }
    createExpense() {
        if (this.selectedTabIndex === 0) {
            let expense = this.expenseForm.value;
            this.setFormGroupTouched(this.expenseForm);
            if (this.expenseForm.valid) {
                if (!this.initialData) {
                    this.expenseService.addExpense(expense, "expenses");
                }
                else {
                    let key = this.initialData.key;
                    if (this.initialData.recurring) {
                        expense.recurring = true;
                    }
                    this.expenseService.updateExpense(key, expense, "expenses");
                }
                this.sliderService.hide();
            }
        }
        else {
            this.setFormGroupTouched(this.recurringForm);
            let expense = {
                name: this.recurringForm.value.name_recurring,
                amount: this.recurringForm.value.amount_recurring,
                date: this.recurringForm.value.month_recurring + "-01",
                category: this.recurringForm.value.category_recurring,
                group: this.recurringForm.value.group_recurring,
                description: this.recurringForm.value.description_recurring,
                recurring: true,
                lastUpdate: null
            };
            if (this.recurringForm.valid) {
                if (!this.initialData) {
                    expense.lastUpdate = this.expenseService.getFormatDate(new Date());
                    this.expenseService.addExpense(expense, "recurringExpenses");
                }
                else {
                    expense.lastUpdate = this.initialData.lastUpdate;
                    this.expenseService.updateExpense(this.initialData.key, expense, "recurringExpenses");
                }
                this.sliderService.hide();
            }
        }
    }
}
AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_3__["SliderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_4__["ExpenseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_5__["GroupsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_7__["FilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
AddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddComponent, selectors: [["app-add"]], viewQuery: function AddComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.focusInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.autosize = _t.first);
    } }, decls: 121, vars: 23, consts: [[1, "add-component-container"], [1, "flexbox", "align", "h-100", "space-between", "p-0-8", "slider-header"], [1, "material-icons-outlined", "slider-header-icon", 3, "click"], [4, "ngIf"], [1, "material-icons-outlined", "slider-header-icon", "submit-icon", 3, "click"], ["disableRipple", "", "mat-stretch-tabs", "", 1, "example-stretched-tab", 3, "selectedIndex", "selectedTabChange"], ["label", "Single", 3, "disabled"], [1, "content-container"], ["autocomplete", "off", 1, "expense-form", 3, "formGroup", "submit"], ["formDirective", "ngForm"], ["appearance", "standard", 1, "w-100"], ["type", "text", "matInput", "", "formControlName", "name"], ["appearance", "standard", 1, "amount-input"], ["type", "number", "matInput", "", "formControlName", "amount"], ["focusInputAdd", ""], ["appearance", "standard"], ["matNativeControl", "", "formControlName", "category"], ["value", "food"], ["value", "accommodation"], ["value", "transport"], ["value", "leisure"], ["value", "multimedia"], ["value", "gear"], ["value", "health_insurance"], ["value", "general"], ["matNativeControl", "", "formControlName", "group", 1, "group-input-field"], ["value", "General"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "date", "matInput", "", "formControlName", "date"], ["matInput", "", "formControlName", "description", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "cdkAutosizeMaxRows", "5"], ["autosize", "cdkTextareaAutosize"], ["type", "submit", 2, "display", "none"], ["label", "Recurring", 3, "disabled"], [1, "content-container", "recurring"], [1, "recurring-info-text"], ["type", "text", "matInput", "", "formControlName", "name_recurring"], ["type", "number", "matInput", "", "formControlName", "amount_recurring"], ["matNativeControl", "", "formControlName", "category_recurring"], ["matNativeControl", "", "formControlName", "group_recurring", 1, "group-input-field"], ["type", "month", "matInput", "", "formControlName", "month_recurring"], ["matInput", "", "formControlName", "description_recurring", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "cdkAutosizeMaxRows", "5"], [3, "value"]], template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_Template_i_click_3_listener($event) { return ctx.sliderService.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddComponent_span_5_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddComponent_span_6_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_Template_i_click_7_listener($event) { return ctx.createExpense(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "check");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function AddComponent_Template_mat_tab_group_selectedTabChange_9_listener($event) { return ctx.tabChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AddComponent_Template_form_submit_12_listener($event) { return ctx.createExpense(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddComponent_mat_error_18_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddComponent_mat_error_19_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Amount (\u20AC)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddComponent_mat_error_25_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Accommodation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Leisure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Multimedia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Gear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Health & Insurance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, AddComponent_option_52_Template, 2, 2, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "textarea", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, AddComponent_mat_error_63_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-tab", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Recurring expenses will automatically be added each month on the first day starting with the selected month.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AddComponent_Template_form_submit_69_listener($event) { return ctx.createExpense(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, AddComponent_mat_error_75_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, AddComponent_mat_error_76_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Amount (\u20AC)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, AddComponent_mat_error_81_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "select", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Accommodation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Leisure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Multimedia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Gear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Health & Insurance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "select", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, AddComponent_option_108_Template, 2, 2, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](109, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Start month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "textarea", 40, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, AddComponent_mat_error_119_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.initialData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.initialData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("enabled", ctx.expenseForm.valid || ctx.recurringForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", (ctx.initialData == null ? null : ctx.initialData.lastUpdate) ? "1" : "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", (ctx.initialData == null ? null : ctx.initialData.lastUpdate) && ctx.initialData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.expenseForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("name", "required", "single"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("name", "maxlength", "single"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("amount", "required", "single"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 19, ctx.groups$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("description", "maxlength", "single"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx.initialData == null ? null : ctx.initialData.lastUpdate) && ctx.initialData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.recurringForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("name_recurring", "required", "recurring"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("name_recurring", "maxlength", "recurring"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("amount_recurring", "required", "recurring"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](109, 21, ctx.groups$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("description_recurring", "maxlength", "recurring"));
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTab"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_13__["CdkTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: [".add-component-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n}\n.add-component-container[_ngcontent-%COMP%]   .slider-header[_ngcontent-%COMP%]   .slider-header-icon[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1;\n  height: 40px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.add-component-container[_ngcontent-%COMP%]   .slider-header[_ngcontent-%COMP%]   .slider-header-icon.submit-icon[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n.add-component-container[_ngcontent-%COMP%]   .slider-header[_ngcontent-%COMP%]   .slider-header-icon.submit-icon.enabled[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.add-component-container[_ngcontent-%COMP%]   .slider-header[_ngcontent-%COMP%]   .slider-header-icon[_ngcontent-%COMP%]:last-child {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.add-component-container[_ngcontent-%COMP%]     .mat-tab-label-container {\n  background: #76757b;\n}\n.add-component-container[_ngcontent-%COMP%]     .mat-tab-label-container mat-ink-bar {\n  height: 3px;\n}\n.add-component-container[_ngcontent-%COMP%]     .mat-tab-label-container .mat-tab-label {\n  height: 32px  !important;\n  opacity: 1 !important;\n}\n.add-component-container[_ngcontent-%COMP%]     .mat-tab-label-container .mat-tab-label.mat-tab-disabled {\n  opacity: 0.3 !important;\n}\n.add-component-container[_ngcontent-%COMP%]     .mat-tab-label-container .mat-tab-label .mat-tab-label-content {\n  color: white !important;\n}\n.add-component-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 0 16px;\n  overflow: auto;\n}\n.add-component-container[_ngcontent-%COMP%]   .content-container.recurring[_ngcontent-%COMP%]   .recurring-info-text[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  opacity: 0.8;\n  font-size: 0.9em;\n}\n.add-component-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .expense-form[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n.add-component-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .expense-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: auto;\n}\n.add-component-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .expense-form[_ngcontent-%COMP%]   mat-form-field.amount-input[_ngcontent-%COMP%] {\n  width: 70px;\n  margin-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9hZGQvRTovRG9jdW1lbnRzL1Byb2pla3RlL2V4cGVuc2VtYW5hZ2VyMi0wL2Zyb250ZW5kL3NyYy9hcHAvc2NyZWVucy9hZGQvYWRkLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zY3JlZW5zL2FkZC9hZGQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxXQUFBO0FDRko7QUREQTtFQU9ZLG1CQUFBO1VBQUEsT0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDSFo7QURLWTtFQUNJLFlBQUE7QUNIaEI7QURJZ0I7RUFDSSxVQUFBO0FDRnBCO0FETVk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDSmhCO0FEakJBO0VBNEJZLG1CQUFBO0FDUlo7QURwQkE7RUErQmdCLFdBQUE7QUNSaEI7QUR2QkE7RUFtQ2dCLHdCQUFBO0VBQ0EscUJBQUE7QUNUaEI7QURXZ0I7RUFDSSx1QkFBQTtBQ1RwQjtBRDlCQTtFQTJDb0IsdUJBQUE7QUNWcEI7QURqQ0E7RUFtRFEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNmUjtBRGlCUTtFQUVRLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDaEJoQjtBRDVDQTtFQWlFWSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0FDbEJaO0FEaERBO0VBcUVnQixtQkFBQTtVQUFBLFVBQUE7QUNsQmhCO0FEb0JnQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ2xCcEIiLCJmaWxlIjoic3JjL2FwcC9zY3JlZW5zL2FkZC9hZGQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdmFyaWFibGVzXCI7XG5cblxuLmFkZC1jb21wb25lbnQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5ICAgICAgIDogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgXG4gICAgLnNsaWRlci1oZWFkZXIge1xuICAgICAgICAuc2xpZGVyLWhlYWRlci1pY29uIHtcbiAgICAgICAgICAgIGZsZXggICAgICAgOiAxO1xuICAgICAgICAgICAgaGVpZ2h0ICAgICA6IDQwcHg7XG4gICAgICAgICAgICBkaXNwbGF5ICAgIDogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICYuc3VibWl0LWljb257XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICAgICAgICAgICYuZW5hYmxlZHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheSAgICAgICAgOiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICA6Om5nLWRlZXB7XG4gICAgICAgIC5tYXQtdGFiLWxhYmVsLWNvbnRhaW5lcntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IEBhcHAtaGVhZGVyLWNvbG9yO1xuXG4gICAgICAgICAgICBtYXQtaW5rLWJhcntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1hdC10YWItbGFiZWx7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4ICAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgICYubWF0LXRhYi1kaXNhYmxlZHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC4zICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1hdC10YWItbGFiZWwtY29udGVudHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5ICAgICAgIDogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZyAgICAgICA6IDAgMTZweDtcbiAgICAgICAgb3ZlcmZsb3cgICAgICA6IGF1dG87XG5cbiAgICAgICAgJi5yZWN1cnJpbmd7XG4gICAgICAgICAgICAucmVjdXJyaW5nLWluZm8tdGV4dHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmV4cGVuc2UtZm9ybSB7XG4gICAgICAgICAgICBkaXNwbGF5ICA6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgICAgICAgICBmbGV4OiBhdXRvO1xuXG4gICAgICAgICAgICAgICAgJi5hbW91bnQtaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aCAgICAgICA6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9XG5cbiAgICB9XG59IiwiLmFkZC1jb21wb25lbnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYWRkLWNvbXBvbmVudC1jb250YWluZXIgLnNsaWRlci1oZWFkZXIgLnNsaWRlci1oZWFkZXItaWNvbiB7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hZGQtY29tcG9uZW50LWNvbnRhaW5lciAuc2xpZGVyLWhlYWRlciAuc2xpZGVyLWhlYWRlci1pY29uLnN1Ym1pdC1pY29uIHtcbiAgb3BhY2l0eTogMC4zO1xufVxuLmFkZC1jb21wb25lbnQtY29udGFpbmVyIC5zbGlkZXItaGVhZGVyIC5zbGlkZXItaGVhZGVyLWljb24uc3VibWl0LWljb24uZW5hYmxlZCB7XG4gIG9wYWNpdHk6IDE7XG59XG4uYWRkLWNvbXBvbmVudC1jb250YWluZXIgLnNsaWRlci1oZWFkZXIgLnNsaWRlci1oZWFkZXItaWNvbjpsYXN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5hZGQtY29tcG9uZW50LWNvbnRhaW5lciA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWwtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogIzc2NzU3Yjtcbn1cbi5hZGQtY29tcG9uZW50LWNvbnRhaW5lciA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWwtY29udGFpbmVyIG1hdC1pbmstYmFyIHtcbiAgaGVpZ2h0OiAzcHg7XG59XG4uYWRkLWNvbXBvbmVudC1jb250YWluZXIgOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsLWNvbnRhaW5lciAubWF0LXRhYi1sYWJlbCB7XG4gIGhlaWdodDogMzJweCAgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuLmFkZC1jb21wb25lbnQtY29udGFpbmVyIDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1jb250YWluZXIgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuMyAhaW1wb3J0YW50O1xufVxuLmFkZC1jb21wb25lbnQtY29udGFpbmVyIDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1jb250YWluZXIgLm1hdC10YWItbGFiZWwgLm1hdC10YWItbGFiZWwtY29udGVudCB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLmFkZC1jb21wb25lbnQtY29udGFpbmVyIC5jb250ZW50LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uYWRkLWNvbXBvbmVudC1jb250YWluZXIgLmNvbnRlbnQtY29udGFpbmVyLnJlY3VycmluZyAucmVjdXJyaW5nLWluZm8tdGV4dCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG9wYWNpdHk6IDAuODtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cbi5hZGQtY29tcG9uZW50LWNvbnRhaW5lciAuY29udGVudC1jb250YWluZXIgLmV4cGVuc2UtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5hZGQtY29tcG9uZW50LWNvbnRhaW5lciAuY29udGVudC1jb250YWluZXIgLmV4cGVuc2UtZm9ybSBtYXQtZm9ybS1maWVsZCB7XG4gIGZsZXg6IGF1dG87XG59XG4uYWRkLWNvbXBvbmVudC1jb250YWluZXIgLmNvbnRlbnQtY29udGFpbmVyIC5leHBlbnNlLWZvcm0gbWF0LWZvcm0tZmllbGQuYW1vdW50LWlucHV0IHtcbiAgd2lkdGg6IDcwcHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add',
                templateUrl: './add.component.html',
                styleUrls: ['./add.component.less']
            }]
    }], function () { return [{ type: src_app_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_3__["SliderService"] }, { type: src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_4__["ExpenseService"] }, { type: src_app_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_5__["GroupsService"] }, { type: src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"] }, { type: src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_7__["FilterService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { focusInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["focusInputAdd"]
        }], autosize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['autosize']
        }] }); })();


/***/ }),

/***/ "./src/app/screens/edit/edit.component.ts":
/*!************************************************!*\
  !*** ./src/app/screens/edit/edit.component.ts ***!
  \************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EditComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(); };
EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["app-edit"]], decls: 2, vars: 0, template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvZWRpdC9lZGl0LmNvbXBvbmVudC5sZXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit',
                templateUrl: './edit.component.html',
                styleUrls: ['./edit.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/screens/filter/filter.component.ts":
/*!****************************************************!*\
  !*** ./src/app/screens/filter/filter.component.ts ***!
  \****************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/groups/groups.service */ "./src/app/services/groups/groups.service.ts");
/* harmony import */ var src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/filter/filter.service */ "./src/app/services/filter/filter.service.ts");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");











const _c0 = ["monthPickerInput"];
const _c1 = ["groupPickerInput"];
function FilterComponent_mat_form_field_14_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterComponent_mat_form_field_14_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r108.dateSelected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r104.dateSelected);
} }
function FilterComponent_div_23_div_1_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r116 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", group_r116.groupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r116.groupName);
} }
function FilterComponent_div_23_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterComponent_div_23_div_1_div_10_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const i_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r117.removeGroupFilter(i_r112); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FilterComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterComponent_div_23_div_1_Template_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r121); const i_r112 = ctx.index; const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r120.groupsSelected[i_r112] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FilterComponent_div_23_div_1_option_8_Template, 2, 2, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FilterComponent_div_23_div_1_div_10_Template, 3, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r112 = ctx.index;
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r110.groupsSelected[i_r112]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 3, ctx_r110.groups$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r110.groupsSelected.length > 1);
} }
function FilterComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FilterComponent_div_23_div_1_Template, 11, 5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterComponent_div_23_Template_div_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r122.groupsSelected.push("General"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add new group filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r105.groupsSelected);
} }
function FilterComponent_mat_radio_button_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const method_r124 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", method_r124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", method_r124, " ");
} }
class FilterComponent {
    constructor(groupService, filterService) {
        this.groupService = groupService;
        this.filterService = filterService;
        this.sortMethods = ['date', 'amount'];
    }
    ngOnInit() {
        this.groups$ = this.groupService.getGroups();
        this.filterService.filterState$.subscribe((state) => {
            //FIXME : quick workaround for testing
            setTimeout(() => {
                if (state.date) {
                    this.dateSelected = `${state.date.year}-${state.date.month}`;
                    this.monthMethod = "specific";
                }
                else {
                    this.dateSelected = null;
                    if (state.last30Active) {
                        this.monthMethod = "last30";
                    }
                    else {
                        this.monthMethod = "all";
                    }
                }
                if (state.groups) {
                    this.groupsSelected = state.groups;
                    this.allGroupsSelected = false;
                }
                else {
                    this.groupsSelected = null;
                    this.allGroupsSelected = true;
                }
            }, 200);
        });
        this.filterService.filterShown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((val) => !val)).subscribe((isShown) => {
            this.submitFilter();
        });
        this.sortMethod = localStorage.getItem("sortMethod") || "date";
    }
    removeGroupFilter(index) {
        this.groupsSelected.splice(index, 1);
    }
    groupChanged(e) {
        this.allGroupsSelected = !e.checked;
        if (e.checked) {
            this.groupsSelected = ["General"]; // if newly switched on just one with default general
        }
    }
    dateChanged(e) {
        if (e.value == 'specific') {
            this.dateSelected = this.filterService.getCurrentMonthFilter();
        }
    }
    submitFilter() {
        let currentFilter = JSON.parse(localStorage.getItem("filter"));
        let newFilter = {};
        if (!this.allGroupsSelected) {
            newFilter.groups = this.groupsSelected;
        }
        if (this.monthMethod == 'specific') {
            newFilter.date = {
                month: this.dateSelected.substring(5),
                year: this.dateSelected.substring(0, 4)
            };
            newFilter.last30Active = false;
        }
        else if (this.monthMethod == 'all') {
            newFilter.last30Active = false;
        }
        else {
            newFilter.last30Active = true;
        }
        let currentSortMethod = localStorage.getItem("sortMethod");
        if (this.sortMethod !== currentSortMethod) {
            this.filterService.setSortMethod(this.sortMethod);
        }
        if (JSON.stringify(currentFilter) !== JSON.stringify(newFilter)) {
            this.filterService.setFilter(newFilter);
        }
    }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_2__["GroupsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"])); };
FilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterComponent, selectors: [["app-filter"]], viewQuery: function FilterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.monthPickerInputElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.groupPickerInputElement = _t.first);
    } }, decls: 31, vars: 10, consts: [[1, "filter-component-container"], [1, "filter-section"], [1, "flexbox", "align"], [1, "material-icons", "mr-8"], [1, "example-radio-group", 3, "ngModel", "ngModelChange", "change"], ["color", "primary", 1, "example-radio-button", 3, "value"], ["appearance", "standard", "class", "month-filter", 4, "ngIf"], [1, "filter-section", "groups"], ["color", "primary", 1, "example-margin", 3, "checked", "change"], ["class", "multiple", 4, "ngIf"], ["id", "example-radio-group-label", 1, "flexbox", "align"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelChange"], ["color", "primary", "class", "example-radio-button", 3, "value", 4, "ngFor", "ngForOf"], ["appearance", "standard", 1, "month-filter"], ["type", "month", "matInput", "", 3, "ngModel", "ngModelChange"], ["monthPickerInput", ""], [1, "multiple"], ["class", "group-filter-item", 4, "ngFor", "ngForOf"], [1, "align", "add-group-filter", 3, "click"], [1, "material-icons"], [1, "ml-8"], [1, "group-filter-item"], ["appearance", "standard", 1, "groups-filter"], ["matNativeControl", "", 1, "group-picker", 3, "ngModel", "ngModelChange"], ["groupPickerInput", ""], ["value", "General"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "remove-item mat-form-field-wrapper", 3, "click", 4, "ngIf"], [3, "value"], [1, "remove-item", "mat-form-field-wrapper", 3, "click"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-radio-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_mat_radio_group_ngModelChange_7_listener($event) { return ctx.monthMethod = $event; })("change", function FilterComponent_Template_mat_radio_group_change_7_listener($event) { return ctx.dateChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-radio-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "All time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-radio-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Last 30 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-radio-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Specific month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FilterComponent_mat_form_field_14_Template, 5, 1, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "folder_open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-slide-toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FilterComponent_Template_mat_slide_toggle_change_21_listener($event) { return ctx.groupChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FilterComponent_div_23_Template, 7, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Sort by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-radio-group", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_mat_radio_group_ngModelChange_29_listener($event) { return ctx.sortMethod = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, FilterComponent_mat_radio_button_30_Template, 2, 2, "mat-radio-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.monthMethod);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "last30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "specific");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.monthMethod == "specific");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", !ctx.allGroupsSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.allGroupsSelected ? "All" : "Specfic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.allGroupsSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sortMethod);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sortMethods);
    } }, directives: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".filter-component-container[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n  padding-top: env(safe-area-inset-top, 0px);\n}\n.filter-component-container[_ngcontent-%COMP%]   .filter-section[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.filter-component-container[_ngcontent-%COMP%]   .filter-section[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid #ddd;\n}\n.filter-component-container[_ngcontent-%COMP%]   .filter-section.groups[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.filter-component-container[_ngcontent-%COMP%]   .filter-section.groups[_ngcontent-%COMP%]   .multiple[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.filter-component-container[_ngcontent-%COMP%]   .filter-section.groups[_ngcontent-%COMP%]   .multiple[_ngcontent-%COMP%]   .group-filter-item[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n.filter-component-container[_ngcontent-%COMP%]   .filter-section.groups[_ngcontent-%COMP%]   .multiple[_ngcontent-%COMP%]   .group-filter-item[_ngcontent-%COMP%]   .remove-item[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.filter-component-container[_ngcontent-%COMP%]   .filter-section.groups[_ngcontent-%COMP%]   .multiple[_ngcontent-%COMP%]   .add-group-filter[_ngcontent-%COMP%] {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  padding: 8px;\n  box-shadow: 1px 1px 20px 0px #d2d2d2;\n}\n.filter-component-container[_ngcontent-%COMP%]   .filter-section.groups[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%] {\n  padding-left: 12px;\n}\n.filter-component-container[_ngcontent-%COMP%]   .groups-filter[_ngcontent-%COMP%], .filter-component-container[_ngcontent-%COMP%]   .month-filter[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.filter-component-container[_ngcontent-%COMP%]   .example-radio-group[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: 8px 0;\n}\n.filter-component-container[_ngcontent-%COMP%]   .example-radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9maWx0ZXIvRTovRG9jdW1lbnRzL1Byb2pla3RlL2V4cGVuc2VtYW5hZ2VyMi0wL2Zyb250ZW5kL3NyYy9hcHAvc2NyZWVucy9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zY3JlZW5zL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtBQ0NGO0FESkE7RUFNTSxhQUFBO0FDQ047QURDTTtFQUNFLDZCQUFBO0FDQ1I7QURFSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQU47QURISTtFQU1JLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNBUjtBRFJJO0VBV00sb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7VUFBQSxxQkFBQTtBQ0FWO0FEWkk7RUFlUSxpQkFBQTtBQ0FaO0FEZkk7RUFtQk0sMkJBQUE7RUFBQSxvQkFBQTtFQUVBLFlBQUE7RUFDQSxvQ0FBQTtBQ0ZWO0FEcEJJO0VBMkJJLGtCQUFBO0FDSlI7QURuQ0E7O0VBNkNJLFdBQUE7QUNOSjtBRHZDQTtFQWlESSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxhQUFBO0FDUEo7QUQ1Q0E7RUF1REksV0FBQTtBQ1JKIiwiZmlsZSI6InNyYy9hcHAvc2NyZWVucy9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1jb21wb25lbnQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3AsIDBweCk7XG5cbiAgLmZpbHRlci1zZWN0aW9uIHtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAgICY6bm90KDpsYXN0LWNoaWxkKXsgICAgICAgIFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgIH1cbiAgICAgIFxuICAgICYuZ3JvdXBze1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgICBcblxuICAgICAgLm11bHRpcGxle1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgXG4gICAgICAgIC5ncm91cC1maWx0ZXItaXRlbXtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgICAgICAgIC5yZW1vdmUtaXRlbXtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYWRkLWdyb3VwLWZpbHRlcntcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDIwcHggMHB4ICNkMmQyZDI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWF0LXNsaWRlLXRvZ2dsZXtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5ncm91cHMtZmlsdGVyLCAubW9udGgtZmlsdGVye1xuICAgIHdpZHRoOiAxMDAlXG4gIH1cblxuICAuZXhhbXBsZS1yYWRpby1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cblxufSIsIi5maWx0ZXItY29tcG9uZW50LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wLCAwcHgpO1xufVxuLmZpbHRlci1jb21wb25lbnQtY29udGFpbmVyIC5maWx0ZXItc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uZmlsdGVyLWNvbXBvbmVudC1jb250YWluZXIgLmZpbHRlci1zZWN0aW9uOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cbi5maWx0ZXItY29tcG9uZW50LWNvbnRhaW5lciAuZmlsdGVyLXNlY3Rpb24uZ3JvdXBzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZpbHRlci1jb21wb25lbnQtY29udGFpbmVyIC5maWx0ZXItc2VjdGlvbi5ncm91cHMgLm11bHRpcGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZmlsdGVyLWNvbXBvbmVudC1jb250YWluZXIgLmZpbHRlci1zZWN0aW9uLmdyb3VwcyAubXVsdGlwbGUgLmdyb3VwLWZpbHRlci1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmZpbHRlci1jb21wb25lbnQtY29udGFpbmVyIC5maWx0ZXItc2VjdGlvbi5ncm91cHMgLm11bHRpcGxlIC5ncm91cC1maWx0ZXItaXRlbSAucmVtb3ZlLWl0ZW0ge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5maWx0ZXItY29tcG9uZW50LWNvbnRhaW5lciAuZmlsdGVyLXNlY3Rpb24uZ3JvdXBzIC5tdWx0aXBsZSAuYWRkLWdyb3VwLWZpbHRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMjBweCAwcHggI2QyZDJkMjtcbn1cbi5maWx0ZXItY29tcG9uZW50LWNvbnRhaW5lciAuZmlsdGVyLXNlY3Rpb24uZ3JvdXBzIG1hdC1zbGlkZS10b2dnbGUge1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG59XG4uZmlsdGVyLWNvbXBvbmVudC1jb250YWluZXIgLmdyb3Vwcy1maWx0ZXIsXG4uZmlsdGVyLWNvbXBvbmVudC1jb250YWluZXIgLm1vbnRoLWZpbHRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZpbHRlci1jb21wb25lbnQtY29udGFpbmVyIC5leGFtcGxlLXJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiA4cHggMDtcbn1cbi5maWx0ZXItY29tcG9uZW50LWNvbnRhaW5lciAuZXhhbXBsZS1yYWRpby1idXR0b24ge1xuICBtYXJnaW46IDVweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filter',
                templateUrl: './filter.component.html',
                styleUrls: ['./filter.component.less']
            }]
    }], function () { return [{ type: src_app_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_2__["GroupsService"] }, { type: src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"] }]; }, { monthPickerInputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["monthPickerInput"]
        }], groupPickerInputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["groupPickerInput"]
        }] }); })();


/***/ }),

/***/ "./src/app/screens/groups/groups.component.ts":
/*!****************************************************!*\
  !*** ./src/app/screens/groups/groups.component.ts ***!
  \****************************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var src_app_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/slider/slider.service */ "./src/app/services/slider/slider.service.ts");
/* harmony import */ var src_app_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/groups/groups.service */ "./src/app/services/groups/groups.service.ts");
/* harmony import */ var src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/expenses/expense.service */ "./src/app/services/expenses/expense.service.ts");
/* harmony import */ var src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/filter/filter.service */ "./src/app/services/filter/filter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_date_duration_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/date-duration.pipe */ "./src/app/pipes/date-duration.pipe.ts");
/* harmony import */ var _pipes_pretty_currency_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/pretty-currency.pipe */ "./src/app/pipes/pretty-currency.pipe.ts");
/* harmony import */ var _pipes_duration_week_day_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pipes/duration-week-day.pipe */ "./src/app/pipes/duration-week-day.pipe.ts");














const _c0 = function (a0, a1) { return { firstExpenseDate: a0, lastExpenseDate: a1 }; };
function GroupsComponent_div_1_div_1_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "dateDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, group_r54.firstExpenseDate, group_r54.lastExpenseDate)));
} }
function GroupsComponent_div_1_div_1_div_3_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "prettyCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, group_r54.amount));
} }
function GroupsComponent_div_1_div_1_div_3_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No expenses yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GroupsComponent_div_1_div_1_div_3_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Duration:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "durationWeekDay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cost:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupsComponent_div_1_div_1_div_3_div_9_Template_div_click_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const group_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r62.showDetailList(group_r54.groupName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Show List");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r55 = ctx_r65.index;
    const group_r54 = ctx_r65.$implicit;
    const j_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideInOut", ctx_r59.helpMenuOpenForIndex(i_r55, j_r51));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, group_r54.duration));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](12, 5, group_r54.amount / group_r54.duration, "1.0-0", "de-DE"), "\u20AC per day");
} }
function GroupsComponent_div_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupsComponent_div_1_div_1_div_3_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const i_r55 = ctx.index; const j_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.toggleHelpMenu(i_r55, j_r51); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GroupsComponent_div_1_div_1_div_3_div_5_Template, 4, 6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GroupsComponent_div_1_div_1_div_3_span_7_Template, 3, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GroupsComponent_div_1_div_1_div_3_span_8_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GroupsComponent_div_1_div_1_div_3_div_9_Template, 16, 9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r54.groupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", group_r54.amount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", group_r54.amount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(group_r54.amount > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", group_r54.duration);
} }
function GroupsComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GroupsComponent_div_1_div_1_div_3_Template, 10, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const totals_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("isSingle", ctx_r52.groupsTotals[0].groupTotal.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](totals_r50.type == "deleted" ? "Old groups" : "Active groups");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", totals_r50.groupTotal);
} }
function GroupsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GroupsComponent_div_1_div_1_Template, 4, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const totals_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", totals_r50.groupTotal.length > 0);
} }
function GroupsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Totals");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Total amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "prettyCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Duration:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "durationWeekDay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Average cost/day:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 3, ctx_r48.allTotals.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 5, ctx_r48.allTotals.duration));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](22, 7, ctx_r48.allTotals.amount / ctx_r48.allTotals.duration, "1.0-0", "de-DE"), "\u20AC per day");
} }
function GroupsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No groups yet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class GroupsComponent {
    constructor(sliderService, groupsService, expenseService, filterService, router) {
        this.sliderService = sliderService;
        this.groupsService = groupsService;
        this.expenseService = expenseService;
        this.filterService = filterService;
        this.router = router;
        this.helper = {};
    }
    ngOnInit() {
        this.groups$ = this.groupsService.getGroups();
        this.expenses$ = this.expenseService.getExpenses("expenses");
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.expenses$, this.groups$).subscribe(([expenses, groups]) => {
            this.groupsTotals = this.calculateGroupsTotals(expenses, groups);
            this.allTotals = this.groupsTotals.map((el) => {
                return el.groupTotal.reduce((acc, cur) => {
                    if (!cur.duration) {
                        return acc;
                    }
                    return { duration: acc.duration + cur.duration, amount: acc.amount + cur.amount };
                }, { duration: 0, amount: 0 });
            }).reduce((acc, cur) => {
                return { duration: acc.duration + cur.duration, amount: acc.amount + cur.amount };
            });
            this.initializeHelper();
        });
        this.helper = {};
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * Shows a expense list just like on home for this group. Opens a slighly modified "home" site with a "x" button to reset the site to its former state
     */
    showDetailList(groupName) {
        this.filterService.setFilter({
            temporaryFilter: true,
            groups: [groupName]
        });
        this.router.navigate(['/home']);
    }
    initializeHelper() {
        for (let i = 0; i < this.groupsTotals.length; i++) {
            this.helper[i] = {};
        }
    }
    calculateGroupsTotals(expenses, groups_origin) {
        let sorterHelper = {};
        let groups = [...groups_origin].reverse();
        // groups.push({ key: null, groupName: "General" });
        groups.forEach((el) => {
            sorterHelper[el.groupName] = {};
            sorterHelper[el.groupName].amount = 0;
            sorterHelper[el.groupName].expenses = [];
        });
        expenses.forEach(expense => {
            let expenseGroup = expense.group;
            //Skip expenses who have a group that has been deleted
            if (expenseGroup !== "General") {
                if (sorterHelper[expenseGroup]) {
                    sorterHelper[expenseGroup].amount += expense.amount;
                    sorterHelper[expenseGroup].expenses.push(expense);
                }
                else {
                    groups.push({ key: null, groupName: expenseGroup });
                    sorterHelper[expenseGroup] = {};
                    sorterHelper[expenseGroup].amount = expense.amount;
                    sorterHelper[expenseGroup].expenses = [expense];
                    sorterHelper[expenseGroup].deleted = true;
                }
            }
        });
        let result = groups.map((group) => {
            let amountForGroup = sorterHelper[group.groupName].amount;
            let expenses = sorterHelper[group.groupName].expenses;
            let deleted = sorterHelper[group.groupName].deleted;
            let result;
            if (expenses.length > 0) {
                let expensesSorted = expenses.sort((a, b) => this.filterService.dateSorter(a.date, b.date));
                let first = expensesSorted[expensesSorted.length - 1].date;
                let last = expensesSorted[0].date;
                let durationInDays = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["differenceInDays"])(new Date(last), new Date(first)) + 1;
                result = Object.assign(Object.assign({}, group), { amount: amountForGroup, firstExpenseDate: first, lastExpenseDate: last, duration: durationInDays });
            }
            else {
                result = Object.assign(Object.assign({}, group), { amount: amountForGroup });
            }
            if (deleted) {
                result = Object.assign(Object.assign({}, result), { deleted: deleted });
            }
            return result;
        });
        let mapped = result.reduce((acc, cur) => {
            if (!cur.deleted) {
                if (cur.groupName !== "General") {
                    let next = acc;
                    next[0].groupTotal.push(cur);
                    return next;
                }
                else {
                    return acc;
                }
            }
            else {
                let next = acc;
                next[1].groupTotal.push(cur);
                return next;
            }
        }, [{ type: "active", groupTotal: [] }, { type: "deleted", groupTotal: [] }]);
        mapped.forEach(groupCollection => {
            groupCollection.groupTotal.sort((a, b) => this.filterService.dateSorter(a.firstExpenseDate, b.firstExpenseDate));
        });
        // mapped[0].groupTotal.fo
        return mapped;
    }
    helpMenuOpenForIndex(index, outer) {
        return this.helper[outer][index] || 'out';
    }
    toggleHelpMenu(index, outer) {
        if (this.helper[outer][index]) {
            //already exists --> is open
            this.initializeHelper();
        }
        else {
            this.initializeHelper();
            this.helper[outer][index] = 'in';
        }
    }
}
GroupsComponent.ɵfac = function GroupsComponent_Factory(t) { return new (t || GroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_4__["SliderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_5__["GroupsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_6__["ExpenseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_7__["FilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
GroupsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GroupsComponent, selectors: [["app-groups"]], decls: 4, vars: 3, consts: [[1, "groups-component-container", "w-100"], ["class", "group-list", 4, "ngFor", "ngForOf"], ["class", "group-list", 4, "ngIf"], ["class", "no-groups", 4, "ngIf"], [1, "group-list"], [3, "isSingle", 4, "ngIf"], [1, "group-list-header"], ["class", "group-list-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "group-list-item", 3, "click"], [1, "group-item-general"], [1, "info-section"], [1, "group-name"], ["class", "group-dates", 4, "ngIf"], [1, "amount"], [4, "ngIf"], ["class", "no-expenses", 4, "ngIf"], ["class", "more-info", 4, "ngIf"], [1, "group-dates"], [1, "no-expenses"], [1, "more-info"], [1, "mb-8"], [1, "regular-font", "mr-8"], [1, "show-list-wrapper", 3, "click"], [1, "totals-info-section"], [1, "totals-info-item"], [1, "no-groups"]], template: function GroupsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GroupsComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GroupsComponent_div_2_Template, 23, 11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GroupsComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groupsTotals);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allTotals && (ctx.groupsTotals[0].groupTotal.length > 0 || ctx.groupsTotals[1].groupTotal.length > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.groupsTotals && (ctx.groupsTotals[0].groupTotal.length == 0 && ctx.groupsTotals[1].groupTotal.length == 0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], pipes: [_pipes_date_duration_pipe__WEBPACK_IMPORTED_MODULE_10__["DateDurationPipe"], _pipes_pretty_currency_pipe__WEBPACK_IMPORTED_MODULE_11__["PrettyCurrencyPipe"], _pipes_duration_week_day_pipe__WEBPACK_IMPORTED_MODULE_12__["DurationWeekDayPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]], styles: ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n.groups-component-container[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.groups-component-container[_ngcontent-%COMP%]   .no-groups[_ngcontent-%COMP%] {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.groups-component-container[_ngcontent-%COMP%]   .group-list[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n.groups-component-container[_ngcontent-%COMP%]   .group-list[_ngcontent-%COMP%]   .isSingle[_ngcontent-%COMP%] {\n  padding-top: 16px;\n}\n.groups-component-container[_ngcontent-%COMP%]   .group-list[_ngcontent-%COMP%]   .isSingle[_ngcontent-%COMP%]   .group-list-header[_ngcontent-%COMP%] {\n  display: none;\n}\n.groups-component-container[_ngcontent-%COMP%]   .group-list[_ngcontent-%COMP%]   .totals-info-section[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n.groups-component-container[_ngcontent-%COMP%]   .group-list[_ngcontent-%COMP%]   .totals-info-section[_ngcontent-%COMP%]   .totals-info-item[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n.groups-component-container[_ngcontent-%COMP%]   .group-list[_ngcontent-%COMP%]:not(:first-child)   .group-list-header[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n.groups-component-container[_ngcontent-%COMP%]   .group-list[_ngcontent-%COMP%]   .group-list-header[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.groups-component-container[_ngcontent-%COMP%]   .group-list[_ngcontent-%COMP%]   .group-list-item[_ngcontent-%COMP%] {\n  margin: 0 16px 16px 16px;\n  margin-bottom: 16px;\n  border-radius: 4px;\n  background: #fff;\n  padding: 12px;\n}\n.groups-component-container[_ngcontent-%COMP%]   .group-list[_ngcontent-%COMP%]   .group-list-item[_ngcontent-%COMP%]   .group-item-general[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n.groups-component-container[_ngcontent-%COMP%]   .group-list[_ngcontent-%COMP%]   .group-list-item[_ngcontent-%COMP%]   .group-item-general[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.groups-component-container[_ngcontent-%COMP%]   .group-list[_ngcontent-%COMP%]   .group-list-item[_ngcontent-%COMP%]   .group-item-general[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .group-name[_ngcontent-%COMP%] {\n  font-family: \"Roboto-Regular\";\n}\n.groups-component-container[_ngcontent-%COMP%]   .group-list[_ngcontent-%COMP%]   .group-list-item[_ngcontent-%COMP%]   .group-item-general[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .group-dates[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  opacity: 0.8;\n  font-size: 0.8em;\n}\n.groups-component-container[_ngcontent-%COMP%]   .group-list[_ngcontent-%COMP%]   .group-list-item[_ngcontent-%COMP%]   .group-item-general[_ngcontent-%COMP%]   .no-expenses[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.groups-component-container[_ngcontent-%COMP%]   .group-list[_ngcontent-%COMP%]   .group-list-item[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.groups-component-container[_ngcontent-%COMP%]   .group-list[_ngcontent-%COMP%]   .group-list-item[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%]   .show-list-wrapper[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-align: center;\n  background: #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9ncm91cHMvRTovRG9jdW1lbnRzL1Byb2pla3RlL2V4cGVuc2VtYW5hZ2VyMi0wL2Zyb250ZW5kL3NyYy9hcHAvc2NyZWVucy9ncm91cHMvZ3JvdXBzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zY3JlZW5zL2dyb3Vwcy9ncm91cHMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0FDQUo7QURHQTtFQUNJLGFBQUE7QUNESjtBREFBO0VBSVEsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDRFI7QUROQTtFQVdRLGNBQUE7QUNGUjtBRFRBO0VBY1ksaUJBQUE7QUNGWjtBRFpBO0VBZ0JnQixhQUFBO0FDRGhCO0FEZkE7RUFxQlksZUFBQTtBQ0haO0FEbEJBO0VBd0JnQixjQUFBO0FDSGhCO0FET1E7RUFFUSxjQUFBO0FDTmhCO0FEeEJBO0VBbUNZLG1CQUFBO0FDUlo7QUQzQkE7RUF1Q1ksd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDVFo7QURsQ0E7RUE4Q2dCLG9CQUFBO0VBQUEsYUFBQTtBQ1RoQjtBRHJDQTtFQWlEb0IsbUJBQUE7VUFBQSxPQUFBO0FDVHBCO0FEeENBO0VBb0R3Qiw2QkFBQTtBQ1R4QjtBRDNDQTtFQXdEd0IsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNWeEI7QURoREE7RUFvRW9CLFlBQUE7QUNqQnBCO0FEbkRBO0VBMEVnQixnQkFBQTtBQ3BCaEI7QUR0REE7RUE2RW9CLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDcEJwQiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi92YXJpYWJsZXNcIjtcbjpob3N0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZ3JvdXBzLWNvbXBvbmVudC1jb250YWluZXJ7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIC5uby1ncm91cHN7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmdyb3VwLWxpc3R7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICBcbiAgICAgICAgLmlzU2luZ2xle1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAgICAgICAuZ3JvdXAtbGlzdC1oZWFkZXJ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50b3RhbHMtaW5mby1zZWN0aW9ue1xuICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuXG4gICAgICAgICAgICAudG90YWxzLWluZm8taXRlbXtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCl7XG4gICAgICAgICAgICAuZ3JvdXAtbGlzdC1oZWFkZXJ7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JvdXAtbGlzdC1oZWFkZXJ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmdyb3VwLWxpc3QtaXRlbXtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNnB4IDE2cHggMTZweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBAYXBwLXdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmdyb3VwLWl0ZW0tZ2VuZXJhbHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5pbmZvLXNlY3Rpb257XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgLmdyb3VwLW5hbWV7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8tUmVndWxhclwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC5ncm91cC1kYXRlc3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIC5hbW91bnR7XG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAubm8tZXhwZW5zZXN7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vcmUtaW5mb3tcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuXG4gICAgICAgICAgICAgICAgLnNob3ctbGlzdC13cmFwcGVye1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZ3JvdXBzLWNvbXBvbmVudC1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmdyb3Vwcy1jb21wb25lbnQtY29udGFpbmVyIC5uby1ncm91cHMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmdyb3Vwcy1jb21wb25lbnQtY29udGFpbmVyIC5ncm91cC1saXN0IHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uZ3JvdXBzLWNvbXBvbmVudC1jb250YWluZXIgLmdyb3VwLWxpc3QgLmlzU2luZ2xlIHtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG4uZ3JvdXBzLWNvbXBvbmVudC1jb250YWluZXIgLmdyb3VwLWxpc3QgLmlzU2luZ2xlIC5ncm91cC1saXN0LWhlYWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZ3JvdXBzLWNvbXBvbmVudC1jb250YWluZXIgLmdyb3VwLWxpc3QgLnRvdGFscy1pbmZvLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG4uZ3JvdXBzLWNvbXBvbmVudC1jb250YWluZXIgLmdyb3VwLWxpc3QgLnRvdGFscy1pbmZvLXNlY3Rpb24gLnRvdGFscy1pbmZvLWl0ZW0ge1xuICBwYWRkaW5nOiA4cHggMDtcbn1cbi5ncm91cHMtY29tcG9uZW50LWNvbnRhaW5lciAuZ3JvdXAtbGlzdDpub3QoOmZpcnN0LWNoaWxkKSAuZ3JvdXAtbGlzdC1oZWFkZXIge1xuICBtYXJnaW46IDE2cHggMDtcbn1cbi5ncm91cHMtY29tcG9uZW50LWNvbnRhaW5lciAuZ3JvdXAtbGlzdCAuZ3JvdXAtbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmdyb3Vwcy1jb21wb25lbnQtY29udGFpbmVyIC5ncm91cC1saXN0IC5ncm91cC1saXN0LWl0ZW0ge1xuICBtYXJnaW46IDAgMTZweCAxNnB4IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMTJweDtcbn1cbi5ncm91cHMtY29tcG9uZW50LWNvbnRhaW5lciAuZ3JvdXAtbGlzdCAuZ3JvdXAtbGlzdC1pdGVtIC5ncm91cC1pdGVtLWdlbmVyYWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmdyb3Vwcy1jb21wb25lbnQtY29udGFpbmVyIC5ncm91cC1saXN0IC5ncm91cC1saXN0LWl0ZW0gLmdyb3VwLWl0ZW0tZ2VuZXJhbCAuaW5mby1zZWN0aW9uIHtcbiAgZmxleDogMTtcbn1cbi5ncm91cHMtY29tcG9uZW50LWNvbnRhaW5lciAuZ3JvdXAtbGlzdCAuZ3JvdXAtbGlzdC1pdGVtIC5ncm91cC1pdGVtLWdlbmVyYWwgLmluZm8tc2VjdGlvbiAuZ3JvdXAtbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1SZWd1bGFyXCI7XG59XG4uZ3JvdXBzLWNvbXBvbmVudC1jb250YWluZXIgLmdyb3VwLWxpc3QgLmdyb3VwLWxpc3QtaXRlbSAuZ3JvdXAtaXRlbS1nZW5lcmFsIC5pbmZvLXNlY3Rpb24gLmdyb3VwLWRhdGVzIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuLmdyb3Vwcy1jb21wb25lbnQtY29udGFpbmVyIC5ncm91cC1saXN0IC5ncm91cC1saXN0LWl0ZW0gLmdyb3VwLWl0ZW0tZ2VuZXJhbCAubm8tZXhwZW5zZXMge1xuICBvcGFjaXR5OiAwLjc7XG59XG4uZ3JvdXBzLWNvbXBvbmVudC1jb250YWluZXIgLmdyb3VwLWxpc3QgLmdyb3VwLWxpc3QtaXRlbSAubW9yZS1pbmZvIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5ncm91cHMtY29tcG9uZW50LWNvbnRhaW5lciAuZ3JvdXAtbGlzdCAuZ3JvdXAtbGlzdC1pdGVtIC5tb3JlLWluZm8gLnNob3ctbGlzdC13cmFwcGVyIHtcbiAgcGFkZGluZzogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG59XG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: '0',
                    overflow: 'hidden',
                    height: '0px',
                    margin: '0px'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: '1',
                    overflow: 'hidden',
                    height: '*',
                    margin: '12px 0 0 0'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('150ms ease-in-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('150ms ease-in-out'))
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-groups',
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideInOut', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: '0',
                            overflow: 'hidden',
                            height: '0px',
                            margin: '0px'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: '1',
                            overflow: 'hidden',
                            height: '*',
                            margin: '12px 0 0 0'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('150ms ease-in-out')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('150ms ease-in-out'))
                    ])
                ],
                templateUrl: './groups.component.html',
                styleUrls: ['./groups.component.less']
            }]
    }], function () { return [{ type: src_app_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_4__["SliderService"] }, { type: src_app_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_5__["GroupsService"] }, { type: src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_6__["ExpenseService"] }, { type: src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_7__["FilterService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/screens/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/screens/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/expenses/expense.service */ "./src/app/services/expenses/expense.service.ts");
/* harmony import */ var src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/filter/filter.service */ "./src/app/services/filter/filter.service.ts");
/* harmony import */ var src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/category/category.service */ "./src/app/services/category/category.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../filter/filter.component */ "./src/app/screens/filter/filter.component.ts");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/__ivy_ngcc__/fesm2015/highcharts-angular.js");
/* harmony import */ var _components_expense_list_expense_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/expense-list/expense-list.component */ "./src/app/components/expense-list/expense-list.component.ts");
/* harmony import */ var _pipes_pretty_currency_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pipes/pretty-currency.pipe */ "./src/app/pipes/pretty-currency.pipe.ts");














function HomeComponent_div_4_i_5_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_4_i_5_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.toggleChart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "timeline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r22.chartOpened);
} }
function HomeComponent_div_4_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "prettyCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, item_r28.x, "MMM y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, item_r28.y));
} }
function HomeComponent_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "highcharts-chart", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_4_div_6_div_3_Template, 7, 7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The chart will show all the months matching the groups filter. Selected date filters won't be applied!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx_r23.Highcharts)("options", ctx_r23.chartOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r23.chartData);
} }
function HomeComponent_div_4_div_7_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const total_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", total_r30.category, " ");
} }
function HomeComponent_div_4_div_7_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Health & Insurance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_4_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_4_div_7_div_1_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const i_r31 = ctx.index; const total_r30 = ctx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r35.toggleCategory(i_r31, total_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_4_div_7_div_1_span_2_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_4_div_7_div_1_span_3_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "prettyCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const total_r30 = ctx.$implicit;
    const i_r31 = ctx.index;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("category-limited", ctx_r29.activeCategory !== null)("selected", ctx_r29.activeCategory == i_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r29.categoryService.categoryColors[total_r30.category]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", total_r30.category !== "health_insurance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", total_r30.category === "health_insurance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, total_r30.amount), "");
} }
function HomeComponent_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_4_div_7_div_1_Template, 7, 11, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.totalCategories);
} }
function HomeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "prettyCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_4_i_5_Template, 2, 2, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_4_div_6_Template, 9, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_4_div_7_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx_r19.totalAmount));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.chartData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.chartOpened);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r19.chartOpened);
} }
function HomeComponent_app_expense_list_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-expense-list", 26);
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expenses", ctx_r20.expenses)("collapseNotifier", ctx_r20.collapseNotifier);
} }
function HomeComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No expenses yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(expenseService, filterService, categoryService) {
        this.expenseService = expenseService;
        this.filterService = filterService;
        this.categoryService = categoryService;
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_3__;
        this.chartOptions = {};
        this.totalAmount = 0;
        this.collapseNotifier = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.chartOpened = false;
        this.activeCategory = null;
    }
    ngOnInit() {
        this.expenses$ = this.expenseService.getExpenses("expenses");
        this.currentFilter$ = this.filterService.getFilter();
        this.monthSwitched$ = this.filterService.monthSwitched$;
        this.sortMethod$ = this.filterService.sortMethod$;
        this.limitedCategory$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.currentFilter$, this.expenses$, this.monthSwitched$, this.sortMethod$, this.limitedCategory$)
            .subscribe(([filter, expenses, monthSwitch, sortMethod, limitedCategory]) => {
            let filtered = expenses.filter((expense) => {
                return this.matchesFilter(expense, filter, monthSwitch);
            });
            if (sortMethod == "amount") {
                this.expenses = filtered.reverse().sort(this.filterService.amountSorter);
            }
            else {
                this.expenses = filtered.reverse().sort((a, b) => this.filterService.dateSorter(a.date, b.date));
            }
            // If category limited only view expenses mathihc this category, but dont actually filter like emitting a new expense value. just change the view. Leave category-totals untouched
            if (limitedCategory) {
                this.expenses = this.expenses.filter(expense => {
                    return expense.category == limitedCategory;
                });
            }
            this.totalAmount = filtered.reduce((acc, cur) => {
                return acc + cur.amount;
            }, 0);
            let temp = filtered.reduce((acc, cur) => {
                acc[cur.category] += cur.amount;
                return acc;
            }, {
                food: 0,
                accommodation: 0,
                transport: 0,
                multimedia: 0,
                leisure: 0,
                gear: 0,
                health_insurance: 0,
                general: 0
            });
            this.totalCategories = this.objectToArray(temp).filter((item) => {
                return item.amount > 0;
            }).sort((a, b) => {
                return b.amount - a.amount;
            });
        });
        this.calculateChartData().subscribe((options) => {
            if (options) {
                this.chartData = [...options.data].reverse().splice(1).filter((element) => {
                    return element.y > 0;
                });
                this.drawChart(options);
            }
        });
    }
    toggleChart() {
        this.chartOpened = !this.chartOpened;
    }
    /**
     * Since the chart starts with 5 entries and scroll position equals left border, we want
     * the scroll position to be in the middle of the chart
     * @param number: index of item in array
     */
    getNormalizedStartMonth(number) {
        if (number >= 3) {
            return number - 3;
        }
        else {
            return 0;
        }
    }
    toggleCategory(index, categoryTotal) {
        if (this.activeCategory == index) {
            this.activeCategory = null;
            this.limitedCategory$.next(null);
        }
        else {
            this.activeCategory = index;
            this.limitedCategory$.next(categoryTotal.category);
        }
    }
    calculateChartData() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.expenses$, this.currentFilter$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([expenses, filter]) => {
            if (expenses.length > 0) {
                //TODO
            }
            // group all expensses in new object with accummulated amount
            let monthTotalsObject = expenses.filter((expense) => {
                let matches = false;
                if (filter.groups) {
                    filter.groups.forEach(groupFilter => {
                        if (!matches) {
                            matches = expense.group.toLowerCase() == groupFilter.toLowerCase();
                        }
                    });
                }
                else {
                    //no groups selected so all expenses valid
                    matches = true;
                }
                return matches;
            }).reduce((acc, cur) => {
                var _a, _b;
                let oldAmount = ((_a = acc[cur.date.substring(0, 7)]) === null || _a === void 0 ? void 0 : _a.amount) ? (_b = acc[cur.date.substring(0, 7)]) === null || _b === void 0 ? void 0 : _b.amount : 0;
                acc[cur.date.substring(0, 7)] = Object.assign(Object.assign({}, acc[cur.date.substring(0, 7)]), { amount: oldAmount + cur.amount });
                return acc;
            }, {});
            //sort groups by month and convert to array
            let monthTotalsSorted = this.monthTotalObjectToArray(monthTotalsObject).sort((a, b) => {
                return new Date(a.month).getTime() - new Date(b.month).getTime();
            }).filter(el => {
                return new Date(el.month) <= new Date();
            });
            if (monthTotalsSorted.length > 0) {
                let filledTotals = [];
                let firstMonth = new Date(monthTotalsSorted[0].month);
                let lastMonth = new Date();
                for (let month = firstMonth; month <= lastMonth; month = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addMonths"])(month, 1)) {
                    let monthString = this.filterService.getMonthDateString(month);
                    filledTotals.push({ month: monthString, amount: 0 });
                }
                // Now fill in the amounts calculated in monthTotalsSorted
                monthTotalsSorted.forEach(monthTotal => {
                    let indexForFilled = filledTotals.findIndex(el => {
                        return el.month === monthTotal.month;
                    });
                    filledTotals[indexForFilled].amount = monthTotal.amount;
                });
                // reduce to array of just amounts for chart
                let chartData = filledTotals.map(el => {
                    return { x: Date.UTC(new Date(el.month).getFullYear(), (new Date(el.month).getMonth()), 1), y: el.amount };
                });
                chartData.push({ x: Date.UTC(new Date().getFullYear(), new Date().getMonth() + 1, 0), y: null });
                let currentIndex = filledTotals.findIndex(el => {
                    return el.month === this.filterService.getCurrentMonthFilter();
                });
                return {
                    data: chartData,
                    chartStartDate: Date.UTC(new Date(filledTotals[0].month).getFullYear(), new Date(filledTotals[0].month).getMonth(), 0),
                    currentMonthIndex: currentIndex
                };
            }
            //create new array with all of the months from begin to finish adn initialize for chart with null
        }));
    }
    drawChart(chartData) {
        this.chartOptions = {
            title: {
                text: null,
                style: {
                    color: '#272727'
                }
            },
            tooltip: { enabled: false },
            chart: {
                backgroundColor: "#eee",
                animation: false,
                scrollablePlotArea: {
                    minWidth: chartData.data.length * 50,
                    opacity: 0.9,
                    scrollPositionX: (1 / (chartData.data.length - 5)) * this.getNormalizedStartMonth(chartData.currentMonthIndex) // 1/ amountOfEntries * startMonth from begin ignoring 5 first entries 
                }
            },
            plotOptions: {
                line: {
                    animation: false,
                    pointStart: chartData.chartStartDate,
                },
                series: {
                    states: {
                        hover: {
                            enabled: false
                        }
                    }
                }
            },
            legend: {
                enabled: false
            },
            xAxis: {
                min: chartData.chartStartDate,
                allowDecimals: false,
                type: 'datetime',
                tickInterval: 30 * 24 * 3600 * 1000,
                labels: {
                    // rotation: 90,
                    // align: "left",
                    overflow: 'justify'
                },
                crosshair: {
                    width: 0
                },
            },
            yAxis: {
                opposite: false,
                gridLineColor: "#ccc",
                min: 0,
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return this.value + "€";
                    }
                }
            },
            colors: ["#444"],
            series: [{
                    data: chartData.data,
                    type: 'line',
                    softThreshold: true
                }]
        };
    }
    objectToArray(obj) {
        return Object.keys(obj).map(key => {
            return { category: key, amount: obj[key] };
        });
    }
    monthTotalObjectToArray(obj) {
        return Object.keys(obj).map(key => {
            return { month: key, amount: obj[key].amount };
        });
    }
    matchesFilter(expense, filter, monthSwitch) {
        let matches = true;
        let expenseYear = expense.date.substring(0, 4);
        let expenseMonth = expense.date.substring(5, 7);
        if (monthSwitch) {
            matches = expenseYear == monthSwitch.year && expenseMonth == monthSwitch.month;
        }
        else {
            if (filter.date) {
                matches = expenseYear == filter.date.year && expenseMonth == filter.date.month;
            }
            else {
                //take all data change nothing...BUT if last30Days then 
                if (filter.last30Active) {
                    //leading zeros lead to wrong time for the Date. FIXME: Dirty solution 
                    let expenseDate = new Date(new Date(expense.date).getFullYear(), new Date(expense.date).getMonth(), new Date(expense.date).getDate());
                    matches = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isWithinInterval"])(expenseDate, { start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["subDays"])(new Date(), 30), end: new Date() });
                }
            }
        }
        if (matches && filter.groups) {
            let matchesInternal = false;
            //OR-comparison, true if one of the filters is true
            filter.groups.forEach(groupFilter => {
                if (!matchesInternal) {
                    matchesInternal = expense.group.toLowerCase() == groupFilter.toLowerCase();
                }
            });
            matches = matchesInternal;
        }
        return matches;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_5__["ExpenseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_6__["FilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 10, vars: 15, consts: [[1, "home-component-container", 3, "click"], ["class", "general", 4, "ngIf"], [3, "expenses", "collapseNotifier", 4, "ngIf"], [1, "filter-container"], ["class", "no-expenses-placeholder", 4, "ngIf"], [1, "general"], [1, "total-amount"], ["class", "material-icons chart-icon", 3, "active", "click", 4, "ngIf"], ["style", "position: relative; z-index: 0;", "class", "chart-section", 4, "ngIf"], ["class", "categories-total", 4, "ngIf"], [1, "material-icons", "chart-icon", 3, "click"], [1, "chart-section", 2, "position", "relative", "z-index", "0"], [1, "highcharts-chart", 2, "width", "100%", "height", "265px", "display", "block", 3, "Highcharts", "options"], [1, "chart-list"], ["class", "month-item", 4, "ngFor", "ngForOf"], [1, "chart-info-box", "flexbox"], [1, "material-icons-outlined", "mr-8"], [1, "month-item"], [1, "month"], [1, "amount"], [1, "categories-total"], ["class", "category-item", 3, "category-limited", "selected", "click", 4, "ngFor", "ngForOf"], [1, "category-item", 3, "click"], [1, "color-badge"], ["class", "category", 4, "ngIf"], [1, "category"], [3, "expenses", "collapseNotifier"], [1, "no-expenses-placeholder"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_0_listener($event) { return ctx.collapseNotifier.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_4_Template, 8, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_app_expense_list_5_Template, 1, 2, "app-expense-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_div_9_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_0_0 = null;
        const currVal_0 = !((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 7, ctx.currentFilter$)) == null ? null : tmp_0_0.date) && !((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 9, ctx.currentFilter$)) == null ? null : tmp_0_0.groups) && !((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 11, ctx.currentFilter$)) == null ? null : tmp_0_0.last30Active);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("no-filters", currVal_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalAmount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.expenses == null ? null : ctx.expenses.length) > 0 && !ctx.chartOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 13, ctx.filterService.filterShown$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.expenses == null ? null : ctx.expenses.length) === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _filter_filter_component__WEBPACK_IMPORTED_MODULE_9__["FilterComponent"], highcharts_angular__WEBPACK_IMPORTED_MODULE_10__["HighchartsChartComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _components_expense_list_expense_list_component__WEBPACK_IMPORTED_MODULE_11__["ExpenseListComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], _pipes_pretty_currency_pipe__WEBPACK_IMPORTED_MODULE_12__["PrettyCurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: ["[_nghost-%COMP%] {\n  overflow: hidden;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n  highcharts-chart * {\n  font-family: \"Roboto-Light\";\n}\n  highcharts-chart .highcharts-credits {\n  display: none;\n}\n.home-component-container[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  padding-top: 46px;\n  overflow-y: auto;\n  height: 100%;\n}\n.home-component-container.no-filters[_ngcontent-%COMP%] {\n  padding-top: calc(46px - 32px);\n}\n.home-component-container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%] {\n  position: relative;\n}\n.home-component-container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]   .chart-section[_ngcontent-%COMP%]   .highcharts-chart[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.home-component-container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]   .chart-section[_ngcontent-%COMP%]   .chart-list[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.home-component-container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]   .chart-section[_ngcontent-%COMP%]   .chart-list[_ngcontent-%COMP%]   .month-item[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.home-component-container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]   .chart-section[_ngcontent-%COMP%]   .chart-list[_ngcontent-%COMP%]   .month-item[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #e4e4e4;\n}\n.home-component-container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]   .chart-section[_ngcontent-%COMP%]   .chart-list[_ngcontent-%COMP%]   .month-item[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.home-component-container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]   .chart-section[_ngcontent-%COMP%]   .chart-list[_ngcontent-%COMP%]   .month-item[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-right: 8px;\n}\n.home-component-container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]   .chart-section[_ngcontent-%COMP%]   .chart-list[_ngcontent-%COMP%]   .month-item[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1;\n  text-align: right;\n}\n.home-component-container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]   .chart-section[_ngcontent-%COMP%]   .chart-info-box[_ngcontent-%COMP%] {\n  padding: 16px 0;\n  font-size: 0.8em;\n}\n.home-component-container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]   .total-amount[_ngcontent-%COMP%] {\n  font-size: 2em;\n  border-bottom: 1px solid #ddd;\n}\n.home-component-container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]   .chart-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  background: white;\n  border-radius: 50%;\n  padding: 4px;\n  font-size: 20px;\n  border: 1px solid #cacaca;\n  z-index: 1;\n}\n.home-component-container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]   .chart-icon.active[_ngcontent-%COMP%] {\n  background: #76757b;\n  color: white;\n  border-color: transparent;\n}\n.home-component-container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]   .categories-total[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.home-component-container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]   .categories-total[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%] {\n  padding: 4px 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transition: opacity 150ms ease-in-out;\n  transition: opacity 150ms ease-in-out;\n}\n.home-component-container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]   .categories-total[_ngcontent-%COMP%]   .category-item.category-limited[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.home-component-container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]   .categories-total[_ngcontent-%COMP%]   .category-item.category-limited.selected[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.home-component-container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]   .categories-total[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .color-badge[_ngcontent-%COMP%] {\n  height: 14px;\n  width: 14px;\n  background: lightgray;\n  border-radius: 4px;\n  margin-right: 8px;\n  opacity: 0.9;\n}\n.home-component-container[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]   .categories-total[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1;\n  text-transform: capitalize;\n}\n.home-component-container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%] {\n  z-index: 1;\n  background: white;\n  position: absolute;\n  height: calc(100% - 40px);\n  width: 100%;\n  top: 40px;\n  visibility: hidden;\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n  -webkit-transition: visibility 150ms ease-in-out, -webkit-transform 150ms ease-in-out;\n  transition: visibility 150ms ease-in-out, -webkit-transform 150ms ease-in-out;\n  transition: transform 150ms ease-in-out, visibility 150ms ease-in-out;\n  transition: transform 150ms ease-in-out, visibility 150ms ease-in-out, -webkit-transform 150ms ease-in-out;\n}\n.home-component-container[_ngcontent-%COMP%]   .filter-container.active[_ngcontent-%COMP%] {\n  display: block;\n  visibility: visible;\n  -webkit-transform: translateX(-12px);\n          transform: translateX(-12px);\n}\n.home-component-container[_ngcontent-%COMP%]   .no-expenses-placeholder[_ngcontent-%COMP%] {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9ob21lL0U6L0RvY3VtZW50cy9Qcm9qZWt0ZS9leHBlbnNlbWFuYWdlcjItMC9mcm9udGVuZC9zcmMvYXBwL3NjcmVlbnMvaG9tZS9ob21lLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zY3JlZW5zL2hvbWUvaG9tZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0RGO0FESUE7RUFJTSwyQkFBQTtBQ0xOO0FEQ0E7RUFRTSxhQUFBO0FDTk47QURxQkE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDbkJGO0FEcUJFO0VBQ0UsOEJBQUE7QUNuQko7QURZQTtFQVdJLGtCQUFBO0FDcEJKO0FEU0E7RUFlUSxnQkFBQTtBQ3JCUjtBRE1BO0VBbUJRLGdCQUFBO0FDdEJSO0FER0E7RUFzQlUsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ3RCVjtBRHdCVTtFQUNFLG1CQUFBO0FDdEJaO0FEd0JVO0VBQ0UsWUFBQTtBQ3RCWjtBRFRBO0VBbUNZLGlCQUFBO0VBQ0EsaUJBQUE7QUN2Qlo7QURiQTtFQXVDWSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxpQkFBQTtBQ3ZCWjtBRGpCQTtFQTZDUSxlQUFBO0VBQ0EsZ0JBQUE7QUN6QlI7QURyQkE7RUFtRE0sY0FBQTtFQUNBLDZCQUFBO0FDM0JOO0FEekJBO0VBd0RNLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUM1Qk47QUQ4Qk07RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQzVCUjtBRHpDQTtFQTBFTSxZQUFBO0FDOUJOO0FENUNBO0VBNkVRLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNkNBQUE7RUFBQSxxQ0FBQTtBQzlCUjtBRGdDUTtFQUNFLFlBQUE7QUM5QlY7QURnQ1U7RUFDRSxVQUFBO0FDOUJaO0FEeERBO0VBNEZVLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ2pDVjtBRGhFQTtFQXFHVSxtQkFBQTtVQUFBLE9BQUE7RUFDQSwwQkFBQTtBQ2xDVjtBRHBFQTtFQTZHSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUVBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxxRkFBQTtFQUFBLDZFQUFBO0VBQUEscUVBQUE7RUFBQSwwR0FBQTtBQ3ZDSjtBRHlDSTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7QUN2Q047QURwRkE7RUFnSUksWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDekNKIiwiZmlsZSI6InNyYy9hcHAvc2NyZWVucy9ob21lL2hvbWUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdmFyaWFibGVzXCI7XG5cbjpob3N0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG46Om5nLWRlZXB7XG4gIGhpZ2hjaGFydHMtY2hhcnR7XG5cbiAgICAqe1xuICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUxpZ2h0XCI7XG4gICAgfVxuXG4gICAgLmhpZ2hjaGFydHMtY3JlZGl0c3tcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLy8gLmhpZ2hjaGFydHMtYXhpcy1sYWJlbHN7XG4gICAgLy8gICAmLmhpZ2hjaGFydHMteGF4aXMtbGFiZWxze1xuICAgIC8vICAgICB0ZXh0e1xuICAgIC8vICAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAvLyAgICAgICAgIC8vIGRpc3BsYXk6IG5vbmU7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gfSBcbiAgfSBcbn1cblxuLmhvbWUtY29tcG9uZW50LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE2cHggMTJweDtcbiAgcGFkZGluZy10b3A6IDQ2cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcblxuICAmLm5vLWZpbHRlcnN7XG4gICAgcGFkZGluZy10b3A6IGNhbGMoNDZweCAtIDMycHgpO1xuICB9XG5cbiAgLmdlbmVyYWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5jaGFydC1zZWN0aW9ue1xuICAgICAgLmhpZ2hjaGFydHMtY2hhcnR7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5jaGFydC1saXN0e1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuXG4gICAgICAgIC5tb250aC1pdGVte1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAmOm50aC1jaGlsZChvZGQpe1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U0ZTRlNDtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tb250aHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hbW91bnR7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuY2hhcnQtaW5mby1ib3h7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudG90YWwtYW1vdW50IHtcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgfVxuXG4gICAgLmNoYXJ0LWljb257XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcbiAgICAgIHotaW5kZXg6IDE7XG5cbiAgICAgICYuYWN0aXZle1xuICAgICAgICBiYWNrZ3JvdW5kOiBAYXBwLWhlYWRlci1jb2xvcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jYXRlZ29yaWVzLXRvdGFsIHtcbiAgICAgIHBhZGRpbmc6IDhweDtcblxuICAgICAgLmNhdGVnb3J5LWl0ZW0ge1xuICAgICAgICBwYWRkaW5nOiA0cHggMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluLW91dDtcblxuICAgICAgICAmLmNhdGVnb3J5LWxpbWl0ZWR7XG4gICAgICAgICAgb3BhY2l0eTogMC41O1xuXG4gICAgICAgICAgJi5zZWxlY3RlZHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICAuY29sb3ItYmFkZ2Uge1xuICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXRlZ29yeSB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSAgXG5cbiAgLmZpbHRlci1jb250YWluZXIge1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiA0MHB4O1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAvLyBkaXNwbGF5OiBub25lO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQsIHZpc2liaWxpdHkgMTUwbXMgZWFzZS1pbi1vdXQ7XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEycHgpO1xuICAgIH1cbiAgfVxuXG4gIC5uby1leHBlbnNlcy1wbGFjZWhvbGRlcntcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxufVxuIiwiOmhvc3Qge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46Om5nLWRlZXAgaGlnaGNoYXJ0cy1jaGFydCAqIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvLUxpZ2h0XCI7XG59XG46Om5nLWRlZXAgaGlnaGNoYXJ0cy1jaGFydCAuaGlnaGNoYXJ0cy1jcmVkaXRzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5ob21lLWNvbXBvbmVudC1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNnB4IDEycHg7XG4gIHBhZGRpbmctdG9wOiA0NnB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaG9tZS1jb21wb25lbnQtY29udGFpbmVyLm5vLWZpbHRlcnMge1xuICBwYWRkaW5nLXRvcDogY2FsYyg0NnB4IC0gMzJweCk7XG59XG4uaG9tZS1jb21wb25lbnQtY29udGFpbmVyIC5nZW5lcmFsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhvbWUtY29tcG9uZW50LWNvbnRhaW5lciAuZ2VuZXJhbCAuY2hhcnQtc2VjdGlvbiAuaGlnaGNoYXJ0cy1jaGFydCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4uaG9tZS1jb21wb25lbnQtY29udGFpbmVyIC5nZW5lcmFsIC5jaGFydC1zZWN0aW9uIC5jaGFydC1saXN0IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5ob21lLWNvbXBvbmVudC1jb250YWluZXIgLmdlbmVyYWwgLmNoYXJ0LXNlY3Rpb24gLmNoYXJ0LWxpc3QgLm1vbnRoLWl0ZW0ge1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhvbWUtY29tcG9uZW50LWNvbnRhaW5lciAuZ2VuZXJhbCAuY2hhcnQtc2VjdGlvbiAuY2hhcnQtbGlzdCAubW9udGgtaXRlbTpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XG59XG4uaG9tZS1jb21wb25lbnQtY29udGFpbmVyIC5nZW5lcmFsIC5jaGFydC1zZWN0aW9uIC5jaGFydC1saXN0IC5tb250aC1pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG4uaG9tZS1jb21wb25lbnQtY29udGFpbmVyIC5nZW5lcmFsIC5jaGFydC1zZWN0aW9uIC5jaGFydC1saXN0IC5tb250aC1pdGVtIC5tb250aCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5ob21lLWNvbXBvbmVudC1jb250YWluZXIgLmdlbmVyYWwgLmNoYXJ0LXNlY3Rpb24gLmNoYXJ0LWxpc3QgLm1vbnRoLWl0ZW0gLmFtb3VudCB7XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmhvbWUtY29tcG9uZW50LWNvbnRhaW5lciAuZ2VuZXJhbCAuY2hhcnQtc2VjdGlvbiAuY2hhcnQtaW5mby1ib3gge1xuICBwYWRkaW5nOiAxNnB4IDA7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG4uaG9tZS1jb21wb25lbnQtY29udGFpbmVyIC5nZW5lcmFsIC50b3RhbC1hbW91bnQge1xuICBmb250LXNpemU6IDJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG4uaG9tZS1jb21wb25lbnQtY29udGFpbmVyIC5nZW5lcmFsIC5jaGFydC1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA0cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcbiAgei1pbmRleDogMTtcbn1cbi5ob21lLWNvbXBvbmVudC1jb250YWluZXIgLmdlbmVyYWwgLmNoYXJ0LWljb24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzc2NzU3YjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmhvbWUtY29tcG9uZW50LWNvbnRhaW5lciAuZ2VuZXJhbCAuY2F0ZWdvcmllcy10b3RhbCB7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5ob21lLWNvbXBvbmVudC1jb250YWluZXIgLmdlbmVyYWwgLmNhdGVnb3JpZXMtdG90YWwgLmNhdGVnb3J5LWl0ZW0ge1xuICBwYWRkaW5nOiA0cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluLW91dDtcbn1cbi5ob21lLWNvbXBvbmVudC1jb250YWluZXIgLmdlbmVyYWwgLmNhdGVnb3JpZXMtdG90YWwgLmNhdGVnb3J5LWl0ZW0uY2F0ZWdvcnktbGltaXRlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5ob21lLWNvbXBvbmVudC1jb250YWluZXIgLmdlbmVyYWwgLmNhdGVnb3JpZXMtdG90YWwgLmNhdGVnb3J5LWl0ZW0uY2F0ZWdvcnktbGltaXRlZC5zZWxlY3RlZCB7XG4gIG9wYWNpdHk6IDE7XG59XG4uaG9tZS1jb21wb25lbnQtY29udGFpbmVyIC5nZW5lcmFsIC5jYXRlZ29yaWVzLXRvdGFsIC5jYXRlZ29yeS1pdGVtIC5jb2xvci1iYWRnZSB7XG4gIGhlaWdodDogMTRweDtcbiAgd2lkdGg6IDE0cHg7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgb3BhY2l0eTogMC45O1xufVxuLmhvbWUtY29tcG9uZW50LWNvbnRhaW5lciAuZ2VuZXJhbCAuY2F0ZWdvcmllcy10b3RhbCAuY2F0ZWdvcnktaXRlbSAuY2F0ZWdvcnkge1xuICBmbGV4OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5ob21lLWNvbXBvbmVudC1jb250YWluZXIgLmZpbHRlci1jb250YWluZXIge1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiA0MHB4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0LCB2aXNpYmlsaXR5IDE1MG1zIGVhc2UtaW4tb3V0O1xufVxuLmhvbWUtY29tcG9uZW50LWNvbnRhaW5lciAuZmlsdGVyLWNvbnRhaW5lci5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMnB4KTtcbn1cbi5ob21lLWNvbXBvbmVudC1jb250YWluZXIgLm5vLWV4cGVuc2VzLXBsYWNlaG9sZGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.less']
            }]
    }], function () { return [{ type: src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_5__["ExpenseService"] }, { type: src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_6__["FilterService"] }, { type: src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/screens/search/search.component.ts":
/*!****************************************************!*\
  !*** ./src/app/screens/search/search.component.ts ***!
  \****************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/slider/slider.service */ "./src/app/services/slider/slider.service.ts");
/* harmony import */ var src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/expenses/expense.service */ "./src/app/services/expenses/expense.service.ts");
/* harmony import */ var src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/filter/filter.service */ "./src/app/services/filter/filter.service.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_expense_list_expense_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/expense-list/expense-list.component */ "./src/app/components/expense-list/expense-list.component.ts");
/* harmony import */ var _pipes_pretty_currency_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/pretty-currency.pipe */ "./src/app/pipes/pretty-currency.pipe.ts");













const _c0 = ["searchInput"];
function SearchComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "prettyCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r98.matchesFound, " results ( ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r98.matchesTotalAmount), ")");
} }
function SearchComponent_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No expenses found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_12_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r100.collapseNotifier.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_div_12_div_1_Template, 3, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchComponent_div_12_div_3_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-expense-list", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    const currVal_0 = ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r96.results$)) == null ? null : tmp_0_0.length) > 0;
    var tmp_1_0 = null;
    const currVal_1 = ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx_r96.results$)) == null ? null : tmp_1_0.length) == 0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expenses", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, ctx_r96.results$))("collapseNotifier", ctx_r96.collapseNotifier);
} }
function SearchComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Major System Easter-Egg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SearchComponent_div_13_Template_input_keyup_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r102.majorTerm$.next($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "s, z");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " (House)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "t, d, th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " (Taxi)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " (Honey)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "m");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " (Omaha)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "r");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " (Hurry)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "l");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " (Holy)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "j, ch, sh, sch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " (Joy)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "c, k, g, q, ck");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " (High)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "v, f, ph, w");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " (Fee)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "p, b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " (Bee)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx_r97.majorResult$), " ");
} }
class SearchComponent {
    constructor(sliderService, expenseService, filterService) {
        this.sliderService = sliderService;
        this.expenseService = expenseService;
        this.filterService = filterService;
        this.componentDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.collapseNotifier = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.majorSystemEasterEggActive = false;
    }
    ngOnInit() {
        this.searchTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.majorTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.majorResult$ = this.majorTerm$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(600), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(term => term.length > 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(term => {
            return this.translateWordToNumberRecursive(term);
        }));
        this.results$ = this.searchTerm$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(600), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(term => term.length > 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((term) => this.getSearchResult(term)));
        this.results$.subscribe(expenses => {
            this.matchesFound = expenses.length;
            this.matchesTotalAmount = expenses.reduce((acc, cur) => {
                return acc + cur.amount;
            }, 0);
        });
        //Collapse first in case of opened when new results come in
        this.results$.subscribe(() => {
            this.collapseNotifier.next();
        });
    }
    translateWordToNumberRecursive(word) {
        let noDoubles = this.removedoubleLetters(word);
        let normalizedWord = noDoubles.replace(/[aeiou]/ig, '').toLowerCase();
        let res = this._translateWordToNumberRecursive("", normalizedWord);
        return res;
    }
    _translateWordToNumberRecursive(result, rest) {
        if (rest.length == 0) {
            return result;
        }
        else {
            switch (true) {
                case (rest.startsWith("sch")):
                    return this._translateWordToNumberRecursive(result + "6", rest.substring(3));
                case (rest.startsWith("ch")):
                case (rest.startsWith("sh")):
                    return this._translateWordToNumberRecursive(result + "6", rest.substring(2));
                case (rest.startsWith("ck")):
                    return this._translateWordToNumberRecursive(result + "7", rest.substring(2));
                case (rest.startsWith("s")):
                case (rest.startsWith("z")):
                    return this._translateWordToNumberRecursive(result + "0", rest.substring(1));
                case (rest.startsWith("th")):
                    return this._translateWordToNumberRecursive(result + "1", rest.substring(2));
                case (rest.startsWith("t")):
                case (rest.startsWith("d")):
                    return this._translateWordToNumberRecursive(result + "1", rest.substring(1));
                case (rest.startsWith("n")):
                    return this._translateWordToNumberRecursive(result + "2", rest.substring(1));
                case (rest.startsWith("m")):
                    return this._translateWordToNumberRecursive(result + "3", rest.substring(1));
                case (rest.startsWith("r")):
                    return this._translateWordToNumberRecursive(result + "4", rest.substring(1));
                case (rest.startsWith("l")):
                    return this._translateWordToNumberRecursive(result + "5", rest.substring(1));
                case (rest.startsWith("j")):
                    return this._translateWordToNumberRecursive(result + "6", rest.substring(1));
                case (rest.startsWith("c")):
                case (rest.startsWith("k")):
                case (rest.startsWith("g")):
                case (rest.startsWith("q")):
                    return this._translateWordToNumberRecursive(result + "7", rest.substring(1));
                case (rest.startsWith("f")):
                case (rest.startsWith("v")):
                case (rest.startsWith("w")):
                    return this._translateWordToNumberRecursive(result + "8", rest.substring(1));
                case (rest.startsWith("ph")):
                    return this._translateWordToNumberRecursive(result + "8", rest.substring(2));
                case (rest.startsWith("p")):
                case (rest.startsWith("b")):
                    return this._translateWordToNumberRecursive(result + "9", rest.substring(1));
                default:
                    return this._translateWordToNumberRecursive(result, rest.substring(1));
            }
        }
    }
    removedoubleLetters(word) {
        let arr = Array.from(word);
        let result = "";
        arr.forEach(char => {
            if (result.length == 0 || char != result.charAt(result.length - 1)) {
                result += char;
            }
        });
        return result;
    }
    getSearchResult(terms) {
        let singleTerms = terms.toLowerCase().split(",");
        //remove leading and ending whitespace after splitting
        if (singleTerms[0] && singleTerms[0] == "major") {
            //Easter egg, for Major system screen ;)
            this.majorSystemEasterEggActive = true;
            return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        }
        else {
            this.majorSystemEasterEggActive = false;
            let normalizedTerms = singleTerms.map(el => {
                let res = el;
                if (el[0] === ' ') {
                    res = res.substring(1);
                }
                if (el[el.length - 1] === ' ') {
                    res = res.substring(0, res.length - 1);
                }
                return res;
            });
            return this.expenseService.getExpenses("expenses").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(expenses => {
                return expenses.filter(expense => {
                    let matches = true;
                    normalizedTerms.forEach(singleTerm => {
                        if (matches) {
                            matches = expense.name.toLowerCase().includes(singleTerm) || expense.description.toLowerCase().includes(singleTerm) || expense.group.toLowerCase().includes(singleTerm);
                            let expenseDate = new Date(expense.date);
                            let matchesDate = true;
                            let dateSegments = singleTerm.split(".");
                            for (let i = 0; i < dateSegments.length; i++) {
                                if (matchesDate) {
                                    if (!parseInt(dateSegments[i]) && !(dateSegments[i] == "")) {
                                        matchesDate = false;
                                        break; // break loop not a date
                                    }
                                    // first day, month, year
                                    if (i == 0) {
                                        matchesDate = parseInt(dateSegments[i]) == expenseDate.getDate();
                                    }
                                    else if (i == 1) {
                                        //this is for the case "22."
                                        if (dateSegments[i] !== "") {
                                            matchesDate = parseInt(dateSegments[i]) == expenseDate.getMonth() + 1;
                                        }
                                    }
                                    else if (i == 2) {
                                        //this is for the case "22.03." with ending dot leading to third segment
                                        if (dateSegments[i] !== "") {
                                            matchesDate = parseInt(dateSegments[i]) == expenseDate.getFullYear();
                                        }
                                    }
                                    else {
                                        matchesDate = false;
                                        break; // break loop not a date (can't have more than 3 segments 12.2.2020)
                                    }
                                }
                                else {
                                    break;
                                }
                            }
                            matches = matches || matchesDate;
                        }
                        else {
                            return matches;
                        }
                    });
                    return matches;
                }).reverse().sort((a, b) => this.filterService.dateSorter(a.date, b.date));
            }));
        }
    }
    ngAfterViewInit() {
        this.searchInputElement.nativeElement.focus();
    }
    clear() {
        this.seachtext = "";
        this.searchTerm$.next("");
        this.searchInputElement.nativeElement.focus();
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_3__["SliderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_4__["ExpenseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_5__["FilterService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], viewQuery: function SearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInputElement = _t.first);
    } }, decls: 14, vars: 3, consts: [[1, "search-component-container", "w-100"], [1, "flexbox", "align", "p-0-8", "h-100"], [1, "flex-1", "mr-8", "search-bar-input-container"], ["matIcon", "", 1, "material-icons-outlined", "search-input-icon-prefix"], ["id", "searchbar-to-focus", "type", "text", "matInput", "", 1, "searchbar-input", "w-100", 3, "ngModel", "keyup", "ngModelChange"], ["searchInput", ""], ["matIcon", "", 1, "material-icons-outlined", "search-input-icon-suffix", 3, "click"], [3, "click"], ["class", "search-results", 3, "click", 4, "ngIf"], ["class", "major-system-container", 4, "ngIf"], [1, "search-results", 3, "click"], [4, "ngIf"], ["class", "no-expenses", 4, "ngIf"], [3, "expenses", "collapseNotifier"], [1, "no-expenses"], [1, "major-system-container"], [1, "header"], ["type", "text", "matInput", "", 3, "keyup"], [1, "major-table"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SearchComponent_Template_input_keyup_6_listener($event) { return ctx.searchTerm$.next($event.target.value); })("ngModelChange", function SearchComponent_Template_input_ngModelChange_6_listener($event) { return ctx.seachtext = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_i_click_8_listener($event) { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_span_click_10_listener($event) { return ctx.sliderService.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SearchComponent_div_12_Template, 7, 10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SearchComponent_div_13_Template, 67, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.seachtext);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.majorSystemEasterEggActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.majorSystemEasterEggActive);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _components_expense_list_expense_list_component__WEBPACK_IMPORTED_MODULE_10__["ExpenseListComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _pipes_pretty_currency_pipe__WEBPACK_IMPORTED_MODULE_11__["PrettyCurrencyPipe"]], styles: [".search-component-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.search-component-container[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  overflow-y: auto;\n  height: 100%;\n}\n.search-component-container[_ngcontent-%COMP%]   .search-bar-input-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.search-component-container[_ngcontent-%COMP%]   .search-bar-input-container[_ngcontent-%COMP%]   .search-input-icon-prefix[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 8px;\n  color: #888;\n  font-size: 18px;\n}\n.search-component-container[_ngcontent-%COMP%]   .search-bar-input-container[_ngcontent-%COMP%]   .search-input-icon-suffix[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  font-size: 16px;\n}\n.search-component-container[_ngcontent-%COMP%]   .search-bar-input-container[_ngcontent-%COMP%]   .searchbar-input[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 6px;\n  font-size: 16px;\n  background: #6b6b70;\n  border: none;\n  border-radius: 8px;\n  padding-left: 36px;\n  caret-color: #9e9e9e;\n}\n.search-component-container[_ngcontent-%COMP%]     .header-component-container {\n  height: 50px;\n}\n.search-component-container[_ngcontent-%COMP%]   .major-system-container[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.search-component-container[_ngcontent-%COMP%]   .major-system-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  line-height: 1.6em;\n}\n.search-component-container[_ngcontent-%COMP%]   .major-system-container[_ngcontent-%COMP%]   .major-table[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.search-component-container[_ngcontent-%COMP%]   .major-system-container[_ngcontent-%COMP%]   .major-table[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 6px;\n  color: #aaa;\n}\n.search-component-container[_ngcontent-%COMP%]   .major-system-container[_ngcontent-%COMP%]   .major-table[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.search-component-container[_ngcontent-%COMP%]   .major-system-container[_ngcontent-%COMP%]   .major-table[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  margin-right: 16px;\n  font-weight: bold;\n}\n.search-component-container[_ngcontent-%COMP%]   .major-system-container[_ngcontent-%COMP%]   .major-table[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9zZWFyY2gvRTovRG9jdW1lbnRzL1Byb2pla3RlL2V4cGVuc2VtYW5hZ2VyMi0wL2Zyb250ZW5kL3NyYy9hcHAvc2NyZWVucy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zY3JlZW5zL3NlYXJjaC9zZWFyY2guY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDSjtBREhBO0VBS1Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDUjtBRFJBO0VBV1Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQVI7QURiQTtFQWdCWSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0FaO0FEbkJBO0VBdUJZLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNEWjtBRHhCQTtFQTZCWSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDRlo7QURsQ0E7RUEyQ1ksWUFBQTtBQ05aO0FEckNBO0VBZ0RRLGFBQUE7QUNSUjtBRHhDQTtFQW1EWSxnQkFBQTtFQUNBLGtCQUFBO0FDUlo7QUQ1Q0E7RUF3RFksZ0JBQUE7QUNUWjtBRC9DQTtFQTJEZ0IsWUFBQTtFQUNBLFdBQUE7QUNUaEI7QURuREE7RUErRG9CLHlCQUFBO0FDVHBCO0FEdERBO0VBb0VvQixrQkFBQTtFQUNBLGlCQUFBO0FDWHBCO0FEMURBO0VBeUVvQixnQkFBQTtBQ1pwQiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtY29tcG9uZW50LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG4gICAgLnNlYXJjaC1yZXN1bHRze1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDEycHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAuc2VhcmNoLWJhci1pbnB1dC1jb250YWluZXJ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAuc2VhcmNoLWlucHV0LWljb24tcHJlZml4e1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogOHB4O1xuICAgICAgICAgICAgY29sb3I6ICM4ODg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5zZWFyY2gtaW5wdXQtaWNvbi1zdWZmaXh7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogOHB4OyAgICAgICAgXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VhcmNoYmFyLWlucHV0e1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2YjZiNzA7XG4gICAgICAgICAgICBib3JkZXI6bm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzZweDtcbiAgICAgICAgICAgIGNhcmV0LWNvbG9yOiAjOWU5ZTllO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICA6Om5nLWRlZXB7XG4gICAgICAgIC5oZWFkZXItY29tcG9uZW50LWNvbnRhaW5lcntcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5tYWpvci1zeXN0ZW0tY29udGFpbmVye1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgICAgIGlucHV0e1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWpvci10YWJsZXtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG5cbiAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNhYWE7XG5cbiAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3BhbjpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcGFuOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi5zZWFyY2gtY29tcG9uZW50LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc2VhcmNoLWNvbXBvbmVudC1jb250YWluZXIgLnNlYXJjaC1yZXN1bHRzIHtcbiAgcGFkZGluZzogMTZweCAxMnB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uc2VhcmNoLWNvbXBvbmVudC1jb250YWluZXIgLnNlYXJjaC1iYXItaW5wdXQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlYXJjaC1jb21wb25lbnQtY29udGFpbmVyIC5zZWFyY2gtYmFyLWlucHV0LWNvbnRhaW5lciAuc2VhcmNoLWlucHV0LWljb24tcHJlZml4IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4cHg7XG4gIGNvbG9yOiAjODg4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uc2VhcmNoLWNvbXBvbmVudC1jb250YWluZXIgLnNlYXJjaC1iYXItaW5wdXQtY29udGFpbmVyIC5zZWFyY2gtaW5wdXQtaWNvbi1zdWZmaXgge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5zZWFyY2gtY29tcG9uZW50LWNvbnRhaW5lciAuc2VhcmNoLWJhci1pbnB1dC1jb250YWluZXIgLnNlYXJjaGJhci1pbnB1dCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjNmI2YjcwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICBjYXJldC1jb2xvcjogIzllOWU5ZTtcbn1cbi5zZWFyY2gtY29tcG9uZW50LWNvbnRhaW5lciA6Om5nLWRlZXAgLmhlYWRlci1jb21wb25lbnQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLnNlYXJjaC1jb21wb25lbnQtY29udGFpbmVyIC5tYWpvci1zeXN0ZW0tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5zZWFyY2gtY29tcG9uZW50LWNvbnRhaW5lciAubWFqb3Itc3lzdGVtLWNvbnRhaW5lciBpbnB1dCB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjZlbTtcbn1cbi5zZWFyY2gtY29tcG9uZW50LWNvbnRhaW5lciAubWFqb3Itc3lzdGVtLWNvbnRhaW5lciAubWFqb3ItdGFibGUge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuLnNlYXJjaC1jb21wb25lbnQtY29udGFpbmVyIC5tYWpvci1zeXN0ZW0tY29udGFpbmVyIC5tYWpvci10YWJsZSBkaXYge1xuICBwYWRkaW5nOiA2cHg7XG4gIGNvbG9yOiAjYWFhO1xufVxuLnNlYXJjaC1jb21wb25lbnQtY29udGFpbmVyIC5tYWpvci1zeXN0ZW0tY29udGFpbmVyIC5tYWpvci10YWJsZSBkaXYgc3BhbiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uc2VhcmNoLWNvbXBvbmVudC1jb250YWluZXIgLm1ham9yLXN5c3RlbS1jb250YWluZXIgLm1ham9yLXRhYmxlIGRpdiBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zZWFyY2gtY29tcG9uZW50LWNvbnRhaW5lciAubWFqb3Itc3lzdGVtLWNvbnRhaW5lciAubWFqb3ItdGFibGUgZGl2IHNwYW46bGFzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.less']
            }]
    }], function () { return [{ type: src_app_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_3__["SliderService"] }, { type: src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_4__["ExpenseService"] }, { type: src_app_services_filter_filter_service__WEBPACK_IMPORTED_MODULE_5__["FilterService"] }]; }, { searchInputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["searchInput"]
        }] }); })();


/***/ }),

/***/ "./src/app/screens/settings/settings-bottom-sheet/settings-bottom-sheet.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/screens/settings/settings-bottom-sheet/settings-bottom-sheet.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SettingsBottomSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsBottomSheetComponent", function() { return SettingsBottomSheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var src_app_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/groups/groups.service */ "./src/app/services/groups/groups.service.ts");





class SettingsBottomSheetComponent {
    constructor(group, bottomSheetRef, groupsService) {
        this.group = group;
        this.bottomSheetRef = bottomSheetRef;
        this.groupsService = groupsService;
    }
    ngOnInit() {
        this.bottomSheetRef.backdropClick().subscribe(() => {
            document.body.style.backgroundColor = "#76757b";
        });
    }
    deleteGroup() {
        if (confirm(`Are you sure you want to finish "${this.group.groupName}"? This won't delete the expenses you added! You simply can't assign any more expenses to it.`)) {
            this.groupsService.deleteGroup(this.group.key, this.group.groupName);
            this.dismiss();
        }
    }
    close(event) {
        this.dismiss();
        event.preventDefault();
    }
    dismiss() {
        document.body.style.backgroundColor = "#76757b";
        this.bottomSheetRef.dismiss();
    }
}
SettingsBottomSheetComponent.ɵfac = function SettingsBottomSheetComponent_Factory(t) { return new (t || SettingsBottomSheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_2__["GroupsService"])); };
SettingsBottomSheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsBottomSheetComponent, selectors: [["app-settings-bottom-sheet"]], decls: 6, vars: 0, consts: [[1, "settings-group-menu"], [1, "option-container"], [1, "delete", "menu-item", 3, "click"], [1, "cancel", "menu-item", 3, "click"]], template: function SettingsBottomSheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsBottomSheetComponent_Template_div_click_2_listener($event) { return ctx.deleteGroup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Finish group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsBottomSheetComponent_Template_div_click_4_listener($event) { return ctx.close($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".settings-group-menu[_ngcontent-%COMP%] {\n  background: none;\n  margin: 8px;\n}\n.settings-group-menu[_ngcontent-%COMP%]   .option-container[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 12px;\n}\n.settings-group-menu[_ngcontent-%COMP%]   .option-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid #d8d8d8;\n}\n.settings-group-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  height: 55px;\n  color: #0c7def;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 1.3em;\n}\n.settings-group-menu[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 12px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9zZXR0aW5ncy9zZXR0aW5ncy1ib3R0b20tc2hlZXQvRTovRG9jdW1lbnRzL1Byb2pla3RlL2V4cGVuc2VtYW5hZ2VyMi0wL2Zyb250ZW5kL3NyYy9hcHAvc2NyZWVucy9zZXR0aW5ncy9zZXR0aW5ncy1ib3R0b20tc2hlZXQvc2V0dGluZ3MtYm90dG9tLXNoZWV0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zY3JlZW5zL3NldHRpbmdzL3NldHRpbmdzLWJvdHRvbS1zaGVldC9zZXR0aW5ncy1ib3R0b20tc2hlZXQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUNDSjtBREhBO0VBS1EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FDQ1I7QURFWTtFQUNJLGdDQUFBO0FDQWhCO0FEWEE7RUFpQlEsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0FDSFI7QURuQkE7RUEwQlEscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDSlIiLCJmaWxlIjoic3JjL2FwcC9zY3JlZW5zL3NldHRpbmdzL3NldHRpbmdzLWJvdHRvbS1zaGVldC9zZXR0aW5ncy1ib3R0b20tc2hlZXQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZ3MtZ3JvdXAtbWVudXsgXG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBtYXJnaW46IDhweDtcblxuICAgIC5vcHRpb24tY29udGFpbmVye1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOTUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuXG4gICAgICAgID5kaXZ7XG4gICAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCl7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubWVudS1pdGVte1xuICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICAgIGNvbG9yOiAjMGM3ZGVmO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICB9XG5cbiAgICAuY2FuY2Vse1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOTUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59IiwiLnNldHRpbmdzLWdyb3VwLW1lbnUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBtYXJnaW46IDhweDtcbn1cbi5zZXR0aW5ncy1ncm91cC1tZW51IC5vcHRpb24tY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbi5zZXR0aW5ncy1ncm91cC1tZW51IC5vcHRpb24tY29udGFpbmVyID4gZGl2Om5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcbn1cbi5zZXR0aW5ncy1ncm91cC1tZW51IC5tZW51LWl0ZW0ge1xuICBoZWlnaHQ6IDU1cHg7XG4gIGNvbG9yOiAjMGM3ZGVmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cbi5zZXR0aW5ncy1ncm91cC1tZW51IC5jYW5jZWwge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsBottomSheetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings-bottom-sheet',
                templateUrl: './settings-bottom-sheet.component.html',
                styleUrls: ['./settings-bottom-sheet.component.less']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"]]
            }] }, { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"] }, { type: src_app_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_2__["GroupsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/screens/settings/settings.component.ts":
/*!********************************************************!*\
  !*** ./src/app/screens/settings/settings.component.ts ***!
  \********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _settings_bottom_sheet_settings_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-bottom-sheet/settings-bottom-sheet.component */ "./src/app/screens/settings/settings-bottom-sheet/settings-bottom-sheet.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var src_app_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/groups/groups.service */ "./src/app/services/groups/groups.service.ts");
/* harmony import */ var src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/category/category.service */ "./src/app/services/category/category.service.ts");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/expenses/expense.service */ "./src/app/services/expenses/expense.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_recurring_expense_list_recurring_expense_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/recurring-expense-list/recurring-expense-list.component */ "./src/app/components/recurring-expense-list/recurring-expense-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");















const _c0 = ["addGroupsInput"];
const _c1 = ["qrCode"];
function SettingsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No recurring expenses yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SettingsComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_20_Template_i_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const group_r43 = ctx.$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.openBottomSheet($event, group_r43); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r43.groupName);
} }
function SettingsComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " There are no groups yet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SettingsComponent_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", group_r46.groupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r46.groupName);
} }
class SettingsComponent {
    constructor(groupsService, categoryService, bottomSheet, expenseService, datePipe) {
        this.groupsService = groupsService;
        this.categoryService = categoryService;
        this.bottomSheet = bottomSheet;
        this.expenseService = expenseService;
        this.datePipe = datePipe;
        this.collapseNotifier = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.shareShown = false;
        /**
         * Since the height animation overflows the end of scroll by making the container higher then before, one can't see he animation since its happening off-screen
         * Therefore during the animation each frame we scroll to the bottom of the currently animated box
         */
        this.animating = false;
        this.recurringExists = false;
    }
    ngOnInit() {
        this.groups$ = this.groupsService.getGroups();
        this.recurringExpenses$ = this.expenseService.getExpenses("recurringExpenses");
        //TODO : Dirty workaround 
        setTimeout(() => {
            this.defaultGroupSelected = this.groupsService.defaultGroup;
        }, 100);
        this.defaultCategorySelected = this.categoryService.defaultCategory;
        this.checkRecurringExists();
    }
    hardReloadApp() {
        let shallUpdate = confirm("Updating resets the offline cached app. Data will still remain!");
        if (shallUpdate) {
            navigator.serviceWorker.getRegistrations().then(function (registrations) {
                for (let registration of registrations) {
                    registration.unregister();
                }
            });
            this.reloadApp();
        }
    }
    reloadApp() {
        window.location.reload();
    }
    /**
     * Downloads all of the data (expenses, recurringExpenses, groups) as a snapshot in a .json file
     */
    downloadBackup() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.expenseService.getExpenses("expenses"), this.expenseService.getExpenses("recurringExpenses"), this.groupsService.getGroups())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe(([expenses, recurringExpenses, groups]) => {
            let data = { expenses, recurringExpenses, groups };
            let fileName = `Expense_backup_${this.datePipe.transform(new Date(), 'MMM y').split(' ').join('_')}`;
            this.downloadObjectAsJson(data, fileName);
        });
    }
    /**
     * gets called when a file has been chosen in the file-input
     * @param event FileUploadEvent
     */
    onImport(event) {
        var file = event.srcElement.files[0];
        if (file) {
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = (e) => {
                this.loadDataIntoApp(JSON.parse(e.target.result));
            };
            reader.onerror = (e) => {
                console.log('error reading file');
            };
        }
    }
    /**
     * loads all of the backup into the IndexedDB
     * @param json data containing expenses, recurringExpenses, groups
     */
    loadDataIntoApp(json) {
        // add normal expenses
        if (confirm("Please confirm you want to load this backup into your app")) {
            json.expenses.forEach(expense => {
                delete expense.key;
                // if(!expense.recurring){
                this.expenseService.addExpense(expense, "expenses");
                // }
            });
            // add recurring expenses
            json.recurringExpenses.forEach(expense => {
                delete expense.key;
                this.expenseService.addExpense(expense, "recurringExpenses", true);
            });
            // add groups
            json.groups.forEach(group => {
                this.groupsService.addGroup(group.groupName);
            });
            alert("Data loaded successfully");
        }
    }
    deleteData() {
        if (confirm("This will delete all expenses and data associated on this device")) {
            if (confirm("Are you REALLY sure?")) {
                this.expenseService.clearData("expenses");
                this.expenseService.clearData("recurringExpenses");
                this.groupsService.clearData();
            }
        }
    }
    downloadObjectAsJson(exportObj, exportName) {
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", exportName + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        console.log("should download now");
        downloadAnchorNode.remove();
    }
    /**
     * call group/category service and update currently selected in subnject and localstorage
     */
    defaultGroupChanged() {
        this.groupsService.setDefaultGroup(this.defaultGroupSelected);
    }
    /**
     * call group/category service and update currently selected in subnject and localstorage
     */
    defaultCategoryChanged() {
        this.categoryService.setDefaultCategory(this.defaultCategorySelected);
    }
    addGroup() {
        if (!this.newGroupInputValue) {
            this.addGroupsInputElement.nativeElement.focus();
        }
        else {
            this.groupsService.addGroup(this.newGroupInputValue);
            this.newGroupInputValue = "";
        }
    }
    openBottomSheet(e, group) {
        document.body.style.backgroundColor = "#4f5053";
        e.stopPropagation();
        this.bottomSheet.open(_settings_bottom_sheet_settings_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_2__["SettingsBottomSheetComponent"], { data: group });
    }
    toggleShare() {
        const _scrollWithAnimation = () => {
            if (this.animating) {
                requestAnimationFrame(() => {
                    console.log("animated");
                    this.QrCode.nativeElement.scrollIntoView({ block: "end" });
                    _scrollWithAnimation();
                });
            }
        };
        if (!this.shareShown) {
            this.animating = true;
            _scrollWithAnimation();
            setTimeout(() => {
                this.animating = false;
            }, 250);
        }
        this.shareShown = !this.shareShown;
    }
    checkRecurringExists() {
        this.recurringExpenses$.subscribe((rec => {
            if (rec.length > 0) {
                this.recurringExists = true;
            }
            else {
                this.recurringExists = false;
            }
        }));
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_5__["GroupsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_8__["ExpenseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], viewQuery: function SettingsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addGroupsInputElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.QrCode = _t.first);
    } }, decls: 107, vars: 20, consts: [[1, "settings-component-container", 3, "click"], [1, "general-settings-section"], [1, "section-container"], [1, "groups-header"], ["class", "no-recurring-expenses", 4, "ngIf"], [1, "p-8"], [3, "expenses", "collapseNotifier"], [1, "group-settings-section"], ["type", "text", 3, "ngModel", "ngModelChange"], ["addGroupsInput", ""], [1, "material-icons-outlined", 3, "click"], [1, "group-list"], ["class", "group-item", 4, "ngFor", "ngForOf"], ["class", "no-items-yet", 4, "ngIf"], [1, "defaults-settings-section"], ["appearance", "standard", 1, "groups-default"], ["matNativeControl", "", 1, "group-picker", "group-input-field", 3, "ngModel", "ngModelChange", "change"], ["value", "General"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", 1, "group-picker", 3, "ngModel", "ngModelChange", "change"], ["value", "food"], ["value", "accommodation"], ["value", "transport"], ["value", "leisure"], ["value", "multimedia"], ["value", "gear"], ["value", "health_insurance"], ["value", "general"], [1, "flexbox", "p-8"], [1, "material-icons-outlined", "mr-8", "bigger-font"], [1, "smaller-font"], [1, "flexbox", "align", "p-8", 3, "click"], [1, "material-icons-outlined", "mr-8"], [1, "flexbox", "align", "p-8"], [1, "backup-upload-imput"], ["type", "file", "id", "backupUploader", 3, "change"], [1, "share-section", "flexbox", "column"], ["src", "../../../assets/images/qr_code.png", "alt", "QR-Code", 1, "qr-code"], ["qrCode", ""], [1, "no-recurring-expenses"], [1, "group-item"], [1, "no-items-yet"], [3, "value"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_div_click_0_listener($event) { return ctx.collapseNotifier.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Recurring expenses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SettingsComponent_div_6_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-recurring-expense-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_input_ngModelChange_15_listener($event) { return ctx.newGroupInputValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_i_click_17_listener($event) { return ctx.addGroup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SettingsComponent_div_20_Template, 5, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SettingsComponent_span_22_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Default form values");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_select_ngModelChange_32_listener($event) { return ctx.defaultGroupSelected = $event; })("change", function SettingsComponent_Template_select_change_32_listener($event) { return ctx.defaultGroupChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, SettingsComponent_option_35_Template, 2, 2, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_select_ngModelChange_40_listener($event) { return ctx.defaultCategorySelected = $event; })("change", function SettingsComponent_Template_select_change_40_listener($event) { return ctx.defaultCategoryChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Accommodation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Leisure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Multimedia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Gear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Health & Insurance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Data management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "This app operates fully locally on your device without any cloud backup. Uninstalling the app will delete all of your data. You can download your data as a file and load it back into the app any time after re-installing the app as long as you own that file.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_div_click_67_listener($event) { return ctx.downloadBackup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "cloud_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Download backup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "cloud_upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Load backup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SettingsComponent_Template_input_change_78_listener($event) { return ctx.onImport($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_div_click_79_listener($event) { return ctx.deleteData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Delete all data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_div_click_89_listener($event) { return ctx.reloadApp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Reload Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_div_click_94_listener($event) { return ctx.hardReloadApp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Update Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_div_click_100_listener($event) { return ctx.toggleShare(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.recurringExists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("empty-list", !ctx.recurringExists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expenses", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 12, ctx.recurringExpenses$))("collapseNotifier", ctx.collapseNotifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newGroupInputValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 14, ctx.groups$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 16, ctx.groups$).length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.defaultGroupSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 18, ctx.groups$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.defaultCategorySelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideInOut", ctx.shareShown ? "in" : "out");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _components_recurring_expense_list_recurring_expense_list_component__WEBPACK_IMPORTED_MODULE_10__["RecurringExpenseListComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: [".settings-component-container[_ngcontent-%COMP%]   .general-settings-section[_ngcontent-%COMP%]   .no-recurring-expenses[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  opacity: 0.7;\n}\n.settings-component-container[_ngcontent-%COMP%]   .general-settings-section[_ngcontent-%COMP%]   .empty-list[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.settings-component-container[_ngcontent-%COMP%]   .defaults-settings-section[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  padding: 0 8px;\n}\n.settings-component-container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  padding: 16px 0;\n}\n.settings-component-container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid #ddd;\n}\n.settings-component-container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .section-container[_ngcontent-%COMP%] {\n  padding: 0 16px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.settings-component-container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .section-container[_ngcontent-%COMP%]   .backup-upload-imput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.settings-component-container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .section-container[_ngcontent-%COMP%]   .groups-header[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 8px;\n}\n.settings-component-container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .section-container[_ngcontent-%COMP%]   .qr-code[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: calc(100% - 32px);\n  align-self: center;\n  padding: 18px;\n}\n.settings-component-container[_ngcontent-%COMP%]   section.group-settings-section[_ngcontent-%COMP%]   .groups-header[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.settings-component-container[_ngcontent-%COMP%]   section.group-settings-section[_ngcontent-%COMP%]   .groups-header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 6px;\n  font-size: 16px;\n  background: #dcdcdc;\n  border: none;\n  border-radius: 8px;\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin-left: 8px;\n  box-sizing: border-box;\n  display: inline;\n  min-width: 10px;\n}\n.settings-component-container[_ngcontent-%COMP%]   section.group-settings-section[_ngcontent-%COMP%]   .groups-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.settings-component-container[_ngcontent-%COMP%]   section.group-settings-section[_ngcontent-%COMP%]   .group-list[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-top: 8px;\n}\n.settings-component-container[_ngcontent-%COMP%]   section.group-settings-section[_ngcontent-%COMP%]   .group-list[_ngcontent-%COMP%]   .group-item[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  display: -webkit-box;\n  display: flex;\n  background: white;\n  box-shadow: 1px 1px 20px 0px #d2d2d2;\n  border-radius: 8px;\n  margin: 4px 0;\n  -webkit-box-align: center;\n          align-items: center;\n  min-width: 100px;\n}\n.settings-component-container[_ngcontent-%COMP%]   section.group-settings-section[_ngcontent-%COMP%]   .group-list[_ngcontent-%COMP%]   .group-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.settings-component-container[_ngcontent-%COMP%]   section.group-settings-section[_ngcontent-%COMP%]   .group-list[_ngcontent-%COMP%]   .no-items-yet[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9zZXR0aW5ncy9FOi9Eb2N1bWVudHMvUHJvamVrdGUvZXhwZW5zZW1hbmFnZXIyLTAvZnJvbnRlbmQvc3JjL2FwcC9zY3JlZW5zL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zY3JlZW5zL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBSVksY0FBQTtFQUNBLFlBQUE7QUNKWjtBRERBO0VBUVksVUFBQTtBQ0paO0FESkE7RUFjWSxjQUFBO0FDUFo7QURQQTtFQXNCUSxlQUFBO0FDWlI7QURTUTtFQUNJLDZCQUFBO0FDUFo7QURiQTtFQXlCWSxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDVFo7QURsQkE7RUErQm9CLGFBQUE7QUNWcEI7QURyQkE7RUFvQ2dCLGlCQUFBO0VBQ0Esa0JBQUE7QUNaaEI7QUR6QkE7RUF5Q2dCLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNiaEI7QURpQlE7RUFFUSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDaEJoQjtBRGFRO0VBTVksWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ2hCcEI7QURDUTtFQW1CWSxZQUFBO0FDakJwQjtBREZRO0VBd0JRLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGdCQUFBO0FDbkJoQjtBRFBRO0VBNkJZLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBRUEsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQkFBQTtBQ3BCcEI7QURqQlE7RUF3Q2dCLG1CQUFBO1VBQUEsT0FBQTtBQ3BCeEI7QURwQlE7RUE2Q1ksWUFBQTtBQ3RCcEIiLCJmaWxlIjoic3JjL2FwcC9zY3JlZW5zL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlc1wiO1xuXG4uc2V0dGluZ3MtY29tcG9uZW50LWNvbnRhaW5lcntcblxuICAgIC5nZW5lcmFsLXNldHRpbmdzLXNlY3Rpb257XG4gICAgICAgIC5uby1yZWN1cnJpbmctZXhwZW5zZXN7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgfVxuICAgICAgICAuZW1wdHktbGlzdHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZGVmYXVsdHMtc2V0dGluZ3Mtc2VjdGlvbntcbiAgICAgICAgbWF0LWZvcm0tZmllbGR7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlY3Rpb257XG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKXtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICB9XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMDtcblxuICAgICAgICAuc2VjdGlvbi1jb250YWluZXJ7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgLmJhY2t1cC11cGxvYWQtaW1wdXR7XG4gICAgICAgICAgICAgICAgaW5wdXR7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZ3JvdXBzLWhlYWRlcntcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5xci1jb2Rle1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOHB4XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmdyb3VwLXNldHRpbmdzLXNlY3Rpb257XG4gICAgICAgICAgICAuZ3JvdXBzLWhlYWRlcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgICAgICAgICAgICAgaW5wdXR7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGNkY2RjO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGl7ICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC5ncm91cC1saXN0e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIFxuICAgICAgICAgICAgICAgIC5ncm91cC1pdGVte1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMjBweCAwcHggI2QyZDJkMjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDRweCAwO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubm8taXRlbXMteWV0e1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi5zZXR0aW5ncy1jb21wb25lbnQtY29udGFpbmVyIC5nZW5lcmFsLXNldHRpbmdzLXNlY3Rpb24gLm5vLXJlY3VycmluZy1leHBlbnNlcyB7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBvcGFjaXR5OiAwLjc7XG59XG4uc2V0dGluZ3MtY29tcG9uZW50LWNvbnRhaW5lciAuZ2VuZXJhbC1zZXR0aW5ncy1zZWN0aW9uIC5lbXB0eS1saXN0IHtcbiAgcGFkZGluZzogMDtcbn1cbi5zZXR0aW5ncy1jb21wb25lbnQtY29udGFpbmVyIC5kZWZhdWx0cy1zZXR0aW5ncy1zZWN0aW9uIG1hdC1mb3JtLWZpZWxkIHtcbiAgcGFkZGluZzogMCA4cHg7XG59XG4uc2V0dGluZ3MtY29tcG9uZW50LWNvbnRhaW5lciBzZWN0aW9uIHtcbiAgcGFkZGluZzogMTZweCAwO1xufVxuLnNldHRpbmdzLWNvbXBvbmVudC1jb250YWluZXIgc2VjdGlvbjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG4uc2V0dGluZ3MtY29tcG9uZW50LWNvbnRhaW5lciBzZWN0aW9uIC5zZWN0aW9uLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zZXR0aW5ncy1jb21wb25lbnQtY29udGFpbmVyIHNlY3Rpb24gLnNlY3Rpb24tY29udGFpbmVyIC5iYWNrdXAtdXBsb2FkLWltcHV0IGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zZXR0aW5ncy1jb21wb25lbnQtY29udGFpbmVyIHNlY3Rpb24gLnNlY3Rpb24tY29udGFpbmVyIC5ncm91cHMtaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5zZXR0aW5ncy1jb21wb25lbnQtY29udGFpbmVyIHNlY3Rpb24gLnNlY3Rpb24tY29udGFpbmVyIC5xci1jb2RlIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE4cHg7XG59XG4uc2V0dGluZ3MtY29tcG9uZW50LWNvbnRhaW5lciBzZWN0aW9uLmdyb3VwLXNldHRpbmdzLXNlY3Rpb24gLmdyb3Vwcy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNldHRpbmdzLWNvbXBvbmVudC1jb250YWluZXIgc2VjdGlvbi5ncm91cC1zZXR0aW5ncy1zZWN0aW9uIC5ncm91cHMtaGVhZGVyIGlucHV0IHtcbiAgcGFkZGluZzogNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICNkY2RjZGM7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmbGV4OiAxO1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1pbi13aWR0aDogMTBweDtcbn1cbi5zZXR0aW5ncy1jb21wb25lbnQtY29udGFpbmVyIHNlY3Rpb24uZ3JvdXAtc2V0dGluZ3Mtc2VjdGlvbiAuZ3JvdXBzLWhlYWRlciBpIHtcbiAgcGFkZGluZzogOHB4O1xufVxuLnNldHRpbmdzLWNvbXBvbmVudC1jb250YWluZXIgc2VjdGlvbi5ncm91cC1zZXR0aW5ncy1zZWN0aW9uIC5ncm91cC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbi5zZXR0aW5ncy1jb21wb25lbnQtY29udGFpbmVyIHNlY3Rpb24uZ3JvdXAtc2V0dGluZ3Mtc2VjdGlvbiAuZ3JvdXAtbGlzdCAuZ3JvdXAtaXRlbSB7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAyMHB4IDBweCAjZDJkMmQyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogNHB4IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59XG4uc2V0dGluZ3MtY29tcG9uZW50LWNvbnRhaW5lciBzZWN0aW9uLmdyb3VwLXNldHRpbmdzLXNlY3Rpb24gLmdyb3VwLWxpc3QgLmdyb3VwLWl0ZW0gc3BhbiB7XG4gIGZsZXg6IDE7XG59XG4uc2V0dGluZ3MtY29tcG9uZW50LWNvbnRhaW5lciBzZWN0aW9uLmdyb3VwLXNldHRpbmdzLXNlY3Rpb24gLmdyb3VwLWxpc3QgLm5vLWl0ZW1zLXlldCB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('slideInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    opacity: '0',
                    overflow: 'hidden',
                    height: '0px',
                    width: '0px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    opacity: '1',
                    overflow: 'hidden',
                    height: '*',
                    width: '*'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('150ms ease-in-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('150ms ease-in-out'))
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings',
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('slideInOut', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            opacity: '0',
                            overflow: 'hidden',
                            height: '0px',
                            width: '0px',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            opacity: '1',
                            overflow: 'hidden',
                            height: '*',
                            width: '*'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('150ms ease-in-out')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('150ms ease-in-out'))
                    ])
                ],
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.less']
            }]
    }], function () { return [{ type: src_app_services_groups_groups_service__WEBPACK_IMPORTED_MODULE_5__["GroupsService"] }, { type: src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"] }, { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheet"] }, { type: src_app_services_expenses_expense_service__WEBPACK_IMPORTED_MODULE_8__["ExpenseService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] }]; }, { addGroupsInputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["addGroupsInput"]
        }], QrCode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["qrCode"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/audio/audio.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/audio/audio.service.ts ***!
  \*************************************************/
/*! exports provided: AudioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioService", function() { return AudioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AudioService {
    constructor(http) {
        this.http = http;
    }
    getTextFromAudio(binaryData) {
        return this.http.post("/api/audio", binaryData.buffer, { responseType: 'json' }).toPromise();
    }
    getUserMediaStream() {
        const constraints = {
            audio: {
                "noiseSuppression": true
            }
        };
        return navigator.mediaDevices.getUserMedia(constraints);
    }
}
AudioService.ɵfac = function AudioService_Factory(t) { return new (t || AudioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AudioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AudioService, factory: AudioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AudioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/category/category.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/category/category.service.ts ***!
  \*******************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CategoryService {
    constructor() {
        this.categoryColors = {
            food: "#749056",
            accommodation: "#5979a9",
            transport: "rgb(192, 87, 70)",
            multimedia: "rgb(150, 123, 92)",
            leisure: "rgb(202, 179, 99)",
            gear: "rgb(65, 97, 68)",
            health_insurance: "#afafaf",
            general: "rgb(82, 82, 82)",
        };
        this.defaultCategory = localStorage.getItem("defaultCategory") || "food";
    }
    setDefaultCategory(category) {
        localStorage.setItem("defaultCategory", category);
        this.defaultCategory = category;
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(); };
CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/expenses/Expenses.ts":
/*!***********************************************!*\
  !*** ./src/app/services/expenses/Expenses.ts ***!
  \***********************************************/
/*! exports provided: expenses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expenses", function() { return expenses; });
const expenses = [
    {
        name: "Döner",
        amount: 12,
        category: "accommodation",
        date: "2020-02-24",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Studium"
    },
    {
        name: "Pizza",
        amount: 12,
        category: "food",
        date: "2020-02-13",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Studium"
    },
    {
        name: "Flug",
        amount: 1699,
        category: "transport",
        date: "2020-02-01",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Studium"
    },
    {
        name: "Netto",
        amount: 3900,
        category: "food",
        date: "2020-01-18",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Studium"
    },
    {
        name: "Restaurant zum Hirsch",
        amount: 124,
        category: "multimedia",
        date: "2019-12-12",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Studium"
    },
    {
        name: "Bus",
        amount: 5,
        category: "general",
        date: "2019-12-22",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Studium"
    },
    {
        name: "Bus",
        amount: 5,
        category: "general",
        date: "2019-02-07",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Studium"
    },
    {
        name: "Zug Stuttgart",
        amount: 12.3,
        category: "food",
        date: "2020-01-16",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Studium"
    },
    {
        name: "BlaBlaCar",
        amount: 6,
        category: "food",
        date: "2020-01-12",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Studium"
    },
    {
        name: "Bus",
        amount: 12,
        category: "food",
        date: "2020-01-06",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Studium"
    },
    {
        name: "Spotify Abo",
        amount: 5,
        category: "multimedia",
        date: "2019-07-01",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Studium"
    },
    {
        name: "BlaBlaCar",
        amount: 6,
        category: "food",
        date: "2020-02-17",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "General"
    },
    {
        name: "Bus",
        amount: 12,
        category: "food",
        date: "2020-02-22",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "General"
    },
    {
        name: "Spotify Abo",
        amount: 5,
        category: "multimedia",
        date: "2020-02-01",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "General"
    },
    {
        name: "Google Drive Abo",
        amount: 9.99,
        category: "multimedia",
        date: "2016-05-03",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Asia"
    },
    {
        name: "Hostel",
        amount: 45.90,
        category: "accomodation",
        date: "2016-05-01",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Asia"
    },
    {
        name: "Rentenversicherung",
        amount: 63.50,
        category: "general",
        date: "2016-05-01",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Asia"
    },
    {
        name: "Krankenversicherung",
        amount: 2505.50,
        category: "general",
        date: "2016-05-01",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Asia"
    },
    {
        name: "Döner",
        amount: 12,
        category: "accommodation",
        date: "2016-05-01",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Asia"
    },
    {
        name: "Pizza",
        amount: 12,
        category: "accommodation",
        date: "2016-05-01",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Asia"
    },
    {
        name: "Familien-Essen",
        amount: 50,
        category: "transport",
        date: "2016-05-01",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Asia"
    },
    {
        name: "Netto",
        amount: 13.87,
        category: "accommodation",
        date: "2016-05-01",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Asia"
    },
    {
        name: "Restaurant zum Hirsch",
        amount: 78,
        category: "food",
        date: "2016-08-13",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Asia"
    },
    {
        name: "Bus",
        amount: 5,
        category: "food",
        date: "2017-07-20",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Trip Norway"
    },
    {
        name: "Zug Stuttgart",
        amount: 12.3,
        category: "accommodation",
        date: "2017-07-20",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Trip Norway"
    },
    {
        name: "BlaBlaCar",
        amount: 6,
        category: "transport",
        date: "2017-08-31",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Trip Norway"
    },
    {
        name: "Bus",
        amount: 12,
        category: "multimedia",
        date: "2017-07-20",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Trip Norway"
    },
    {
        name: "Spotify Abo",
        amount: 5,
        category: "food",
        date: "2017-07-20",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Trip Norway"
    },
    {
        name: "Google Drive Abo",
        amount: 9.99,
        category: "accomodation",
        date: "2017-07-20",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Trip Norway"
    },
    {
        name: "Hostel",
        amount: 45.90,
        category: "accomodation",
        date: "2017-07-20",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Trip Norway"
    },
    {
        name: "Rentenversicherung",
        amount: 63.50,
        category: "general",
        date: "2017-07-20",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Trip Norway"
    },
    {
        name: "Krankenversicherung",
        amount: 105.50,
        category: "food",
        date: "2017-07-20",
        description: "Lorem Ipsum dolor sit amet. Consecteteur amid.",
        group: "Trip Norway"
    },
];


/***/ }),

/***/ "./src/app/services/expenses/expense.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/expenses/expense.service.ts ***!
  \******************************************************/
/*! exports provided: ExpenseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseService", function() { return ExpenseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _Expenses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Expenses */ "./src/app/services/expenses/Expenses.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _indexed_dbconnection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../indexed-dbconnection.service */ "./src/app/services/indexed-dbconnection.service.ts");







class ExpenseService {
    constructor(indexedDBService) {
        this.indexedDBService = indexedDBService;
        this.connection$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.createExpenseDatabase();
        this.expenses$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.recurringExpenses$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.expenseDeletedNotifier = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.checkRecurringExpenses();
    }
    getFormatDate(date) {
        return `${date.getFullYear()}-${this.getPrettyMonth(date.getMonth() + 1)}-01`;
    }
    getPrettyMonth(number) {
        if (number < 10) {
            return 0 + number.toString();
        }
        else {
            return number.toString();
        }
    }
    checkRecurringExpenses() {
        this.getExpenses("recurringExpenses").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(expenses => {
            expenses.forEach(expense => {
                if ((!expense.lastUpdate || Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addMonths"])(new Date(expense.lastUpdate), 1) < new Date()) && new Date() > new Date(expense.date)) {
                    // update needed for this expense
                    let key = expense.key;
                    delete expense.lastUpdate;
                    delete expense.key;
                    this.addExpense(Object.assign(Object.assign({}, expense), { date: this.getFormatDate(new Date(new Date().getFullYear(), new Date().getMonth())) }), "expenses");
                    this.updateExpense(key, Object.assign(Object.assign({}, expense), { lastUpdate: this.getFormatDate(new Date()) }), "recurringExpenses");
                }
            });
        });
    }
    /**
     *
     * @param expense
     * @param type either 'expenses' or 'recurringExpenses'
     */
    addExpense(expense, type, fromBackup) {
        let tx = this.db.transaction([type], 'readwrite');
        let store = tx.objectStore(type);
        store.add(expense);
        tx.oncomplete = () => {
            if (type == "recurringExpenses") {
                if (!fromBackup) {
                    this.addInitialRecurrentEntries(expense);
                }
                this.refreshExpenses(type);
            }
            else {
                this.refreshExpenses(type);
            }
        };
        tx.onerror = (event) => {
            alert('error storing expense ' + event.target.errorCode);
        };
    }
    ;
    addInitialRecurrentEntries(expense) {
        let currentMonthDate = new Date(new Date().getFullYear(), new Date().getMonth());
        let counter = 0;
        // becomes -1 once iterading date after expense date
        while (Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["differenceInMonths"])(currentMonthDate, Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addMonths"])(new Date(expense.date), counter)) >= 0) {
            let pastRecurrentExpense = Object.assign(Object.assign({}, expense), { date: this.getFormatDate(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addMonths"])(new Date(expense.date), counter)) });
            delete pastRecurrentExpense.lastUpdate;
            this.addExpense(pastRecurrentExpense, "expenses");
            counter++;
        }
    }
    /**
     * Gets all of the expenses from the IndexedDB
     * @param type either "expenses" or "recurring"
     */
    getExpenses(type) {
        this.connection$.subscribe(() => this.refreshExpenses(type));
        if (type == "expenses") {
            return this.expenses$.asObservable();
        }
        else {
            return this.recurringExpenses$.asObservable();
        }
    }
    updateExpense(key, value, type) {
        let transaction = this.db.transaction(type, "readwrite");
        let objectStore = transaction.objectStore(type);
        let req = objectStore.put(value, key);
        req.onsuccess = () => {
            this.refreshExpenses(type);
        };
    }
    deleteExpense(key, type) {
        let transaction = this.db.transaction(type, "readwrite");
        let objectStore = transaction.objectStore(type);
        let req = objectStore.delete(key);
        this.expenseDeletedNotifier.next();
        req.onsuccess = () => {
            this.refreshExpenses(type);
        };
    }
    clearData(type) {
        let transaction = this.db.transaction(type, "readwrite");
        var objectStore = transaction.objectStore(type);
        objectStore.clear();
    }
    /**
     * Makes the Observable emit all of the new values from the DB
     */
    refreshExpenses(type) {
        let transaction = this.db.transaction([type]);
        let object_store = transaction.objectStore(type);
        let request = object_store.openCursor();
        let result = [];
        request.onsuccess = (event) => {
            let cursor = event.target.result;
            if (cursor) {
                let key = cursor.primaryKey;
                let value = cursor.value;
                result.push(Object.assign({ key }, value));
                cursor.continue();
            }
            else {
                if (type == "expenses") {
                    this.expenses$.next(result);
                }
                else {
                    this.recurringExpenses$.next(result);
                }
            }
        };
    }
    createExpenseDatabase() {
        let dbReq = this.indexedDBService.getConnection();
        dbReq.onupgradeneeded = (event) => {
            let db = event.target.result;
            this.indexedDBService.upgradeDatabase(db);
            //For dev purposes only
            // setTimeout(() => {
            //   this.seedExpenses();   
            //   for (const group of groups) {
            //     this.addGroup(group);
            //   }
            // }, 1000);
        };
        dbReq.onsuccess = (event) => {
            this.db = event.target.result;
            this.connection$.next(true);
        };
        dbReq.onerror = function (event) {
            alert('error opening database ' + event.target.errorCode);
        };
    }
    addGroup(group) {
        let tx = this.db.transaction(['groups'], 'readwrite');
        let store = tx.objectStore('groups');
        store.add({ groupName: group });
    }
    ;
    seedExpenses() {
        for (const expense of _Expenses__WEBPACK_IMPORTED_MODULE_2__["expenses"]) {
            this.addExpense(expense, "expenses");
        }
    }
}
ExpenseService.ɵfac = function ExpenseService_Factory(t) { return new (t || ExpenseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_indexed_dbconnection_service__WEBPACK_IMPORTED_MODULE_5__["IndexedDBConnectionService"])); };
ExpenseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExpenseService, factory: ExpenseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpenseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _indexed_dbconnection_service__WEBPACK_IMPORTED_MODULE_5__["IndexedDBConnectionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/filter/filter.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/filter/filter.service.ts ***!
  \***************************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");




class FilterService {
    constructor() {
        this.defaultFilter = {
            date: {
                month: this.getCurrentMonthFilter().substring(5),
                year: this.getCurrentMonthFilter().substring(0, 4)
            }
        };
        /**
         * comparator function to sort by date descending (latest first)
         */
        this.dateSorter = (a_date, b_date) => {
            if (!a_date || !b_date) {
                return;
            }
            return this.createComparatorNumber(b_date) - this.createComparatorNumber(a_date);
        };
        this.amountSorter = (a, b) => {
            return b.amount - a.amount;
        };
        this.filterShown$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        let initialFilter = JSON.parse(localStorage.getItem("filter")) || this.defaultFilter;
        this.filterState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](initialFilter);
        this.monthSwitched$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.sortMethod$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](localStorage.getItem("sortMethod") || "date");
    }
    //resets a filter to its state before the temporary filter change
    resetFilter() {
        if (this.temporaryFilterStateClipboard) {
            this.setFilter(this.temporaryFilterStateClipboard);
            this.temporaryFilterStateClipboard = null;
        }
    }
    setFilter(newFilter) {
        //When choosing a cloes group a temporary filter is applied since the group isnt selectable in filter panel by default when closed. This lets you still see the groups details listing.
        //This temporary filter has to be reset to its former state by pressing "x" on the UI since the expense-list should just eb a temporary overlay.
        // pressing "x" will bring the expense list to its default state as it was before
        if (newFilter.temporaryFilter && !this.temporaryFilterStateClipboard) {
            this.temporaryFilterStateClipboard = this.filterState$.value;
        }
        this.filterState$.next(newFilter);
        this.monthSwitched$.next(null);
        localStorage.setItem("filter", JSON.stringify(newFilter));
    }
    setSortMethod(method) {
        localStorage.setItem("sortMethod", method);
        this.sortMethod$.next(method);
    }
    getFilter() {
        return this.filterState$;
    }
    show() {
        this.resetFilter();
        this.filterShown$.next(true);
    }
    hide() {
        this.filterShown$.next(false);
    }
    /**
     * Either increments or decrements the month shown
     * @param method Either "increment" or "decrement"
     */
    switchMonth(method) {
        if (this.filterState$.value.date) {
            let current = this.monthSwitched$.value || this.filterState$.value.date;
            let incrementedDate;
            if (method === "increment") {
                incrementedDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addMonths"])(new Date(`${current.year}-${current.month}`), 1);
            }
            else {
                incrementedDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["subMonths"])(new Date(`${current.year}-${current.month}`), 1);
            }
            let incremented = { month: this.parseMonth(incrementedDate.getMonth() + 1), year: incrementedDate.getFullYear().toString() };
            this.monthSwitched$.next(incremented);
        }
    }
    /**
    * Transforms "2020-02-15" to 20200215, for quick sorting after date
    */
    createComparatorNumber(date) {
        return parseInt(date.split('-').join(''));
    }
    getCurrentMonthFilter() {
        return '' + new Date().getFullYear() + '-' + this.parseMonth(new Date().getMonth() + 1);
    }
    getMonthDateString(date) {
        return `${date.getFullYear()}-${this.parseMonth(date.getMonth() + 1)}`;
    }
    parseMonth(month) {
        if (month > 9) {
            return month.toString();
        }
        else {
            return `0${month}`;
        }
    }
}
FilterService.ɵfac = function FilterService_Factory(t) { return new (t || FilterService)(); };
FilterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FilterService, factory: FilterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/groups/Groups.ts":
/*!*******************************************!*\
  !*** ./src/app/services/groups/Groups.ts ***!
  \*******************************************/
/*! exports provided: groups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groups", function() { return groups; });
const groups = ["Asia", "Trip Norway", "Studium", "Canada"];


/***/ }),

/***/ "./src/app/services/groups/groups.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/groups/groups.service.ts ***!
  \***************************************************/
/*! exports provided: GroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsService", function() { return GroupsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _Groups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Groups */ "./src/app/services/groups/Groups.ts");
/* harmony import */ var _indexed_dbconnection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../indexed-dbconnection.service */ "./src/app/services/indexed-dbconnection.service.ts");





class GroupsService {
    constructor(indexedDBService) {
        this.indexedDBService = indexedDBService;
        this.connection$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.createGroupDatabase();
        this.groups$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.defaultGroup = localStorage.getItem("defaultGroup") || "General";
    }
    addGroup(group) {
        let tx = this.db.transaction(['groups'], 'readwrite');
        let store = tx.objectStore('groups');
        store.add({ groupName: group });
        tx.oncomplete = () => {
            this.refreshGroups();
        };
        tx.onerror = (event) => {
            alert('error storing expense ' + event.target.errorCode);
        };
    }
    ;
    getGroups() {
        this.connection$.subscribe(() => this.refreshGroups());
        return this.groups$.asObservable();
    }
    // optimized for overlays which don't own a route to not request double amount
    getGroupsWithoutUpdate() {
        return this.groups$.asObservable();
    }
    clearData() {
        let transaction = this.db.transaction("groups", "readwrite");
        let objectStore = transaction.objectStore("groups");
        objectStore.clear();
    }
    deleteGroup(key, groupName) {
        let transaction = this.db.transaction("groups", "readwrite");
        let objectStore = transaction.objectStore("groups");
        let req = objectStore.delete(key);
        req.onsuccess = () => {
            this.refreshGroups();
        };
        if (this.defaultGroup == groupName) {
            this.setDefaultGroup("General");
        }
    }
    setDefaultGroup(group) {
        localStorage.setItem("defaultGroup", group);
        this.defaultGroup = group;
    }
    /**
     * Makes the Observable emit all of the new values from the DB
     */
    refreshGroups() {
        let transaction = this.db.transaction(["groups"]);
        let object_store = transaction.objectStore("groups");
        let request = object_store.openCursor();
        let result = [];
        request.onsuccess = (event) => {
            let cursor = event.target.result;
            if (cursor) {
                let key = cursor.primaryKey;
                let value = cursor.value;
                result.push(Object.assign({ key }, value));
                cursor.continue();
            }
            else {
                this.groups$.next(result);
            }
        };
    }
    createGroupDatabase() {
        let dbReq = this.indexedDBService.getConnection();
        dbReq.onupgradeneeded = (event) => {
            let db = event.target.result;
            this.indexedDBService.upgradeDatabase(db);
        };
        dbReq.onsuccess = (event) => {
            this.db = event.target.result;
            this.connection$.next(true);
        };
        dbReq.onerror = function (event) {
            alert('error opening database ' + event.target.errorCode);
        };
    }
    seedGroups() {
        for (const group of _Groups__WEBPACK_IMPORTED_MODULE_2__["groups"]) {
            this.addGroup(group);
        }
    }
}
GroupsService.ɵfac = function GroupsService_Factory(t) { return new (t || GroupsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_indexed_dbconnection_service__WEBPACK_IMPORTED_MODULE_3__["IndexedDBConnectionService"])); };
GroupsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GroupsService, factory: GroupsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _indexed_dbconnection_service__WEBPACK_IMPORTED_MODULE_3__["IndexedDBConnectionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/indexed-dbconnection.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/indexed-dbconnection.service.ts ***!
  \**********************************************************/
/*! exports provided: IndexedDBConnectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedDBConnectionService", function() { return IndexedDBConnectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class IndexedDBConnectionService {
    constructor() {
    }
    upgradeDatabase(db) {
        const stores = db.objectStoreNames;
        if (!stores.contains("expenses")) {
            db.createObjectStore('expenses', { autoIncrement: true });
            console.log("Added IndexedDB store 'expenses'");
        }
        if (!stores.contains("recurringExpenses")) {
            db.createObjectStore('recurringExpenses', { autoIncrement: true });
            console.log("Added IndexedDB store 'expenses'");
        }
        if (!stores.contains("groups")) {
            db.createObjectStore('groups', { autoIncrement: true });
            console.log("Added IndexedDB store 'groups'");
        }
    }
    /**
     * DB Versions:
     * 1: expense
     * 2: +groups
     * 3: +recurringExpenses
     */
    getConnection() {
        return indexedDB.open('ExpenseManagerDB', 3);
    }
}
IndexedDBConnectionService.ɵfac = function IndexedDBConnectionService_Factory(t) { return new (t || IndexedDBConnectionService)(); };
IndexedDBConnectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IndexedDBConnectionService, factory: IndexedDBConnectionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexedDBConnectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/slider/slider.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/slider/slider.service.ts ***!
  \***************************************************/
/*! exports provided: SliderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderService", function() { return SliderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class SliderService {
    constructor() {
        this.active$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    getActiveComponent() {
        return this.activeComponent;
    }
    getActiveComponentAsync() {
        return this.active$.asObservable();
    }
    show(component, expense) {
        this.activeComponent = component;
        if (expense) {
            this.currentExpenseForEdit = expense;
        }
        this.active$.next(component);
    }
    hide() {
        if (this.currentExpenseForEdit) {
            this.currentExpenseForEdit = null;
        }
        this.activeComponent = null;
        this.active$.next(null);
    }
}
SliderService.ɵfac = function SliderService_Factory(t) { return new (t || SliderService)(); };
SliderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SliderService, factory: SliderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'localhost:3000/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Documents\Projekte\expensemanager2-0\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map