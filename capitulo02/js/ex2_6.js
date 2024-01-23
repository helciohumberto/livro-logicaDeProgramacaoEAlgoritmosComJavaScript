const form = document.querySelector("form")
const resp1 = document.querySelector("#text1")
const resp2 = document.querySelector("#text2")

form.addEventListener("submit", (e) => {
  const produto = form.inProduto.value
  const preco = Number(form.inPreco.value)

  const precoTotal = (preco * 2) + (preco / 2)
  const metadeP = preco / 2
  
  resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${precoTotal.toFixed(2)}`
  resp2.innerText = `O 3° produto custa apenas R$: ${metadeP.toFixed(2)}`
  e.preventDefault()
})