import { Component } from '@angular/core';


@Component({
  selector: 'my-data',
  template: `
  <h1>{{title}}</h1>
  <h2>My favorite student is: {{favStudent.name}}</h2>
  <p>Students:</p>
  <ul>
    <li *ngFor="let student of students">
      {{ student.name }}
      </li>
  </ul>
  <p *ngIf="students.length > 3">There are many students!</p>
`
})
export class DataComponent {
  title = 'List of students';
  students = [
    new Student(1, 'Sam'),
    new Student(13, 'Rahul'),
    new Student(15, 'Viswanath'),
    new Student(20, 'Sandip')
  ];
  favStudent = this.students[0];
}

export class Student {
  constructor(
    public id: number,
    public name: string) { }
}