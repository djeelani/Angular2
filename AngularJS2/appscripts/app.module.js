"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var child_component_1 = require("./child.component");
var parent_component_1 = require("./parent.component");
var form_component_1 = require("./form.component");
var data_component_1 = require("./data.component");
var auth_service_1 = require("./auth.service");
var http_1 = require("@angular/http");
var app_routes_1 = require("./app.routes");
var router_1 = require("@angular/router");
var Product_component_1 = require("./Product.component");
var about_component_1 = require("./about.component");
var contact_component_1 = require("./contact.component");
var courses_component_1 = require("./courses.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, router_1.RouterModule, app_routes_1.routing],
        declarations: [app_component_1.AppComponent, child_component_1.ChildComponent, parent_component_1.ParentComponent, form_component_1.FormComponent, data_component_1.DataComponent, Product_component_1.ProductsComponent, about_component_1.AboutComponent, contact_component_1.ContactComponent, courses_component_1.CoursesComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [auth_service_1.AuthService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map