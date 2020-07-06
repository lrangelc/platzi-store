import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './components/product/product.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductComponent,
      },
      {
        path: 'products',
        component: ProductsListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
