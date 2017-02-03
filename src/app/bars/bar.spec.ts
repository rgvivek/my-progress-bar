import { TestBed, async } from '@angular/core/testing';
import { Bar } from './bar';

describe('BarClass', () => {
  let bar: Bar;
  
  it('should initialize class', async(() => {
  	bar = new Bar(1,2,3,'me');
  	expect(bar.limit).toBe(3);
  	expect(bar.current).toBe(2);
  	expect(bar.id).toBe(1);
  	expect(bar.name).toBe('me')
  }));

});