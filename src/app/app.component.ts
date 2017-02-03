import { Component } from '@angular/core';
import { BarsService } from 'app/bars/bars.service';
import { Bars } from 'app/bars/bars';
import { Bar } from 'app/bars/bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  	private progressBars = [];
	private manipulateButtons = [];
	private currentProgressBar:Bar;
	constructor(private barsService: BarsService) {
		this.reLoadBars();
	};
	
	reLoadBars(){
		this.barsService.getBars().subscribe(this.loadBars.bind(this));
	}
	private loadBars(bars: Bars) {
		if(bars && bars.isValid()){
			this.progressBars = [];
			let count = 1;
			for (let current of bars.bars) {
				let progressBar = new Bar(count, current, bars.limit, '#Bar '+count++);
				this.progressBars.push(progressBar);
			}
			if(this.progressBars.length > 0){
				this.currentProgressBar = this.progressBars[0];
			}
			this.manipulateButtons = bars.buttons;
		}
	}
	editProgressBar(value: number):void{
		let newValue = this.currentProgressBar.current + value;
		if(newValue < 0){
			this.currentProgressBar.current = 0;
		}else{
			this.currentProgressBar.current = newValue;
		}
	}
}
