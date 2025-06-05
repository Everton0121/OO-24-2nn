import { Caçador } from "./cacador";
import { skill } from "./skill";


export class Curador implements skill{
    nome:string;
    rank:string
    descricao:string;
    poder: number;

    constructor(nomeRecebido:string,rankRecebido:string, descricaoRecebida:string,poder:number) {
        this.nome = nomeRecebido
        this.rank = rankRecebido
        this.descricao = descricaoRecebida
        this.poder = poder
    }

    getNome():string { return this.nome;
    };

    calcularDano(): number {
        return 0
    }

    exibirDescricao():void {
        console.log(`Essa habilidade se chama ${this.nome}e ela aumenta o hp das pessoas`)}}

let Curador1 = new Curador("lee joo hee","B","Caçadora que não queria ser uma caçadora por medo.",700)

console.log(Curador1)