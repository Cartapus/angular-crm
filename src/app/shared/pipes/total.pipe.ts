import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../interfaces/order';
@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {
  transform(order: Order, args?: string): number {
    if (args === "ttc") {
      return this.ttc(order);
    }
    else {
      return this.horsTaxe(order);
    }
  }
  horsTaxe(order: Order): number {
    console.log("hors taxe")
    return order.tjmHt * order.duration
  }
  ttc(order: Order): number {
    return (order.tjmHt * order.duration) * (100 + order.tva) / 100
  }
}

// comment
