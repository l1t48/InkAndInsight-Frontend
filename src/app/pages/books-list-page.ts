import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBookModalComponent } from '../components/add-book-modal';


@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [CommonModule, CreateBookModalComponent],
  template: `
    <div class="w-100 px-3 px-md-5 mt-4">
      <div class="d-flex flex-row justify-content-between align-items-center">
        <h1 class="mb-0">
          Books
        </h1>
        <button class="btn btn-primary"            
          data-bs-toggle="modal"
          data-bs-target="#createBookModal">
            Add a new book
        </button>
      </div>
    </div>
    <app-create-book-modal></app-create-book-modal>
  `
})
export class BooksListPage implements AfterViewInit {

  ngAfterViewInit() {
    const modalEl = document.getElementById('createBookModal');
    modalEl?.addEventListener('hidden.bs.modal', () => {
      // Ensure nothing inside the hidden modal is focused
      (document.activeElement as HTMLElement)?.blur();
    });
  }
}