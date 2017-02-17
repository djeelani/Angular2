"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var DataComponent = (function () {
    function DataComponent() {
        this.title = 'List of students';
        this.students = [
            new Student(1, 'Sam'),
            new Student(13, 'Rahul'),
            new Student(15, 'Viswanath'),
            new Student(20, 'Sandip')
        ];
        this.favStudent = this.students[0];
    }
    return DataComponent;
}());
DataComponent = __decorate([
    core_1.Component({
        selector: 'my-data',
        template: "\n  <h1>{{title}}</h1>\n  <h2>My favorite student is: {{favStudent.name}}</h2>\n  <p>Students:</p>\n  <ul>\n    <li *ngFor=\"let student of students\">\n      {{ student.name }}\n      </li>\n  </ul>\n  <p *ngIf=\"students.length > 3\">There are many students!</p>\n"
    })
], DataComponent);
exports.DataComponent = DataComponent;
var Student = (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
    }
    return Student;
}());
exports.Student = Student;
//# sourceMappingURL=data.component.js.map