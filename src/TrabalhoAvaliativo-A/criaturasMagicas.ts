export abstract class criaturasMagicas{
    nome:string
    tipo:string
    poder:number

    constructor(nomeConst:string,tipo:string,poder:number){
        this.nome = nomeConst
        this.tipo = tipo
        this.poder = poder
    }

    abstract usarMagia():void
}