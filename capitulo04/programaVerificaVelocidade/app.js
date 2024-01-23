const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const inVelPermitida = Number(form.inVelPermitida.value)
  const inVelCondutor = Number(form.inVelCondutor.value)

  if(inVelCondutor <= inVelPermitida){
    resp.innerText = `Situação: Sem Multa`
  }else{
    const maisVinte = inVelPermitida * 1.2
    if(inVelCondutor <= maisVinte){
      resp.innerText = `Situação: Multa Leve`
    }else {
      resp.innerText = "Situação: Multa Grave"
    }
  }
})

form.addEventListener("reset", () => {
  resp.innerText = ""
})