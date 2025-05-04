import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/products';
import { NgFor, NgIf } from '@angular/common';
import { ModulesComponent } from "../modules/modules/modules.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf, NgFor ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
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
