import { Injectable } from '@angular/core';
// We need 'Headers' and 'RequestOptions' modules because we are going to POST data to the server
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Category } from './category';

@Injectable()
export class CategoryService {
    private url: string = "/api/CategoryApi";

    constructor(private http: Http) {

    }

    getSearchCategories(): Observable<Category[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url + '/SearchCategories', null, options).map(this.extractData).catch(this.handleErrors);
    }

    getCategories(): Observable<Category[]> {
        return this.http.get(this.url).map(this.extractData).catch(this.handleErrors);
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