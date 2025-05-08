
class Integrantes {
    nome: string;
    tipo: string;
  
    constructor(nome: string, tipo: string) {
      this.nome = nome;
      this.tipo = tipo;
    };
  
    representacaoEmTexto(): string {
      return (`${this.tipo}: ${this.nome}`);
    };
  }
  



 
  class Casa {
    nome: string;
    membros: Integrantes[];
  
    constructor(nome: string) {
      this.nome = nome;
      this.membros = [];
    };
  
    adicionarMembro(o: Integrantes): void {
      if (!this.membros.includes(o)) {
        this.membros.push(o);

        console.log(`${o.nome} foi adicionado à casa ${this.nome}.`);
      } else {
        console.log(`${o.nome} já está na casa ${this.nome}.`);
      }
    };
  
    removerMembro(o: Integrantes): void {
      const index = this.membros.indexOf(o);
      if (index !== -1) {
        this.membros.splice(index, 1);

        console.log(`${o.nome} foi removido da casa ${this.nome}.`);
      } else {
        console.log(`${o.nome} não faz parte da casa ${this.nome}.`);
      }
    };
  
    listarMembros(): void {
      console.log(`Membros da casa ${this.nome}:`);
      this.membros.forEach((membro) => {
        console.log(` - ${membro.representacaoEmTexto()}`);
      });
    };
  }
  

  const bruxo = new Integrantes("Morgana", "Bruxa");
  const criatura = new Integrantes("Sirius Snape", "Bruxo");
  
  const casaElemental = new Casa("Grifinoria");
  casaElemental.adicionarMembro(bruxo);
  casaElemental.adicionarMembro(criatura);
  casaElemental.listarMembros();
  