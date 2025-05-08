import { Carta } from "./carta";
import { cartaPokemon } from "./cartaPokemon";


export class Tabuleiro {
    private mao: cartaPokemon[] = [];
    private descarte: cartaPokemon[] = [];
  
    adicionarCartaMao(carta: cartaPokemon): void {
      this.mao.push(carta);
    }
  
    descartarCarta(carta: cartaPokemon): void {
      const index = this.mao.indexOf(carta);
      if (index !== -1) {
        this.mao.splice(index, 1);
        this.descarte.push(carta);
      }
    }
  
    exibirMao(): void {
      console.log('Mão do Jogador:');
      this.mao.forEach(carta => carta.exibirCarta());
    }
  
    exibirDescarte(): void {
      console.log('Pilha de Descarte:');
      this.descarte.forEach(carta => carta.exibirCarta());
    }
  }