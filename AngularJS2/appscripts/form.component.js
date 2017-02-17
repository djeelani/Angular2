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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var auth_service_1 = require("./auth.service");
var FormComponent = (function () {
    function FormComponent(_fb, myservice) {
        this._fb = _fb;
        this.myservice = myservice;
    }
    FormComponent.prototype.ngOnInit = function () {
        this.loginForm = this._fb.group({
            username: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
    };
    FormComponent.prototype.Login = function (Mylogin) {
        // console.log("My UserName is:"+ Mylogin.username);
        // console.log("My Password is:"+Mylogin.password);
        var t = this.myservice.authenticatenow(Mylogin);
        console.log("My Name is:" + t.name);
        console.log("My Token is:" + t.authToken);
    };
    return FormComponent;
}());
FormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'form-selector',
        templateUrl: '../form.html',
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, auth_service_1.AuthService])
], FormComponent);
exports.FormComponent = FormComponent;
var Login = (function () {
    function Login() {
    }
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=form.component.js.map