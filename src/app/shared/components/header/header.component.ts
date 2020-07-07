import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { CartService } from './../../../core/services/cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  total = 0;
  total$: Observable<number>;

  constructor(private cartService: CartService) {
    // this.cartService.cart$.subscribe((products) => {
    //   console.log(products);
    //   this.total = products.length;
    // });

    // this.cartService.cart$
    //   .pipe(map((products) => products.length))
    //   .subscribe((total) => {
    //     console.log(total);
    //     this.total = total;
    //   });

    this.total$ = this.cartService.cart$.pipe(
      map((products) => products.length)
    );
  }

  ngOnInit(): void {}
}
