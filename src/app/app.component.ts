import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'platzi-store';

  items = [
    'Luis',
    'Reyna',
    'Rocio',
    'Rodrigo',
    '🍎',
    '🍏',
    '🍇',
    '🍌',
    '🍑',
    '😎',
  ];

  addItem(): void {
    this.items.push(this.title);
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }
}
