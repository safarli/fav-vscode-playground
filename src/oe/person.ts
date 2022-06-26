export const dummyValue = 5;

export class Person {
  private _name: string;
  private readonly _person_id: string;
  private readonly _birthDate: string;
  private _balance: number;
  private _isMarried: boolean;
  hobbies: Array<String>;

  constructor(name: string, age: number, balance: number) {
    this._person_id = Math.random().toString(36).substring(2, 9);
    this._birthDate = '01/01/2015';
    this._name = name;
    this._balance = balance;
    this._isMarried = false;
    this.hobbies = ['soccer', 'chess', 'drawing', 'skating', 'fishing'];
  }

  private calculateMoney(amount: number, FLAG: string): string {
    if (this._balance > amount && FLAG === 'spend') {
      this._balance -= amount;
      return 'Money spent';
    } else if (FLAG === 'earn') {
      this._balance += amount;
      return 'Money added';
    }
    return '';
  }
  showPID(): string {
    return this._person_id;
  }

  earnMoney(amount: number): void {
    this.calculateMoney(amount, 'earn');
  }

  spendMoney(amount: number): void {
    this.calculateMoney(amount, 'spend');
  }
  balanceInfo(): number {
    return this._balance;
  }
  set isMarried(arg: boolean) {
    this._isMarried = arg;
  }
  get isMarried(): boolean {
    return this._isMarried;
  }

  set addHobby(hobby: string) {
    if (hobby !== 'gambling') {
      this.hobbies.push();
    }
  }
  get getHobbies() {
    return this.hobbies.toString();
  }
}
