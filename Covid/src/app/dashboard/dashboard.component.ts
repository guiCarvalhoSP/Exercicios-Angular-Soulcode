import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DadosService } from './dados.service';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('formDados', {static:true})formDados?: NgForm;

  private dados:any;

  constructor(private dadosService: DadosService) { }

  ngOnInit(): void {
    this.dadosService.obterDados().subscribe(
      dados =>{
        this.dados = dados
        this.init();
      }
    )
  }

  init():void {
    if(typeof(google) !== 'undefined'){
      google.charts.load("current", {'packages': ['corechart']});
      setTimeout(() => {
        google.charts.setOnLoadCallback(this.exibirGraficos());
      }, 2000);
    }
  }
  // Exibir graficos
  exibirGraficos():void{
    this.exibirColumnChart()
  }

  mostrarDados():void{
    this.dadosService.salvarDados();
    
  }

  // Tipos de graficos

  exibirColumnChart(): void{
    const el = document.getElementById('column_chart');
    const chart = new google.visualization.ColumnChart(el);

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  //Configurações
  obterDataTable(): any {
    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Quantidade');
    data.addRows(this.dados);

    return data;
  }

  obterOpcoes():any{
    return {
       'title': 'Quantidade de cadastro do primeiro semestre',
       'width': 400,
       'height': 300
    }
  }
}
