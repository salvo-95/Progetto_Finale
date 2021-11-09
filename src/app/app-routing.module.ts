import { DetailClientiComponent } from './detail-clienti/detail-clienti.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientiComponent } from './clienti/clienti.component';
import { FormClientiComponent } from './form-clienti/form-clienti.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
