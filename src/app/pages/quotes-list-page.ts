import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuoteModalComponent } from '../components/add-quote-modal';

@Component({
  selector: 'app-quotes-list-page',
  imports: [CommonModule, CreateQuoteModalComponent],

  standalone: true,
  template: `
    <div class="w-100 px-3 px-md-5 mt-4">
      <div class="d-flex flex-row justify-content-between align-items-center">
        <h1 class="mb-0">Quotes</h1>
        <button class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#createQuoteModal">
          Add a new quotes
        </button>
      </div>
    </div>

    <app-create-quote-modal></app-create-quote-modal>
  `
})
export class QuotesListPage implements AfterViewInit {

  ngAfterViewInit() {
    const modalEl = document.getElementById('createBookModal');
    modalEl?.addEventListener('hidden.bs.modal', () => {
      // Ensure nothing inside the hidden modal is focused
      (document.activeElement as HTMLElement)?.blur();
    });
  }
}