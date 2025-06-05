import { bruxo } from "./Bruxo";
import { feitico1,feitico2,feitico3,feitico4,feitico5,feitico6,feitico7,feitico8 } from "./Feitiço";
import { criaturasMagicas } from "./criaturasMagicas"; 


export class Casa {
  nome: string;
  membros: criaturasMagicas[];
  tipo: string;
  poder:number

  constructor(nome: string, tipo: string,poder:number) {
    this.nome = nome;
    this.tipo = tipo;
    this.membros = [];
    this.poder = poder
  }

  adicionarMembro(pessoa: criaturasMagicas): void {
    if (!this.membros.includes(pessoa)) {
      this.membros.push(pessoa);
      console.log(`${pessoa.nome} foi adicionado à casa ${this.nome}.`);
    } else {
      console.log(`${pessoa.nome} já está na casa ${this.nome}.`);
    }
  }

  removerMembro(pessoa: criaturasMagicas): void {
    const index = this.membros.indexOf(pessoa);
    if (index !== -1) {
      this.membros.splice(index, 1);
      console.log(`${pessoa.nome} foi removido da casa ${this.nome}.`);
    } else {
      console.log(`${pessoa.nome} não faz parte da casa ${this.nome}.`);
    }
  }

  listarMembros(): void {
    console.log(`Membros da casa ${this.nome}:`);
    this.membros.forEach((membro) => {
      console.log(` - ${membro.nome} (${membro.tipo})`);
    });
  }
  getNome():string{
    return this.nome
  }
  getMembros():criaturasMagicas[]{
    return this.membros
  }
  
}

const bruxo1 = new bruxo("Harry Potter","Bruxo",100,100,"Varinha de azevinho com núcleo de pena de fênix"," Gryffindor",[feitico1],1000);
const bruxo2 = new bruxo("Hermione Granger", "Bruxa",80,95,"Varinha de videira com núcleo de corda de coração de dragão","Gryffindor",[feitico2],935);
const bruxo3 = new bruxo("Cedrico Diggory", "Bruxo",50,80,"Varinha de freixo com núcleo de pelo de unicórnio","Hufflepuff",[feitico3],600);
const bruxo4 = new bruxo("Newt Scamander", "Bruxo",80,85,"Varinha de madeira de limeira, núcleo de chifre de unicórnio","Hufflepuff",[feitico4],700);
const bruxo5 = new bruxo("Rowena Ravenclaw", "Bruxa",70,45,"Varinha de madeira e núcleo de garras de corvo","Ravenclaw",[feitico5],250);
const bruxo6 = new bruxo("Gilderoy Lockhart", "Bruxo",75,60,"Varinha de cerejeira e continha um núcleo de pelo de coração de dragão","Ravenclaw",[feitico6],100);
const bruxo7 = new bruxo("Severus Snape", "Bruxo",100,95,"Sombra Silenciosa","Slytherin",[feitico7],955);
const bruxo8 = new bruxo("Draco Malfoy", "Bruxo",69,80,"Varinha de pilriteiro e continha um núcleo de pelo de unicórnio.","SSlytherin",[feitico8],650);


export const Griffinoria = new Casa("Grifinória", "Casa de Magia",945);
export const Lufa = new Casa("Lufa-Lufa", "Casa de Magia",500);
export const Corvinal = new Casa("Corvinal", "Casa de Magia",600);
export const Sonserina = new Casa("Sonserina", "Casa de Magia",935);


Griffinoria.adicionarMembro(bruxo1);
Griffinoria.adicionarMembro(bruxo2);
Griffinoria.listarMembros();
Lufa.adicionarMembro(bruxo3);
Lufa.adicionarMembro(bruxo4);
Lufa.listarMembros();
Corvinal.adicionarMembro(bruxo5);
Corvinal.adicionarMembro(bruxo6);
Corvinal.listarMembros();
Sonserina.adicionarMembro(bruxo7);
Sonserina.adicionarMembro(bruxo8);
Sonserina.listarMembros();