import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/interfaces/order';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  public headersOrders = [ 'type', 'client' ,'durée', 'total Ht', 'total Ttc', 'status']
  public orders!: Order[]

  constructor(private router: Router, private orderService: OrderService) {
    this.orderService.list().subscribe((data) => this.orders = data)
  }

  ngOnInit(): void {
  }

  goToAdd(){
    //rediriger l'utilisateur vers la page /orders/add
    this.router.navigate(['/orders', 'add'])
  }

}
