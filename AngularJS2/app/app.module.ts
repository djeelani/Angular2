import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { ChildComponent }   from './child.component';
import { ParentComponent }   from './parent.component';
import { FormComponent }   from './form.component';
import { DataComponent }   from './data.component';
import { AuthService }   from './auth.service';
import { HttpModule }   from '@angular/http';
import { routing } from './app.routes';
import { RouterModule} from "@angular/router";
import { ProductsComponent }   from './Product.component';
import { AboutComponent }   from './about.component';
import { ContactComponent }   from './contact.component';
import { CoursesComponent } from  './courses.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, RouterModule, routing ],
  declarations: [ AppComponent, ChildComponent, ParentComponent, FormComponent, DataComponent, ProductsComponent, AboutComponent, ContactComponent, CoursesComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ AuthService ]
})
export class AppModule { }
