const letras = ["A", "B", "C", "D"];
const letras2 = letras.slice(-2); //  Obtém 2 Últimas Letras
const letras3 = letras.slice(0, -1); //  Obtém do ínicio até o final, exceto a última

console.log(letras);
console.log(letras2);
console.log(letras3);

const retira = letras.splice(2, 1); //  Remove a partir da posição 2, 1 elemento
console.log(letras);
console.log(retira);