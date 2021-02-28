import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/shared/interfaces/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.scss'],
})
export class ClientDeleteComponent implements OnInit {
  public client!: Client;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.clientService.get(id).subscribe((data) => (this.client = data));
      }
    });
  }

  deleteClient(data: Client) {
    console.log('Suppression oui')
  }
}
