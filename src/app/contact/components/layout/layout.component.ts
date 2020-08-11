import { Component, OnInit } from '@angular/core';
import { GeneratorService } from './../../../core/services/generator.service';
import { EmployeeData } from './../../../models/employee.model';

const names = ['Luis', 'Reyna', 'Rocio', 'Rodrigo', 'Jose Ricardo'];

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  salesList: EmployeeData[] = [];
  bList: EmployeeData[] = [];

  constructor(private generatorService: GeneratorService) {}

  ngOnInit(): void {
    this.salesList = this.generatorService.generate(names, [10, 20], 5);
    this.bList = this.generatorService.generate(names, [10, 20], 5);
  }

  addItem(list: EmployeeData[], label: string): void {
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 20]),
    });
  }
}
