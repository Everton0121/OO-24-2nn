import { blocoDeMadeira } from "./blocoDeMadeira"

export class Mundo {
    private tipoDeMundo:string;
    private listaDeblocos: blocoDeMadeira[] = [];
    private dificuldade:string;
    private clima:string;
    private bioma:string;
    private estruturas:number;
    private tamanhoDoMundo:string;
    private horaDoDia:string;
    private gravidade:number;
    private limiteDoMundo:number;

constructor(tipoDeMundo:string, blocoDeMadeira:[], dificuldade:string, clima:string, bioma:string, estruturas:number, tamanhoDoMundo:string, horaDoDia:string, gravidade:number, limiteDoMundo:number, ){
    this.tipoDeMundo = tipoDeMundo;
    this.listaDeblocos = blocoDeMadeira;
    this.dificuldade = dificuldade;
    this.clima = clima;
    this.bioma = bioma;
    this.estruturas = estruturas;
    this.tamanhoDoMundo = tamanhoDoMundo;
    this.horaDoDia = horaDoDia;
    this.gravidade = gravidade;
    this.limiteDoMundo = limiteDoMundo

};

setTipoDeMundo(TipoDoMundoRecebido:string):void{ this.tipoDeMundo = TipoDoMundoRecebido
};

setblocoDeMadeira(blocoDeMadeira:[]):void{ this.listaDeblocos = blocoDeMadeira
};

setDificuldade(DificuldadeRecebida:string):void{ this.dificuldade = DificuldadeRecebida
};

setClima(ClimaRecebido:string):void{ this.clima = ClimaRecebido
};

setBioma(BiomaRecebido:string):void{ this.bioma = BiomaRecebido
};

setEstruturas(EstruturasRecebido:number):void{ this.estruturas = EstruturasRecebido
};

setTamanhoDoMundo(TamanhoDoMundoRecebido:string):void{ this.tamanhoDoMundo = TamanhoDoMundoRecebido
};

setHoraDoDia(horaDoDiaRecebido:string):void{ this.horaDoDia = horaDoDiaRecebido 
};

setGravidade(GraviadeRecebida:number):void{ this.gravidade = GraviadeRecebida
};

setLimiteDoMundo(limiteDoMundoRecebido:number):void{ this.limiteDoMundo = limiteDoMundoRecebido
};



getTipoDeMundo():string{ return this.tipoDeMundo
};

getLisDeBlocos(){ return blocoDeMadeira
};

getDificuldade():string{ return this.dificuldade
};

getClima():string{ return this.clima
};

getBioma():string{ return this.bioma
};

getEstruturas():number{ return this.estruturas
};

getTamanhoDoMundo():string{ return  this.tamanhoDoMundo
};

getHoraDoDia():string{ return this.horaDoDia
};

getGravidade():number{ return this.gravidade
};

getLimiteDoMundo():number{ return this.limiteDoMundo
};

};
let blocoDeMadeira1 = new blocoDeMadeira("pinheiro",10)
let Mundo1 = new Mundo("Overworld", [], "Hardcore", "nevoso", "taiga", 20, "grande", "Noite", 10, 21024)



/*
 let blocom1 = new blocoDeMadeira("carvalho",10)

let Mundao1 = new Mundo("Gray Garden","Grande","Plano",blocom1)

let blocom2 = new blocoDeMadeira("betula",10)

Mundao1.setBlocoDeMadeira(blocom2);// Esse comando irá adicionar algo no array nesse caso um bloco rsrs
*/