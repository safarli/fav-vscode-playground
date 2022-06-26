export default function () {
	console.log('hello bb')
}

const ee = function () {
	console.log('hello from ee')
}

export {
	ee as uu,
	ee as kk
}