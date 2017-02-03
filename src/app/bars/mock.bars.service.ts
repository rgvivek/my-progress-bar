import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { BarsService } from './bars.service';
import { Bars } from './bars';


@Injectable()

export class MockBarsService extends BarsService {
	constructor () {
		super(null);
	}

    public getBars() : Observable<Bars>{
    	let bars = new Bars({"buttons":[38,21,-17,-7],"bars":[39,12],"limit":170});
    	return Observable.of(bars);
	}
}