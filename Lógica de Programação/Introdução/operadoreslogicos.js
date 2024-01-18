// AND (&&)
let idade = 18
let vistoVerificado = false
let resultado1 = (idade >= 18) && (vistoVerificado === false)
console.log(resultado1)

// AND (&&) - 100 moedas coletadas E 1 item estrela
let moedasColetadas = 99
let item = "estrela"
let resultado2 = (moedasColetadas >= 100) && (item === "estrela")
console.log(resultado2)

// OR (||) - nosso boneco só pode sair se tiver sem chuva OU com guarda Chuva
let tempo = "chuva"
let item1 = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item1 === "guarda chuva")
console.log("Nosso personagem pode sair? " + podeSair)

// NOT ( !) - nega uma afirmação
let tempo1 = "chuva"
let horario = 8
let resultado3 = !((tempo1 !== "chuva") && (horario > 6))
console.log(resultado3)

// NOT ( !) - nega uma afirmação
let tempo2 = "chuva"
let horario1 = 8
let resultado4 = !((tempo !== "chuva") && (horario > 6))
console.log(resultado4)