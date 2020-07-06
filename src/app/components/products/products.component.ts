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

  fetchProducts() {
    this.productsService.getAllProducts().subscribe((products) => {
      console.log(products);
      for (let product of products) {
        if (product.image.length === 0) {
          product.image = 'assets/images/banner-3.jpg';
        }
      }
      this.products = products;
    });
  }

  ngOnInit(): void {
    // this.products = this.productsService.getAllProducts();
    this.fetchProducts();
  }

  clickProduct(id: string): void {
    console.log(`id: ${id}`);
  }
}
