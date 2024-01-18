let possuiOvos = false
let itensComprados = "" // Fica sem nenhum atributo para receber nas condições

if (possuiOvos) {
  itensComprados = "Leite"
} else {
  console.log("passou na sessão de congelados")
  itensComprados = "Lasanha Congelado"
}

console.log("item comprado: " + itensComprados)