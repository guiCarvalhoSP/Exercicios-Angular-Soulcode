export class Paciente{
    constructor(
        public id?:number,
        public nome?: string,
        public prioridade?: string,
        public atendido?:boolean,
        public ativo?: boolean
    
    ){}
}