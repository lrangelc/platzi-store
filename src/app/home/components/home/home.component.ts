import {
  Component,
  OnInit,
  AfterViewInit,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import Swiper from 'swiper';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  mySwiper: Swiper;
  // tslint:disable-next-line: ban-types
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      console.log('from browser');
    }
    if (isPlatformServer(this.platformId)) {
      console.log('from server');
    }
  }

  ngAfterViewInit(): void {
    console.log('X1');
    this.mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
    });
    console.log('X2');
    if (isPlatformServer(this.platformId)) {
      console.log('from server X3');
    } else {
      console.log('from browser X4');
    }
  }
}
