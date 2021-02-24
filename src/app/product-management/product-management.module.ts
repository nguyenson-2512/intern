import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagementRoutingModule } from './product-management-routing.module';
import { ProductManagementComponent } from './product-management.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [ProductManagementComponent, DetailProductComponent],
  imports: [
    CommonModule,
    ProductManagementRoutingModule,
    MatChipsModule,
    MatIconModule
  ]
})
export class ProductManagementModule { }
