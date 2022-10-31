import Human from '../sup/human.js';
export default class Student extends Human {
    id;
    constructor(student = null) {
        super(student);
        if (student !== null) {
            this.id = student.id;
        }
    }
}
