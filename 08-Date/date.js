//meses comecam do 0

const dataAniversario = new Date(2020, 0, 20)
//console.log(dataAniversario)

const primeitaDataDoJs = new Date(0)
//console.log(primeitaDataDoJs.getTime())

const hoje = new Date()
//console.log(hoje.toString())
console.log(hoje.toLocaleDateString())

//formato global recomendado!
//console.log(hoje.toISOString)

const dia = hoje.getDate()
hoje.setDate(dia+5) // +5 dias depois de hoje, acrescentará 5 dias a mais que hoje
hoje.setHours(10,30,0)

console.log(`
    Dia: ${hoje.getDate()}
    Mês: ${hoje.getMonth()}
    Ano: ${hoje.getFullYear()}
    Horas: ${hoje.getHours()}
    Minutos: ${hoje.getMinutes()}
    Segundos: ${hoje.getSeconds()}
`)

console.log(
    new Date(2023,1,20) > new Date (2000,1,1)
)