import Student from './class/sub/student.js';
import showHideTitle from './function/showHideTitle.js';
import { title } from './global/selectors.js';

console.log('Working...');

showHideTitle('none');

setTimeout(() => {
  showHideTitle('block');
}, 3000);

const student = new Student({ name: 'David', age: 22, id: 3 });

title.textContent = student.name;
