const eat = function () {
	console.log(this.name + " is eating")
}
const breathe = function () {
	console.log('I am breathing')
}
const swim = function () {
	return {
		swim: () => { console.log('I am swimming'); }
	}
}

const superMagician = () => {
	return Object.assign(
		{ name: 'Alexa' },
		{ eat, breathe },
	);
}
const noviceMagician = () => {
	return Object.assign(
		{},
		eat(),
		breathe(),
		swim()
	);
}

console.log(superMagician().eat())