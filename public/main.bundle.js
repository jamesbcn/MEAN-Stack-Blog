webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">\n    <div class=\"flash\">\n        <flash-messages></flash-messages>\n    </div>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".flash {\n  margin-top: 15px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export tokenGetter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__("./src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_blog_blog_component__ = __webpack_require__("./src/app/components/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_not_auth_guard_service__ = __webpack_require__("./src/app/services/not-auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_blog_service__ = __webpack_require__("./src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_blog_blog_edit_blog_edit_component__ = __webpack_require__("./src/app/components/blog/blog-edit/blog-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_blog_delete_blog_delete_blog_component__ = __webpack_require__("./src/app/components/blog/delete-blog/delete-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_public_profile_public_profile_component__ = __webpack_require__("./src/app/components/public-profile/public-profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























function tokenGetter() {
    return localStorage.getItem('access_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_blog_blog_component__["a" /* BlogComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_blog_blog_edit_blog_edit_component__["a" /* BlogEditComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_blog_delete_blog_delete_blog_component__["a" /* DeleteBlogComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_public_profile_public_profile_component__["a" /* PublicProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__routes__["a" /* routes */])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_15__services_auth_guard_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_18__services_blog_service__["a" /* BlogService */],
                __WEBPACK_IMPORTED_MODULE_16__services_not_auth_guard_service__["a" /* NotAuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/blog/blog-edit/blog-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n\n      <h2>Edit Post</h2>\n\n      <hr>\n\n      <div class=\"flash-message\" *ngIf=\"message\">\n        <div [ngClass]=\"messageClass\">\n          {{ message }}\n        </div>\n      </div>\n\n      <form (submit)=\"updateBlogSubmit()\" *ngIf=\"!loading\">\n        <!-- Title Field -->\n        <div class=\"form-group\">\n          <label for=\"title\">Title</label>\n          <!-- Title Input -->\n          <input [disabled]=\"processing\" type=\"text\" name=\"title\" class=\"form-control\" [(ngModel)]=\"post.title\"\n            #title=\"ngModel\" />\n        </div>\n\n        <!-- Body Field -->\n        <div class=\"form-group\">\n          <label for=\"body\">Body</label>\n          <!-- Body Input -->\n          <textarea [disabled]=\"processing\" name=\"body\" rows=\"6\" cols=\"30\" [(ngModel)]=\"post.body\" #body=\"ngModel\" class=\"form-control\"></textarea>\n        </div>\n\n        <!-- Delete Button -->\n          <button [disabled]=\"processing\" [routerLink]=\"['/delete-blog/', post._id]\" name=\"button\" class=\"btn btn-danger\">Delete</button>\n\n        <!-- Go Back Button -->\n        <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"goBack()\">Go Back</button>\n        <!-- Save Changes Button -->\n        <button [disabled]=\"processing || (!title.dirty && !body.dirty)\" type=\"submit\" name=\"save\" class=\"btn btn-info\">Save Changes</button>\n\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/blog/blog-edit/blog-edit.component.scss":
/***/ (function(module, exports) {

module.exports = "h2 {\n  padding-top: 2rem;\n  text-align: right; }\n\n.form-control {\n  background-color: whitesmoke;\n  border: 2px dashed darkgrey; }\n"

/***/ }),

/***/ "./src/app/components/blog/blog-edit/blog-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_blog_service__ = __webpack_require__("./src/app/services/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // Activated Route used to allow ng to grab URL

var BlogEditComponent = /** @class */ (function () {
    function BlogEditComponent(location, activatedRoute, blogService, router) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.blogService = blogService;
        this.router = router;
        this.processing = false;
        this.loading = true;
    }
    BlogEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params;
        this.blogService.getSingleBlog(this.currentUrl.id).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                setTimeout(function () {
                    _this.router.navigate(['/blog']);
                }, 2000);
            }
            else {
                _this.post = data.post;
                _this.loading = false;
            }
        });
    };
    BlogEditComponent.prototype.updateBlogSubmit = function () {
        var _this = this;
        this.processing = true;
        this.blogService.editBlog(this.post).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message.message.slice(30);
                _this.processing = false;
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                setTimeout(function () {
                    _this.router.navigate(['/blog']);
                }, 2000);
            }
        });
    };
    BlogEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    BlogEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog-edit',
            template: __webpack_require__("./src/app/components/blog/blog-edit/blog-edit.component.html"),
            styles: [__webpack_require__("./src/app/components/blog/blog-edit/blog-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], BlogEditComponent);
    return BlogEditComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <br />\n  <div class=\"col-md-8 offset-md-2\">\n    <div class=\"buttons\" style=\"text-align: right\">\n      <button class=\"btn bg-dark btn-sm text-white post\" *ngIf=\"!newPost\" (click)=\"newBlogForm()\">New Post</button>\n      <button class=\"btn bg-secondary btn-sm text-white refresh\" *ngIf=\"!newPost\" [disabled]=\"loadingBlogs\" (click)=\"reloadBlogs()\">\n        <i class=\"material-icons refresh-icon\">refresh</i>\n      </button>\n    </div>\n\n    <!-- New blog form -->\n    <form [formGroup]=\"form\" name=\"blogForm\" (submit)=\"onBlogSubmit()\" *ngIf=\"newPost\">\n      <h2>New Post</h2>\n\n      <hr>\n\n      <div class=\"flash-message\" *ngIf=\"message && newPost\">\n        <div [ngClass]=\"messageClass\">\n          {{ message }}\n        </div>\n      </div>\n\n      <!-- Title Input -->\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <div [ngClass]=\"{'has-success': form.controls.title.valid, 'has-error': form.controls.title.dirty && form.controls.title.errors}\">\n          <!-- Title Input -->\n          <input type=\"text\" name=\"title\" class=\"form-control\" autocomplete=\"off\" formControlName=\"title\" />\n          <!-- Validation -->\n          <ul class=\"help-block\">\n            <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.required\">This field is required.</li>\n            <li *ngIf=\"(form.controls.title.dirty && form.controls.title.errors?.minlength) || (form.controls.title.dirty && form.controls.title.errors?.maxlength)\">Max length: 50, Min length: 5</li>\n            <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.alphaNumericValidation\">Must be a letter or number</li>\n          </ul>\n        </div>\n      </div>\n\n      <!-- Body Input -->\n      <div class=\"form-group\">\n        <label for=\"body\">Body</label>\n        <div [ngClass]=\"{'has-success': form.controls.body.valid, 'has-error': form.controls.body.dirty && form.controls.body.errors}\">\n          <!-- Body Input -->\n          <textarea name=\"body\" rows=\"6\" cols=\"30\" class=\"form-control\" formControlName=\"body\"></textarea>\n          <!-- Validation -->\n          <ul class=\"help-block\">\n            <li *ngIf=\"form.controls.body.dirty && form.controls.body.errors?.required\">This field is required.</li>\n            <li *ngIf=\"(form.controls.body.dirty && form.controls.body.errors?.minlength) || (form.controls.body.dirty && form.controls.body.errors?.maxlength)\">Max length: 500, Min length: 5</li>\n          </ul>\n        </div>\n      </div>\n\n      <button [disabled]=\"processing\" type=\"button\" name=\"button\" (click)=\"goBack()\" class=\"btn btn-warning\">Go Back</button>\n      <button [disabled]=\"processing || !form.valid\" type=\"submit\" name=\"button\" class=\"btn btn-success\">Submit</button>\n\n    </form>\n    <!-- End New blog form -->\n\n    <!-- *ngFor of Blog posts -->\n    <div *ngIf=\"!newPost\">\n      <div class=\"card\" *ngFor=\"let i of blogPosts\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\">{{ i.title }}</h4>\n        </div>\n        <div class=\"card-body\">\n          {{ i.body }}\n        </div>\n        <div class=\"card-footer text-muted\">\n          <div class=\"row\">\n            <div class=\"col-sm-4\">\n              <strong>Posted by: </strong>{{i.createdBy}}\n              <br>\n              <strong>Date: </strong>{{ i.createdAt | date:'dd MMM, yyyy'}}\n            </div>\n            <div class=\"thumbs\">\n              <!-- Likes dropdown -->\n              <div class=\"dropdown\">\n                <button class=\"btn btn-success btn-sm text-white liked\" [disabled]=\"i.likedBy.indexOf(username) > -1\" *ngIf=\"!newPost && username !== i.createdBy\"\n                  (click)=\"likeBlog(i._id)\">\n                  <i class=\"material-icons thumb-icons\">thumb_up</i>\n                </button>\n                <div class=\"dropdown-content\">\n                  <a *ngFor=\"let liker of i.likedBy\" [routerLink]=\"['/user/', liker]\">{{ liker }}</a>\n                </div>\n              </div>\n              <!-- Likes dropdown end -->\n              <strong>Likes: </strong>{{i.likes}}\n            </div>\n            <div class=\"thumbs\">\n              <!-- Dislikes dropdown -->\n              <div class=\"dropdown\">\n                <button class=\"btn btn-warning btn-sm text-white disliked\" [disabled]=\"i.dislikedBy.indexOf(username) > -1\" *ngIf=\"!newPost && username !== i.createdBy\"\n                  (click)=\"dislikeBlog(i._id)\">\n                  <i class=\"material-icons thumb-icons\">thumb_down</i>\n                </button>\n                <div class=\"dropdown-content\">\n                  <a *ngFor=\"let disliker of i.dislikedBy\" [routerLink]=\"['/user/', disliker]\">{{ disliker }}</a>\n                </div>\n              </div>\n              <!-- Disikes dropdown end -->\n              <strong>Dislikes: </strong>{{i.dislikes}}\n            </div>\n            <div class=\"edit-del\">\n              <button [routerLink]=\"['/edit-blog/', i._id]\" class=\"btn btn-info btn-sm text-white\" *ngIf=\"!newPost && username === i.createdBy\">Edit</button>\n              <button [routerLink]=\"['/delete-blog/', i._id]\" class=\"btn btn-danger btn-sm text-white\" *ngIf=\"!newPost && username === i.createdBy\">Delete</button>\n            </div>\n          </div>\n        </div>\n        <!-- footer end -->\n\n        <!-- post comment box - start -->\n        <ul class=\"list-group\">\n          <li class=\"list-group-item post-comment\">\n            <button class=\"btn btn-dark btn-sm text-white\" [disabled]=\"newComment.indexOf(i._id) > -1\" (click)=\"draftComment(i._id)\">Post Comment</button>\n            <br/>\n            <div *ngIf=\"newComment.indexOf(i._id) > -1\">\n              <form [formGroup]=\"commentForm\">\n                <textarea name=\"comment\" class=\"form-control comment-area\" formControlName=\"comment\" rows=\"3\" cols=\"30\"></textarea>\n                \n                <div>\n                  <ul class=\"help-block\">\n                    <li *ngIf=\"commentForm.controls.comment.errors?.required && commentForm.controls.comment.dirty\">\n                      This field is required.\n                    </li>\n                    <li *ngIf=\"(commentForm.controls.comment.errors?.maxlength && commentForm.controls.comment.dirty) || \n                        (commentForm.controls.comment.errors?.minlength && commentForm.controls.comment.dirty)\">\n                        Comment must be no more than 200 characters.\n                    </li>\n                  </ul>\n                </div>\n                <button [disabled]=\"!commentForm.valid || processing\" class=\"btn bg-secondary btn-sm text-white\" (click)=\"postComment(i._id)\">Submit</button>\n                <button [disabled]=\"processing\" class=\"btn bg-danger btn-sm text-white\" (click)=\"cancelSubmission(i._id)\">Cancel</button>\n              </form>\n            </div>\n            <ul class=\"comments-container\">\n                <!-- Show Comments -->\n                <li *ngIf=\"enabledComments.indexOf(i._id) === -1 && i.comments.length > 0\" class=\"list-group-item show-hide\">\n                    <span (click)=\"expand(i._id)\">\n                        <i class=\"material-icons comment\">comment</i>&nbsp;&nbsp;Show comments\n                    </span>\n                </li>\n\n                <!-- Hide Comments -->\n                <li *ngIf=\"enabledComments.indexOf(i._id) > -1\" class=\"list-group-item show-hide\">\n                    <span (click)=\"collapse(i._id)\">\n                      <i class=\"material-icons comment\">comment</i>&nbsp;&nbsp;Hide comments\n                    </span>\n                </li>\n\n                <!-- Comment -->\n                <div *ngIf=\"enabledComments.indexOf(i._id) > -1\">\n                  <!-- *ngFor loop for all the comments - start -->\n                  <li *ngFor=\"let comment of i.comments\" class=\"list-group-item listed-comments\">\n                    <strong>{{ comment.commentator }}:</strong> {{comment.comment}}\n                  </li>\n                  <!-- *ngFor loop for all the comments - end -->\n                </div>\n            </ul>\n          </li>\n        </ul>\n      </div>\n      <!-- post comment box - end -->\n    </div>\n    <!-- Blog post end -->\n\n  </div>\n  <!-- col-md-8 -->\n</div>"

/***/ }),

/***/ "./src/app/components/blog/blog.component.scss":
/***/ (function(module, exports) {

module.exports = "::ng-deep .flash-message {\n  text-align: center; }\n\n.post {\n  height: 31px;\n  font-family: 'Oswald', sans-serif;\n  font-size: 14px;\n  padding: .2rem .5rem .2rem .5rem; }\n\n.refresh {\n  height: 31px;\n  width: 35px;\n  padding: .25rem .2rem; }\n\n.refresh-icon {\n  font-size: 22px; }\n\n.liked, .disliked {\n  height: 23.25px;\n  width: 26.25px;\n  padding: .185rem .15rem; }\n\n.thumb-icons {\n  font-size: 16.5px; }\n\nh4 {\n  margin-bottom: 0; }\n\n.card {\n  margin: 10px 0; }\n\n.card-title {\n  margin-bottom: 0.25rem; }\n\n.card-footer {\n  font-size: 0.85rem; }\n\n.thumbs {\n  padding-top: 10px;\n  padding-right: 7.5px; }\n\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.edit-del {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  text-align: right;\n  padding-right: 0.5rem;\n  padding-top: 6px; }\n\n.post-comment {\n  text-align: right;\n  padding: .5rem; }\n\n.show-hide {\n  text-align: left;\n  font-size: 0.85rem;\n  color: #6c757d;\n  font-weight: bold;\n  padding: 0.75rem;\n  margin-top: 8px; }\n\n.comments-container {\n  padding-left: 0px; }\n\n.comment-area {\n  margin: 8px 0px !important; }\n\n.listed-comments {\n  text-align: left; }\n\n/* Dropdown Button */\n\n.dropbtn {\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer; }\n\n.dropdown {\n  position: relative;\n  display: inline-block; }\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  -webkit-box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n\n/* Links inside the dropdown */\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block; }\n\n/* Change color of dropdown links on hover */\n\n.dropdown-content a:hover {\n  background-color: #f1f1f1; }\n\n/* Show the dropdown menu on hover */\n\n.dropdown:hover .dropdown-content {\n  display: block; }\n\n/* Change the background color of the dropdown button when the dropdown content is shown */\n\n.dropdown:hover .dropbtn {\n  background-color: #3e8e41; }\n\n/* New Post Alerts */\n\n.help-block {\n  color: red;\n  font-style: italic;\n  list-style-type: none; }\n\n/* New Post Form   */\n\nh2 {\n  padding-top: 2rem;\n  text-align: right; }\n\nlabel {\n  margin-left: .5rem;\n  margin-bottom: .2rem; }\n\n.form-control {\n  background-color: whitesmoke;\n  border: 2px dashed darkgrey; }\n\n.comment {\n  font-size: 1rem; }\n"

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_blog_service__ = __webpack_require__("./src/app/services/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogComponent = /** @class */ (function () {
    function BlogComponent(formBuilder, authService, blogService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.blogService = blogService;
        this.newPost = false;
        this.loadingBlogs = false;
        this.processing = false;
        this.newComment = [];
        this.enabledComments = [];
        this.createNewBlogForm(); // Create new blog form on start up
        this.createCommentForm(); // Create form for posting comments on a user's blog post
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get profile username on page load
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Used when creating new blog posts and comments
            _this.getAllBlogs();
        });
    };
    BlogComponent.prototype.createNewBlogForm = function () {
        this.form = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(50),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    this.alphaNumericValidation
                ])],
            body: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(500),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5)
                ])]
        });
    };
    BlogComponent.prototype.enableFormNewBlogForm = function () {
        this.form.get('title').enable();
        this.form.get('body').enable();
    };
    BlogComponent.prototype.disableFormNewBlogForm = function () {
        this.form.get('title').disable();
        this.form.get('body').disable();
    };
    BlogComponent.prototype.createCommentForm = function () {
        this.commentForm = this.formBuilder.group({
            comment: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(1),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(200)
                ])]
        });
    };
    BlogComponent.prototype.enableCommentForm = function () {
        this.commentForm.get('comment').enable();
    };
    BlogComponent.prototype.disableCommentForm = function () {
        this.commentForm.get('comment').disable();
    };
    BlogComponent.prototype.onBlogSubmit = function () {
        var _this = this;
        this.processing = true; // Disable submit button
        this.disableFormNewBlogForm(); // Lock form
        // Create blog object from the inputs
        var blog = {
            title: this.form.get('title').value,
            body: this.form.get('body').value,
            createdBy: this.username // taken from the auth service (see ngOnInit)
        };
        this.blogService.newBlog(blog).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.processing = false;
                _this.enableFormNewBlogForm();
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                _this.getAllBlogs(); // So any time a new blog post is posted it's going to display all
                // Clear all data after 2 seconds...
                setTimeout(function () {
                    _this.newPost = false;
                    _this.processing = false;
                    _this.message = '';
                    _this.form.reset();
                    _this.enableFormNewBlogForm();
                }, 2000);
            }
        });
    };
    // Validation for blog post title
    BlogComponent.prototype.alphaNumericValidation = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
        // Check if test returns false or true
        if (regExp.test(controls.value)) {
            return null; // Return valid
        }
        else {
            return { 'alphaNumericValidation': true };
        }
    };
    BlogComponent.prototype.newBlogForm = function () {
        this.newPost = true;
    };
    BlogComponent.prototype.reloadBlogs = function () {
        var _this = this;
        this.loadingBlogs = true; // Locks button to stop user hammering server
        this.getAllBlogs(); // Add any new blog posts to the page
        setTimeout(function () {
            _this.loadingBlogs = false; // Release button lock after four seconds
        }, 4000);
    };
    BlogComponent.prototype.getAllBlogs = function () {
        var _this = this;
        // Function to GET all blogs from database
        this.blogService.getAllBlogs().subscribe(function (data) {
            _this.blogPosts = data.blogs; // Assign array to use in HTML
        });
    };
    // Function to like a blog post
    BlogComponent.prototype.likeBlog = function (id) {
        var _this = this;
        // Service to like a blog post
        this.blogService.likeBlog(id).subscribe(function (data) {
            _this.getAllBlogs(); // Refresh blogs after like
        });
    };
    // Function to disliked a blog post
    BlogComponent.prototype.dislikeBlog = function (id) {
        var _this = this;
        // Service to dislike a blog post
        this.blogService.dislikeBlog(id).subscribe(function (data) {
            _this.getAllBlogs(); // Refresh blogs after dislike
        });
    };
    // Function to post a new comment
    BlogComponent.prototype.postComment = function (id) {
        var _this = this;
        this.disableCommentForm(); // Disable form while saving comment to database
        this.processing = true; // Lock buttons while saving comment to database
        var comment = this.commentForm.get('comment').value; // Get the comment value to pass to service function
        // Function to save the comment to the database
        this.blogService.postComment(id, comment).subscribe(function (data) {
            _this.getAllBlogs(); // Refresh all blogs to reflect the new comment
            var index = _this.newComment.indexOf(id); // Get the index of the blog id to remove from array
            _this.newComment.splice(index, 1); // Remove id from the array
            _this.enableCommentForm(); // Re-enable the form
            _this.commentForm.reset(); // Reset the comment form
            _this.processing = false; // Unlock buttons on comment form
            if (_this.enabledComments.indexOf(id) < 0) {
                _this.expand(id);
            } // Expand comments for user on comment submission
        });
    };
    BlogComponent.prototype.draftComment = function (id) {
        this.commentForm.reset();
        this.newComment = [];
        this.newComment.push(id);
    };
    // Function to cancel new post transaction
    BlogComponent.prototype.cancelSubmission = function (id) {
        var index = this.newComment.indexOf(id); // Check the index of the blog post in the array
        this.newComment.splice(index, 1); // Remove the id from the array to cancel post submission
        this.commentForm.reset(); // Reset  the form after cancellation
        this.enableCommentForm(); // Enable the form after cancellation
        this.processing = false; // Enable any buttons that were locked
    };
    // Expand the list of comments
    BlogComponent.prototype.expand = function (id) {
        this.enabledComments.push(id); // Add the current blog post id to array
    };
    // Collapse the list of comments
    BlogComponent.prototype.collapse = function (id) {
        var index = this.enabledComments.indexOf(id); // Get position of id in array
        this.enabledComments.splice(index, 1); // Remove id from array
    };
    BlogComponent.prototype.goBack = function () {
        window.location.reload();
    };
    BlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__("./src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__("./src/app/components/blog/blog.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/delete-blog/delete-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n\n      <h2>Delete Post</h2>\n\n      <hr>\n\n      <!-- Custom Success/Error Message -->\n      <div class=\"flash-message\">\n          <div *ngIf=\"message\">\n              <div [ngClass]=\"messageClass\">\n                {{ message }}\n              </div>\n          </div>\n      </div>\n\n      <!-- Modal Confirmation Window -->\n      <div *ngIf=\"foundBlogPost\">\n        <!-- Model Outer Layer -->\n        <div class=\"modal-content\">\n          <!-- Modal Header -->\n          <div class=\"modal-header\">\n            <!-- Modal Title -->\n            <h4 class=\"modal-title\">Confirm</h4>\n          </div>\n\n          <!-- Modal Body -->\n          <div class=\"modal-body\">\n            <p>Are you sure you would like to delete this post?</p>\n          </div>\n\n          <!-- Modal Footer -->\n          <div class=\"modal-footer\">\n            <!-- Yes Button -->\n            <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"deleteBlog()\">Yes</button>\n            <!-- No Button -->\n            <a routerLink=\"/blog\">\n              <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-danger\">No</button>\n            </a>\n          </div>\n        </div>\n\n        <br />\n\n        <!-- Panel -->\n        <div class=\"card\">\n          <!-- Panel Heading -->\n          <div class=\"card-header\">\n            <!-- Panel Title -->\n            <h3 class=\"card-title\">{{ post.title }}</h3>\n          </div>\n\n          <!-- Panel Body -->\n          <div class=\"card-body\">\n            {{ post.body }}\n          </div>\n\n          <!-- Panel Footer -->\n          <div class=\"card-footer\">\n            <strong>Posted by: </strong> {{ post.createdBy }}\n            <br />\n            <strong>Date: </strong> {{ post.createdAt | date:'MMM dd, yyyy' }}\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/blog/delete-blog/delete-blog.component.scss":
/***/ (function(module, exports) {

module.exports = "h2 {\n  padding-top: 2rem;\n  text-align: right; }\n\n::ng-deep .flash-message {\n  text-align: center; }\n\n.messageClass {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/components/blog/delete-blog/delete-blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteBlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_service__ = __webpack_require__("./src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteBlogComponent = /** @class */ (function () {
    function DeleteBlogComponent(blogService, activatedRoute, router) {
        this.blogService = blogService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.foundBlogPost = false;
        this.processing = false;
    }
    // Function to delete blogs
    DeleteBlogComponent.prototype.deleteBlog = function () {
        var _this = this;
        this.processing = true; // Disable buttons
        // Function for DELETE request
        this.blogService.deleteBlog(this.currentUrl.id).subscribe(function (data) {
            // Check if delete request worked
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return error bootstrap class
                _this.message = data.message; // Return error message
            }
            else {
                _this.messageClass = 'alert alert-success'; // Return bootstrap success class
                _this.message = data.message; // Return success message
                // After two second timeout, route to blog page
                setTimeout(function () {
                    _this.router.navigate(['/blog']); // Route users to blog page
                }, 2000);
            }
        });
    };
    DeleteBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params; // Get URL paramaters on page load
        // Function for GET request to retrieve blog
        this.blogService.getSingleBlog(this.currentUrl.id).subscribe(function (data) {
            // Check if request was successfull
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return bootstrap error class
                _this.message = data.message; // Return error message
            }
            else {
                // Create the blog object to use in HTML
                _this.post = {
                    title: data.post.title,
                    body: data.post.body,
                    createdBy: data.post.createdBy,
                    createdAt: data.post.createdAt // Set created_at field
                };
                _this.foundBlogPost = true; // Displaly blog window
            }
        });
    };
    DeleteBlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delete-blog',
            template: __webpack_require__("./src/app/components/blog/delete-blog/delete-blog.component.html"),
            styles: [__webpack_require__("./src/app/components/blog/delete-blog/delete-blog.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], DeleteBlogComponent);
    return DeleteBlogComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <div class=\"container\">\n      <h1 class=\"display-3\">Hola a todos!</h1>\n      <p>This is a MEAN stack blog application. It includes... Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n      <div class=\"buttons\" *ngIf=\"!loggedIn()\">\n        <a class=\"btn bg-dark text-white btn-lg\" routerLink=\"/register\" role=\"button\">Register</a>\n        <a class=\"btn btn-success btn-lg\" routerLink=\"/login\" role=\"button\">Log in &raquo;</a>\n      </div>\n      <div class=\"buttons\" *ngIf=\"loggedIn()\">\n        <a class=\"btn bg-dark text-white btn-lg\" routerLink=\"/blog\" role=\"button\">Blog</a>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  margin-top: 1rem; }\n\n.buttons {\n  text-align: right; }\n\n.display-3, .buttons {\n  font-family: 'Oswald', sans-serif !important; }\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <form [formGroup]=\"form\" (submit)=\"onLogin()\">\n      <div class=\"row\">\n          <div class=\"col-md-4 offset-md-4\">\n              <h2>Log In</h2>\n              <hr>\n              <!--\n              <div class=\"row show-hide-message\">-->\n                      <div [ngClass]=\"messageClass\">\n                        {{ message }}\n                      </div><!--\n              </div>-->\n                    \n          </div>\n      </div>\n\n      <!-- Username -->\n      <div class=\"row\">\n          <div class=\"col-md-4 field-label\">\n              <label>Username</label>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                  <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                      <input type=\"text\" name=\"username\" class=\"form-control\"\n                             formControlName=\"username\" />\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4\" [ngClass]=\"{'error': (form.controls.username.errors && form.controls.username.dirty), 'success': form.controls.username.valid && form.controls.username.dirty}\">\n              <div *ngIf=\"!!form.controls.username.errors?.required && !!form.controls.username.dirty\">\n                  {{ alert }}\n              </div>\n          </div>\n      </div>\n      \n      <!-- Password -->\n      <div class=\"row\">\n          <div class=\"col-md-4 field-label\">\n              <label>Password</label>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"form-group has-danger\">\n                  <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                      <input type=\"password\" name=\"password\" class=\"form-control\"\n                             formControlName=\"password\" />\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4\" [ngClass]=\"{'error': (form.controls.password.errors && form.controls.password.dirty), 'success': form.controls.password.valid && form.controls.password.dirty}\">\n              <div *ngIf=\"!!form.controls.password.errors?.required && !!form.controls.password.dirty\">\n                      {{ alert }}\n              </div>\n          </div>\n      </div>\n      \n      <div class=\"row\">\n          <div class=\"col-md-4\"></div>\n          <div class=\"col-md-4\">\n              <button type=\"submit\" [disabled]=\"!form.valid || processing\" class=\"btn btn-success btn-block\">Enter</button>\n          </div>\n      </div>\n\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = "h2 {\n  padding-top: 2rem;\n  text-align: right; }\n\n.field-label {\n  padding-top: .5rem;\n  text-align: right; }\n\n.error {\n  padding-top: .5rem;\n  color: red;\n  font-style: italic; }\n\n.success {\n  padding-top: .5rem;\n  color: #28a745;\n  font-style: italic; }\n\n.alert {\n  width: 100%;\n  text-align: center; }\n\n.form-control {\n  background-color: whitesmoke;\n  border: 2px dashed darkgrey; }\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, authService, router, authGuard) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.authGuard = authGuard;
        this.processing = false;
        this.createForm();
        this.alert = 'This field is required';
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authGuard.redirectUrl) {
            // if the property exists then we know that the user was re-directed here.
            this.previousUrl = this.authGuard.redirectUrl;
            this.authGuard.redirectUrl = undefined; // Clear the state once previousUrl is saved
            this.messageClass = 'alert alert-danger';
            this.message = 'You must be logged in to view that page.';
        }
    };
    LoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    };
    LoginComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
    };
    LoginComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.processing = true; // Used to disable submit button while is being processed
        this.disableForm(); // Disable form while being processed
        var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value // Password input field
        };
        // Function to send login data to API
        this.authService.login(user).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set bootstrap error class
                _this.message = data.message; // Set error message
                _this.processing = false; // Enable submit button
                _this.enableForm(); // Enable form for editting
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set bootstrap success class
                _this.message = data.message; // Set success message
                // authService function to store user's token in client local storage
                _this.authService.storeUserData(data.token, data.user);
                setTimeout(function () {
                    if (_this.previousUrl) {
                        // If user was re-directed from an unauthorised page then direct back
                        // after successful login...
                        _this.router.navigate([_this.previousUrl]);
                    }
                    else {
                        // Else direct to default (dashboard).
                        _this.router.navigate(['/dashboard']);
                    }
                }, 2000);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_guard_service__["a" /* AuthGuard */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav-content\" aria-controls=\"nav-content\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    \n    <!-- Brand -->\n    <a class=\"navbar-brand\" routerLink=\"/\">MEAN Stack Blog</a>\n    \n    <!-- Links -->\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"nav-content\">   \n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\" *ngIf=\"loggedIn()\">\n                <a class=\"nav-link\" routerLink=\"/dashboard\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">Dashboard</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"loggedIn()\">\n                <a class=\"nav-link\" routerLink=\"/profile\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">Profile</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"loggedIn()\">\n                <a class=\"nav-link\" routerLink=\"/blog\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">Blog</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"!loggedIn()\">\n                <a class=\"nav-link\" routerLink=\"/login\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">Log in</a>\n            </li>\n            <li class=\"nav-item logout\" *ngIf=\"loggedIn()\"> <!-- TODO -->\n                <a class=\"nav-link\" (click)=\"logoutClick()\">Log out</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"!loggedIn()\">\n                <a class=\"nav-link\" routerLink=\"/register\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">Register</a>\n            </li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = ".nav-link {\n  margin: 0 10px; }\n\n.logout {\n  cursor: pointer; }\n\n::ng-deep .alert-info {\n  margin-top: 15px;\n  height: 50px;\n  padding-top: 15px;\n  padding-bottom: 37.5px;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flash) {
        this.authService = authService;
        this.router = router;
        this.flash = flash;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    NavbarComponent.prototype.logoutClick = function () {
        this.authService.logout();
        this.router.navigate(['/']);
        this.flash.show('You are now logged out', { cssClass: 'alert-info' });
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"row\">\n        <div class=\"col-md-8 offset-md-2\">\n            <h2>Profile</h2>\n            <hr>\n            <div class=\"col-md-6\">\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\"><strong>Username:</strong> {{ username }} </li>\n                    <li class=\"list-group-item\"><strong>Email:</strong> {{ email }}</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.scss":
/***/ (function(module, exports) {

module.exports = "h2 {\n  padding-top: 2rem;\n  text-align: right; }\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username;
            _this.email = profile.user.email;
        }); // When page loads it's going to run to get profile.
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/public-profile/public-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"row\">\n        <div class=\"col-md-8 offset-md-2\">\n            <h2>Public Profile</h2>\n            <hr>\n            <div class=\"col-md-6\">\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\"><strong>Username:</strong> {{ username }} </li>\n                    <li class=\"list-group-item\"><strong>Email:</strong> {{ email }}</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/public-profile/public-profile.component.scss":
/***/ (function(module, exports) {

module.exports = "h2 {\n  padding-top: 2rem;\n  text-align: right; }\n"

/***/ }),

/***/ "./src/app/components/public-profile/public-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicProfileComponent = /** @class */ (function () {
    function PublicProfileComponent(authService, activatedRoute) {
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.foundProfile = false;
    }
    PublicProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params; // Get URL parameters on page load in order to request correct profile data.
        // Service to get the public profile data...
        this.authService.getPublicProfile(this.currentUrl.username).subscribe(function (data) {
            // Check if user was found in database
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return bootstrap error class
                _this.message = data.message; // Return api error message
            }
            else {
                _this.username = data.user.username; // Bind the username for use in template
                _this.email = data.user.email; // Bind the email for use in template
                _this.foundProfile = true;
            }
        });
    };
    PublicProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-public-profile',
            template: __webpack_require__("./src/app/components/public-profile/public-profile.component.html"),
            styles: [__webpack_require__("./src/app/components/public-profile/public-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], PublicProfileComponent);
    return PublicProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n        <div class=\"row\">\n            <div class=\"col-md-4 offset-md-4\">\n                <h2>Register</h2>\n                <hr>\n                <!--\n                <div class=\"row show-hide-message\">-->\n                        <div [ngClass]=\"messageClass\">\n                          {{ message }}\n                        </div><!--\n                </div>-->\n                      \n            </div>\n        </div>\n\n        <!-- Username -->\n        <div class=\"row\">\n            <div class=\"col-md-4 field-label\">\n                <label>Username</label>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                        <input type=\"text\" name=\"username\" class=\"form-control\"\n                               formControlName=\"username\"\n                               (focus)=\"usernameMessage=null\" (blur)=\"checkUsername()\" />\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\" [ngClass]=\"{'error': (form.controls['username'].errors && form.controls['username'].dirty) || (!usernameValid && form.controls['username'].dirty), 'success': !form.controls['username'].errors && usernameValid}\">\n                <div *ngIf=\"form.controls['username'].errors?.required && form.controls['username'].dirty\">\n                    {{ alert }}\n                </div>\n                <div *ngIf=\"(form.controls['username'].errors?.minlength || form.controls['username'].errors?.maxlength) && form.controls['username'].dirty\">\n                    Minimum length: 3, Maximum length: 15 \n                </div>\n                <div *ngIf=\"form.controls['username'].errors?.validateUsername && form.controls['username'].dirty\">\n                    Username must not have any special characters\n                </div>\n                <div *ngIf=\"usernameMessage && usernameValid\">\n                        <i class=\"material-icons\">thumb_up</i>\n                    </div>\n                <div *ngIf=\"usernameMessage && !usernameValid\">\n                    {{ usernameMessage }}\n                </div>\n            </div>\n        </div>\n\n        <!-- Email -->\n        <div class=\"row\">\n            <div class=\"col-md-4 field-label\">\n                <label>E-Mail Address</label>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                        <input type=\"text\" name=\"email\" class=\"form-control\"\n                               formControlName=\"email\"\n                               (focus)=\"emailMessage= null\" (blur)=\"checkEmail()\" />\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\" [ngClass]=\"{'error': (form.controls.email.errors && form.controls.email.dirty) || (!emailValid && form.controls.email.dirty), 'success': !form.controls['email'].errors && emailValid}\">\n                <div *ngIf=\"form.controls['email'].errors?.required && form.controls['email'].dirty\">\n                        {{ alert }}\n                </div>\n                <div *ngIf=\"(form.controls['email'].errors?.minlength || form.controls['email'].errors?.maxlength) && form.controls['email'].dirty\">\n                    Minimum length: 5, Maximum length: 30\n                </div>\n                <div *ngIf=\"form.controls['email'].errors?.validateEmail && form.controls['email'].dirty\">\n                    Must be a valid email\n                </div>\n                <div *ngIf=\"emailMessage && emailValid\">\n                    <i class=\"material-icons\">thumb_up</i>\n                </div>\n                <div *ngIf=\"emailMessage && !emailValid\">\n                    {{ emailMessage }}\n                </div>\n            </div>\n        </div>\n        \n        <!-- Password -->\n        <div class=\"row\">\n            <div class=\"col-md-4 field-label\">\n                <label>Password</label>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"form-group has-danger\">\n                    <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                        <input type=\"password\" name=\"password\" class=\"form-control\"\n                               formControlName=\"password\" />\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\" [ngClass]=\"{'error': (form.controls['password'].errors && form.controls['password'].dirty), 'success': !form.controls['password'].errors}\">\n                <div *ngIf=\"form.controls['password'].errors?.required && form.controls['password'].dirty\">\n                        {{ alert }}\n                </div>\n                <div *ngIf=\"(form.controls['password'].errors?.minlength || form.controls['password'].errors?.maxlength) && form.controls['password'].dirty\">\n                    Minimum length: 8, Maximum length: 35 \n                </div>\n                <div *ngIf=\"form.controls['password'].errors?.validatePassword && form.controls['password'].dirty\">\n                    Must have at least one uppercase, lowercase, special character, and number\n                </div>\n            </div>\n        </div>\n        <!-- Confirm Password -->\n        <div class=\"row\">\n            <div class=\"col-md-4 field-label\">\n                <label>Confirm Password</label>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                        <input type=\"password\" name=\"confirm\" class=\"form-control\"\n                               formControlName=\"confirm\" />\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\" [ngClass]=\"{'error': (form.controls.confirm.errors && form.controls.confirm.dirty) || (form.errors?.matchingPasswords && form.controls['confirm'].dirty), 'success': !form.controls['confirm'].errors && !form.errors?.matchingPasswords}\">\n                <div *ngIf=\"form.controls['confirm'].errors?.required && form.controls['confirm'].dirty\">\n                        {{ alert }}\n                </div>\n                <div *ngIf=\"!!form.errors?.matchingPasswords && form.controls['confirm'].dirty && form.controls['password'].dirty\">\n                    Passwords do not match\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\"></div>\n            <div class=\"col-md-4\">\n                <button type=\"submit\" [disabled]=\"!form.valid || processing || !emailValid || !usernameValid\" class=\"btn btn-success btn-block\">Register</button>\n            </div>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/***/ (function(module, exports) {

module.exports = "h2 {\n  padding-top: 2rem;\n  text-align: right; }\n\n.field-label {\n  padding-top: .5rem;\n  text-align: right; }\n\n.error {\n  padding-top: .5rem;\n  color: red;\n  font-style: italic; }\n\n.success {\n  padding-top: .5rem;\n  color: #28a745;\n  font-style: italic; }\n\n.alert {\n  width: 100%;\n  text-align: center; }\n\n.form-control {\n  background-color: whitesmoke;\n  border: 2px dashed darkgrey; }\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { setTimeout } from 'timers'; Angular added with but then it wouldn't compile...
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.processing = false;
        this.createForm();
        this.alert = 'This field is required';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            email: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(30),
                    this.validateEmail
                ])],
            username: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(15),
                    this.validateUsername // RegEx
                ])],
            password: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(35),
                    this.validatePassword // RegEx
                ])],
            confirm: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        }, { validator: this.matchingPasswords('password', 'confirm') }); // custom validator for matching passwords
    };
    RegisterComponent.prototype.disableForm = function () {
        this.form.controls['email'].disable();
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
        this.form.controls['confirm'].disable();
    };
    RegisterComponent.prototype.enableForm = function () {
        this.form.controls['email'].enable();
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
        this.form.controls['confirm'].enable();
    };
    RegisterComponent.prototype.validateEmail = function (controls) {
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateEmail': true };
        }
    };
    RegisterComponent.prototype.validateUsername = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateUsername': true };
        }
    };
    RegisterComponent.prototype.validatePassword = function (controls) {
        var regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).*$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validatePassword': true };
        }
    };
    RegisterComponent.prototype.matchingPasswords = function (password, confirm) {
        return function (group) {
            if (group.controls[password].value === group.controls[confirm].value) {
                return null; // Return as a match
            }
            else {
                return { 'matchingPasswords': true }; // Return as error: do not match
            }
        };
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.processing = true; // Used to notify HTML that form is in processing, so that it can be disabled
        this.disableForm();
        var user = {
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            password: this.form.get('password').value
        };
        this.authService.registerUser(user).subscribe(function (data) {
            console.log(data);
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set a Bootstrap error class
                _this.message = data.message; // Server error response
                _this.processing = false; // Re-enable submit button
                _this.enableForm();
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set a Bootstrap success class
                _this.message = data.message; // Server success message
                setTimeout(function () {
                    _this.router.navigate(['/login']);
                }, 2000);
            }
        });
    };
    // Function to check if username is still available (activated by ng-Blur)
    RegisterComponent.prototype.checkEmail = function () {
        var _this = this;
        var email = this.form.get('email').value;
        // Function from authentication file to check if e-mail is taken
        this.authService.checkEmail(email).subscribe(function (data) {
            if (!data.success && data.message) {
                _this.emailValid = false; // Return email as invalid in ng-If div
                _this.emailMessage = data.message; // Return error message
            }
            else if (!_this.form.controls.email.errors) {
                _this.emailValid = true; // Return email as valid in ng-If div
                _this.emailMessage = data.message; // Return success message
            }
            else {
                _this.emailMessage = null;
            }
        });
    };
    // Function to check if username is still available (activated by ng-Blur)
    RegisterComponent.prototype.checkUsername = function () {
        var _this = this;
        var username = this.form.get('username').value;
        // Function from authentication file to check if username is taken
        this.authService.checkUsername(username).subscribe(function (data) {
            if (!data.success) {
                _this.usernameValid = false; // Return username as invalid in ng-If div
                _this.usernameMessage = data.message; // ng-If invalid message
            }
            else if (!_this.form.controls.username.errors) {
                _this.usernameValid = true; // Return username as valid in ng-If div
                _this.usernameMessage = data.message; // ng-If success message
            }
            else {
                _this.usernameMessage = null;
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_public_profile_public_profile_component__ = __webpack_require__("./src/app/components/public-profile/public-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_blog_blog_component__ = __webpack_require__("./src/app/components/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_blog_blog_edit_blog_edit_component__ = __webpack_require__("./src/app/components/blog/blog-edit/blog-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_blog_delete_blog_delete_blog_component__ = __webpack_require__("./src/app/components/blog/delete-blog/delete-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_not_auth_guard_service__ = __webpack_require__("./src/app/services/not-auth-guard.service.ts");











var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_1__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_2__components_profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'user/:username',
        component: __WEBPACK_IMPORTED_MODULE_3__components_public_profile_public_profile_component__["a" /* PublicProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'blog',
        component: __WEBPACK_IMPORTED_MODULE_4__components_blog_blog_component__["a" /* BlogComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'edit-blog/:id',
        component: __WEBPACK_IMPORTED_MODULE_7__components_blog_blog_edit_blog_edit_component__["a" /* BlogEditComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'delete-blog/:id',
        component: __WEBPACK_IMPORTED_MODULE_8__components_blog_delete_blog_delete_blog_component__["a" /* DeleteBlogComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__["a" /* RegisterComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_not_auth_guard_service__["a" /* NotAuthGuard */]]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_not_auth_guard_service__["a" /* NotAuthGuard */]]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_0__components_home_home_component__["a" /* HomeComponent */]
    }
];


/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    // The user-requested URL that the user will be re-directed to after attempting to access
    // a page directly. Stored here.
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (router, state) {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.redirectUrl = state.url;
            // Snapshot taken here of where user is wanting to go before re-directing to login page
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.domain = '';
    }
    // Function to be used any time we need headers (whenever user needs to be authorized before they access something)
    AuthService.prototype.createAuthenticationHeaders = function () {
        this.loadToken();
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authToken
            })
        });
    };
    // Function used to grab token from Local Storage (browser).
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('token');
    };
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.domain + 'authentication/register', user).map(function (res) { return res.json(); });
    };
    AuthService.prototype.checkUsername = function (username) {
        return this.http.get(this.domain + 'authentication/checkUsername/' + username).map(function (res) { return res.json(); });
    };
    AuthService.prototype.checkEmail = function (email) {
        return this.http.get(this.domain + 'authentication/checkEmail/' + email).map(function (res) { return res.json(); });
    };
    // Function to log in user (taking the user object from the back-end)
    AuthService.prototype.login = function (user) {
        return this.http.post(this.domain + 'authentication/login', user).map(function (res) { return res.json(); });
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    // Function to store user's username and token in client local storage (the browser.) Local storage details can be seen on Chrome by clicking F12 and then Storage.
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        // need to stringify user object before storage (localStorage only store strings)...
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token; // Assign token to be used elsewhere
        this.user = user; // Set user to be used elsewhere
    };
    // Function to intercept local storage on the browser to get profile info. Needs to be done in an ideal way to ensure the token isn't sent every time. We can use headers for that.
    AuthService.prototype.getProfile = function () {
        this.createAuthenticationHeaders(); // Create headers before sending to API
        return this.http.get(this.domain + 'authentication/profile', this.options).map(function (res) { return res.json(); });
    };
    // Function to get public profile data
    AuthService.prototype.getPublicProfile = function (username) {
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + 'authentication/publicProfile/' + username, this.options).map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogService = /** @class */ (function () {
    function BlogService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.domain = this.authService.domain; // localhost
    }
    // Function to be used any time we need headers
    // (whenever user needs to be authorized before they access something)
    BlogService.prototype.createAuthenticationHeaders = function () {
        this.authService.loadToken(); // Get token so it can be attached to headers
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authService.authToken
            })
        });
    };
    BlogService.prototype.newBlog = function (blog) {
        this.createAuthenticationHeaders();
        return this.http.post(this.domain + 'blogs/newBlog', blog, this.options).map(function (res) { return res.json(); });
        // So when making a post request the newBlog api is expecting the
        // blog object (from blog component)
        // along with the options for the header.
    };
    BlogService.prototype.getAllBlogs = function () {
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + 'blogs/allBlogs', this.options).map(function (res) { return res.json(); });
    };
    BlogService.prototype.getSingleBlog = function (id) {
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + 'blogs/singleBlog/' + id, this.options).map(function (res) { return res.json(); });
    };
    BlogService.prototype.editBlog = function (post) {
        this.createAuthenticationHeaders();
        return this.http.put(this.domain + 'blogs/updateBlog/', post, this.options).map(function (res) { return res.json(); });
    };
    BlogService.prototype.deleteBlog = function (id) {
        this.createAuthenticationHeaders();
        return this.http.delete(this.domain + 'blogs/deleteBlog/' + id, this.options).map(function (res) { return res.json(); });
    };
    BlogService.prototype.likeBlog = function (id) {
        var blogData = { id: id };
        return this.http.put(this.domain + 'blogs/likeBlog/', blogData, this.options).map(function (res) { return res.json(); });
    };
    BlogService.prototype.dislikeBlog = function (id) {
        var blogData = { id: id };
        return this.http.put(this.domain + 'blogs/dislikeBlog/', blogData, this.options).map(function (res) { return res.json(); });
    };
    BlogService.prototype.postComment = function (id, comment) {
        this.createAuthenticationHeaders(); // Create headers
        // Create blog post data to pass to backend
        var blogData = {
            id: id,
            comment: comment
        };
        return this.http.post(this.domain + 'blogs/comment', blogData, this.options).map(function (res) { return res.json(); });
    };
    BlogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/services/not-auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotAuthGuard = /** @class */ (function () {
    function NotAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NotAuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            this.router.navigate(['/']);
        }
        else {
            return true;
        }
    };
    NotAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NotAuthGuard);
    return NotAuthGuard;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map