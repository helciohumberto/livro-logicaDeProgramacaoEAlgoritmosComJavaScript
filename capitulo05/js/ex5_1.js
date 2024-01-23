const form = document.querySelector("form");
const resp = document.querySelector("pre");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let resposta = "";

  const numero = Number(form.inNumero.value);

  for (let i = 1; i <= 10; i++) {
    resposta = resposta + i + " x " + numero + " = " + numero * i + "\n";
  }
  resp.innerText = resposta;
});

form.addEventListener("reset", () => {
  resp.innerText = "";
});
