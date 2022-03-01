import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Paciente, PacienteService } from '../shared';

@Component({
  selector: 'app-cadastrar-pacientes',
  templateUrl: './cadastrar-pacientes.component.html',
  styleUrls: ['./cadastrar-pacientes.component.css']
})

export class CadastrarPacientesComponent implements OnInit {
  @ViewChild('formPaciente', {static:true})formPaciente: NgForm;
  paciente: Paciente;

  constructor(private pacienteService: PacienteService, private router: Router ) {

  }

  ngOnInit(): void {
    this.paciente = new Paciente();
  }

  cadastrar(): void{
    if(this.formPaciente.form.valid){
      this.pacienteService.cadastrar(this.paciente)
      this.router.navigate(['/pacientes'])
    }
  }
}
