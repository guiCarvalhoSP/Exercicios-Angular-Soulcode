import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DadosService {

  private dados = [
    ['Junho', 0],
    ['Julho', 0],
    ['Agosto', 0],
    ['Setembro', 0]
  ];
  constructor() { }

  salvarDados(): void{
    
  }


  obterDados(): Observable<any>{
    return new Observable(observable => {
      observable.next(this.dados);
      observable.complete()
    })
  }
}
