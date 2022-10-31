export default class Human {
    name = '';
    age = 0;
    constructor(human = null) {
        if (human !== null) {
            this.name = human.name;
            this.age = human.age;
        }
    }
}
