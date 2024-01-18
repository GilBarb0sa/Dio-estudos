let tentativas = 0;
let passou = false;

while(!passou) {
  tentativas++;
  passou = Math.random() < 0.03;
}

  console.log(`Quantas vezes o Gil tentou passar 'Black Star Pen' ${tentativas} tentativas!`);