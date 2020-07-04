import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input() product: Product;

  @Output() productClicked: EventEmitter<string> = new EventEmitter<string>();

  addCart(product: Product): void {
    console.log(`add to the cart ${product.title}`);

    this.productClicked.emit(product.id);
  }
}
