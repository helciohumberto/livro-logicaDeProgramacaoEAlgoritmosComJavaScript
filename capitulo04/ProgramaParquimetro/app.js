const form = document.querySelector("form");
const resp1 = document.querySelector("#text1");
const resp2 = document.querySelector("#text2");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const valor = Number(form.inNumber.value);

  if(valor < 1.00){
    alert("Valor Insuficiente (no mínimo, R$ 1.00)");
    form.inNumber.focus();
    return;
  }

  let tempo
  let troco

  if(valor >= 3.00){
    tempo = 120
    troco = valor - 3.00
  }else if(valor >= 1.75){
    tempo = 60
    troco = valor - 1.75
  }else{
    tempo = 30
    troco = valor - 1.00
  }

  resp1.textContent = `Tempo: ${tempo} min`
  resp2.textContent = `Troco R$: ${troco.toFixed(2)} `
})