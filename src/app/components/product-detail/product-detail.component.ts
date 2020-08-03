import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from './../../core/services/products/products.service';
import { Product } from './../../models/product.model';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.product$ = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.productsService.getProduct(params.id);
      })
    );
    this.getRandomUsers();
  }

  createProduct(): void {
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

  updateProduct(): void {
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

  deleteProduct(): void {
    this.productsService.deleteProduct('223').subscribe((response) => {
      console.log(response);
    });
  }

  getRandomUsers(): void {
    console.log('getRandomUsersX1');
    this.productsService.getRandomUsers().subscribe((users) => {
      console.log('getRandomUsersX2');
      console.log(users);
    });
  }
}
