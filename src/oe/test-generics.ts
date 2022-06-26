export function makeState<T extends string | number = string>() {
	let state: T;
	function getState() {
		return state
	}

	function setState(x: T) {
		state = x
	}
	return { getState, setState }
}