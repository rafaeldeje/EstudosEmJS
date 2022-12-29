let varialvelSemInicializacao
console.log(
    varialvelSemInicializacao,
    typeof(varialvelSemInicializacao)
)

/*
node demo.js   
undefined undefined
*/

//Na primeira vez ela era undefined

varialvelSemInicializacao = "hello World!"
console.log(
    varialvelSemInicializacao,
    typeof(varialvelSemInicializacao)
)

/*
node demo.js 
undefined undefined
hello World! string
*/

//Na segunda vez ela era uma string, hello wolrd


varialvelSemInicializacao = null
console.log(
    varialvelSemInicializacao,
    typeof(varialvelSemInicializacao)
)

/*
node demo.js
undefined undefined
hello World! string
null object
*/

//Agora a string é um Objetc