function foo(num1: number, num2: number, ...rest: [string, number, string]) {
  console.log(num1, num2, rest);
}

function bar(num1: number, ...rest: [string, number]) {
  console.log(num1, rest);
}

function defer(
  thisObj: any,
  callable: (param1: string, param2: number) => void,
  ...restParams: [string, number]
) {
  setTimeout(() => {
    callable.apply(thisObj, restParams);
  }, 2000);
}

// Invocations
defer({}, (p1, p2) => console.log(p1, p2), "salam", 333);
foo(1, 2, "armud", 8, "loki");
bar(5, "salam", 119);
