import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- Add this

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule], // <-- Add FormsModule here
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('angular');
}