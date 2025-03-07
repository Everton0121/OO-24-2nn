export class Chapeu {
    private casa!:string;

    selecionarCasa():void {
        const randomNumber = Math.floor(Math.random() * 4 + 1);
        switch (randomNumber) {
            case 1:
                this.casa = "Grifinoria"
                break
            case 2:
                this.casa = "Sonserina"
                break
            case 3:
                this.casa = "Cornival"
                break
            case 4:
                this.casa = "lufa-lufa"
                break
        }
    }

    exibirCasa():string { return this.casa
    }
}

let tentativa:Chapeu = new Chapeu();
tentativa.selecionarCasa();

console.log(`Casa recebida: ${tentativa.exibirCasa()}`);