import { Caçador } from "./cacador";
import { skill } from "./skill";


export class attack implements skill{
    nome:string;
    rank:string;
    descricao: string;
    poder: number;
    
    constructor(nomeRecebido:string, rankRecebido:string, descricaoRecebida:string,poder:number) {
        this.nome = nomeRecebido
        this.rank = rankRecebido
        this.descricao = descricaoRecebida
        this.poder = poder
    };

    getNome():string { return this.nome
    };
    calcularDano(): number {
        return 50
    }

    exibirDescricao():void { 
    };


}