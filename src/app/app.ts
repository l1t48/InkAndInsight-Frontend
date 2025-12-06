import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeSwitcher } from './components/theme-switcher';
import { HeaderComponent } from './components/header';
import { AuthStateService } from './services/auth-state.service';
import { ApiService } from './services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThemeSwitcher, HeaderComponent], // standalone components only
  template: `
    <app-header></app-header>
    <div class="bg-body text-body">
        <router-outlet></router-outlet>
    </div>

    <app-sticky-button></app-sticky-button>
  `
})
export class App implements OnInit {
  constructor(
    private authState: AuthStateService,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initializeAuthState();

    // Optional: periodic check every minute
    setInterval(() => this.initializeAuthState(), 60_000);
  }

  private initializeAuthState() {
    this.api.getAuthMe().subscribe({
      next: user => this.authState.setUser(user),
      error: () => {
        this.authState.clear();
        // Only redirect if currently on a protected page
        if (this.router.url !== '/auth') {
          this.router.navigate(['/auth']);
        }
      }
    });
  }
}
