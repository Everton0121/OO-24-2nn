
export class Inventario{
    private itens:string[]=[]
    
    constructor(itens:string[]){
        this.itens = itens
    }
    setItens(itensRecebidos:string[]):void{
        this.itens = itensRecebidos
    }
    getItens(){
        return this.itens
    }
    
}


