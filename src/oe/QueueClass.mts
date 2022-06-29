/* eslint-disable */

// TESTED: Tested twice
// FEATURE: Add more fancy features

import { randomUUID } from 'crypto';
import { ObjectType } from './interfaces';

export class Queue<T> {
  readonly queueId: string;
  private _items: ObjectType<T>;
  private _head: number;
  #_tail: number;

  constructor() {
    this.queueId = randomUUID();
    this._items = {};
    this._head = 0;
    this.#_tail = 0;
  }

  enqueue(item: T) {
    this._items[this.#_tail] = item;
    this.#_tail++;
  }
  dequeue() {
    const item = this._items[this._head];
    delete this._items[this._head];
    this._head++;
    return item;
  }
  peek() {
    return this._items[this._head];
  }
  clear() {
    this._items = {};
    this._head = 0;
    this.#_tail = 0;
  }
  get length() {
    return this.#_tail - this._head;
  }
  get isEmpty() {
    return !!this.length;
  }
}

const ee = new Queue<string>();