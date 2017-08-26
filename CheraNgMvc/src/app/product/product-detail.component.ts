import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from "./product";
import { Category } from '../category/category';
import { CategoryService } from '../category/category.service';
import { ProductService } from './product.service';

@Component({
    templateUrl: "./product-detail.component.html"
})


export class ProductDetailComponent implements OnInit {

    constructor(
        private categoryService: CategoryService,
        private productService: ProductService,
        private route: ActivatedRoute,
        private location: Location) {
    }

    product: Product;
    messages: string[];
    categories: Category[] = [];

    ngOnInit() {

        this.product = new Product();
        this.product.price = 1;
        this.product.categoryId = 1;
        this.product.url = "www.cheranga.com";

        this.messages = [];

        this.getCategories();
    }

    goBack() {
        this.location.back();
    }

    saveProduct() {
        this.addProduct(this.product);
    }

    private addProduct(product: Product) {
        this.productService.addProduct(product).subscribe(() => this.goBack(), errors => this.handleErrors(errors));
    }

    private updateProduct(product: Product) {

    }

    private getCategories() {
        this.categoryService.getCategories().subscribe(categories => this.categories = categories, errors => this.handleErrors(errors));
    }

    private handleErrors(errors: any) {
        for (let msg of errors) {
            this.messages.push(msg);
        }
    }
}