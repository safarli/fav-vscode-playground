/* eslint-disable */

export default function () {
	console.log('hello bb')
}

const ee = function () {
	console.log('hello from ee')
}

export {
	ee as ALIAS_uu,
	ee as ALIAS_kk
}