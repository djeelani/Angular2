import { RouterModule, Routes }  from '@angular/router';
import { AppComponent }   from './app.component';
import { ProductsComponent }   from './Product.component';
import { AboutComponent }   from './about.component';
import { ContactComponent }   from './contact.component';
import { FormComponent }   from './form.component';


export const routes: Routes = [
    { path: 'Products', component: ProductsComponent },
    { path: 'Contact', component: ContactComponent },
    { path: 'AboutUs', component: AboutComponent },
    { path: 'Form', component: FormComponent },
    { path: '', redirectTo: 'Products', pathMatch: 'full' }
  
];


export const routing = RouterModule.forRoot(routes);