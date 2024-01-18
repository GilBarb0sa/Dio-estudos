//JSON - JavaScript Object Notation
//chave e valor com o objetivo de transferir dados
let invoice = {
  name: "Felipe",
    age: 28,
    products: {
      0: ["mouse 2xwm", 29.90],
      1: ["Teclado mecânico", 129.90],
      2: ["Monitor", "899.99"],
      3: ["TV 100 polegadas", "10000.90"]
    },
    taxes: "98.90"
}

generateInvoice(invoice)
function generateInvoice(invoice) {
  console.log(`O comprador é ${invoice.name}`)
  console.log(`A idade é ${invoice.age} anos`)
  console.log("--------------------")

  for(let index in invoice.products) {
    let [productName, productPrice] = invoice.products[index]
      console.log(` - ${productName}: R$ ${productPrice}`)
  }
}