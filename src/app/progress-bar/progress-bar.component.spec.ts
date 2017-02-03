import { TestBed, async } from '@angular/core/testing';
import { ProgressBarComponent } from './progress-bar.component';
import { Bars } from './bars/bars';

describe('ProgressBarComponent', () => {
  let pbComp: ProgressBarComponent;
  
  beforeEach(() => {
    pbComp = new ProgressBarComponent();
  });

  it('should initialize required parameters', async(() => {
  	expect(pbComp.limit).toBe(0);
  	expect(pbComp.current).toBe(0);
  	expect(pbComp.currentPercent).toBe(0);
  	expect(pbComp.isOverLimit).not.toBeTruthy();
  	expect(pbComp.barWidth).toBe('0px');
  	pbComp.limit = 130;
  	pbComp.current = 78;
  	pbComp.ngOnChanges();
  	expect(pbComp.currentPercent).toBe(60);
  	expect(pbComp.isOverLimit).not.toBeTruthy();
  	expect(pbComp.barWidth).toBe('60%');
  	pbComp.current = 178;
  	pbComp.ngOnChanges();
  	expect(pbComp.isOverLimit).toBeTruthy();
  }));

});