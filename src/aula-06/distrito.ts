export class Distrito{
    private nome:number
    private populacao:number
    private recursos:string[]

    constructor(nome:number,populacao:number,recursos:string[]){
        this.nome = nome
        this.populacao = populacao
        this.recursos = recursos
    }
    setNome(nomeRecebido:number):void{this.nome = nomeRecebido
    };
    getNome():number{ return this.nome
    };
    setPopulacao(populacaoRecebida:number):void{this.populacao = populacaoRecebida
    };
    getPopulacao():number{return this.populacao}
    setRecursos(recursosRecebidos:string[]):void{this.recursos = recursosRecebidos}
    getRecursos():string[]{return this.recursos}