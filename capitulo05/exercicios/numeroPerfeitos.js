const form = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const numero = Number(form.inNumero.value);

  let divisores = "Divisores do " + numero + ": 1";
  let soma = 1;

  for(let i = 2; i <= numero / 2; i++){
    if(numero % i == 0){
      divisores = divisores + ", " + i;
      soma = soma + i;
    }
  }
  
  divisores = divisores + " (soma: " + soma + ")";

  resp1.innerText = divisores;

  if(numero == soma){
    resp2.innerText = `${numero} É um Número Perfeito`
  } else {
    resp2.innerText = `${numero} Não É um Número Perfeito`
  }

})