const form = document.querySelector("form")
const resp = document.querySelector("h3")
const resp2 = document.querySelector("h4")

form.addEventListener("submit", (e) => {
  const name = form.inName.value
  const nota1 = Number(form.inN1.value)
  const nota2 = Number(form.inN2.value)

  const media = (nota1 + nota2) / 2
  
  resp.innerText = `Média das notas: ${media.toFixed(2)}`

  if(media >= 7){
    resp2.innerText = `Parabéns ${name}! Você foi aprovado(a).`
    resp2.style.color = "blue"
  }else if(media >= 4){
    resp2.innerText = `Atenção ${name}! Você está em exame.`
    resp2.style.color = "green"
  } else {
    resp2.innerText = `Ops ${name}! Você foi reprovado(a).`
    resp2.style.color = "red"
  }


  e.preventDefault()
})