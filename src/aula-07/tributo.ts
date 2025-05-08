export class Tributo {
    private nome:string;
    private saude:number;
    private armadura:string;
    private resistencia:number;
    private habilidade:string[];

    constructor(nome:string, saude:number, armadura:string, resistencia:number, habilidade:string[]){
        this.nome = nome
        this.saude = saude
        this.armadura = armadura
        this.habilidade = habilidade
        this.resistencia = resistencia
    };


setNome(NomeRecebido:string):void{ this.nome = NomeRecebido
};
setSaude(SaudeRecebida:number):void{ this.saude = SaudeRecebida
};
setDistrito(ArmaduraRecebido:string):void{ this.armadura = ArmaduraRecebido
};
setResistencia(ResistenciaRecebido:number):void{ this.resistencia = ResistenciaRecebido 
};
setHabilidade(HabilidadeRecebida:string[]):void{ this.habilidade = HabilidadeRecebida
};


getNome():string{ return this.nome
};
getSaude():number{ return this.saude
};
getArmadura():string{ return this.armadura
};
getResistencia():number{ return this.resistencia
};
getHabilidade():string[]{ return this.habilidade
};







};