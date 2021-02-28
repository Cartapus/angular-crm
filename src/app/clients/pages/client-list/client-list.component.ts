import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { Client } from 'src/app/shared/interfaces/client';
import { ClientService } from '../../services/client.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  public headersClients = ['nom', 'email', 'state', 'comment', 'Action']
  public clients!: Client[]
  public ClientStateVal = Object.values(ClientState)

  faTrash = faTrash;

  constructor(private router: Router, private clientService: ClientService) {
    this.clientService.list().subscribe((data) => this.clients = data)
  }

  ngOnInit(): void {
  }

  goToAdd(){
    //rediriger l'utilisateur vers la page /clients/add
    this.router.navigate(['/clients', 'add'])
  }

  updateState(client: Client){
    this.clientService.update(client).subscribe()
  }

}
