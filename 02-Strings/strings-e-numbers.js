/*
String = é um texto criado com aspas simples ou
duplas, ou crase. Ou até podemos usar um numero entre aspas.
No tipo number nao usaremos aspas. 
"10" = string.texto
10 = number
*/

let salarioDoAmigo = 1000
let meuSalario = "2999"
let meuSarioCorrigido = Number(meuSalario)

console.log(salarioDoAmigo + meuSarioCorrigido)
console.log(
    typeof (salarioDoAmigo),
    salarioDoAmigo
)
console.log(
    typeof(meuSalario),
    meuSalario
)

console.log(
    isNaN(meuSalario)
)

let minhaString = 'Olá mundo'
let minhaOutraString = 'Olá mundo2'
let minhaStringComvariaveis = 
`${minhaString} - ${minhaOutraString}. AE!`

console.log(minhaStringComvariaveis)

/*
contatenamos a string texto e number juntas.
node strings-e-numbers.js
10002999
*/

/*typeof se usa quando queremos
descobrir qual o tipo daquela variavel
number 1000
string 2999*/

/*let meuSarioCorrigido = Number(meuSalario)
Criei outra variavel para mudar a string para number*/

/*Nan = não é um number
console.log(
    isNaN(meuSalario) 
false = esse valor é um numero
true = esse valor n é um numero
)*/

/*`${minhaString} - ${minhaOutraString}. AE!`
juntei uma string, mais outra string, mais um texto */