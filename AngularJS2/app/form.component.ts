import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from './user.component';
import {AuthService} from "./auth.service";

@Component({
  moduleId: module.id,
  selector: 'form-selector',
  templateUrl: '../form.html',
})
export class FormComponent implements OnInit {
    loginForm: FormGroup;
    
    ngOnInit() {
        this.loginForm = this._fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        })
    }
    constructor(private _fb: FormBuilder, private myservice: AuthService) {

    }
    Login(Mylogin: Login) {
        // console.log("My UserName is:"+ Mylogin.username);
        // console.log("My Password is:"+Mylogin.password);

        
        var t =   this.myservice.authenticatenow(Mylogin);
        console.log("My Name is:"+ t.name);
        console.log("My Token is:"+ t.authToken);
    }
}

export class Login {
    username: string
    password: string
}