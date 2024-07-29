/*
  Клас Student, який містить три властивості: name, age та grade. 
  Замість того, щоб оголошувати ці властивості в тілі класу, потім у конструкторі, і нарешті надавати їм значення, 
  напишіть скорочену ініціалізацію.
*/

class Student {
  constructor(public name: string, public age: number, public grade: string) {}
}

const mark = new Student("Mark", 24, "A");

// Student { name: 'Mark', age: 24, grade: 'A' }
console.log(mark);

export {};
