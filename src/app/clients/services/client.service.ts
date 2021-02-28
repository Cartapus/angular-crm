import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/interfaces/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private readonly baseUrl = `${environment.urlApi}/clients`

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Client[]>(this.baseUrl)
  }

  get(id:string){
    return this.http.get<Client>(`${this.baseUrl}/${id}`)
  }

  add(data: Client){
    return this.http.post(this.baseUrl, data)
  }

  update(data: Client){
    return this.http.put(`${this.baseUrl}/${data.id}`, data)
  }

  delete(id:string){

  }


}
