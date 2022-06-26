// function Vehicle(this: any, color: any, year: any) {
// 	this.vin = 134234
// 	this.color = color
// 	this.year = year
// }
// Vehicle.prototype = { abc: 123, constructor: 1111 };


// function Car(this: any, color: any, year: any, doorCount: any, engine: any) {
// 	Vehicle.call(this, color, year);
// 	this.doorCount = doorCount;
// 	this.engine = engine;
// }
// Car.prototype = Object.create(Vehicle.prototype);
// // Car.prototype.constructor = Car


// function Plane(this: any, color: any, year: any, engine: any, wingType: any) {
// 	Vehicle.call(this, color, year);
// 	this.engine = engine;
// 	this.wingType = wingType;
// }

// function Helicopter(this: any, color: any, year: any, engine: any, rotorType: any) {
// 	Vehicle.call(this, color, year);
// 	this.engine = engine;
// 	this.wingType = this.wingType;
// }


// const kia = new Car('Blue', 2003, 4, 'V6 Turbocharged 3200cm3 Diesel Engine')

// console.log(kia.constructor);