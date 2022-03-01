import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteRoutes } from './pacientes';

export const router:Routes = [
  {
    path: '',
    redirectTo: 'pacientes/listar',
    pathMatch: 'full'
  },...PacienteRoutes
]
@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
