import { Relacionavel } from "./Relacionavel";


export class Pessoa implements Relacionavel {
    nome: string;
    sobrenome: string;
    dataNascimento: string;
    genero: string;
    outrasRelacoes: Relacionavel[];
    filhos: Pessoa[] = [];
  
    constructor(
      nome: string,
      sobrenome: string,
      dataNascimento: string,
      genero: string
    ) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.dataNascimento = dataNascimento;
      this.genero = genero;
      this.outrasRelacoes = [];
    }
  
    descreverRelacao(): string {
      return `Pessoa comum: ${this.nome} ${this.sobrenome}`;
    }
  
    adicionarRelacao(relacao: Relacionavel) {
      this.outrasRelacoes.push(relacao);
    }
  }
  