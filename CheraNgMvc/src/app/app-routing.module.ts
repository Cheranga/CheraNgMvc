import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Application components
import { ProductListComponent } from "./product/product-list.component";

// Define the routes for the application
const routes: Routes = [
    {
        path: 'productList',
        component: ProductListComponent       
    },
    {
        path: 'Product/Product',
        redirectTo:'productList'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }