import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'clients',
  loadChildren: () => import('./clients/clients.module').then(
    (fichier) => fichier.ClientsModule
  )
  },
  { path: 'orders',
  loadChildren: () => import('./orders/orders.module').then(
    (fichier) => fichier.OrdersModule
  )
  },
  { path: '**',
  loadChildren: () => import('./page-not-found/page-not-found.module').then(
    (fichier) => fichier.PageNotFoundModule
  )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

