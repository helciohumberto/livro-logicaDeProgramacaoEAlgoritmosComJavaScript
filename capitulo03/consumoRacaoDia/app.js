const form = document.querySelector("form")
const resp1 = document.querySelector("#t1")
const resp2 = document.querySelector("#t2")

form.addEventListener("submit", (e) => {
  const pesoKg = Number(form.inPesoKg.value)
  const consumo = Number(form.inConsumo.value)

  const pesoGr = pesoKg * 1000
  const duracao = Math.floor(pesoGr / consumo)
  const sobra = pesoGr % consumo

  resp1.innerText = `Duração: ${duracao} dia(s)`
  resp2.innerText = `Sobra: ${sobra}gr`

  e.preventDefault()
})