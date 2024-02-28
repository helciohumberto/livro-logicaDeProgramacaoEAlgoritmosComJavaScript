// const anuncio = prompt("Anúncio: ")
// let numPalavras = 0
// const tam = anuncio.length
// for(let i = 0; i < tam; i++){
//   if(anuncio.charAt(i) == " "){
//     numPalavras++
//   }
// }
// alert(`Anúncio: ${anuncio}\nN. Palavras: ${(numPalavras + 1)}`)

const anuncio = prompt("Anúncio: ")

let numPalavras = 0
for(const letra of anuncio){
  if(letra == " "){
    numPalavras++
  }
}

alert(`Anúncio: ${anuncio}\nN. Palavras: ${(numPalavras + 1)}`)