const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("submit", (e) => {
  const n1 = Number(form.inN1.value)
  const n2 = Number(form.inN2.value)
  
  const soma = n1 + n2
  resp.innerText = `${n1} + ${n2} = ${soma}`
  e.preventDefault()
})