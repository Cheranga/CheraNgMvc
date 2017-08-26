import { Component, OnInit } from "@angular/core";

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: "./product-list.component.html"
})

export class ProductListComponent implements OnInit {

    // Constructor
    constructor(private productService: ProductService) {

    }

    // When initializing the control get the data
    ngOnInit() {
        this.getProducts();
    }

    // Properties
    products: Product[] = [];
    messages: string[] = [];

    // Methods
    private getProducts() {
        this.productService.getProducts().subscribe(products => this.products = products, errors => this.handleErrors(errors));
    }

    private handleErrors(errors: any) {
        this.messages = [];

        for (let msg of errors) {
            this.messages.push(msg);
        }
    }
}
