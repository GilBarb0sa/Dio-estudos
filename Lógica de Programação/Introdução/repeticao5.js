
let dado = 0;
while(dado < 6) {
  dado = Math.floor(Math.random()*6) + 1;
  console.log("Você tirou um", dado);
}