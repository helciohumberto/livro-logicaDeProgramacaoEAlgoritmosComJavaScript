const form = document.querySelector("form")
const resp = document.querySelector("pre")

const numeros = []

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const numero = Number(form.inNumero.value)
  
  let lista = ''
  lista += 
  resp.innerText = lista
  
  form.inNumero.value = ''
  form.inNumero.focus()
})
