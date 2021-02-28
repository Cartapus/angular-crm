import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/shared/interfaces/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {
  public client!: Client

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        const id = params.get('id')
        if (id){
          this.clientService.get(id).subscribe(
            (data) => this.client = data
          )
        }
      }
    )
  }

  editClient(data: Client){
    const item: Client = { ...data, id: this.client.id }
    this.clientService.update(item).subscribe(
      () => this.router.navigate(['/clients', 'list'])
    )
  }

}
