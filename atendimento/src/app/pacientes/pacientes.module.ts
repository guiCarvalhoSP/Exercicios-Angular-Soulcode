import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPacienteComponent } from './listar/listar-paciente.component';
import { pacienteAtendidoDirective, PacienteService } from './shared';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarPacientesComponent } from './cadastrar';
import { EditarPacienteComponent } from './editar';



@NgModule({
  declarations: [
    ListarPacienteComponent,
    CadastrarPacientesComponent,
    EditarPacienteComponent,
    pacienteAtendidoDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    PacienteService
  ]
})
export class PacientesModule { }
