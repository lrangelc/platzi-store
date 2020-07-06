import { Injectable } from '@angular/core';
import { Product } from './../../../models/product.model';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(`${environment.url_api}/products`, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }
}

// products: Product[] = [
//   {
//     id: '1',
//     image: 'assets/images/camiseta.png',
//     title: 'Camiseta',
//     price: 80000,
//     description: 'bla bla bla bla bla',
//   },
//   {
//     id: '2',
//     image: 'assets/images/hoodie.png',
//     title: 'Hoodie',
//     price: 80000,
//     description: 'bla bla bla bla bla',
//   },
//   {
//     id: '3',
//     image: 'assets/images/mug.png',
//     title: 'Mug',
//     price: 80000,
//     description: 'bla bla bla bla bla',
//   },
//   {
//     id: '4',
//     image: 'assets/images/pin.png',
//     title: 'Pin',
//     price: 80000,
//     description: 'bla bla bla bla bla',
//   },
//   {
//     id: '5',
//     image: 'assets/images/stickers1.png',
//     title: 'Stickers',
//     price: 80000,
//     description: 'bla bla bla bla bla',
//   },
//   {
//     id: '6',
//     image: 'assets/images/stickers2.png',
//     title: 'Stickers',
//     price: 80000,
//     description: 'bla bla bla bla bla',
//   },
// ];

// getAllProducts(): Product[] {
//   return this.products;
// }

// getProduct(id: string): Product {
//   return this.products.find((item) => id === item.id);
// }
