const CarFactory = (make: string, model: string, year: number) => (
	((prefix: string, cb: (id: string) => void) => cb(prefix + '_' + Math.random().toString(36).substring(2, 9)))('person', (id: string) => ({ id, make, model, year }))
);

const CarFactory2 = (make: string, model: string) => (
	((id: string) => ({ id, make, model }))((() => Math.random().toString(36).substring(2, 9))())
);

const CarFactory3 = (make: string, model: string) => {
	const id = Math.random().toString(36).substring(2, 9);
	return { id, make, model }
}

export{}