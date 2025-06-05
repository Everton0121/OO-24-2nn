import { Pessoa } from "./Pessoa";
import { PessoaFilho } from "./PessoaFilho";
import { ArvoreGenealogica } from "./ArvoreGenealogica";
import { Esposa } from "./PessoaFilho";

/*
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
*/


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
  console.log(arvore)
  
  console.log("\n--- Descrições ---");
  console.log(filho.descreverRelacao());
  console.log(mae.descreverRelacao());
  