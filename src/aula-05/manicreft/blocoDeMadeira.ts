export class blocoDeMadeira{
    private tipo:string;
    private durabilidade:number;

    constructor(tipo:string,durabilidade:number){
        this.tipo = tipo;
        this.durabilidade = durabilidade;
    };
    setTipo(tipoRecebido:string):void{ this.tipo = tipoRecebido
    };
    setDurabilidade(durabilidadeRecebida:number):void{ this.durabilidade = durabilidadeRecebida
    };

    getTipo():string{ return this.tipo
    };
    getDurabilidade():number{ return this.durabilidade
    };
}

let blocoDeMadeira1 = new blocoDeMadeira("pinheiro",10);