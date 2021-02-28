import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderAddComponent } from './pages/order-add/order-add.component';
import { OrderEditComponent } from './pages/order-edit/order-edit.component';
import { OrderListComponent } from './pages/order-list/order-list.component';

const routes: Routes = [
  { path: 'list', component: OrderListComponent },
  { path: 'add', component: OrderAddComponent },
  { path: 'edit/:id', component: OrderEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
