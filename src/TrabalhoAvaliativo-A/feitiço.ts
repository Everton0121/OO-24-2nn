export class Feitico {
    name:string 
    poderBase:number

    constructor(nameConst:string,poderBase:number){
        this.name = nameConst
        this.poderBase = poderBase
    }

    lançarFeitiço():void{
        console.log(`Você lançou um feitiço chamado ${this.name} e a força é de ${this.poderBase}`)
    }
}