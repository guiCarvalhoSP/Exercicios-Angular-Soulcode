import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[pacienteAtendido]'
})

export class pacienteAtendidoDirective implements OnInit{

    @Input() pacienteAtendido:boolean;

    constructor(private el:ElementRef){ }

    ngOnInit(){
        if(this.pacienteAtendido){
            this.el.nativeElement.style.color = "green";
        }
    }
}