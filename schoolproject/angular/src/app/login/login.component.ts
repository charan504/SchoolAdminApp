import { Component } from '@angular/core';

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
