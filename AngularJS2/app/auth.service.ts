import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Login } from './form.component';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import {User} from './user.component';
@Injectable()
export class AuthService {
    url: string;

   
    constructor(private http: Http) {
        //this.url = "home/authenticate";
    }

    authenticatenow(usercreds: Login) {
        //var headers = new Headers();
        //var creds = 'userName=' + usercreds.username + '&password=' + usercreds.password;
        
        //headers.append('Content-Type', 'application/json');
        var data = JSON.stringify(usercreds);
        console.log(data);
        let myUser = new User("test", "tes155156451sadasvxv" );

        //return this.http.post(this.url, usercreds, { headers: headers }).map((data) => data.json());
        
        return myUser;

    }
}

