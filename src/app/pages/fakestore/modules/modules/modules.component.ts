import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/products';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-modules',
  imports: [NgIf, NgFor],
  templateUrl: './modules.component.html',
  styleUrl: './modules.component.css'
})
export class ModulesComponent {

  @Input() public productsAll: Product[] = [];
  selectedProduct: Product | null = null;
  imageLoader = false;

  openModal(product: Product): void {
    this.selectedProduct = product;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedProduct = null;
    document.body.style.overflow = 'auto';
  }
}
