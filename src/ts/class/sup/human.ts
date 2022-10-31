export default class Human {
  name: string = '';
  age: number = 0;
  constructor(human: Human = null) {
    if (human !== null) {
      this.name = human.name;
      this.age = human.age;
    }
  }
}
