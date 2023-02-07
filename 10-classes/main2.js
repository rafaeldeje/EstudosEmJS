class Heroi {
    atacar(){
        console.log(`atacou!!`)
    }
    defender(){
        console.log(`defendeu!`)
    }
}

const heroi = new Heroi()
heroi.atacar()
heroi.defender()

//assim ele printará os dois.

class Heroi2 {
    constructor (nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    atacar (){
        console.log(
            `O ${this.nome} atacaou!`
        )
    }
}
const heroi2 = new Heroi2


//constructor vai ser uma função, que vai ser invocada quando chamar a palavra new
//this.  contexto do escopo da classe