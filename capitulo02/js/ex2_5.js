const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
  const VALOR15MIN = Number(frm.inMinuto.value)
  const tempo = Number(frm.inTempo.value)

  const resul = Math.ceil(tempo / 15) * VALOR15MIN
  resp.innerText = `Valor a pagar R$: ${resul.toFixed(2)}`
  e.preventDefault()
})