import { skill } from "./skill"


export class Caçador {
    private nome:string
    private nivel:number
    private habilidades:skill[]

    constructor(nomeRecebido:string, nivelRecebido:number, habilidadesRecebidas:skill[]) {
        this.nome = nomeRecebido
        this.nivel = nivelRecebido
        this.habilidades = habilidadesRecebidas
    }

    getNome():string { return this.nome
    };

    getNivel():number { return this.nivel
    };


    getHabilidades():skill[] { return this.habilidades
    };

     
     
}

const skill1: skill[] = [
    { nome: "Autoridade do Monarca", poder: 999999,rank:"Mundial",descricao:"Essa habilidade permite que o caçador mova qualquer coisa que quiser e com muita força" },
    { nome: "Dash", poder: 10,rank: "D",descricao:"permite que o caçador avance rapidamente"},
    { nome: "Multilação", poder: 950000,rank:"Nacional",descricao:"Essa ataque causa diversas multilações no inimigo podendo causar sangramento" }
]


    let Caçador1 = new Caçador("Sung Jin Woo",10000000,skill1)

console.log(Caçador1)