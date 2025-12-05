import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf], // ✅ Import NgIf here
  template: `
  <div class="p-3 bg-success text-center btn-dark-mode"> 
    <h1>Header</h1>
    <p class="text-center mt-2" *ngIf="message">{{ message }}</p>
  </div>
  `
})
export class HeaderComponent implements OnInit {
  message: string = '';

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getTest().subscribe({
      next: res => this.message = res.message,
      error: () => this.message = 'Backend not reachable'
    });
  }
}
