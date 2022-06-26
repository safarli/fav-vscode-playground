
type Color = 'blue' | 'red' | 'green' | 'yellow'
type Shape = 'square' | 'circle' | 'triangle'
type Size = 4 | 6 | 8 | 12 | 16

interface SmallThing {
	size: Size
	shape: Shape
}
interface BlueThing {
	color: Color
}
let smallBlueThing: SmallThing & BlueThing = {
	color: 'green',
	shape: 'square',
	size: 8
}

// -------------------------------------


interface BigThing {
	size: Size
	shape: Shape
}
interface RedThing {
	color: Color
}
let bigOrRedThing: BigThing | RedThing = {
	color: "red",
	shape: "circle",
	size: 12
}


// --------------------------------------


let kk: number | string;
kk = '3'

let eere: number[] = []
let skill: [string, number, boolean]
skill = ['ee', 3, true]


function printText(text: string, alignment: 'left' | 'center' | 'right') {
	console.log(text + ' ' + alignment)
}

export { }