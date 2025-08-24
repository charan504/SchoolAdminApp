import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddStudentModalComponent } from '../add-student-modal/add-student-modal';
@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, FormsModule, AddStudentModalComponent],
  templateUrl: './student.html',
  styleUrls: ['./student.css']
})
export class StudentsComponent {
  showForm = false;
  students: any[] = [];

  addStudent() {
    this.showForm = true;
  }

  onSaveStudent(student: any) {
    this.students.push(student);
    this.showForm = false;
  }

  onCloseModal() {
    this.showForm = false;
  }
}
