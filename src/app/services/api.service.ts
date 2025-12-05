// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
 private baseUrl = import.meta.env.VITE_apiBaseUrlLocal;

    constructor(private http: HttpClient) { }

    // ====================
    // AUTH
    // ====================

    register(data: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/auth/register`, data);
    }

    login(data: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/auth/login`, data);
    }

    // ====================
    // BOOKS
    // ====================

    getBooks(): Observable<any> {
        return this.http.get(`${this.baseUrl}/books`);
    }

    getBookById(id: string | number): Observable<any> {
        return this.http.get(`${this.baseUrl}/books/${id}`);
    }

    createBook(data: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/books`, data);
    }

    updateBook(id: string | number, data: any): Observable<any> {
        return this.http.put(`${this.baseUrl}/books/${id}`, data);
    }

    deleteBook(id: string | number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/books/${id}`);
    }

    // ====================
    // QUOTES
    // ====================

    getQuotes(): Observable<any> {
        return this.http.get(`${this.baseUrl}/quotes`);
    }

    getQuoteById(id: string | number): Observable<any> {
        return this.http.get(`${this.baseUrl}/quotes/${id}`);
    }

    createQuote(data: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/quotes`, data);
    }

    updateQuote(id: string | number, data: any): Observable<any> {
        return this.http.put(`${this.baseUrl}/quotes/${id}`, data);
    }

    deleteQuote(id: string | number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/quotes/${id}`);
    }

    // Test API
    getTest(): Observable<any> {
        return this.http.get(`${this.baseUrl}/test`);
    }

    postTest(data: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/test`, data);
    }
}
