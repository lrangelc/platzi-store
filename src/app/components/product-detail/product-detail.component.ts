import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from './../../core/services/products/products.service';
import { Product } from './../../models/product.model';
import { ProductComponent } from 'src/app/admin/components/product/product.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      const id = params.id;
      console.log(id);
      this.fetchProduct(id);
      // this.product = this.productsService.getProduct(id);
      console.log('this.product');
      console.log(this.product);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe((product) => {
      console.log('product');
      console.log(product);
      if (product.image.length === 0) {
        product.image = 'assets/images/banner-3.jpg';
      }
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '223',
      title: 'Nuevo desde angular',
      image: 'assets/images/stickers1.png',
      price: 1000,
      description: 'wow!',
    };
    this.productsService.createProduct(newProduct).subscribe((product) => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 2500,
      description: 'edicion titulo!',
      image: 'assets/images/stickers1.png',
    };
    this.productsService
      .updateProduct('223', updateProduct)
      .subscribe((product) => {
        console.log(product);
      });
  }
}
