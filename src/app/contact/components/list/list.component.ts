import { Component, OnInit, Input } from '@angular/core';
import { EmployeeData } from './../../../models/employee.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() title: string;
  @Input() data: EmployeeData[] = [];
  label: string;

  constructor() {}

  ngOnInit(): void {}

  addItem() {
    this.data.push({ label: this.label, num: 30 });
    this.label = '';
  }
}
