import { Component, Input } from '@angular/core';

@Component({
    selector: 'progress-bar',
    templateUrl:"./progress-bar.html"
})

export class ProgressBarComponent{
	@Input() limit: number = 0;
	@Input() current: number = 0;
	private currentPercent: number = 0;
	private isOverLimit:boolean = false;
	private barWidth: string = '0px';
	ngOnChanges(changes) {
	    this.currentPercent = Math.round(((this.current/this.limit)*100));
	    this.isOverLimit = this.current>this.limit;
	    this.barWidth = (this.isOverLimit?100:((this.current/this.limit)*100)) + '%';
	}
}	