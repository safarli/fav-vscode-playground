/* eslint-disable max-classes-per-file */

interface Robot {
  setCharge(val: number): void;
  getCharge(): number;
}

interface IRobotDog extends Robot {
  toggleLight(): boolean;
}

class Pet {
  private readonly _petId: string;
  private _name: string;
  private _trained: boolean;

  constructor(name: string, trained: boolean) {
    this._petId = Math.random().toString(36).substring(3, 9);
    this._name = name;
    this._trained = trained;
  }
}

class Dog extends Pet {
  private readonly _color: string;
  private readonly _breed: string;

  constructor(name: string, trained: boolean, color: string, breed: string) {
    super(name, trained);
    this._color = color;
    this._breed = breed;
  }

  // eslint-disable-next-line class-methods-use-this
  bark() {
    return 'Woof woof...';
  }
}

class RobotDog extends Dog implements IRobotDog {
  private _lights: boolean;
  private _charge: number;

  constructor(name: string, trained: boolean, color: string, breed: string) {
    super(name, trained, color, breed);
    this._lights = false;
    this._charge = 0;
  }
  toggleLight(): boolean {
    this._lights = !this._lights;
    return !!1;
  }
  // eslint-disable-next-line class-methods-use-this
  setCharge(val: number): void {
    throw new Error('Method not implemented.');
  }
  // eslint-disable-next-line class-methods-use-this
  getCharge(): number {
    throw new Error('Method not implemented.');
  }
}

const d1: Dog = new RobotDog('asdfsf', false, 'yellow', 'gsd');
