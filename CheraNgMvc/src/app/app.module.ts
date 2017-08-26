import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Application router module
import { AppRoutingModule } from "./app-routing.module";

// Application components
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';

// Application services
import { ProductService } from './product/product.service';
import { CategoryService } from './category/category.service';


@NgModule({
    imports: [BrowserModule, AppRoutingModule, HttpModule, FormsModule],
    declarations: [AppComponent, ProductListComponent],
    bootstrap: [AppComponent],
    providers: [ProductService, CategoryService]
})
export class AppModule { }
