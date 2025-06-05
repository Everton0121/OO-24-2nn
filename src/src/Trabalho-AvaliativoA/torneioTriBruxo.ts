import { bruxo } from "./Bruxo";
import { Dragao } from "./Dragão";
import { Feitico, feitico1 } from "./Feitiço";
import { Phoenix } from "./Fenix";
import { criaturasMagicas } from "./criaturasMagicas";

let criaturasMagica1 = new Dragao("Banguela","Plasma Draconico",300,999.7)
let criaturasMagica2 = new Phoenix("Fawkes","Renascimento das cinzas",99999999,0)
let Bruxo1 = new bruxo("Harry Potter","Humano",100,60,"Varinha de azevinho com núcleo de pena de fênix"," Gryffindor",[feitico1],1000)
let Bruxo2 = new bruxo("Hermione Granger","Humano",95,50,"Varinha de videira com núcleo de corda de coração de dragão"," Gryffindor",[feitico1],950)
let participantes = [Bruxo1,Bruxo2,criaturasMagica1,criaturasMagica2]

function torneioTriBruxo(participantes:criaturasMagicas[]){
    for (let participante of participantes){
        console.log(participante.getNome())
    }
let ganhador:[criaturasMagicas,number] = [participantes[0],0]
let jaLutaram:criaturasMagicas[] = []
let participante:criaturasMagicas
for (let i =0;i<participantes.length;i++){
    do{
        participante = participantes[Math.floor(Math.random()* participantes.length)]
    }while(jaLutaram.includes(participante)){
        jaLutaram.push(participante)
        console.log(`Participante: ${participante.getNome()}`, '\n')

        let dano:number
        if(participante instanceof bruxo){
            const feiticoAleatorio:Feitico = Feitico.feitiços[Math.floor(Math.random() * participante.getHabilidades().length)]
            dano = participante.usarMagia(feiticoAleatorio)
            console.log(`\nDano da magia: ${feiticoAleatorio.getPoderBase()}`)
            console.log(`Dano-Base do Bruxo: ${participante.getPoder()}`)

        }else{
            dano = participante.usarMagia()
            console.log(`Dano causado: ${dano}`)
        }
        if(dano > ganhador[1]){
            ganhador[0] = participante
            ganhador[1] = dano
        }

    }
}
console.log("ganhador",participante.getNome())
}

torneioTriBruxo(participantes)
  