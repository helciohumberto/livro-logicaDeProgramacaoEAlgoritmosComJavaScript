const prompt = require("prompt-sync")();
const valor = Number(prompt("Valor R$: ")); // Lê valor do carnet...
const num = Number(prompt("N° de Parcelas: "));
const valorParcelas = Math.floor(valor / num); // calcula valor sem decimais
const valorFinal = valorParcelas + (valor % num); // calcula parcela final


for(let i = 1; i < num; i++){   // enquanto i < num
  console.log(`${i}ᵃ parcela: R$ ${valorParcelas.toFixed(2)}`)
}
console.log(`${num}ᵃ parcela: R$ ${valorFinal.toFixed(2)}`)
  