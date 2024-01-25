let nomesPokemon = ["Pikachu", "Chamander", "Bulbassaur"];
let sexo = ["Masculino", "Feminino"]
let timePokemon = [   //  [0]  [1]  [2] - Esta é a ordem das informações abaixo para o segundo [] no console.log!
  [nomesPokemon[0], sexo[0], 1], //[Pikachu, Masculino, 1]
  [nomesPokemon[1], sexo[1], 3]  //[Charmander, Feminino, 3]
]

console.log("O pokemon " + timePokemon[1][0] + " é do sexo " + timePokemon[1][1] + " e está no nível " + timePokemon[1][2]);
