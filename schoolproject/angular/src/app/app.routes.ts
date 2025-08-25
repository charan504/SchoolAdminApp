import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { SidebarComponent } from './sidebar/sidebar';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home';
import { TeachersComponent } from './teachers/teachers';
import { StudentsComponent } from './student/student';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Default route = login
  {
    path: 'home',
    component: SidebarComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardHomeComponent },
      { path: 'teachers', component: TeachersComponent },
      { path: 'students', component: StudentsComponent }
    ]
  },
  { path: '**', redirectTo: '' } // fallback = login
];
