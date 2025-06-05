class pilha<T>{
    private elementos:T[]=[]

    push(item:T):void{ 
        this.elementos.push(item)} // Coloca itens na pilha

    pop():T | undefined{ 
        return this.elementos.pop()} // Retira o ultimo item da pilha

    peek():T | undefined{
        return this.elementos[this.elementos.length-1]} // Ele retorna a ultima posição sem apagar ela

    isEmpty():boolean{
        return this.elementos.length === 0}

    size():number{ 
        return this.elementos.length}

    clear():void{ 
        this.elementos=[]}
}

const minhaPilha = new pilha<number>()
minhaPilha.push(1)
minhaPilha.push(2)
minhaPilha.push(3)
minhaPilha.push(4)

console.log(minhaPilha.pop())// 4
console.log(minhaPilha.peek())// 3
console.log(minhaPilha.size())// 3
console.log(minhaPilha.isEmpty())// false

minhaPilha.clear()
console.log(minhaPilha.isEmpty()) // true