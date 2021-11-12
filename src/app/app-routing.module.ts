import { DetailClientiComponent } from './detail-clienti/detail-clienti.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientiComponent } from './clienti/clienti.component';
import { FormClientiComponent } from './form-clienti/form-clienti.component';
import { RoutGuardService } from './services/rout-guard.service';
import { LoginComponent } from './login/login.component';
import { FattureComponent } from './fatture/fatture.component';
import { DetailFattureComponent } from './detail-fatture/detail-fatture.component';
import { CreaFattureComponent } from './crea-fatture/crea-fatture.component';

const routes: Routes = [
  {
    path: 'clienti/list',
    component: ClientiComponent
  },
  {
    path: 'clienti/new',
    component: FormClientiComponent
  },
  {
    path: 'clienti/:id/edit',
    component: FormClientiComponent
  },
  { 
    path: 'dettagliocliente/:id',
    component: DetailClientiComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'clienti/:id/fatture',
    component: FattureComponent
  },
  { 
    path: 'dettagliofatture/:id',
    component: DetailFattureComponent
  },
  {
    path: 'fatture/new',
    component: CreaFattureComponent
  },
  {
    path: 'fatture/:id/edit',
    component: CreaFattureComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
