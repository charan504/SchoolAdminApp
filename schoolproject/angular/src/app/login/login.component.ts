import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  school: string = '';
  password: string = '';

  onLogin() {
    console.log('School:', this.school);
    console.log('Password:', this.password);
    alert('Login button clicked!');
  }
}
