// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar'; // Імпортуйте ваш Navbar

@Component({
  selector: 'app-root',
  standalone: true, // Якщо ви використовуєте Angular 17+
  imports: [RouterOutlet, NavbarComponent], // Додайте компоненти сюди
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'theme-bulma';
}