import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../core/services/products/products.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class ProductsContainer implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    // this.products = this.productsService.getAllProducts();
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productsService.getAllProducts().subscribe((products) => {
      console.log(products);
      for (const product of products) {
        if (product.image.length === 0) {
          product.image = 'assets/images/banner-3.jpg';
        }
      }
      this.products = products;
    });
  }

  clickProduct(id: string): void {
    console.log(`id: ${id}`);
  }
}
