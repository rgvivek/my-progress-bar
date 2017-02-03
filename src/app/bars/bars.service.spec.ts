import { TestBed, async } from '@angular/core/testing';
import { Http, Response } from '@angular/http';
import { BarsService } from './bars.service';
import { Bars } from './bars';

describe('BarsService', () => {
  let barsService: BarsService;
  
  beforeEach(() => {
    barsService = new BarsService();
    barsService.http = jasmine.createSpy();
    barsService.http.get = function(){
    	return {map:function(){
    	}};
    }
  });

  it('should initialize BarsService', async(() => {
    let res = barsService.getBars();
  }));

  it('should extract data', async(() => {
  	let serviceResp = new Response({});
    let res = barsService.extractData(serviceResp);
    expect(res).toEqual(jasmine.any(Bars));
  }));

});