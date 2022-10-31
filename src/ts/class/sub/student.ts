import Human from '../sup/human.js';

export default class Student extends Human {
  id: number;
  constructor(student: Student = null) {
    super(student);
    if (student !== null) {
      this.id = student.id;
    }
  }
}
