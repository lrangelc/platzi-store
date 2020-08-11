import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { ListComponent } from './components/list/list.component';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [LayoutComponent, ListComponent],
  imports: [CommonModule, ContactRoutingModule, MaterialModule, FormsModule],
})
export class ContactModule {}
