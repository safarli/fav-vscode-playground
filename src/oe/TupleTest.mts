/* eslint-disable */

interface Car {
  make: string;
  model: string;
  year: number;
  engine?: string;
}

const myTuple: [string, number, Car, boolean] = [
  'a',
  3,
  { make: 'BMW', model: 'F30', year: 2009 },
  false,
];

function getCoordinates(element: any): [string, string, string] {
  let x, y, z: string;
  x = 'apple';
  y = 'grapefruit';
  z = 'avocado';
  // do stuff to get coordinates
  return [x, y, z];
}

const [a, b, c] = getCoordinates('ee');

console.log(1e5);

const hesablama = (A: number, B: number, C: number) => (
  (A = A + 10), (B = B + 50), (C = C + 35), A + B + C
);

console.log(hesablama(5, 9, 6));

let x = 0;
x = (x++, x++, (x += 100), x);
console.log(x);

const getvalue = (z: number = 0) => (
  (z += 5), (z += 10), (z = z ** 2), console.log(z)
);
getvalue();

((() => console.log('fooo'))(), () => console.log(1e9))();

const func1 = (_num: number) => ((_num *= 1e5), _num);
console.log(func1(7));

export {};
