import { randomUUID } from 'crypto'
import { ObjectType } from './interfaces'

interface Queue<T> {
	queueId: string
	enqueue(item: T): void
	dequeue(): T
	peek(): T
	clear(): void
	length: number
	isEmpty: boolean
}

export function QueueFactory<T>(): Queue<T> {
	const queueId: string = randomUUID();
	let _items: ObjectType<T> = {}
	let _head: number = 0;
	let _tail: number = 0;

	const enqueue = (item: T) => {
		_items[_tail] = item;
		_tail++;
	}
	const dequeue = () => {
		const item = _items[_head];
		delete _items[_head];
		_head++;
		return item;
	}
	const peek = () => {
		return _items[_head]
	}
	const clear = () => {
		_items = {};
		_head = 0;
		_tail = 0;
	}

	const obj: Queue<T> = {
		queueId,
		enqueue,
		dequeue,
		peek,
		clear,
		get length() {
			return _tail - _head;
		},
		get isEmpty() {
			return this.length === 0;
		}
	}
	return obj
}
