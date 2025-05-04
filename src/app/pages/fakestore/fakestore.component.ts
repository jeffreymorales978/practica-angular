import { Component, OnInit } from '@angular/core';
import { CardComponent } from './cartas/card.component';
import { PagComponent } from './paginacion/pag.component';
import { Product, Category } from './interfaces/products';
import { FakeStoreService } from './services/fake-store.service';
import { SearchComponent } from "./search/search.component";

@Component({
  selector: 'app-fake-store',
  standalone: true,
  imports: [CardComponent, PagComponent, SearchComponent],
  templateUrl: './fakestore.component.html',
  styleUrls: ['./fakestore.component.css']
})
export class FakeStoreComponent implements OnInit {
  products: Product[] = [];

  constructor(private serv_products: FakeStoreService) {}

  ngOnInit(): void {
    this.serv_products.getProducts().subscribe((productsAll: Product[]) => {
      this.products = productsAll;
    });
  }

  setNewProducts(newProducts: Product[]): void {
    this.products = newProducts;
  }

  searchProducts(term: string): void {
    const lowerCaseTerm = term.toLowerCase(); 
    this.serv_products.getProducts().subscribe((products: Product[]) => {
      this.products = products.filter(product => 
        product.id.toString() === term || 
        product.title.toLowerCase().includes(lowerCaseTerm)
      );
    });
  }
}
