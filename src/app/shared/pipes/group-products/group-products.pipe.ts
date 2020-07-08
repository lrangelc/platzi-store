import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './../../../models/product.model';

@Pipe({
  name: 'groupProducts',
})
export class GroupProductsPipe implements PipeTransform {
  groupedProducts: any[] = [];

  transform(value: Product[]): any {
    value.forEach((product) => {
      if (this.groupedProducts.length === 0) {
        this.groupedProducts.push(
          Object.assign(product, { quantity: 1, amount: product.price })
        );
      } else {
        const repeatedProduct = this.groupedProducts.findIndex(
          (p) => p.id === product.id
        );
        if (repeatedProduct === -1) {
          this.groupedProducts.push(
            Object.assign(product, { quantity: 1, amount: product.price })
          );
        } else {
          this.groupedProducts[repeatedProduct].quantity++;
          this.groupedProducts[repeatedProduct].amount =
            this.groupedProducts[repeatedProduct].quantity *
            this.groupedProducts[repeatedProduct].price;
        }
      }
    });

    return this.groupedProducts;
  }
}
