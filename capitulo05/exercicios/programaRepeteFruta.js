const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fruta = form.inFruta.value;
  const numero = Number(form.inNumero.value);

  let resposta = ""

  for(let i = 1; i < numero; i++){
    resposta = resposta + fruta + " * "
  }
  resp.innerText = resposta + fruta
})