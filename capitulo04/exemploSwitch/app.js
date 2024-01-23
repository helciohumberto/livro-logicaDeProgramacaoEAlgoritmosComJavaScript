const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("submit", (e) => {
  const bairro = form.inBairro.value
  let taxaEntrega

  switch (bairro) {
    case "Centro":
    case "Platina":
      taxaEntrega = 5.00
      break;
    case "Junqueira":
    case "Sol nascente":
      taxaEntrega = 7.00
      break
    case "Independencia":
    case "Universitario":
      taxaEntrega = 10.00
      break
    default:
      taxaEntrega = 8.00
  }
  
  resp.innerText = `Valor da Taxa R$ ${taxaEntrega.toFixed(2)} para o bairro ${bairro}`
  e.preventDefault()
})

form.addEventListener("reset", () => {
  resp.innerText = ""
})