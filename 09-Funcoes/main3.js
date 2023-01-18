////

const Funcionario1 = {
    nome: 'Rafael',
    desconto: 0.2,
    salarioBruto: 2000,
    salarioLiquido: 0
}
const Funcionario2 = {
    nome: 'Thais',
    desconto: 0.1,
    salarioBruto: 2000,
    salarioLiquido: 0
}

const descontoFuncionario1 = 
    Funcionario1.salarioBruto - ( Funcionario1.desconto * Funcionario1.salarioBruto)

const descontoFuncionario2 = 
    Funcionario2.salarioBruto - ( Funcionario2.desconto * Funcionario2.salarioBruto)

console.log(
    `Funcionario1: ${descontoFuncionario1}
    Funcionario2: ${descontoFuncionario2}`
)