const prompt = require("prompt-sync")();

const valor = Number(prompt("Valor da Compra R$: "))
const aux = Math.floor(valor / 20)
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux //operador ternário
/*
  substituido pelo operador ternário
  
  let parcelas
  if (aux == 0) {
    parcelas = 1
  } else if (aux > 6) {
    parcelas = 6
  } else {
    parcelas = aux
  }
  
*/
const valorParcerla = valor / parcelas

console.log(`Pode pagar em ${parcelas}x de R$: ${valorParcerla.toFixed(2)}`)
