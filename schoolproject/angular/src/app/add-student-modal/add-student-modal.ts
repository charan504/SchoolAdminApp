import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-student-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-student-modal.html',
  styleUrls: ['./add-student-modal.css']
})
export class AddStudentModalComponent {
  @Output() save = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  student: any = {
    fullName: '',
    email: '',
    class: '',
    section: '',
    gender: '',
    password: '',
    phone: ''
  };

  saveStudent() {
    if (this.student.fullName && this.student.email) {
      this.save.emit({ ...this.student });
      this.closeModal();
    }
  }

  closeModal() {
    this.close.emit();
    this.student = { fullName: '', email: '', class: '', section: '', gender: '', password: '', phone: '' };
  }
}
