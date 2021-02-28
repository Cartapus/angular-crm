import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/shared/interfaces/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.scss']
})
export class ClientAddComponent implements OnInit {

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
  }

  addClient(data:Client){
    //appelle le service client et la méthode d'ajout de client
    this.clientService.add(data).subscribe(
      (data) => this.router.navigate(['/clients', 'list'])
    )
  }

}
