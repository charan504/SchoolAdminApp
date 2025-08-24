import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent {
  constructor(private router: Router) {}
  addTeacher() {
    alert('Add Teacher button clicked!');
  }

  logout() {
    this.router.navigate(['']);
  }
}