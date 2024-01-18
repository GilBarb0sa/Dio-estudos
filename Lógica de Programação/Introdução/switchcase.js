let dia = "segunda"; //Você pode mudar isso para outros dias

switch (dia) { //É a palavra que diz ao computador que estamos começando a escolher com base em um valor.
  case "segunda":  //São as opções que você dá ao computador para escolher.
    console.log("Dia de começar a semana com energia!");
    break;  //Esta é uma palavra que diz ao computador para parar de verificar opções depois que encontra a correta.
  case "terça":
    console.log("Hora de aprender coisas novas!");
    break;
  case "quarta":
    console.log("Metade da semana, continue firme!");
    break;
  case "quinta":
    console.log("Quase lá, um pouco mais de esforço!");
    break;
  case "sexta":
    console.log("Dia de comemorar, o fim de semana está chegando!");
    break;
  default:  //É a opção que o computador escolhe se nenhuma das opções anteriores combina com o valor que você deu.
    console.log("Final de semana! Descanse e divirta-se!");
}