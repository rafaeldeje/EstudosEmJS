//formas de declarar funcoes

function minhaFuncao1(parametro) {
    return 'aweeee'
}

//criando uma funcao com uma variavel
const minhaFuncao2 = function (parametro1){
    return 'awewwwww'
}

//Arrow functions, eu coloco de parentesees todos os parametros que vai ter, e coloco ighual ou maior para falar que é uma funcao, e dentro das chaves fica o corpo da funcao
const minhaFuncao3 = (parametro1) => {
    return `aee${parametro1}`
}

//Arrow functions sem parametro, somente em uma linha, sem return, sem chave
const minhaFuncao4 = parametro1 => `aeeee${parametro1}`

//cdentro de objetos
const objt1 = { 
    minhaFuncao: parametro1 => `aeeeee${parametro1}`
}
//e chamar ele em seguida com objt1.minhaFuncao
objt1.minhaFuncao('teste')

//dentro do objeto, vamos criar uma funcao sem usar ela function, ja direto com o parametro
const objt2 = {
    minhaFuncao (parametro1) {
        return `aeeee ${parametro1}`
    }
}
//chamar do mesmo jeito que chamou do outro do jeito passado
objt2.minhaFuncao()