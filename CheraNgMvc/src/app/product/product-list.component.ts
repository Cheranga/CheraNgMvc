import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Product } from './product';
import { Category } from '../category/category';
import { ProductService } from './product.service';
import { CategoryService } from '../category/category.service';
import { ProductSearch } from './productSearch';

@Component({
    templateUrl: "./product-list.component.html"
})

export class ProductListComponent implements OnInit {

    // Constructor
    constructor(private productService: ProductService,
        private categoryService: CategoryService,
        private router: Router) {
    }

    // When initializing the control get the data
    ngOnInit() {
        this.getProducts();
    }

    // Properties
    products: Product[] = [];
    messages: string[] = [];
    searchCategories: Category[] = [];
    searchEntity: ProductSearch = new ProductSearch();

    // Methods
    private getProducts() {
        this.searchEntity.categoryId = 0;

        this.productService.getProducts().subscribe(products => this.products = products, errors => this.handleErrors(errors));

        this.getSearchCategories();
    }

    private getSearchCategories() {
        this.categoryService.getSearchCategories().subscribe(categories => this.searchCategories = categories, errors => this.handleErrors(errors));
    }

    search() {
        this.productService.search(this.searchEntity).subscribe(products => this.products = products, errors => this.handleErrors(errors));
    }

    resetSearch() {
        this.searchEntity.categoryId = 0;
        this.searchEntity.productName = '';
        this.getProducts();
    }

    add() {
        this.router.navigate(['/productDetail', -1]);
    }

    private handleErrors(errors: any) {
        this.messages = [];

        for (let msg of errors) {
            this.messages.push(msg);
        }
    }
}
