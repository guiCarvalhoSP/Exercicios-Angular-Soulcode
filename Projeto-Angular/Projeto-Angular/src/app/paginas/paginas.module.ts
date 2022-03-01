import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home';
import { InstalacoesComponent } from './components/instalacoes';
import { ComponentesComponent } from './components/componentes';
import { ModulosComponent } from './components/modulos';
import { ServicosComponent } from './components/servicos';
import { DiretivasComponent } from './components/diretivas';
import { DatabindingComponent } from './components/databinding';



@NgModule({
  declarations: [
    HomeComponent,
    InstalacoesComponent,
    ComponentesComponent,
    ModulosComponent,
    ServicosComponent,
    DiretivasComponent,
    DatabindingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaginasModule { }
