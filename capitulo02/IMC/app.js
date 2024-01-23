const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("submit", (e) => {
  const name = form.inName.value
  const heigth = Number(form.inHeight.value)
  const weigth = Number(form.inWeight.value)


    const imc = (weigth / (heigth * heigth)).toFixed(1);

    let classificacao = '';

    if (imc < 18.5){
        classificacao = 'abaixo do peso.';
    }else if (imc < 25) {
        classificacao = 'com peso ideal. Parabéns!!!';
    }else if (imc < 30){
        classificacao = 'levemente acima do peso.';
    }else if (imc < 35){
        classificacao = 'com obesidade grau I.';
    }else if (imc < 40){
        classificacao = 'com obesidade grau II';
    }else {
        classificacao = 'com obesidade grau III. Cuidado!!';
    }

  resp.innerText = `${name}, seu IMC é: ${imc} e você está ${classificacao}`

  e.preventDefault()
})