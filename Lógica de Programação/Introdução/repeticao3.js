let numero;

do {
  numero = prompt('Digite um número entre 1 e 10')
} while (numero < 1 || numero > 10);

console.log(`Você digitou o número ${numero}.`);