import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/shared/interfaces/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly baseUrl = `${environment.urlApi}/clients`

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Order[]>(this.baseUrl)
  }

  get(id:string){
    return this.http.get<Order>(`${this.baseUrl}/${id}`)
  }

  add(data: Order){
    return this.http.post(this.baseUrl, data)
  }

  update(data: Order){
    return this.http.put(`${this.baseUrl}/${data.id}`, data)
  }

  delete(id:string){}

}
