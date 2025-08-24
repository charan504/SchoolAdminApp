import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './teachers.html',
  styleUrls: ['./teachers.css']
})
export class TeachersComponent {
  showForm = false;
  searchText = '';
  selectedClass = '';
  selectedSubject = '';   // ✅ new subject filter

  // Subjects list for dropdown
  subjects: string[] = ['Math', 'Science', 'English', 'History', 'Geography', 'Computer'];

  teachers: any[] = [];
  teacher: any = {
    fullName: '',
    email: '',
    class: '',
    gender: '',
    password: '',
    phone: '',
    subject: ''
  };

  addTeacher() {
    this.showForm = true;
  }

  saveTeacher() {
    if (!this.teacher.fullName || !this.teacher.email) {
      alert('Full Name and Email are required!');
      return;
    }

    this.teachers.push({ ...this.teacher });
    this.teacher = { fullName: '', email: '', class: '', gender: '', password: '', phone: '', subject: '' };
    this.showForm = false;
  }

  // ✅ Filter by Class, Subject, and Search
  filteredTeachers() {
    return this.teachers.filter(t => {
      const matchesClass = this.selectedClass ? t.class === this.selectedClass : true;
      const matchesSubject = this.selectedSubject ? t.subject === this.selectedSubject : true;
      const matchesSearch = this.searchText
        ? (t.fullName?.toLowerCase().includes(this.searchText.toLowerCase()) ||
           t.email?.toLowerCase().includes(this.searchText.toLowerCase()) ||
           t.subject?.toLowerCase().includes(this.searchText.toLowerCase()) ||
           t.phone?.toLowerCase().includes(this.searchText.toLowerCase()))
        : true;
      return matchesClass && matchesSubject && matchesSearch;
    });
  }
}
