//Crie uma classe EspadaDeDiamante com atributos como dano e durabilidade. durab:1561

export class EspadaDeDiamante{
    private dano:number
    private durabilidade:number
    private recarga:number

    constructor(dano:number, durabilidade:number, recarga:number){
        this.dano = dano;
        this.durabilidade = durabilidade;
        this.recarga = recarga;
    }

setDano(DanoRecebido:number):void{ this.dano = DanoRecebido
};

setDurabilidade(durabilidadeRecebida:number):void{ this.durabilidade = durabilidadeRecebida
};

setRecarga(RecargaRecebida:number):void{ this.recarga = RecargaRecebida
};


getDano():number{ return this.dano
};

getDurabilidade():number{ return this.durabilidade
};

getRecarga():number{ return this.recarga
};


}



let Espada = new EspadaDeDiamante(8, 1561, 0.2);