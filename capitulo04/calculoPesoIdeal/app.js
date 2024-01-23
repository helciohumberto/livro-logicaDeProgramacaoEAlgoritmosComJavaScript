const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("submit", (e) => {
  const name = form.inName.value
  const man = form.inMan.checked 
  const woman = form.inWoman.checked 
  const heigth = Number(form.inHeigth.value)

  const weigth = man ? 22 * Math.pow(heigth, 2) : 21 * Math.pow(heigth, 2)

  resp.innerText = `${name}: Seu peso ideal é ${weigth.toFixed(3)} Kg`
  e.preventDefault()
})

form.addEventListener("reset", () => {
  resp.innerText = ""
})