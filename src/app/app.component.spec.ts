import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BarsService } from './bars/bars.service';
import { Bars } from './bars/bars';
import { MockBarsService } from './bars/mock.bars.service';

describe('AppComponent', () => {
  let appComp: AppComponent;
  let barsService = new MockBarsService();
  
  beforeEach(() => {
    spyOn(barsService, 'getBars').and.returnValue({subscribe:function(){}});
    appComp = new AppComponent(barsService);
  });

  it('should initialize app', async(() => {
    expect(barsService.getBars).toHaveBeenCalled();
  }));

  it('should load bars for valid value', async(() => {
    let barsValid = {"buttons":[38,21,-17,-7],"bars":[39,12],"limit":170};
    appComp.loadBars(new Bars(barsValid));
    expect(appComp.progressBars.length).toBe(2);
    expect(appComp.currentProgressBar).toBe(appComp.progressBars[0]);
    expect(appComp.manipulateButtons).toBe(barsValid.buttons);
  }));

  it('should not load bars for invalid value', async(() => {
    let barsInValid = {"buttons":[],"bars":[],"limit":170};
    appComp.loadBars(new Bars(barsInValid));
    expect(appComp.progressBars.length).toBe(0);
    expect(appComp.currentProgressBar).toBeUndefined();
    expect(appComp.manipulateButtons).toBe(barsInValid.buttons);

    appComp.loadBars(new Bars(null));
    expect(appComp.progressBars.length).toBe(0);
    expect(appComp.currentProgressBar).toBeUndefined();
    expect(appComp.manipulateButtons).toBe(barsInValid.buttons);
  }));

  it('should add value to currentProgressBar', async(() => {
    appComp.currentProgressBar={current:55};
    appComp.editProgressBar(-65);
    expect(appComp.currentProgressBar.current).toBe(0);
    appComp.editProgressBar(95);
    expect(appComp.currentProgressBar.current).toBe(95);
    appComp.editProgressBar(-65);
    expect(appComp.currentProgressBar.current).toBe(30);
  }));

});
