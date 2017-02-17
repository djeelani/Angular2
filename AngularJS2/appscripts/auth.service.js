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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var user_component_1 = require("./user.component");
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        //this.url = "home/authenticate";
    }
    AuthService.prototype.authenticatenow = function (usercreds) {
        //var headers = new Headers();
        //var creds = 'userName=' + usercreds.username + '&password=' + usercreds.password;
        //headers.append('Content-Type', 'application/json');
        var data = JSON.stringify(usercreds);
        console.log(data);
        var myUser = new user_component_1.User("test", "tes155156451sadasvxv");
        //return this.http.post(this.url, usercreds, { headers: headers }).map((data) => data.json());
        return myUser;
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map