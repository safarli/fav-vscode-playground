/* eslint-disable */

// INFO: It's recommended to disable eslint when working with this file

// * variable declarations and initializations
let u = 5,
  k = 9,
  t = 3; // 1st way
let [a, b, c] = [5, 9, 3]; // 2nd way

/* swap two variables */
let [x, y] = [10, 15];
[x, y] = [y, x];

/* repeat string */
console.log('Salam'.repeat(5));

/* conditional function invocation shorthand */
const [foo, bar] = [() => console.log('FOO'), () => console.log('BAR')];
let state: string = 'closed';
((state = 'closed'), state === 'open' ? foo : bar)();

/* convert string to number */
{
  const str = '119.06331';
  const num = +str;
}

/* floor number */
{
  const num = 8074.915;
  const numFloored = ~~num;
}

/* decimal base exponents */
{
  const num = 10000;
  const num2 = 1e4;
  console.log(num === num2 ? 'YES' : 'NO');
}

// prettier-ignore
const salam = (a: number) => 
  a + 5;

/* arrow functions */
const toNumber = (strNum: string, numType: 'INTEGER' | 'FLOAT') =>
  numType === 'INTEGER' ? ~~+strNum : numType === 'FLOAT' ? +strNum : null;
const PersonFactory = (name: string, occupation: string, age: number) => ({
  pId: Math.random().toString(36).substring(2, 9),
  name,
  occupation,
  age,
});

/* && and || operators as conditionals */
// longhand
const num = 9;
function doWork() {}
if (num > 5) {
  doWork();
}
// shorthand
// eslint-disable-next-line no-unused-expressions
num > 5 && doWork();

export {};
