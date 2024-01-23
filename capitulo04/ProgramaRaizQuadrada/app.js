const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("submit", (e) => {
  const inNum = Number(form.inNum.value)
  
  const raiz = Math.sqrt(inNum)
  if(raiz % 1 == 0){
    resp.innerText = `Raiz: ${raiz}`
  }else{
    resp.innerText = `Não hà raiz exata para ${inNum}`
  }
  e.preventDefault()
})