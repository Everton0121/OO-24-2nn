import { Carta } from "./carta";

export class cartaPokemon extends Carta {
    private HP:number;
    private ataque:number;
    

    constructor(nome:string, tipo:string, HPconst:number, ataqueConst:number) {
        super(nome, tipo);
        this.HP = HPconst;
        this.ataque = ataqueConst;
      };

      exibirCarta(): void {
        super.exibirCarta(); // Exibe as propriedades da classe mãe
        console.log(`Ataque: ${this.ataque}, HP: ${this.HP}`);
    }
}
