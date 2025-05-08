/*
DESAFIO: Jogo de Adivinhação. O programa deve gerar um número aleatório entre 1 e 100.
O usuário deve tentar adivinhar o número. O programa deve dar dicas se o número digitado é
maior ou menor que o número aleatório. O jogo termina quando o usuário acertar o Número. 
O programa deve mostrar o número de tentativas utilizadas pelo
usuário.
*/

const readline = require('readline-sync');

function jogoDeAdivinhacao(): void {
    /*NÚMERO ALEATÓRIO ENTRE 1 E 100*/
    const numeroAleatorio: number = Math.floor(Math.random() * 100) + 1;
    /*TENTATIVAS*/
    let tentativas: number = 0;
    /*STATUS DO JOGO*/
    let acertou: boolean = false; 

    console.log("Bem-vindo ao Jogo de Adivinhação!");
    console.log("Tente adivinhar o número entre 1 e 100.");

    /*REPETIR ATÉ ACERTAR O NÚMERO*/
    while (!acertou) {
        /*TENTATIVA*/
        let tentativa: number = readline.questionInt("Digite um numero entre 1 e 100:");
        /*TENTATIVA EM NÚMERO*/
        let numeroTentativa: number = Number(tentativa);
        
        /*SOMANDO O NÚMERO DE TENTATIVAS*/
        tentativas++;

        /*PARA CONFERIR SE O NÚMERO QUE O JOGADOR COLOCOU É VÁLIDO ENTRE 1 E 100*/
        if (isNaN(numeroTentativa) || numeroTentativa < 1 || numeroTentativa > 100) {
            console.log("Por favor, insira um número válido entre 1 e 100.");
        } else if (numeroTentativa < numeroAleatorio) {
            console.log("O número é maior! Tente novamente.");
        } else if (numeroTentativa > numeroAleatorio) {
            console.log("O número é menor! Tente novamente.");
        } else {
            acertou = true; /*SE ACERTOU O NÚMERO*/
            console.log(`Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`);
        }
    }
}

jogoDeAdivinhacao();