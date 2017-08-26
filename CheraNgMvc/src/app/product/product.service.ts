import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Product } from "./product";

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
