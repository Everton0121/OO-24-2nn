export class Distrito {
    private nome:number;
    private populacao:number;
    private recursos:string[];

    constructor(nome:number,populacao:number,recursos:string[]){
        this.nome = nome
        this.populacao = populacao
        this.recursos = recursos
    };
    setNome(nomeRecebido:number):void{this.nome = nomeRecebido
    };
    setPopulacao(populacaoRecebida:number):void{this.populacao = populacaoRecebida
    };
    setRecursos(recursosRecebidos:string[]):void{ this.recursos = recursosRecebidos
    };
    getNome():number{ return this.nome
    };
    getPopulacao():number{ return this.populacao
    };
    getRecursos():string[]{ return this.recursos
    };
};