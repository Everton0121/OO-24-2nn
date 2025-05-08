import { Feitico } from "./Feitiço"

export abstract class criaturasMagicas{
    nome:string
    tipo:string
    poder:number
    dano:number
    feitico:Feitico[]=[]
    HP:number
    

    constructor(nomeConst:string,tipo:string,poder:number,HPRecebido:number){
        this.nome = nomeConst
        this.tipo = tipo
        this.poder = poder
        this.HP = HPRecebido
    }

    getNome():string{
       return this.nome
    }
    getTipo():string{
        return this.tipo
    }
    getPoder():number{
        return this.poder
    }
    getHP():number{
        return this.HP
    }

    
   
    

    abstract usarMagia(feiticoRecebido?:Feitico):number
} 
