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

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.component */ "./src/app/app/app.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.route */ "./src/app/app.route.ts");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _task_add_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./task/add/add.component */ "./src/app/task/add/add.component.ts");
/* harmony import */ var _task_view_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./task/view/view.component */ "./src/app/task/view/view.component.ts");
/* harmony import */ var _task_update_update_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./task/update/update.component */ "./src/app/task/update/update.component.ts");
/* harmony import */ var _find_task_by_id_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./find-task-by-id.pipe */ "./src/app/find-task-by-id.pipe.ts");
/* harmony import */ var _find_task_by_task_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./find-task-by-task.pipe */ "./src/app/find-task-by-task.pipe.ts");
/* harmony import */ var _convert_date_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./convert-date.pipe */ "./src/app/convert-date.pipe.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _app_route__WEBPACK_IMPORTED_MODULE_6__["routing"], _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]
            ],
            //providers: [DatePipe,{provide: NgbDateParserFormatter,],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDateParserFormatter"], useClass: _convert_date_pipe__WEBPACK_IMPORTED_MODULE_15__["NgbDateFRParserFormatter"] }],
            declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _task_add_add_component__WEBPACK_IMPORTED_MODULE_10__["AddComponent"], _task_view_view_component__WEBPACK_IMPORTED_MODULE_11__["ViewComponent"], _task_update_update_component__WEBPACK_IMPORTED_MODULE_12__["UpdateComponent"], _find_task_by_id_pipe__WEBPACK_IMPORTED_MODULE_13__["FindTaskByIdPipe"], _find_task_by_task_pipe__WEBPACK_IMPORTED_MODULE_14__["FindTaskByTaskPipe"]],
            bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.route.ts":
/*!******************************!*\
  !*** ./src/app/app.route.ts ***!
  \******************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _task_view_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task/view/view.component */ "./src/app/task/view/view.component.ts");
/* harmony import */ var _task_add_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task/add/add.component */ "./src/app/task/add/add.component.ts");
/* harmony import */ var _task_update_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task/update/update.component */ "./src/app/task/update/update.component.ts");




var routes = [
    { path: 'view', component: _task_view_view_component__WEBPACK_IMPORTED_MODULE_1__["ViewComponent"] },
    { path: 'add', component: _task_add_add_component__WEBPACK_IMPORTED_MODULE_2__["AddComponent"] },
    { path: 'update', component: _task_update_update_component__WEBPACK_IMPORTED_MODULE_3__["UpdateComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: '/view' }
    // {path: '**', pathMatch:'full', component: NotFoundComponent}
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/app/app.component.css":
/*!***************************************!*\
  !*** ./src/app/app/app.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section#main{\n    margin-top: 70px;\n}\n\nfooter{\n    background-color: #007bff;\n    padding: 15px;\n    text-align: center;\n    \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxtQkFBbUI7O0NBRXRCIiwiZmlsZSI6InNyYy9hcHAvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiNtYWlue1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG59XG5cbmZvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxufVxuIl19 */"

/***/ }),

/***/ "./src/app/app/app.component.html":
/*!****************************************!*\
  !*** ./src/app/app/app.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section id=\"main\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n</section>\n<footer>\n    copyright &copy; 2018\n</footer>"

/***/ }),

/***/ "./src/app/app/app.component.ts":
/*!**************************************!*\
  !*** ./src/app/app/app.component.ts ***!
  \**************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/convert-date.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/convert-date.pipe.ts ***!
  \**************************************/
/*! exports provided: NgbDateFRParserFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateFRParserFormatter", function() { return NgbDateFRParserFormatter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



function padNumber(value) {
    if (isNumber(value)) {
        return ("0" + value).slice(-2);
    }
    else {
        return "";
    }
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function toInteger(value) {
    return parseInt("" + value, 10);
}
var NgbDateFRParserFormatter = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NgbDateFRParserFormatter, _super);
    function NgbDateFRParserFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDateFRParserFormatter.prototype.parse = function (value) {
        if (value) {
            var dateParts = value.trim().split('/');
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return { year: toInteger(dateParts[0]), month: null, day: null };
            }
            else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                return { year: toInteger(dateParts[1]), month: toInteger(dateParts[0]), day: null };
            }
            else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                return { year: toInteger(dateParts[2]), month: toInteger(dateParts[1]), day: toInteger(dateParts[0]) };
            }
        }
        return null;
    };
    NgbDateFRParserFormatter.prototype.format = function (date) {
        var stringDate = "";
        if (date) {
            stringDate += isNumber(date.day) ? padNumber(date.day) + "/" : "";
            stringDate += isNumber(date.month) ? padNumber(date.month) + "/" : "";
            stringDate += date.year;
        }
        return stringDate;
    };
    NgbDateFRParserFormatter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], NgbDateFRParserFormatter);
    return NgbDateFRParserFormatter;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"]));



/***/ }),

/***/ "./src/app/find-task-by-id.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/find-task-by-id.pipe.ts ***!
  \*****************************************/
/*! exports provided: FindTaskByIdPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindTaskByIdPipe", function() { return FindTaskByIdPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FindTaskByIdPipe = /** @class */ (function () {
    function FindTaskByIdPipe() {
    }
    FindTaskByIdPipe.prototype.transform = function (taskId, tasks) {
        var foundTask = tasks.filter(function (task) { return task._id == taskId; })[0];
        return !!foundTask ? foundTask.task : '-';
    };
    FindTaskByIdPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'findTaskById'
        })
    ], FindTaskByIdPipe);
    return FindTaskByIdPipe;
}());



/***/ }),

/***/ "./src/app/find-task-by-task.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/find-task-by-task.pipe.ts ***!
  \*******************************************/
/*! exports provided: FindTaskByTaskPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindTaskByTaskPipe", function() { return FindTaskByTaskPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FindTaskByTaskPipe = /** @class */ (function () {
    function FindTaskByTaskPipe() {
    }
    FindTaskByTaskPipe.prototype.transform = function (tasks, taskName, priFrom, priTo, searchParent, searchStartdate, searchEnddate) {
        var _this = this;
        if (!tasks)
            return [];
        var parenttaskid;
        var startdate;
        var enddate;
        var strStartDate;
        var strEndDate;
        var dbFromdate;
        var dbEnddate;
        //Get the task id of the search parent
        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i].task.toLowerCase() == searchParent.toLowerCase()) {
                parenttaskid = tasks[i]._id;
            }
        }
        return tasks.filter(function (it) {
            dbFromdate = _this.dateconversion(it.start_date);
            dbEnddate = _this.dateconversion(it.End_Date);
            if (priFrom || priTo) {
                if ((it.Priority < priFrom) || (it.Priority > priTo)) {
                    return false;
                }
            }
            if (taskName && it.task.toLowerCase().indexOf(taskName.toLowerCase()) === -1) {
                return false;
            }
            //next condition
            if (searchParent && it.parent != parenttaskid) {
                return false;
            }
            //next condition
            if (searchStartdate) {
                strStartDate = searchStartdate.year + "/" + searchStartdate.month + "/" + searchStartdate.day;
                if (dbFromdate.indexOf(strStartDate) === -1) {
                    return false;
                }
            }
            if (searchEnddate) {
                strEndDate = searchEnddate.year + "/" + searchEnddate.month + "/" + searchEnddate.day;
                if (dbEnddate.indexOf(strEndDate) === -1) {
                    return false;
                }
            }
            return true;
        });
    };
    FindTaskByTaskPipe.prototype.isNumber = function (value) {
        return !isNaN(this.toInteger(value));
    };
    FindTaskByTaskPipe.prototype.toInteger = function (value) {
        return parseInt("" + value, 10);
    };
    FindTaskByTaskPipe.prototype.dateconversion = function (value) {
        if (value) {
            var dateParts = value.trim().split('-');
            var x = { year: this.toInteger(dateParts[0]),
                month: this.toInteger(dateParts[1]),
                day: this.toInteger(dateParts[2]) };
            return (x.year + "/" + x.month + "/" + x.day);
        }
        return null;
    };
    FindTaskByTaskPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filterbyTask'
        })
    ], FindTaskByTaskPipe);
    return FindTaskByTaskPipe;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <!-- <a class=\"btn btn-secondary\" [routerLink]=\"['login']\">Login</a> |\n  <a [routerLink]=\"['signup']\">Signup</a> |\n  <a [routerLink]=\"['account', 'vikas']\">Account</a> | -->\n  <!-- <a [routerLink]=\"/account/vikas\">Account</a> | -->\n\n\n  <nav class=\"navbar navbar-expand-md navbar-dark bg-primary fixed-top\">\n    <a class=\"navbar-brand\" [routerLink]=\"\">Task Manager</a>\n    <button class=\"navbar-toggler hidden-sm-up\" type=\"button\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\" data-target=\"#navbarsDefault\" aria-controls=\"navbarsDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div [ngbCollapse]=\"isNavbarCollapsed\" class=\"collapse navbar-collapse\" id=\"navbarsDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n        <!-- <li class=\"nav-item dropdown\" ngbDropdown>\n          <a class=\"nav-link dropdown-toggle\" id=\"id01\" ngbDropdownToggle>DropDwon</a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"id01\" ngbDropdownMenu>\n            <a class=\"dropdown-item\" href=\"#\">DD1</a>\n            <a class=\"dropdown-item\" href=\"#\">DD2</a>\n            <a class=\"dropdown-item\" href=\"#\">DD3</a>\n          </div>\n        </li> -->\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['view']\">View Task</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['add']\">Add Task</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.isNavbarCollapsed = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/task/add/add.component.css":
/*!********************************************!*\
  !*** ./src/app/task/add/add.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svYWRkL2FkZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/task/add/add.component.html":
/*!*********************************************!*\
  !*** ./src/app/task/add/add.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-md-6 offset-md-3\">\n  \n  <div class=\"form-group row\">\n  <label for=\"task\" class=\"col-sm-3 col-form-label\">Task</label>\n  <div class=\"col-sm-6\">\n  <input type=\"text\" class=\"form-control\" id=\"task\"   placeholder=\"Task Name\" [(ngModel)]=\"task.task\" name=\"task\" #taskName=\"ngModel\"  required />\n  <div *ngIf=\"taskName.errors && (taskName.dirty || taskName.touched || submitted)\" class=\"alert alert-danger\">\n      <div [hidden]=\"!taskName.errors.required\">\n          Please enter the task name\n      </div>\n  </div>\n  </div> \n  </div>\n\n  <div class=\"form-group row\">\n    <label for=\"priority\" class=\"col-sm-3 col-form-label\">Priority</label>\n        <label class=\"col-sm-1 col-form-label\">0</label>\n    <div class=\"col-sm-5\">\n      <input type=\"range\" class=\"form-control\" #priority id=\"priority\" min=\"0\" max=\"30\" [(ngModel)]=\"task.Priority\" />\n    </div>\n    <label class=\"col-sm-1 col-form-label\">30</label>\n    <label for=\"priority\" class=\"col-sm-1 offset-sm-1 col-form-label\">{{task.Priority || 0}}</label>\n    \n\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"parentTask\" class=\"col-sm-3 col-form-label\">Parent Task</label>\n    <div class=\"col-sm-9\">\n      <ng-template #rt let-r=\"result.task\" let-t=\"term\">\n        <ngb-highlight [result]=\"r\" [term]=\"t\"></ngb-highlight>\n      </ng-template>\n      <input id=\"typeahead-template\" type=\"text\" class=\"form-control\" \n        [(ngModel)]=\"selectedParent\" [ngbTypeahead]=\"search\" [resultTemplate]=\"rt\" \n          [inputFormatter]=\"formatter\" />\n    </div>\n  </div>\n\n\n  <div class=\"form-group row\">\n    <label for=\"start_date\" class=\"col-sm-3 col-form-label\">Start Date</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" name=\"startDate\" (focus)=\"start_date.open()\" ngbDatepicker \n          #start_date=\"ngbDatepicker\" #myStartDate=\"ngModel\" id=\"start_date\" [(ngModel)]=\"starting_date\" required >    \n          <div *ngIf=\"myStartDate.errors && (myStartDate.dirty || myStartDate.touched || submitted)\" class=\"alert alert-danger\">\n              <div >\n                  Please select start date\n              </div>\n          </div>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n      <label for=\"end_date\" class=\"col-sm-3 col-form-label\">End Date</label>\n      <div class=\"col-sm-6\">\n        <input type=\"text\" class=\"form-control\" name=\"endDate\" (focus)=\"end_date.open()\" ngbDatepicker \n            #end_date=\"ngbDatepicker\" id=\"end_date\" #myEndDate=\"ngModel\" [(ngModel)]=\"ending_date\" required >\n            <div *ngIf=\"myEndDate.errors && (myEndDate.dirty || myEndDate.touched || submitted)\" class=\"alert alert-danger\">\n                <div >\n                    Please select end date\n                </div>\n            </div>\n          </div>\n    </div>\n  <div class=\"form-group row\">\n    <div class=\"col-sm-3 offset-sm-3\">\n      <button class=\"btn btn-default btn-block\" id=\"add-task\" (click)=\"addTask()\" >Add Task</button>\n      <div class=\"required-field\"> {{errmsg}}</div>\n    </div>\n    <div class=\"col-sm-3\">\n      <button class=\"btn btn-default btn-block\" name=\"reset-task\" (click)=\"resetTask()\">Reset</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/task/add/add.component.ts":
/*!*******************************************!*\
  !*** ./src/app/task/add/add.component.ts ***!
  \*******************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../model/Task */ "./src/app/task/model/Task.ts");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task.service */ "./src/app/task/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AddComponent = /** @class */ (function () {
    function AddComponent(taskService, router) {
        this.taskService = taskService;
        this.router = router;
        this.task = new _model_Task__WEBPACK_IMPORTED_MODULE_2__["Task"]();
        this.starting_date = {};
        this.ending_date = {};
        this.selectedParent = null;
    }
    AddComponent.prototype.ngOnInit = function () {
        this.ngBootstrapTypeahead();
        // find all the parent ids and tasks
        this.findAllTasks();
        this.task.task = '';
        this.displayerr = false;
        this.clearerrmsg();
    };
    AddComponent.prototype.ngBootstrapTypeahead = function () {
        var _this = this;
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return term === '' ? []
                : _this.parents.filter(function (parent) { return parent.task.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.formatter = function (x) {
            // // console.log(x);
            return x.task;
        };
    };
    AddComponent.prototype.findAllTasks = function () {
        var _this = this;
        this.taskService.getAllTasks()
            .subscribe(function (res) {
            // console.log(res);
            if (res.success == true) {
                _this.parents = res.data;
            }
            else {
                // console.log("error in finding all tasks");
            }
        });
    };
    AddComponent.prototype.changePriority = function (p) {
        // console.log(p);
        this.task.Priority = p;
    };
    AddComponent.prototype.clearerrmsg = function () {
        this.errmsg = '';
    };
    AddComponent.prototype.resetTask = function () {
        this.clearerrmsg();
        this.task.Priority = 0;
        this.task.task = '';
        this.task.parent = '';
        this.task.start_date = null;
        this.task.End_Date = null;
        this.ending_date = {};
        this.starting_date = {};
    };
    AddComponent.prototype.validateTask = function () {
        if (this.task.task === '') {
            this.displayerr = true;
            this.errmsg = "Please enter the task name";
            return false;
        }
        if (this.task.Priority === 0) {
            this.displayerr = true;
            this.errmsg = "Please select priority greater than 0";
            return false;
        }
        if (Object.keys(this.starting_date).length === 0) {
            this.displayerr = true;
            this.errmsg = "Please select Start Date";
            return false;
        }
        if (Object.keys(this.ending_date).length === 0) {
            this.displayerr = true;
            this.errmsg = "Please select End Date";
            return false;
        }
        //Add validation for start date and end date to be selected.
        if (this.task.start_date && this.task.End_Date) {
            if (this.task.start_date > this.task.End_Date) {
                this.displayerr = true;
                this.errmsg = "End date should be greater than start date";
                return false;
            }
        }
        return true;
    };
    AddComponent.prototype.addTask = function () {
        var _this = this;
        this.displayerr = false;
        this.clearerrmsg();
        this.task.End_Date = new Date(this.ending_date.year + "/" + this.ending_date.month + "/" + this.ending_date.day);
        this.task.start_date = new Date(this.starting_date.year + "/" + this.starting_date.month + "/" + this.starting_date.day);
        if (!!this.selectedParent) {
            this.task.parent = this.selectedParent._id;
        }
        if (this.validateTask) {
            this.taskService.createTask(this.task)
                .subscribe(function (res) {
                // console.log(res);
                if (res.success == true) {
                    // console.log('valid')
                    _this.router.navigate(['/', 'view']);
                }
                else {
                    alert('Invalid user');
                }
            });
        }
        else {
            console.log("failed validation");
        }
    };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/task/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/task/add/add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/task/model/Task.ts":
/*!************************************!*\
  !*** ./src/app/task/model/Task.ts ***!
  \************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task() {
        this.Priority = 0;
        this.Finished = false;
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/task/task.service.ts":
/*!**************************************!*\
  !*** ./src/app/task/task.service.ts ***!
  \**************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util.service */ "./src/app/util.service.ts");




var TaskService = /** @class */ (function () {
    function TaskService(http, util) {
        this.http = http;
        this.util = util;
        // console.log(this.util.host);
    }
    TaskService.prototype.getAllTasks = function () {
        return this.http.get(this.util.host + "/api/tasks");
    };
    TaskService.prototype.getTask = function (taskId) {
        return this.http.get(this.util.host + "/api/tasks/" + taskId);
    };
    TaskService.prototype.createTask = function (task) {
        return this.http.post(this.util.host + "/api/tasks", task);
    };
    TaskService.prototype.updateTask = function (taskId, task) {
        return this.http.put(this.util.host + "/api/tasks/" + taskId, task);
    };
    TaskService.prototype.deleteTask = function (taskId) {
        return this.http.delete(this.util.host + "/api/tasks/" + taskId);
    };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/task/update/update.component.css":
/*!**************************************************!*\
  !*** ./src/app/task/update/update.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/task/update/update.component.html":
/*!***************************************************!*\
  !*** ./src/app/task/update/update.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3\">\n\n  \n    <div class=\"form-group row\">\n        <label for=\"task\" class=\"col-sm-3 col-form-label\">Task</label>\n        <div class=\"col-sm-6\">\n        <input type=\"text\" class=\"form-control\" id=\"task\"   placeholder=\"Task Name\" [(ngModel)]=\"task.task\" name=\"task\" #taskName=\"ngModel\"  required />\n        <div *ngIf=\"taskName.errors && (taskName.dirty || taskName.touched || submitted)\" class=\"alert alert-danger\">\n            <div [hidden]=\"!taskName.errors.required\">\n                Please enter the task name\n            </div>\n        </div>\n        </div> \n        </div>\n\n  <div class=\"form-group row\">\n    <label for=\"priority\" class=\"col-sm-3 col-form-label\">Priority</label>\n        <label class=\"col-sm-1 col-form-label\">0</label>\n    <div class=\"col-sm-5\">\n      <input type=\"range\" class=\"form-control\" #priority id=\"priority\" min=\"0\" max=\"30\" [(ngModel)]=\"task.Priority\" />\n    </div>\n    <label class=\"col-sm-1 col-form-label\">30</label>\n    <label for=\"priority\" class=\"col-sm-1 offset-sm-1 col-form-label\">{{task.Priority || 0}}</label>\n    \n  </div>\n  <div class=\"form-group row\">\n    <label for=\"parentTask\" class=\"col-sm-3 col-form-label\">Parent Task</label>\n    <div class=\"col-sm-9\">\n      <ng-template #rt let-r=\"result.task\" let-t=\"term\">\n        <ngb-highlight [result]=\"r\" [term]=\"t\"></ngb-highlight>\n      </ng-template>\n      <input id=\"typeahead-template\" type=\"text\" class=\"form-control\" \n        [(ngModel)]=\"selectedParent\" [ngbTypeahead]=\"search\" [resultTemplate]=\"rt\" \n          [inputFormatter]=\"formatter\" />\n    </div>\n  </div>\n<div class=\"form-group row\">\n    <label for=\"start_date\" class=\"col-sm-3 col-form-label\">Start Date</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" name=\"startDate\" (focus)=\"start_date.open()\" ngbDatepicker \n          #start_date=\"ngbDatepicker\" #myStartDate=\"ngModel\" id=\"start_date\" [(ngModel)]=\"starting_date\" required >    \n          <div *ngIf=\"myStartDate.errors && (myStartDate.dirty || myStartDate.touched || submitted)\" class=\"alert alert-danger\">\n              <div >\n                  Please select start date\n              </div>\n          </div>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n      <label for=\"end_date\" class=\"col-sm-3 col-form-label\">End Date</label>\n      <div class=\"col-sm-6\">\n        <input type=\"text\" class=\"form-control\" name=\"endDate\" (focus)=\"end_date.open()\" ngbDatepicker \n            #end_date=\"ngbDatepicker\" id=\"end_date\" #myEndDate=\"ngModel\" [(ngModel)]=\"ending_date\" required >\n            <div *ngIf=\"myEndDate.errors && (myEndDate.dirty || myEndDate.touched || submitted)\" class=\"alert alert-danger\">\n                <div >\n                    Please select end date\n                </div>\n            </div>\n          </div>\n    </div>\n  <div class=\"form-group row\">\n    <div class=\"col-sm-3 offset-sm-3\">\n      <button class=\"btn btn-default btn-block\" (click)=\"updateTask()\">Update Task</button>\n      <div class=\"required-field\"> {{errmsg}}</div>\n    </div>\n    <div class=\"col-sm-3\">\n      <button class=\"btn btn-default btn-block\" (click)=\"cancelTask()\">Cancel</button>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/task/update/update.component.ts":
/*!*************************************************!*\
  !*** ./src/app/task/update/update.component.ts ***!
  \*************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../model/Task */ "./src/app/task/model/Task.ts");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task.service */ "./src/app/task/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







//import { NgbDateFRParserFormatter} from '../../convert-date.pipe'
var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(taskService, router, datepipe) {
        this.taskService = taskService;
        this.router = router;
        this.datepipe = datepipe;
        this.task = new _model_Task__WEBPACK_IMPORTED_MODULE_2__["Task"]();
        this.starting_date = {};
        this.ending_date = {};
    }
    UpdateComponent.prototype.ngOnInit = function () {
        this.ngBootstrapTypeahead();
        this.findAllTasks();
        this.displayerr = false;
        this.errmsg = '';
        this.task.task = this.taskService.task;
        this.task._id = this.taskService._id;
        this.task.Priority = this.taskService.Priority;
        this.task.parent = this.taskService.parent;
        this.starting_date = this.taskService.start_date;
        this.ending_date = this.taskService.End_Date;
        this.task.End_Date = this.starting_date;
        this.task.start_date = this.ending_date;
        this.findTaskbyID(this.taskService.parent);
        this.starting_date = this.dateconversion(this.starting_date);
        this.ending_date = this.dateconversion(this.ending_date);
    };
    UpdateComponent.prototype.ngBootstrapTypeahead = function () {
        var _this = this;
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return term === '' ? []
                : _this.parents.filter(function (parent) { return parent.task.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.formatter = function (x) {
            return x.task;
        };
    };
    UpdateComponent.prototype.findAllTasks = function () {
        var _this = this;
        this.taskService.getAllTasks()
            .subscribe(function (res) {
            // console.log(res);
            if (res.success == true) {
                _this.parents = res.data;
            }
            else {
                // console.log("error in finding all tasks");
            }
        });
    };
    UpdateComponent.prototype.cancelTask = function () {
        this.router.navigate(['/', 'view']);
    };
    UpdateComponent.prototype.isNumber = function (value) {
        return !isNaN(this.toInteger(value));
    };
    UpdateComponent.prototype.toInteger = function (value) {
        return parseInt("" + value, 10);
    };
    UpdateComponent.prototype.dateconversion = function (value) {
        if (value) {
            var dateParts = value.trim().split('-');
            return { year: this.toInteger(dateParts[0]),
                month: this.toInteger(dateParts[1]),
                day: this.toInteger(dateParts[2]) };
        }
        return null;
    };
    UpdateComponent.prototype.findTaskbyID = function (taskid) {
        var _this = this;
        this.taskService.getTask(taskid)
            .subscribe(function (res) {
            console.log(res);
            if (res.success == true) {
                _this.selectedParent = res.data;
            }
            else {
                // console.log("error in finding all tasks");
            }
        });
    };
    UpdateComponent.prototype.updateTask = function () {
        var _this = this;
        this.displayerr = false;
        this.task.End_Date = new Date(this.ending_date.year + "/" + this.ending_date.month + "/" + this.ending_date.day);
        this.task.start_date = new Date(this.starting_date.year + "/" + this.starting_date.month + "/" + this.starting_date.day);
        if (this.task.task === '') {
            this.displayerr = true;
            this.errmsg = "Please enter the task name";
            return;
        }
        if (this.task.Priority === 0) {
            this.displayerr = true;
            this.errmsg = "Please select priority greater than 0";
            return;
        }
        if (Object.keys(this.starting_date).length === 0) {
            this.displayerr = true;
            this.errmsg = "Please select Start Date";
            return;
        }
        if (Object.keys(this.ending_date).length === 0) {
            this.displayerr = true;
            this.errmsg = "Please select End Date";
            return;
        }
        //Add validation for start date and end date to be selected.
        if (this.task.start_date && this.task.End_Date) {
            if (this.task.start_date > this.task.End_Date) {
                this.displayerr = true;
                this.errmsg = "End date should be greater than start date";
                return;
            }
        }
        if (!!this.selectedParent) {
            this.task.parent = this.selectedParent._id;
        }
        if (!this.displayerr) {
            this.taskService.updateTask(this.task._id, this.task)
                .subscribe(function (res) {
                // console.log(res);
                if (res.success == true) {
                    // console.log('valid')
                    _this.router.navigate(['/', 'view']);
                }
                else {
                    alert('Invalid user');
                }
            });
        }
    };
    UpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/task/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.css */ "./src/app/task/update/update.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "./src/app/task/view/view.component.css":
/*!**********************************************!*\
  !*** ./src/app/task/view/view.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr#afterSearchView{\n    border: 1px dashed dimgrey;\n}\n\n\ntd#taskCell, td#parentTaskCell{\n    min-width: 100px;\n}\n\n\ntd#priorityCell{\n    min-width: 20px;\n}\n\n\ntd.dateCell, td.app-btn{\n    min-width: 40px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay92aWV3L3ZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtDQUM5Qjs7O0FBR0Q7SUFDSSxpQkFBaUI7Q0FDcEI7OztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COzs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svdmlldy92aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJociNhZnRlclNlYXJjaFZpZXd7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIGRpbWdyZXk7XG59XG5cblxudGQjdGFza0NlbGwsIHRkI3BhcmVudFRhc2tDZWxse1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG59XG5cbnRkI3ByaW9yaXR5Q2VsbHtcbiAgICBtaW4td2lkdGg6IDIwcHg7XG59XG5cbnRkLmRhdGVDZWxsLCB0ZC5hcHAtYnRue1xuICAgIG1pbi13aWR0aDogNDBweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/task/view/view.component.html":
/*!***********************************************!*\
  !*** ./src/app/task/view/view.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-row\">\n  <div class=\"form-group col-md-6\">\n\n    <div class=\"form-group row\">\n      <label for=\"task\" class=\"col-sm-3 col-form-label\">Task:</label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\" class=\"form-control\" id=\"task\" [(ngModel)]=\"searchText\">\n      </div>\n    </div>\n\n  </div>\n  <div class=\"form-group col-md-6\">\n\n   <div class=\"form-group row\">\n      <label for=\"parent_task\" class=\"col-sm-3 col-form-label\">Parent Task:</label>\n      <div class=\"col-sm-9\">\n        <input type=\"text\" class=\"form-control\" id=\"parent_task\" [(ngModel)]=\"searchParent\">\n      </div>\n    </div> \n  </div>\n\n    <div class=\"form-group row\">\n      <div class=\"form-group col-md-3\">\n        <div class=\"form-group row\">\n          <label for=\"priorityFrom\" class=\"col-sm-6 col-form-label\">Priority From:</label>\n          <div class=\"col-sm-6\">\n            <input type=\"number\" class=\"form-control\" id=\"priorityFrom\" [(ngModel)]=\"searchPrioFrom\">\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group col-md-3\">\n        <div class=\"form-group row\">\n          <label for=\"priorityTo\" class=\"col-sm-6 col-form-label\">Priority To:</label>\n          <div class=\"col-sm-6\">\n            <input type=\"number\" class=\"form-control\" id=\"priorityTo\" [(ngModel)]=\"searchPrioTo\">\n          </div>\n        </div>\n      </div>\n\n\n     <!-- <div class=\"form-group col-md-3\">\n        <div class=\"form-group row\">\n          <label for=\"startDate\" class=\"col-sm-6 col-form-label\">Start Date:</label>\n          <div class=\"col-sm-6\">\n            <input type=\"number\" class=\"form-control\" id=\"startDate\">\n          </div>\n        </div>\n      </div>-->\n\n      <!--<div class=\"form-group col-md-3\">\n        <div class=\"form-group row\">\n          <label for=\"endDate\" class=\"col-sm-6 col-form-label\">End Date:</label>\n          <div class=\"col-sm-6\">\n            <input type=\"number\" class=\"form-control\" id=\"endDate\">\n          </div>\n        </div>\n      </div>-->\n\n      <div class=\"form-group row\">\n        <label for=\"start_date\" class=\"col-sm-3 col-form-label\">Start Date</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\" (focus)=\"start_date.open()\" ngbDatepicker #start_date=\"ngbDatepicker\" \n            id=\"start_date\" [(ngModel)]=\"searchstartdate\">\n        </div>\n      </div>\n\n\n      <div class=\"form-group row\">\n        <label for=\"end_date\" class=\"col-sm-3 col-form-label\">End Date</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\" (focus)=\"end_date.open()\" ngbDatepicker #end_date=\"ngbDatepicker\" \n            id=\"end_date\" [(ngModel)]=\"searchenddate\">\n        </div>\n      </div>\n\n    </div>\n\n\n\n</div>\n\n<hr id=\"afterSearchView\" />\n\n<br/>\n\n<div class=\"table-responsive\">\n  <table class=\"table\">\n    <tr *ngFor=\"let task of tasks | filterbyTask:searchText:searchPrioFrom:searchPrioTo:searchParent:searchstartdate:searchenddate \">\n      <td id=\"taskCell\">\n        <b>Task</b>\n        <br/>{{task.task }}</td>\n      <td id=\"parentTaskCell\">\n        <b>Parent Task</b>\n        <br/>{{task.parent | findTaskById:tasks}}</td>\n      <td id=\"priorityCell\">\n        <b>Priority</b>\n        <br/>{{task.Priority}}</td>\n      <td class=\"dateCell\">\n        <b>Start Date</b>\n        <br/>{{task.start_date | date:\"dd-MMM-yyyy\"}}</td>\n      <td class=\"dateCell\">\n        <b>End Date</b>\n        <br/>{{task.End_Date | date:\"dd-MMM-yyyy\"}}</td>\n        <td class=\"dateCell\">\n          <b>Finished</b>\n          <br/>{{task.Finished}}</td>\n        <td class=\"app-btn\">\n        <button class=\"btn btn-default btn-block\" [disabled]= \"task.Finished\" (click)=\"editTask(task)\">Edit</button>\n      </td>\n      <td class=\"app-btn\">\n        <button class=\"btn btn-default btn-block\" [disabled]= \"task.Finished\" (click)=\"endTask(task)\">End Task</button>\n      </td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/task/view/view.component.ts":
/*!*********************************************!*\
  !*** ./src/app/task/view/view.component.ts ***!
  \*********************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task.service */ "./src/app/task/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ViewComponent = /** @class */ (function () {
    //create a object to store the selected task
    function ViewComponent(taskService, router, datepipe) {
        this.taskService = taskService;
        this.router = router;
        this.datepipe = datepipe;
        this.selectedParent = null;
    }
    ViewComponent.prototype.ngOnInit = function () {
        this.ngBootstrapTypeahead();
        this.findAllTasks();
        //this.searchPrioFrom = 0;
        //this.searchPrioTo = 30;
        this.searchText = '';
        this.searchParent = '';
    };
    ViewComponent.prototype.editTask = function (task1) {
        //this.taskService.TaskModel.task=task1.task;
        this.taskService._id = task1._id;
        this.taskService.task = task1.task;
        this.taskService.parent = task1.parent;
        this.taskService.Priority = task1.Priority;
        this.taskService.start_date = task1.start_date;
        //this.taskService.start_date='2014-01-25';
        this.taskService.End_Date = task1.End_Date;
        this.taskService.Finished = task1.Finished;
        this.router.navigate(['/', 'update']);
    };
    ViewComponent.prototype.endTask = function (task1) {
        var _this = this;
        task1.Finished = true;
        this.taskService.updateTask(task1._id, task1)
            .subscribe(function (res) {
            // console.log(res);
            if (res.success == true) {
                // console.log('valid')
                _this.router.navigate(['/', 'view']);
            }
            else {
                alert('Invalid user');
            }
        });
    };
    ViewComponent.prototype.ngBootstrapTypeahead = function () {
        var _this = this;
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return term === '' ? []
                : _this.parents.filter(function (parent) { return parent.task.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.formatter = function (x) {
            // // console.log(x);
            return x.task;
        };
    };
    ViewComponent.prototype.findAllTasks = function () {
        var _this = this;
        this.taskService.getAllTasks()
            .subscribe(function (res) {
            console.log(res);
            if (res.success == true) {
                _this.tasks = res.data;
                _this.parents = res.data;
            }
            else {
                console.log("Could not find all tasks");
            }
        });
    };
    ViewComponent.prototype.dateconversion = function (x) {
        this.mydate = new Date(x);
        var latest_date = this.datepipe.transform(this.mydate, 'yyyy-MM-dd');
        return latest_date;
    };
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/task/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/task/view/view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/app/util.service.ts":
/*!*********************************!*\
  !*** ./src/app/util.service.ts ***!
  \*********************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UtilService = /** @class */ (function () {
    function UtilService() {
        this.host = "https://tranquil-forest-26141.herokuapp.com";
    }
    UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UtilService);
    return UtilService;
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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! C:\Personal\09111270\Documents\Ram\Personal\task-manager-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map