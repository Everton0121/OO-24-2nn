export class Monstro{
    private vida:number;
    private poderDeExplosao:number;
    private peso:number;
    private altura:number;

    constructor(vida:number,poderDeExplosao:number,peso:number,altura:number){
        this.vida = vida
        this.poderDeExplosao
        this.peso = peso
        this.altura = altura
    };

    setVida(vidaTomada:number):void{
        this.vida = vidaTomada
    };
    setPoderDeExplosao(forcaDoPoder:number):void{
        this.poderDeExplosao = forcaDoPoder
    };
    setPeso(Weight:number):void{
        this.peso = Weight
    };
    setAltura(AlturaRecebida:number):void{
        this.altura = AlturaRecebida
    };
    getVida():number{
        return this.vida
    };
    getPoderDeExplosao():number{
        return this.poderDeExplosao
    };
    getPeso():number{
        return this.peso
    };
    getAltura():number{
        return this.altura
    };
}

let aranha = new Monstro(16,2,26,0.9);