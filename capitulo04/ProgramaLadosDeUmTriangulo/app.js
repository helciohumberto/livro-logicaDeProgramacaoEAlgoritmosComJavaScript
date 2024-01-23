const form = document.querySelector("form");
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const ladoA = Number(form.inLadoA.value)
  const ladoB = Number(form.inLadoB.value)
  const ladoC = Number(form.inLadoC.value)

  if(ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB){
    resp1.textContent = `Lados não podem formar um triângulo.`
  }else{
    resp1.textContent = `Lados podem formar um Triângulo`
    if(ladoA == ladoB && ladoA == ladoC){
      resp2.textContent = `Tipo: Equilátero`
    }else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
      resp2.textContent = `Tipo: Isósceles`
    }else{
      resp2.textContent = `Tipo: Escaleno`
    }
  }
})