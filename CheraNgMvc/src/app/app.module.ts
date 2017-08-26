import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Application router module
import { AppRoutingModule } from "./app-routing.module";

// Application components
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';

// Application services
import { ProductService } from './product/product.service';


@NgModule({
    imports: [BrowserModule, AppRoutingModule, HttpModule],
    declarations: [AppComponent, ProductListComponent],
    bootstrap: [AppComponent],
    providers: [ProductService]
})
export class AppModule { }
