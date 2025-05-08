/*
3. Crie um arquivo TypeScript chamado conversion.ts. Declare uma variável do tipo string
com um valor numérico (ex: "10"). Converta essa variável para o tipo number
utilizando a função Number(). Imprima o valor e o tipo da variável convertida no
console.
*/

let variavel: string = '10'
let numero: number = Number(variavel)

console.log(`Valor: ${numero}`)
console.log(`Tipo da Variavel: ${typeof numero}`)