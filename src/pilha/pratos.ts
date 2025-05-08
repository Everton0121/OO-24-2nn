class prato {
    private pratos:string[]=[]

    adicionarPratos(item:string): void{ 
        this.pratos.push(item)} // Coloca itens no prato

    retirarPratos():string | undefined{ 
        return this.pratos.pop()} // Retira o ultimo item do prato

    verUltimoPrato():string | undefined{
        return this.pratos[this.pratos.length-1]} // Ele retorna a ultima posição sem apagar ela

    estaVazio(): boolean{
        return this.pratos.length === 0}

    tamanho(): number { 
        return this.pratos.length}

}




const meuPrato = new prato
meuPrato.adicionarPratos('Prato galaxial')
meuPrato.adicionarPratos('Prato bolado')

console.log(meuPrato.retirarPratos())
console.log(meuPrato.verUltimoPrato())
console.log(meuPrato.tamanho())
console.log(meuPrato.estaVazio())