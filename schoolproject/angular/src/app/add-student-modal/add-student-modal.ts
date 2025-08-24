import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Student {
  fullName: string;
  email: string;
  class: string;
  gender: string;
  phone: string;
  password: string;
}

@Component({
  selector: 'app-add-student-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-student-modal.html',
  styleUrls: ['./add-student-modal.css']
})
export class AddStudentModalComponent {
  @Output() save = new EventEmitter<Student>();
  @Output() close = new EventEmitter<void>();

  student: Student = {
    fullName: '',
    email: '',
    class: '',
    gender: '',
    phone: '',
    password: ''
  };

  activeTab: 'manual' | 'csv' = 'manual';

  switchTab(tab: 'manual' | 'csv') {
    this.activeTab = tab;
  }

  saveStudent() {
    if (this.activeTab === 'manual') {
      if (this.student.fullName && this.student.email && this.student.class && this.student.gender && this.student.password) {
        this.save.emit({ ...this.student });
        this.close.emit();
        this.resetForm();
      }
    } else {
      // CSV upload logic here (if you want)
      alert('CSV Import not implemented yet');
    }
  }

  resetForm() {
    this.student = { fullName: '', email: '', class: '', gender: '', phone: '', password: '' };
  }

  closeModal() {
    this.close.emit();
    this.resetForm();
  }
}
