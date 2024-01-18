let bichinhos = [
  {"nome": "Bolinha", "cor": "amarelo", "tipo": "pato"},
  {"nome": "Fofinho", "cor": "marrom", "tipo": "coelho"},
];

let bichinhoEscolhido = bichinhos[0];
console.log("O " + bichinhoEscolhido.nome + " é " +bichinhoEscolhido.cor + "!");

let listaParaAmigo = JSON.stringify(bichinhos); // O JSON tras toda informação que esta alocado em bichinhos
console.log(listaParaAmigo)