/* eslint-disable */

export function test_func() {
  // primitive
  type Name = string;
  // tuple
  type myType = [number, null, boolean];
  // union
  type WeekDays =
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday';

  // union type + another union type
  type DarkColors = 'blue' | 'black' | 'red' | 'brown' | 'grey';
  type LightColors = 'yellow' | 'white' | 'pink' | 'cyan';
  type Colors = DarkColors | LightColors | 'lime' | 'coral';

  // type obj extend
  type PartialPointX = { x: number };
  type PartialPointY = { y: number };
  type Point = PartialPointX & PartialPointY;

  const point_2D: Point = {
    x: 1,
    y: 2,
  };

  type FuelTypes = 'electric' | 'gasoline' | 'diesel';

  type Animal = { name: string };
  type Bear = Animal & { honey: boolean };

  const bear: Bear = { name: 'Luis', honey: true };

  const today: WeekDays = 'Sunday';
  const fuelType: FuelTypes = 'gasoline';
  const myFavColor: Colors = 'pink';

  function foo() {
    switch (fuelType) {
      case 'diesel':
        return 1;
      case 'electric':
        return 2;
      case 'gasoline':
        return 3;
    }
    return 0;
  }
}
