import { Pessoa } from "./Pessoa";

export class PessoaFilho extends Pessoa {
    descreverRelacao(): string {
      return `Pessoa Filho: ${this.nome} ${this.sobrenome}`;
    }
  }
  
 export class Esposa extends Pessoa {
    descreverRelacao(): string {
      return `Cônjuge: ${this.nome} ${this.sobrenome}`;
    }
  }
  