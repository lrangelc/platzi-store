import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy,
} from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  @Input() product: Product;

  @Output() productClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    console.log('constructor');
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges');
  //   console.log(changes);
  // }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  addCart(product: Product): void {
    console.log(`add to the cart ${product.title}`);

    this.productClicked.emit(product.id);
  }
}
