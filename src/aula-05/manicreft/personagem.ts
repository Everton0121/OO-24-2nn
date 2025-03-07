export class Personagem{
    private vida:number
    private forca:number
    private inventario:string[]=[]

    constructor(vida:number,forca:number,inventario:string[]){
        this.vida = vida;
        this.forca = forca;
        this.inventario = inventario;
    };

    setVida(vidaRecebida:number):void{
        this.vida = vidaRecebida
    };
    setForca(forcaRecebida:number):void{
        this.forca = forcaRecebida
    };
    setInventario(inventarioRecebido:string[]):void{
        this.inventario = inventarioRecebido
    };

    getVida():number{ return this.vida
    };

    getForca():number{ return this.forca
    };

    getInverntario():string[]{ return this.inventario
    };
}


let Personagem1 = new Personagem (20,10,[]);
