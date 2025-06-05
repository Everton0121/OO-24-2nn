export class Carta {
    private nome:string;
    private tipo:string;
  
    constructor(nomeConst: string, tipoConst: string) {
      this.nome = nomeConst;
      this.tipo = tipoConst;
    }
  
    exibirCarta(): void {
      console.log(`Nome: ${this.nome}`);
      console.log(`Tipo: ${this.tipo}`);
    }
  }

