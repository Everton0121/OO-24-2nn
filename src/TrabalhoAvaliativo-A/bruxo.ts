import { criaturasMagicas } from "./criaturasMagicas";

export class bruxo extends criaturasMagicas{
   varinha:string
   casa:string
   habilidades:string[]
   poderMagico:number
   constructor(nomeConst:string,tipoConst:string,poderConst:number,varinhaConst:string,casaConst:string,habilidadesConst:string[],poderMagicoConst:number){
    super(nomeConst,tipoConst,poderConst)
    this.varinha = varinhaConst;
    this.casa = casaConst;
    this.habilidades = habilidadesConst;    
    this.poderMagico = poderMagicoConst;
   }
   usarMagia() {
    const magiaAleatoria1 = Math.floor(Math.random() * this.habilidades.length)
    const magiaSelecionada1 = this.habilidades[magiaAleatoria1]
    const poder = Math.floor(Math.random() * 1000);
    console.log(`${this.nome} usou magia ${this.habilidades[magiaAleatoria1]} e deu ${poder} de dano ao adversário.`);
    return poder;
  
    }
    lançarFeitiço():void{
        const magiaAleatoria2 = Math.floor(Math.random() * this.habilidades.length)
        const magiaSelecionada2 = this.habilidades[magiaAleatoria2]
        console.log(`O bruxo ${this.nome} irá lançar a habilidade ${this.habilidades[magiaAleatoria2]} e o poder de magico de ${this.nome} é de ${this.poderMagico}.`)
    
    }
}

let newBruxo1 = new bruxo("Harry Potter","Humano",100,"Varinha de azevinho com núcleo de pena de fênix"," Gryffindor",["Expecto Patronum","Expelliarmus","Lumos"],1000)
let newBruxo2 = new bruxo("Hermione Granger","Humano",95,"Varinha de videira com núcleo de corda de coração de dragão"," Gryffindor",["Alohomora", "Expelliarmus", "Petrificus Totalus", "Wingardium Leviosa", "Obliviate", "Protego"],950)
newBruxo1.usarMagia()
newBruxo1.lançarFeitiço()
newBruxo2.usarMagia()
newBruxo2.lançarFeitiço()