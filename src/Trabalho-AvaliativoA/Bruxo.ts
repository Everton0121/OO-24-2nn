import { Feitico, feiticos, feitico1, feitico2 } from "./Feitiço";
import { criaturasMagicas } from "./criaturasMagicas";

export class bruxo extends criaturasMagicas{
   varinha:string
   casa:string
   habilidades:Feitico[]
   poderMagico:number
   constructor(nomeConst:string,tipoConst:string,poderConst:number,HPRecebido:number,varinhaConst:string,casaConst:string,habilidadesConst:Feitico[],poderMagicoConst:number){
    super(nomeConst,tipoConst,poderConst,HPRecebido)
    this.varinha = varinhaConst;
    this.casa = casaConst;
    this.habilidades = habilidadesConst
    this.poderMagico = poderMagicoConst;
   }
   usarMagia(feiticoRecebido:Feitico):number {

    console.log(`${this.nome} usou magia ${feiticoRecebido.getName()} e deu ${this.poderMagico+feiticoRecebido.getPoderBase()} de dano ao adversário.`);
    
    return this.poderMagico+feiticoRecebido.getPoderBase();
  
    }
    lançarFeitiço():number{
        const magiaAleatoria1 = Math.floor(Math.random() * this.habilidades.length)
        const magiaSelecionada1 = this.habilidades[magiaAleatoria1]
        return this.usarMagia(magiaSelecionada1)
        
    
    }
    getHabilidades():Feitico[]{
        return this.habilidades
    }
}

let newBruxo1 = new bruxo("Harry Potter","Humano",100,60,"Varinha de azevinho com núcleo de pena de fênix"," Gryffindor", [feitico1,feitico2],1000)
let newBruxo2 = new bruxo("Hermione Granger","Humano",95,50,"Varinha de videira com núcleo de corda de coração de dragão"," Gryffindor",[feitico1,feitico2],950)
newBruxo1.usarMagia(Feitico.getTudo()[0])
newBruxo1.lançarFeitiço()
newBruxo2.usarMagia(Feitico.getTudo()[0])
newBruxo2.lançarFeitiço()
newBruxo1.getHabilidades()