import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class FakeStoreService {
  private apiURLbase: string = 'https://fakestoreapi.com/products';
  private next: string | null = null;
  private previous: string | null = null;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURLbase);
  }

  getProductByEntry(id: string | number): Observable<Product> {
    return this.http.get<Product>(`${this.apiURLbase}/${id}`);
  }

  set nextURL(url: string | null) {
    this.next = url;
  }

  set previousURL(url: string | null) {
    this.previous = url;
  }

  get nextURL(): string | null {
    return this.next;
  }

  get previousURL(): string | null {
    return this.previous;
  }


 
}
 