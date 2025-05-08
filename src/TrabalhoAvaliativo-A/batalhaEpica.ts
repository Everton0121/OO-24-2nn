import { myDragon } from "./Dragão";
import { myPhoenix } from "./Fenix";
import { myGuardian } from "./Guardiao";
import { Casa, Corvinal, Griffinoria, Lufa, Sonserina } from "./Home";
import { myUnicornio } from "./Unicornio";
import { criaturasMagicas } from "./criaturasMagicas";
import "./Bruxo"
import "./Home"
import { bruxo } from "./Bruxo";
const rs = require("readline-sync")

function batalhaInicio(){
    console.log("<===== BATALHA DA CASA CONTRA UM INIMIGO PODEROSO... =====>\n")

    console.log("1-Griffinoria!")
    console.log("2-Lufa-Lufa!")
    console.log("3-Corvinal!")
    console.log("4-Sonserina!")
    const opcao = rs.question("Digite a casa que você mais gostar :) ")

    switch (opcao.toUpperCase()) {
        case '1':
          console.log('\n"Griffinoria escolhida!');
          epicBattle(Griffinoria,myGuardian)
          break;
        case '2':
          console.log("\nLufa-Lufa escolhida!");
          epicBattle(Lufa,myDragon)
          break;
        case '3':
          console.log('\nCorvinal escolhida!');
          epicBattle(Corvinal,myUnicornio)
          break;
        case '4':
          console.log('\nSonserina escolhida!');
          epicBattle(Sonserina,myPhoenix)
          break;
          
      }
}

function epicBattle(casa:Casa,inimigo:criaturasMagicas){
  let HPEnemy = inimigo.getHP()
  const HPEnemyMax = HPEnemy
  let HPCasa = 0
  for(let membro of casa.getMembros()){
    HPCasa = HPCasa+membro.getHP()
  }
  const HPCasaMax = HPCasa

  while(HPCasa> 0 && HPEnemy > 0 ){
    console.log(`HP Inimigo: ${HPEnemy}/${HPEnemyMax}`)
    console.log(`HP Casa: ${HPCasa}/${HPCasaMax}`)

    console.log ("RODADA INICIADA")
    let dano = 0
    for(let membro of casa.getMembros()){
      if(membro instanceof bruxo){
          dano = dano+membro.lançarFeitiço()
      }
    } 
    console.log("Dano Total:",dano)
    HPEnemy=HPEnemy-dano


    // inimigo
    console.log("RODADA INIMIGA")
    if(inimigo instanceof bruxo){
      dano = inimigo.lançarFeitiço()
    }else{
      dano = inimigo.usarMagia()
    }
    console.log("Dano Total:",dano)
    HPCasa=HPCasa-dano
  }
  if(HPEnemy<= 0){
    console.log("Casa Venceu!")
  }else{
    console.log("Inimigo Venceu!")
  }
}
batalhaInicio()

