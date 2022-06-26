/* eslint-disable */

// FIXME: fix me plizzz
// TODO: Lorem ipsum color sit amet
// INFO: Nezerinize catdiririq ki, ....

interface IPerson {
  name: string;
  nationality: string;
  age: number;
  // [x: string | symbol]: string | number;
}

const person: IPerson = {
  name: 'John Doe',
  nationality: 'American',
  age: 79,
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(
      `The value of ${prop as keyof typeof person} is ${
        obj[prop as keyof IPerson]
      }`,
    );
  },
});

function foo<K extends keyof IPerson, V extends IPerson[K]>(prop: K, value: V) {
  person[prop] = value;
}

foo('name', 'Tural');
foo('age', 5);
foo('nationality', 'Azerbaijani');

console.log(person.name);

export default person;
