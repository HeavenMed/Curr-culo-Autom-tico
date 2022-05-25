const main2 = document.getElementById("main2")
const h3 = document.getElementById("h3")
const cargo = document.getElementById("cargo")
const estado = document.getElementById("estado")
const textao = document.getElementById("textao")
const numero = document.getElementById("numero")
const btn2 = document.getElementById("button2")
const principal2 = document.getElementById("principal2")
const body = document.querySelector("#body")
const number = document.querySelector('#inputnumber')

const Clique = (e) => {
  const input1 = document.querySelector("#input1");
  const input2 = document.querySelector("#input2");
  const input3 = document.querySelector("#input3");
  const input4 = document.querySelector("#input4");
  const input5 = document.querySelector("#input5");
  
  
  const body = document.querySelector("#body")
  
  const valornumber = number.value;
  const mudarback = () => {
    body.style.backroundImage = `url(${valornumber}.jpg)`
  }
  mudarback()
  main2.style.display = "none"

  h3.innerHTML = input1.value;
  cargo.innerHTML = input4.value ;
  estado.innerHTML = input2.value ;
  textao.innerHTML = input5.value ;
  numero.innerHTML = input3.value ;

  principal2.style.display = "block"

  

  e.preventDefault()
}
btn2.addEventListener('click' , Clique , )