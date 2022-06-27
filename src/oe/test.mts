const fruits = ['banan', 'portagal', 'heyva', 'nar', 'gilas', 'avocado'];
const [firstFruit = 'FOO', secondFruit = 'BAR', , , ...restFruits] = fruits;
const testObj = {
  books: {
    math: ['Aritmethics', 'Number Systems', 'Complex Numbers'],
    geography: ['Earth', 'Continents', 'Oceans'],
    aProperty: undefined,
  },
};

const {
  books: { geography: cografiya = 'defaultValue', aProperty: birMulk = 999 },
} = testObj;

console.log(cografiya);
console.log(birMulk);

console.log(firstFruit);
console.log(secondFruit);
console.log(restFruits);

const Person = (name: string, age: number) => {
  const _name = name;
  const _age = age;
  const sayName = () => console.log(`My name is ${_name}`);
  return { sayName };
};
const Nerd = (name: string, age: number) => {
  const parentObj = Person(name, age);
  const doSomethingNerdy = () => console.log('nerd stuff');
  /* eslint-disable-next-line */
  return Object.assign({ doSomethingNerdy }, parentObj);
};

const jeff = Nerd('Jeff', 29);
jeff.sayName();
jeff.doSomethingNerdy();

export {};
