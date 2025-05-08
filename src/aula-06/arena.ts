import { Distrito } from "./distrito";
import { Tributo } from "./tributo";
import { Organizador } from "./organizador";


let distrito7 = new Distrito(7,1000,['planta', 'pedra', 'minerio'])
let distrito4 = new Distrito(4,2000,['Shopping','Restaurante','Farmácia',])

let personagem1 = new Tributo("robinho", 9, distrito7, 'matou a leticia', ['parkour','tartaruga','reflexos aprimorados']);
let personagem2 = new Tributo("cleiton",7 ,distrito4,'ele sabe e ira se vingar',['Bom na cama','Bom com pedra','Anao'])


let organizadorPrincipal = new Organizador("Gendalf,O Cinzento",[distrito4,distrito7])
console.log(personagem1)
console.log(personagem2)
console.log(organizadorPrincipal)