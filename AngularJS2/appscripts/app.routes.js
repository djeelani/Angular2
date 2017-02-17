"use strict";
var router_1 = require("@angular/router");
var Product_component_1 = require("./Product.component");
var about_component_1 = require("./about.component");
var contact_component_1 = require("./contact.component");
var form_component_1 = require("./form.component");
exports.routes = [
    { path: 'Products', component: Product_component_1.ProductsComponent },
    { path: 'Contact', component: contact_component_1.ContactComponent },
    { path: 'AboutUs', component: about_component_1.AboutComponent },
    { path: 'Form', component: form_component_1.FormComponent },
    { path: '', redirectTo: 'Products', pathMatch: 'full' }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map