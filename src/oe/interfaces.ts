export interface Animal {
  animalId: string;
}
export interface Horse extends Animal {
  horseName: string;
}
export interface Cow extends Animal {
  cowName: string;
}
export interface ObjectType<T> {
  [key: number]: T;
}
