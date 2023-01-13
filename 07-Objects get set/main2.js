const pessoa ={
    _nome: '',
    _idade: 27,
    get nome () {
        return this._nome
    },
    set nome(valor) {
        this._nome = valor.toUpperCase()
    },

    get podeDirigir() {
        return this._idade >18
    },
    set idade (valor) {
        this._idade = valor
    }
}

pessoa.nome = "rafaelzinho de jesus"
console.log(pessoa.nome)
pessoa.idade = 15
console.log(pessoa.podeDirigir)
console.log(pessoa.idade)

// 2 = Variaveis com _, significa uma variavel privada, onde
//nao podem ser acessado por fora para ninguem acessar

// 11 = Propriedade calculada, onde ele pega a idade onde é um valor privado, e vai verificar se é maior que 18//
