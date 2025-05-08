import { Carta } from "./carta"
export class Baralho{
    private deck:Array<Carta>=[]

    constructor(deck:Array<Carta>){
        this.deck = deck
    }

    embaralhar(lista:Array<Carta>):void{
        for(let i = lista.length;i;i--){
            
            const IndiceAleatorio = Math.floor(Math.random() * i);

            const elemento = lista [i - 1]
            lista[i - 1] = lista[IndiceAleatorio]
            lista[IndiceAleatorio] = elemento
        }
    }
  
    comprarCarta(): Carta | undefined {
        return this.deck.pop();
      }
    visualizarTopo(): Carta | undefined{
        return this.deck [this.deck.length-1];
    }
    
}