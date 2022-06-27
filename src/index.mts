/* eslint-disable */

// ? Should I continue maintain this section? - Query
// * Important info is highlighted - Highlight
// ! depreceated function, don't use - Alert

// TODO: This is TODO
// FIXME: This is FIXME

// TODO: Create and use User Snippets (or extension snippets e.g: ES6)
// TODO: Use F1 to access command palette
// TODO: Use Ctrl+P for Search file menu

// WARNING: fwewef
// FEATURE: Effektli acilib qapanma ozelliyi
// INFO: vacib melumatdir zehmet olmazsa tedbir gorun
// BUG: wefweifjw
// MENTION: @Justin
// IDEA: Kenarlarini belke oval edek?
// REVIEW: wjeifwjfe
// REUSABLE: fwiejfweijf
// TESTED: wfijfeif

import './oe/ProxyPatterns.mjs';

const sample = (arg1: string, ...value: [number, number]) => {
  console.log(arg1, value);
};

const arr: [number, number] = [444, 555];

sample('box', ...arr);

const longNum = 1_000_000 * 3_000;
console.log(longNum);

// -------------------------
let a = null,
  b = 9,
  c = 'Rabbit';
b = 5;
c = 'Donkey';
a ||= 8;
a &&= 1;
a ??= 5;
console.log(a);

// -------------------------
const obj: any = {
  a: 1,
  b: 2,
  bark() {
    return 'woof';
  },
};
console.log(obj?.a, obj?.b, obj.bark?.(), obj.meow?.());

// -------------------------
const array: any[] = ['Apple', true, 39];
console.log(array[41]?.salam?.sagol, array[25]?.FOO?.BAR());

// -------------------------
const length = null;
const width = undefined;

const area = (length ?? 5) * (width ?? 10);
console.log(area);

// -------------------------
// Class inside IIFE
const Toaster = (() => {
  const IdGen = () => Math.random().toString(36).substring(2, 9);

  return class ToasterClass {
    private readonly _serialNumber: string;

    constructor(private _power: number = 0) {
      this._serialNumber = IdGen();
    }

    powerUp() {
      this._power += 200;
    }

    powerDown() {
      this._power -= 200;
    }

    set power(val: number) {
      this._power = val;
    }

    get power() {
      return this._power;
    }
  };
})();

export {};
