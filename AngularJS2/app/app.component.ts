import { Component } from '@angular/core';
import { CoursesComponent } from  './courses.component'

@Component({
  selector: 'my-app',
  template: `<h1>Hello Angular!</h1>
            <nav>
              <a [routerLink]="['Products']">Products</a>
              <a [routerLink]="['AboutUs']">About Us</a>
              <a [routerLink]="['Contact']">Contact</a>
              <a [routerLink]="['Form']">Form</a>
            </nav>
            <router-outlet></router-outlet>`
})
export class AppComponent { 
  
}
