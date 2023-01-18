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

function calcularDesconto (salarioBruto, desconto) {
    return salarioBruto - (salarioBruto * desconto)
}

Funcionario1.salarioLiquido = calcularDesconto(
    Funcionario1.salarioBruto,
    Funcionario1.desconto
)
Funcionario2.salarioLiquido = calcularDesconto(
    Funcionario2.salarioBruto,
    Funcionario2.desconto
)

console.log(
    `
    Salario ${Funcionario1.nome}: ${Funcionario1.salarioLiquido}
    Salario ${Funcionario2.nome}: ${Funcionario2.salarioLiquido}
    `
)
