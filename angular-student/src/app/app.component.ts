import { Component } from '@angular/core';

import { STUDENTS } from './constants/students';
import { Student } from './shared/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-student';
  students: Student[] = STUDENTS;
  currentStudent: Student;

  ngOnInit(): void {
    this.students.sort((a, b) => a.group > b.group ? 1 : -1);
  }

  selectStudent(student): void {
    this.currentStudent = student;
    console.log(this.currentStudent);
  }
}
