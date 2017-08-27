import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Product } from "./product";
import { ProductSearch } from './productSearch';

@Injectable()
export class ProductService {
    private url = '/api/productapi';

    constructor(private http: Http) {
    }

    getProducts(): Observable<Product[]> {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleErrors);
    }

    getProduct(id: Number): Observable<Product> {
        let url = this.url + '/' + id;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleErrors);
    }

    search(searchData: ProductSearch): Observable<Product[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url + '/Search', searchData, options).map(this.extractData).catch(this.handleErrors);
    }

    addProduct(product: Product): Observable<Product> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url, product, options).map(this.extractData).catch(this.handleErrors);
    }

    updateProduct(product: Product): Observable<Product> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(this.url, product, options).map(this.extractData).catch(this.handleErrors);
    }

    deleteProduct(id: number): Observable<Product> {
        let url = this.url + '/' + id;

        return this.http.delete(url).map(() => null).catch(this.handleErrors);
    }


    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleErrors(error: any) {
        let errors: string[] = [];

        console.error('An error occured', errors);

        errors.push('An error occured');

        return Observable.throw(errors);
    }
}
