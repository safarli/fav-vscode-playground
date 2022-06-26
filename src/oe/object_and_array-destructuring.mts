const obj = {
	a: 1,
	b: 2,
	c: 3
}
const { a, b, c } = obj;

const arr = ["Alma", "Heyva", "Nar"]
const [x, y] = arr;

console.log(a, b, c);
console.log(x, y);


function foo(num?: number)  { // or number | undefined
	if (num) {
		return 10 + num;
	}
	else {
		return 5;
	}
}

foo(5);
foo();

export{}