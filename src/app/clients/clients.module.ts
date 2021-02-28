import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientAddComponent } from './pages/client-add/client-add.component';
import { ClientEditComponent } from './pages/client-edit/client-edit.component';
import { ClientListComponent } from './pages/client-list/client-list.component';
import { ClientCommentComponent } from './pages/client-comment/client-comment.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClientDeleteComponent } from './pages/client-delete/client-delete.component';



@NgModule({
  declarations: [ClientAddComponent, ClientEditComponent, ClientListComponent, ClientFormComponent, ClientCommentComponent, ClientDeleteComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class ClientsModule { }
