import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeSwitcher } from './components/theme-switcher';
// import { HeaderComponent } from './components/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThemeSwitcher/*, HeaderComponent*/], // standalone components only
  template: `
    <!--<app-header></app-header>-->
    <div class="d-flex justify-content-center align-items-center vh-100 bg-body text-body">
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </div>

    <app-sticky-button></app-sticky-button>
  `
})
export class App {
  protected readonly title = signal('test-frontend');
}