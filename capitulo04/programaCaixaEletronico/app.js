const form = document.querySelector("form");
const resp1 = document.querySelector("#texto1");
const resp2 = document.querySelector("#texto2");
const resp3 = document.querySelector("#texto3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const saque = Number(form.inNumber.value);

  if(saque % 10 != 0){
    alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)");
    form.inNumber.focus()
    return
  }
  const notasCem = Math.floor(saque / 100);
  let resto = saque % 100
  const notasCinquenta = Math.floor(saque / 50)
  resto = resto % 50
  const notasDez = Math.floor(saque / 10)
  if(notasCem > 0){
    resp1.innerText = `Notas de 100: ${notasCem}`
  }
  if(notasCinquenta > 0){
    resp2.innerText = `Notas de 50: ${notasCinquenta}`
  }
  if(notasDez > 0){
    resp3.innerText = `Notas de 10: ${notasDez}`
  }

})