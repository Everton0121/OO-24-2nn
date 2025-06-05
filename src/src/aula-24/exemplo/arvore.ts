// Interface Relacionavel
interface Relacionavel {
    descreverRelacao(): string;
  }
  
  // Classe Pessoa
  class Pessoa implements Relacionavel {
    nome: string;
    sobrenome: string;
    dataNascimento: string;
    genero: string;
    outrasRelacoes: Relacionavel[];
    filhos: Pessoa[];
  
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
      this.filhos = [];
    }
  
    descreverRelacao(): string {
      return `Pessoa comum: ${this.nome} ${this.sobrenome}`;
    }
  
    adicionarRelacao(relacao: Relacionavel) {
      this.outrasRelacoes.push(relacao);
    }
  }
  
  // Classes derivadas
  class PessoaFilho extends Pessoa {
    descreverRelacao(): string {
      return `Pessoa Filho: ${this.nome} ${this.sobrenome}`;
    }
  }
  
  class Esposa extends Pessoa {
    descreverRelacao(): string {
      return `Esposa: ${this.nome} ${this.sobrenome}`;
    }
  }
  
  // Classe ArvoreGenealogica
  class ArvoreGenealogica {
    raiz: Pessoa;
  
    constructor(raiz: Pessoa) {
      this.raiz = raiz;
    }
  
    adicionarFilho(pai: Pessoa, filho: Pessoa): void {
      pai.filhos.push(filho);
    }
  
    encontrarPessoa(nome: string): Pessoa | undefined {
      return this._buscarPessoa(this.raiz, nome);
    }
  
    private _buscarPessoa(pessoa: Pessoa, nome: string): Pessoa | undefined {
      if (pessoa.nome === nome) return pessoa;
  
      for (const filho of pessoa.filhos) {
        const encontrada = this._buscarPessoa(filho, nome);
        if (encontrada) return encontrada;
      }
  
      return undefined;
    }
  }
  
  // ------------------- MAIN -------------------
  
  // Avós (lado materno)
  const voM = new Pessoa("Waldemar", "Rodrigues", "17-08-1940", "Masculino");
  const avoM = new Pessoa("Iza", "Teresinha de Souza Rodrigues", "15-02-1957", "Feminino");
  
  // Avós (lado paterno)
  const voP = new Pessoa("Marlene", "da Silva", "17-08-1940", "Feminino");
  const avoP = new Pessoa("Não lembro", "Não lembro", "15-02-1957", "Masculino");
  
  // Pais
  const pai = new Pessoa("Evandro", "da Silva Reis", "05-10-1987", "Masculino");
  const mae = new Esposa("Daniela", "de Souza", "17-11-1989", "Feminino");
  
  // Filho
  const filho = new PessoaFilho("Everton", "Rodrigues Reis", "18-01-2009", "Masculino");
  
  // Criando a árvore genealógica com raiz sendo o avô mais velho
  const arvore = new ArvoreGenealogica(voM);
  
  // Montando as relações
  arvore.adicionarFilho(voM, mae);
  arvore.adicionarFilho(avoM, mae);
  arvore.adicionarFilho(voP, pai);
  arvore.adicionarFilho(avoP, pai);
  arvore.adicionarFilho(pai, filho);
  
  // Relacionamentos adicionais
  pai.adicionarRelacao(mae);
  mae.adicionarRelacao(pai);
  mae.adicionarRelacao(voM);
  mae.adicionarRelacao(avoM);
  
  // Testes
  console.log("--- Árvore Genealógica ---");
  console.log(JSON.stringify(arvore, null, 2));
  
  console.log("\n--- Descrições ---");
  console.log(filho.descreverRelacao());
  console.log(mae.descreverRelacao());
  