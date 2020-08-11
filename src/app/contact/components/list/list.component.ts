import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EmployeeData } from './../../../models/employee.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() title: string;
  @Input() data: EmployeeData[] = [];

  @Output() add = new EventEmitter<string>();

  label: string;

  constructor() {}

  ngOnInit(): void {}

  addItem() {
    this.add.emit(this.label)
    // this.data.push({ label: this.label, num: 30 });
    this.label = '';
  }
}
