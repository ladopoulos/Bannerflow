(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<mat-toolbar>\r\n  <span>Bannerflow Test App</span>\r\n</mat-toolbar>\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'App';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app.material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"]
            ],
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.material.module */ "./src/app/app.material.module.ts");
/* harmony import */ var _bannerform_bannerform_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bannerform/bannerform.component */ "./src/app/bannerform/bannerform.component.ts");
/* harmony import */ var _bannerlist_bannerlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bannerlist/bannerlist.component */ "./src/app/bannerlist/bannerlist.component.ts");
/* harmony import */ var _services_banner_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/banner.service */ "./src/app/services/banner.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _bannerlist_bannerlist_component__WEBPACK_IMPORTED_MODULE_10__["BannerlistComponent"],
                _bannerform_bannerform_component__WEBPACK_IMPORTED_MODULE_9__["BannerformComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_8__["AppMaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_8__["AppMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["Routing"]
            ],
            providers: [_services_banner_service__WEBPACK_IMPORTED_MODULE_11__["BannerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bannerlist_bannerlist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bannerlist/bannerlist.component */ "./src/app/bannerlist/bannerlist.component.ts");
/* harmony import */ var _bannerform_bannerform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bannerform/bannerform.component */ "./src/app/bannerform/bannerform.component.ts");



var appRoutes = [{
        path: '',
        pathMatch: 'full',
        component: _bannerlist_bannerlist_component__WEBPACK_IMPORTED_MODULE_1__["BannerlistComponent"]
    }, {
        path: 'bannerform',
        component: _bannerform_bannerform_component__WEBPACK_IMPORTED_MODULE_2__["BannerformComponent"]
    }];
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/bannerform/bannerform.component.css":
/*!*****************************************************!*\
  !*** ./src/app/bannerform/bannerform.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bannerform/bannerform.component.html":
/*!******************************************************!*\
  !*** ./src/app/bannerform/bannerform.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(bannerFrm)\" [formGroup]=\"bannerFrm\">\r\n  <h2>{{data.modalTitle}}</h2>\r\n\r\n \r\n \r\n \r\n  \r\n  <div>\r\n    <mat-form-field appearance=\"outline\">\r\n      <textarea matInput placeholder=\"Banner HTML\" formControlName=\"html\"></textarea>\r\n      <mat-error *ngIf=\"formErrors.html \">\r\n        {{ formErrors.html }}\r\n      </mat-error>\r\n    </mat-form-field>\r\n  </div>\r\n  <div>\r\n\r\n    <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancel</button>\r\n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"bannerFrm.invalid\">{{data.modalBtnTitle}}</button>\r\n  </div>\r\n\r\n</form>  \r\n"

/***/ }),

/***/ "./src/app/bannerform/bannerform.component.ts":
/*!****************************************************!*\
  !*** ./src/app/bannerform/bannerform.component.ts ***!
  \****************************************************/
/*! exports provided: BannerformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerformComponent", function() { return BannerformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_banner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/banner.service */ "./src/app/services/banner.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var BannerformComponent = /** @class */ (function () {
    function BannerformComponent(data, fb, _bannerService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this._bannerService = _bannerService;
        this.dialogRef = dialogRef;
        this.indLoading = false;
        // form errors model
        // tslint:disable-next-line:member-ordering
        this.formErrors = {
            'bannerHtml': ''
        };
        // custom valdiation messages
        // tslint:disable-next-line:member-ordering
        this.validationMessages = {
            'bannerHtml': {
                'required': 'html is required.'
            }
        };
    }
    BannerformComponent.prototype.ngOnInit = function () {
        var _this = this;
        // built form
        this.bannerFrm = this.fb.group({
            id: [''],
            bannerHtml: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        // subscribe on value changed event of form to show validation message
        this.bannerFrm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        if (this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create) {
            this.bannerFrm.reset();
        }
        else {
            this.bannerFrm.setValue(this.data.banner);
        }
        this.SetControlsState(this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete ? false : true);
    };
    // form value change event
    BannerformComponent.prototype.onValueChanged = function (data) {
        if (!this.bannerFrm) {
            return;
        }
        var form = this.bannerFrm;
        // tslint:disable-next-line:forin
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            // setup custom validation message to form
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                // tslint:disable-next-line:forin
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    BannerformComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        var bannerData = formData.value;
        switch (this.data.dbops) {
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create:
                this._bannerService.addBanner(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'addBanner', bannerData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update:
                this._bannerService.updateBanner(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'updateBanner', bannerData.id, bannerData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete:
                this._bannerService.deleteBanner(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'deleteBanner', bannerData.id).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
        }
    };
    BannerformComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.bannerFrm.enable() : this.bannerFrm.disable();
    };
    BannerformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bannerform',
            template: __webpack_require__(/*! ./bannerform.component.html */ "./src/app/bannerform/bannerform.component.html"),
            styles: [__webpack_require__(/*! ./bannerform.component.css */ "./src/app/bannerform/bannerform.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_banner_service__WEBPACK_IMPORTED_MODULE_3__["BannerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], BannerformComponent);
    return BannerformComponent;
}());



/***/ }),

/***/ "./src/app/bannerlist/bannerlist.component.css":
/*!*****************************************************!*\
  !*** ./src/app/bannerlist/bannerlist.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bannerlist/bannerlist.component.html":
/*!******************************************************!*\
  !*** ./src/app/bannerlist/bannerlist.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\" *ngIf=\"loadingState; else bannerlist\">\r\n  <mat-spinner></mat-spinner>\r\n</div>\r\n<ng-template class=\"bannerlist\" #contactlist>\r\n  <h2 style=\"text-align: center;\">Banner List</h2>\r\n  <div class=\"bannerlist-container mat-elevation-z8\">\r\n    <div><button title=\"Create\" mat-raised-button color=\"accent\" (click)=\"addBanner()\">Create</button></div>\r\n    <table mat-table #table [dataSource]=\"dataSource\">\r\n\r\n      <!-- Id Column -->\r\n      <!-- <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef> Id </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n      </ng-container> -->\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"Id\">\r\n        <th mat-header-cell *matHeaderCellDef> Id </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"action\">\r\n        <th mat-header-cell *matHeaderCellDef> Action </th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <button title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editBanner(element.id)\">Edit</button>\r\n          <button title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"deleteBanner(element.id)\">Delete</button>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n\r\n  </div>\r\n</ng-template> \r\n"

/***/ }),

/***/ "./src/app/bannerlist/bannerlist.component.ts":
/*!****************************************************!*\
  !*** ./src/app/bannerlist/bannerlist.component.ts ***!
  \****************************************************/
/*! exports provided: BannerlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerlistComponent", function() { return BannerlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _bannerform_bannerform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bannerform/bannerform.component */ "./src/app/bannerform/bannerform.component.ts");
/* harmony import */ var _services_banner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/banner.service */ "./src/app/services/banner.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BannerlistComponent = /** @class */ (function () {
    function BannerlistComponent(snackBar, _bannerService, dialog) {
        this.snackBar = snackBar;
        this._bannerService = _bannerService;
        this.dialog = dialog;
        // setting up datasource for material table
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    BannerlistComponent.prototype.ngOnInit = function () {
        this.loadingState = true;
        this.loadBanners();
    };
    BannerlistComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_bannerform_bannerform_component__WEBPACK_IMPORTED_MODULE_2__["BannerformComponent"], {
            width: '500px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, banner: this.banner }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result === 'success') {
                _this.loadingState = true;
                _this.loadBanners();
                switch (_this.dbops) {
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create:
                        _this.showMessage('Data successfully added.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update:
                        _this.showMessage('Data successfully updated.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete:
                        _this.showMessage('Data successfully deleted.');
                        break;
                }
            }
            else if (result === 'error') {
                _this.showMessage('There is some issue in saving records, please contact to system administrator!');
            }
            else {
                // this.showMessage('Please try again, something went wrong');
            }
        });
    };
    BannerlistComponent.prototype.loadBanners = function () {
        var _this = this;
        this._bannerService.getAllBanners(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT)
            .subscribe(function (banners) {
            _this.loadingState = false;
            _this.dataSource.data = banners;
        });
    };
    BannerlistComponent.prototype.addBanner = function () {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create;
        this.modalTitle = 'Add New Banner';
        this.modalBtnTitle = 'Add';
        this.openDialog();
    };
    BannerlistComponent.prototype.editBanner = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update;
        this.modalTitle = 'Edit Banner';
        this.modalBtnTitle = 'Update';
        this.banner = this.dataSource.data.filter(function (x) { return x.id === id; })[0];
        this.openDialog();
    };
    BannerlistComponent.prototype.deleteBanner = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete;
        this.modalTitle = 'Confirm to Delete ?';
        this.modalBtnTitle = 'Delete';
        this.banner = this.dataSource.data.filter(function (x) { return x.id === id; })[0];
        this.openDialog();
    };
    BannerlistComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    BannerlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bannerlist',
            template: __webpack_require__(/*! ./bannerlist.component.html */ "./src/app/bannerlist/bannerlist.component.html"),
            styles: [__webpack_require__(/*! ./bannerlist.component.css */ "./src/app/bannerlist/bannerlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _services_banner_service__WEBPACK_IMPORTED_MODULE_3__["BannerService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], BannerlistComponent);
    return BannerlistComponent;
}());



/***/ }),

/***/ "./src/app/services/banner.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/banner.service.ts ***!
  \********************************************/
/*! exports provided: BannerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerService", function() { return BannerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var BannerService = /** @class */ (function () {
    function BannerService(http) {
        this.http = http;
    }
    BannerService.prototype.getAllBanners = function (url) {
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    BannerService.prototype.addBanner = function (url, banner) {
        return this.http.post(url, JSON.stringify(banner), httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    BannerService.prototype.updateBanner = function (url, id, banner) {
        var newurl = url + "?id=" + id;
        return this.http.put(newurl, banner, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    BannerService.prototype.deleteBanner = function (url, id) {
        var newurl = url + "?id=" + id; // DELETE api/banner?id=42
        return this.http.delete(newurl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    BannerService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    BannerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BannerService);
    return BannerService;
}());



/***/ }),

/***/ "./src/app/shared/DBOperation.ts":
/*!***************************************!*\
  !*** ./src/app/shared/DBOperation.ts ***!
  \***************************************/
/*! exports provided: DBOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBOperation", function() { return DBOperation; });
var DBOperation;
(function (DBOperation) {
    DBOperation[DBOperation["create"] = 1] = "create";
    DBOperation[DBOperation["update"] = 2] = "update";
    DBOperation[DBOperation["delete"] = 3] = "delete";
})(DBOperation || (DBOperation = {}));


/***/ }),

/***/ "./src/app/shared/Global.ts":
/*!**********************************!*\
  !*** ./src/app/shared/Global.ts ***!
  \**********************************/
/*! exports provided: Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.BASE_USER_ENDPOINT = 'http://localhost:52850/api/banner/';
    return Global;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\steli\Source\Repos\Bannerflow.API\Bannerflow.API\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map