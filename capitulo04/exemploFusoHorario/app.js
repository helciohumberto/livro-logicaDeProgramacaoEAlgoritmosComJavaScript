const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("click", (e) => {
  
  const horaBrasil = Number(form.inHora.value)
  const minutoBrasil = Number(form.inMinuto.value)
  
  let minutoFranca = minutoBrasil
  let horaFranca = horaBrasil + 5

  if(minutoFranca > 59){
    minutoFranca = minutoFranca - 59
  } 

  if(horaFranca > 24) {
    horaFranca = horaFranca - 24
  }
  
  resp.innerText = `Hora na França ${horaFranca.toFixed(0)}:${minutoFranca.toFixed(0)}`
  e.preventDefault()
})