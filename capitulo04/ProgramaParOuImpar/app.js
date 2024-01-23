const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const inNumber = Number(form.inNumber.value)
  if(inNumber % 2 == 0){
    resp.textContent = `${inNumber} é par`
  }else {
    resp.textContent = `${inNumber} é Ímpar`
  }
})

form.addEventListener("reset", () => {
  resp.textContent = ``
})