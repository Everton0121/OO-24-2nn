export class Feitico {
    name:string 
    poderBase:number
    static feitiços:Feitico[] = []

    constructor(nameConst:string,poderBase:number){
        this.name = nameConst
        this.poderBase = poderBase
        Feitico.feitiços.push(this)
    }

    lançarFeitiço():void{
        console.log(`Você lançou um feitiço chamado ${this.name} e a força é de ${this.poderBase}`)
    }
    static getTudo():Feitico[]{
        return this.feitiços
    }
    getPoderBase():number{
        return this.poderBase
    }
    getName():string{
        return this.name
    }
}

export let feiticos = new Feitico("parceiria",9999)
export let feitico1 = new Feitico("Expeliarmus",1000)
export let feitico2 = new Feitico("Reparo",10)
export let feitico3 = new Feitico("Lumos",0)
export let feitico4 = new Feitico(" Alohomora",5)
export let feitico5 = new Feitico("HORDE OF CROWS",70)
export let feitico6 = new Feitico("Obliviate",999)
export let feitico7 = new Feitico("Legilimens",100)
export let feitico8 = new Feitico("Petrificus Totalus",150)