/*
Ele vai ser falso tudo que tiver as palavraqs:
false, 0, [], "", '', null, indefined, NaN.

E tudo que for verdadeiro é o contrário de false:
true, 1, -1, 0.6, "0".
*/
const podeDirigir = true
if (podeDirigir) {
    console.log('Ele pode dirigir')
}

/*
em false ele não printa nada, já em true ele printa
*/
const saldoEmConta = 0
if(!saldoEmConta) {
    console.log('não tem saldo!')
}
//Usamos o ! para negar o true, virando false, e se for false, vira true
//Colocando o valor 1 ao inves de 0, ele vira 0, e converte e cai dentro do nao tem saldo

const boolCOmString = 'Iai rafazao!'
//Força o valor a true ou false, de acordo com a tabela
console.log(
    'forcando o valor true ou false',
    !!boolCOmString)

//negacao
console.log('boolCOmstring',
    !boolCOmString)

//negacao + forçar a bool
console.log(
    'negacao + forçar a bool',
    ! (!!boolCOmString)
)