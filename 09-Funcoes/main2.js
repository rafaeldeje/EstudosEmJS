//funcoes podem retornar valores   

function soma(valor1, valor2) {
    return valor1+valor2
}

const idade = 20
const tamanho = 10
const resultado = soma (idade,tamanho)
console.log('resultado', resultado)

function multiplicar (valor1, valor2) {
    const resultado = valor1*valor2    
    return resultado 
}

console.log(`O resultado da multiplicacao é:`,
multiplicar(10,30))

