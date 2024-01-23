const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const chinchilas = Number(form.inChinchilas.value);
  const ano = Number(form.inAno.value);

  let resposta = "";
  let soma = chinchilas
  for(let i = 1; i <= ano; i++){
    resposta = resposta + i + "° Ano: " + soma + "\n";
    soma = soma * 3
  }
  resp.innerText = resposta
})