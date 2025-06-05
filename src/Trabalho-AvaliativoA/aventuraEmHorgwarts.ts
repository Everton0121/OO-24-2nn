import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu(): void {
  console.log('\nEscolha sua própria aventura em Hogwarts!');
  console.log('A. Explorar Hogwarts');
  console.log('B. Enfrentar as Criaturas Mágicas');
  console.log('C. Participar do Torneio Tribruxo');
  console.log('D. Consultar o Diretor');
  console.log('E. Sair da aventura\n');
}

function processarEscolha(escolha: string): void {
  switch (escolha.toUpperCase()) {
    case 'A':
      console.log('\nVocê começa a explorar os corredores secretos de Hogwarts. Um dos quadros começa a falar com você...');
      break;
    case 'B':
      console.log('\nPrepare sua varinha! Você está prestes a enfrentar um Trasgo montanhês nas masmorras!');
      break;
    case 'C':
      console.log('\nVocê foi escolhido pelo Cálice de Fogo! O primeiro desafio está à sua frente: um dragão húngaro feroz!');
      break;
    case 'D':
      console.log('\nVocê entra na sala do Diretor Dumbledore. Ele diz: "Há escolhas que definem quem somos..."');
      break;
    case 'E':
      console.log('\nObrigado por jogar! Até a próxima aventura em Hogwarts.');
      rl.close();
      return;
    default:
      console.log('\nOpção inválida. Tente novamente.');
  }

  iniciarAventura();
}

function iniciarAventura(): void {
  mostrarMenu();
  rl.question('Digite a letra da sua escolha: ', (resposta: string) => {
    processarEscolha(resposta);
  });
}

// Iniciar o jogo
iniciarAventura();