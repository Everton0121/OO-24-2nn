// Classe base Animal
class Animal {
    nome: string;
    especie: string;
    fome: boolean;
    sede: boolean;
  
    constructor(nome: string, especie: string, fome: boolean = true, sede: boolean = true) {
      this.nome = nome;
      this.especie = especie;
      this.fome = fome;
      this.sede = sede;
    }
  
    // Método comum para todos os animais
    buscarRecurso(): void {
      console.log(`${this.nome} está buscando recurso.`);
    }
  
    emitirSom(): void {
      console.log(`${this.nome} está emitindo som.`);
    }
  
    mover(): void {
      console.log(`${this.nome} está se movendo.`);
    }
  }
  
  
  // Classe derivada AnimalAquatico
  class AnimalAquatico extends Animal {
    constructor(nome: string) {
      super(nome, "Animal Aquático");
    }
  
    // Sobrescrevendo buscarRecurso para animais aquáticos
    buscarRecurso(): void {
      console.log(`${this.nome} está procurando alimentos no fundo do mar.`);
    }
  
    // Sobrescrevendo emitirSom para animais aquáticos
    emitirSom(): void {
      console.log(`${this.nome} está fazendo um som aquático.`);
    }
  
    // Sobrescrevendo mover para animais aquáticos
    mover(): void {
      console.log(`${this.nome} está nadando.`);
    }
  }
  
  // Função para interagir entre dois animais
  function interagir(animal1: Animal, animal2: Animal): void {
    console.log(`${animal1.nome} está interagindo com ${animal2.nome}`);
    animal1.emitirSom();
    animal2.emitirSom();
  }
  
  // Criando instâncias e testando o polimorfismo
    const baleia = new AnimalAquatico("baleia");
    const capibara = new AnimalAquatico("capibara");
  const peixe = new AnimalAquatico("peixe");
  
  capibara.buscarRecurso();
  baleia.emitirSom();
  peixe.mover();
  
  // Testando interação entre dois animais
  interagir(peixe, baleia,);
  interagir(capibara, baleia);
  interagir(peixe, capibara);