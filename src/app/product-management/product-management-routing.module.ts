import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductManagementComponent } from './product-management.component';
import { DetailProductComponent } from './detail-product/detail-product.component'
const routes: Routes = [
  { path: '', component: ProductManagementComponent },
  { path: 'detail',component: DetailProductComponent,  loadChildren: () => import('./detail-product/detail-product.module').then(m => m.DetailProductModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }
