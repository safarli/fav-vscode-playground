
class Vehicle {
	private readonly _vin: number;
	private _year: number;
	static readonly PINUM: number = 3.14;

	constructor(year: number) {
		this._vin = 1239219;
		this._year = year;
	}
	static doThis() { return 5 }

	getVin(): number {
		return this._vin;
	}
}

export class Car extends Vehicle {
	make: string;
	model: string;
	engine: string;
	doorCount: number = 4;

	constructor(year: number, make: string, model: string, engine: string) {
		super(year);
		this.make = make;
		this.model = model;
		this.engine = engine;

	}
}

export function Person(this: any, name: string) { // Person constructor
	this.p_id = 124234;
	this.name = name
}
Person.prototype = {}
Person.prototype.eat = function () { console.log(this.name + ' is eating...') }
