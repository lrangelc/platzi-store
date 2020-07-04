import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bann',
  templateUrl: './bann.component.html',
  styleUrls: ['./bann.component.scss'],
})
export class BannComponent implements OnInit {
  images: string[] = [
    'assets/images/banner-1.jpg',
    'assets/images/banner-2.jpg',
    'assets/images/banner-3.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
