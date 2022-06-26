// class Person {
// 	private readonly _pID: string
// 	private _name: string

// 	constructor(name: string) {
// 		this._pID = crypto.randomUUID();
// 		this._name = name
// 	}

// 	get name() {
// 		return this._name
// 	}
// 	get pID() {
// 		return this._pID
// 	}
// }

// class Engineer extends Person {
// 	private _salary: number;
// 	private _mastery: string;
// 	private _searchingForJob: boolean;

// 	constructor(name: string, mastery: string) {
// 		super(name)
// 		this._salary = 0;
// 		this._mastery = mastery;
// 		this._searchingForJob = true;
// 	}
// 	getHired(amount: number): void {
// 		this._searchingForJob = false;
// 		this._salary = amount;
// 	}
// }

import crypto from 'crypto';

function Person(this: any, name: string = 'Alex') {
  this._pID = crypto.randomUUID();
  this._name = name;
}
Person.prototype = Object.create(Object.prototype);
Person.prototype.getName = function () {
  return this._name;
};
Person.prototype.getID = function () {
  return this._pID;
};

function Engineer(this: any, name: string, mastery: string): any {
  Person.call(this, 'Justin');
  this._mastery = mastery;
  this._salary = 0;
  return this;
}
Engineer.prototype = Object.create(Person.prototype);
Engineer.prototype.getMastery = function () {
  return this._mastery;
};

const civilEngineer = Engineer.call(
  Object.create(Engineer.prototype),
  'Justin',
  'Senior Civil Engineer'
);
console.log(civilEngineer.getMastery());
console.log(civilEngineer.getID());

export {};
