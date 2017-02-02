export class Bars {
	buttons: number[];
  bars: number[];
  limit: number;
  constructor (private barsMeta:any) {
  	if(barsMeta){
  		this.buttons = barsMeta.buttons;
  		this.bars = barsMeta.bars;
  		this.limit = barsMeta.limit;
  	}
	}
  isValid(){
  	return ((this.buttons instanceof Array) && (this.bars instanceof Array) && Number(this.limit) != NaN);
  }
}

