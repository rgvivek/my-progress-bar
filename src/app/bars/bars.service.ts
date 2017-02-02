import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Bars } from './bars';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()

export class BarsService {
	private barsUrl = 'http://pb-api.herokuapp.com/bars'; 
	constructor (private http: Http) {
		
	}

    public getBars() : Observable<Bars>{
    	return this.http.get(this.barsUrl)
                    .map(this.extractData.bind(this));
	}

	private extractData(res: Response) {
		let body = res.json();
		let bars = new Bars(body);
		return bars;
	}

	private handleError (error: Response | any) {
		// In a real world app, we might use a remote logging infrastructure
		let errMsg: string;
		errMsg = error.message ? error.message : error.toString();
		console.error(errMsg);
		return errMsg;
	}
}