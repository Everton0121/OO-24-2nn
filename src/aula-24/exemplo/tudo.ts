//pessoa

class Pessoa implements Relacionavel {
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

//relacionavel

  interface Relacionavel{
    descreverRelacao():string
}

//node

export class Node<T>{
    protected value:T;
    children:Node<T>[]=[];

    constructor(valueConst?:T){
        this.value = valueConst;
    };

    addChild(child:Node<T>):void{
        this.children.push(child);
    };

        getChildren():Node<T>[]{
            return this.children;
        }
}

const rootNode = new Node("A")
const nodeB = new Node("B")
const nodeC = new Node("C")


rootNode.addChild(nodeB)
rootNode.addChild(nodeC)


//arvore

class ArvoreGenealogica extends Node<Pessoa>{
    raiz: Pessoa;
  
    constructor(raiz: Pessoa) {
      super();
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
  
//aaaaaaaa

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
  


  //main 

// familia 

//vos da parde da mae
const voM = new Pessoa("Waldemar", "Rodrigues", "17-8-1940" , "feminino");
const avoM = new Pessoa("Iza", "teresinha de souza rodrigues", "15-2-1957" , "Masculino");

//vos da parte do pai
const voP = new Pessoa("marlene", "da silva", "17-8-1940" , "feminino");
const avoP = new Pessoa("nao lembro", " nao lembro  ", "15-2-1957" , "Masculino");

//pais
const pai = new Pessoa("Evandro", "da silva Reis", "5-10-1987" , "Masculino");
const mae = new Esposa("Daniela", "de Souza", "17-11-1989" , "Feminino");

//eu
const Filho = new PessoaFilho("Everton", "Rodrigues Reis", "18-1-2009", "Masculino");

//arvore genealogica
const arvore = new ArvoreGenealogica(avoM);
const arvore2 = new ArvoreGenealogica(voM);

const arvore3 = new ArvoreGenealogica(avoP);
const arvore4 = new ArvoreGenealogica(voP);

const arvore5 = new ArvoreGenealogica(pai);
const arvore6 = new ArvoreGenealogica(mae);

const arvore7 = new ArvoreGenealogica(Filho);

//relaçoes
arvore.adicionarFilho(voP, pai);
arvore.adicionarFilho(avoP, pai);

arvore.adicionarFilho(voM, mae);
arvore.adicionarFilho(avoM, mae);

pai.adicionarRelacao(voP);
pai.adicionarRelacao(avoP);

pai.adicionarRelacao(mae);
mae.adicionarRelacao(voM);
mae.adicionarRelacao(avoM);

arvore.adicionarFilho(pai, Filho);

console.log(arvore, arvore2, arvore3, arvore4, arvore5, arvore6, arvore7 );