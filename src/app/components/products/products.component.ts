import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../core/services/products/products.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
  }

  clickProduct(id: string): void {
    console.log(`id: ${id}`);
  }
}
