export class Bar {
  	id: number;
  	current: number;
  	limit: number;
  	name: string;
  	constructor (private inputId :number, private inputCurrent: number, private inputLimit: number, private inputName: string) {
		this.id = inputId;
		this.current = inputCurrent;
		this.limit = inputLimit;
		this.name = inputName;
	}
}

