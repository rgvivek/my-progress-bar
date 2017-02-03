import { TestBed, async } from '@angular/core/testing';
import { Bars } from './bars';

describe('BarsClass', () => {
  let bars: Bars;
  
  it('should initialize class', async(() => {
    let barsMeta = {"buttons":[38,21,-17,-7],"bars":[39,12],"limit":170};
    bars = new Bars(barsMeta);
    expect(bars.buttons).toBe(barsMeta.buttons);
    expect(bars.bars).toBe(barsMeta.bars);
    expect(bars.limit).toBe(barsMeta.limit);
    expect(bars.isValid()).toBeTruthy();

    barsMeta = {"buttons":[38,21,-17,-7],"bars":1,"limit":null};
    bars = new Bars(barsMeta);
    expect(bars.isValid()).not.toBeTruthy();
  }));

});