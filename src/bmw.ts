export class bmw {
    private nome:string;
    private marca:number;

constructor(nome:string, marca:number){
    this.nome = nome;
    this.marca = marca;
    };


    setNome(NomeRecebido:string):void{ this.nome = NomeRecebido
    };
    setMarca(MarcaRecebida:number):void{ this.marca = MarcaRecebida
    };

    
    getNome():string{ return this.nome
    };
    getMarca():number{ return this.marca
    };
};


let bmw320i = new bmw ("bmw",320); 


