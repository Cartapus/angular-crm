import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { ClientAddComponent } from './pages/client-add/client-add.component';
import { ClientCommentComponent } from './pages/client-comment/client-comment.component';
import { ClientDeleteComponent } from './pages/client-delete/client-delete.component';
import { ClientEditComponent } from './pages/client-edit/client-edit.component';
import { ClientListComponent } from './pages/client-list/client-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ClientListComponent,
    children: [{ path: 'comment', component: ClientCommentComponent }]
  },
  { path: 'add', component: ClientAddComponent, canActivate: [AdminGuard] },
  { path: 'edit/:id', component: ClientEditComponent },
  { path: 'delete/:id', component: ClientDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule {}
