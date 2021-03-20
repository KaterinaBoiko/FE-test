import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { Student } from '../shared/student';
import { Group } from '../shared/groups-enum';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit, OnChanges {

  @Input() student: Student;
  studentForm: FormGroup;
  groups = Object.values(Group);
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      fullName: [this.student?.fullName, Validators.required],
      group: [this.student?.group, Validators.required]
    });
  }

  get fullName(): AbstractControl {
    return this.studentForm?.controls['fullName'];
  }

  get group(): AbstractControl {
    return this.studentForm?.controls['group'];
  }

  ngOnChanges(): void {
    this.fullName?.setValue(this.student.fullName);
    this.group?.setValue(this.student.group);
  }

  onSave(): void {
    const { fullName, group } = this.studentForm.getRawValue();
    this.student.fullName = fullName;
    this.student.group = group;
  }

}
