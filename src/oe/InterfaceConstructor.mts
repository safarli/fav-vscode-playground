
interface ConfigInterface {
	config: string;
}
interface InterfaceWithConsturctor {
	new(n: string): { config: string };
}
class Config implements ConfigInterface {
	public config: string;
	constructor(config: string) {
		this.config = config;
	}
}
function setTheState(n: InterfaceWithConsturctor) {
	return new n('{ state: { clicked: true, purchasedItems: true } }');
}
console.log(setTheState(Config).config);

export { }