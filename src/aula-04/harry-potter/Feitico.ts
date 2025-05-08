export class Feitico {
    private nome:string;
    private tipo:string;
    private poder:number; 


    setNome(nomeRecebido:string):void { this.nome = nomeRecebido
    };
    setTipo(tipoRecebido:string):void { this.tipo = tipoRecebido
    };
    setPoder(poderRecebido:number):void { this.poder = poderRecebido
    };

    
    getNome():string { return this.nome
    };
    getTipo():string { return this.tipo
    };
    getPoder():number { return this.poder
    };

    lancarFeitico():void { console.log(`O feitico ${this.nome} do tipo ${this.tipo} com poder ${this.poder} foi disferido!`)
    }
}




let feitico:Feitico = new Feitico;
feitico.setNome("Avada Kedavra");
feitico.setTipo("Ataque");
feitico.setPoder(999);

feitico.lancarFeitico();