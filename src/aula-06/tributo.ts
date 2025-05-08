
import { Distrito } from "./distrito"

export class Tributo {
    private nome:string;
    private saude:number;
    private distritos:Distrito;
    private segredo:string;
    private habilidade:string[];

    constructor(nome:string, saude:number, distrito:Distrito, segredo:string, habilidade:string[]){
        this.nome = nome
        this.saude = saude
        this.distritos = distrito
        this.segredo = segredo
        this.habilidade = habilidade
    };


setNome(NomeRecebido:string):void{ this.nome = NomeRecebido
};
setSaude(SaudeRecebida:number):void{ this.saude = SaudeRecebida
};
setDistrito(DistritoRecebido:Distrito):void{ this.distritos = DistritoRecebido
};
setSegredo(SegredoRecebido:string):void{ this.segredo = SegredoRecebido 
};
setHabilidade(HabilidadeRecebida:string[]):void{ this.habilidade = HabilidadeRecebida
};

getNome():string{ return this.nome
};
getSaude():number{ return this.saude
};
getDistritos():Distrito{ return this.distritos
};
getSegredo():string{ return this.segredo
};
getHabilidade():string[]{ return this.habilidade
};

};














