import { Caçador } from "./cacador";
import { skill } from "./skill";


export class magic implements skill{
    nome:string;
    rank: string;
    descricao: string;
    poder: number;
    

    constructor(nomeRecebido:string,rankRecebido:string,descricao:string,poder:number) {
        this.nome = nomeRecebido
        this.rank = rankRecebido
        this.descricao = nomeRecebido
        this.poder = poder
        
       
    }

    calcularDano(): number {
        return 100
    }

    exibirDescricao():void{ 
        console.log(`Esta é uma habilidade mágica se chama ${this.nome}.`)
    };

    }