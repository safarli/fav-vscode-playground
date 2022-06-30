/* eslint-disable */

/* INFO: 
  keyword -> PURPLE
  string -> GREEN
  function, method -> BLUE
    call parens: PURPLE
  operator -> CYAN
  let, var, params -> RED
  const, objProperty -> YELLOW
 */

/* FIXME: USE PEACOCK TO COLORIZE VSCODE */

/* INFO: Welcome to my code section, this is an info comment block */
/* FEATURE: Add spinning globe effect */
/* TODO: Do some checks here */
/* TESTED: Some of below codes are tested by developers */

import './oe/ProxyPatterns.mjs';

const sample = (arg1: string, ...value: [number, number]) => {
  console.log(arg1, value);
};

const arr: [number, number] = [444, 555];

sample('box', ...arr);

/**
 * My namespace
 * @namespace
 * @author bsafarli
 */

/**
 * JSDoc Comment
 * Types:
 * @type
 * @param
 * @returns
 * @typedef
 * @callback
 * @template
 * Classes:
 * @public, @private, @protected, @readonly
 * @override
 * @extends
 * @implements
 * @class
 * @this
 * Documentation:
 * @depreceated
 * @see
 * @link
 * Other:
 * @author
 * @enum
 */

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
    readonly serialNumber: string;

    constructor(private _power: number = 0) {
      this.serialNumber = IdGen();
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
