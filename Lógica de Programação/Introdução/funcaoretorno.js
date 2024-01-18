let userName = getFirstName("Carlos-Almeida-Juaniot-Gargalo", "-")
console.log("Seja bem vindo " + userName)

userName = getFirstName("Felipe Silva Han Solo", " ")
console.log("Seja bem vindo " + userName)

function getFirstName(name, splitChar){
  let firstName = name.split(splitChar)[0]
  return firstName
}