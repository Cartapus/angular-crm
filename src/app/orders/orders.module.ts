import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderAddComponent } from './pages/order-add/order-add.component';
import { OrderEditComponent } from './pages/order-edit/order-edit.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [OrderAddComponent, OrderEditComponent, OrderListComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule
  ]
})
export class OrdersModule { }
