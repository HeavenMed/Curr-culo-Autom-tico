const main2 = document.getElementById("main2")
const h3 = document.getElementById("h3")
const cargo = document.getElementById("cargo")
const estado = document.getElementById("estado")
const textao = document.getElementById("textao")
const numero = document.getElementById("numero")
const btn2 = document.getElementById("button2")
const principal2 = document.getElementById("principal2")
const body = document.querySelector("#body")
const radio1 = document.querySelector("#radioinput1")
const radio2 = document.querySelector("#radioinput1")
const radio3 = document.querySelector("#radioinput1")

const Clique = (e) => {
  const input1 = document.querySelector("#input1");
  const input2 = document.querySelector("#input2");
  const input3 = document.querySelector("#input3");
  const input4 = document.querySelector("#input4");
  const input5 = document.querySelector("#input5");
  
  const radioinput1 = radio1.value;
  const radioinput2 = radio2.value;
  const radioinput3 = radio3.value;

  main2.style.display = "none"

  h3.innerHTML = input1.value;
  cargo.innerHTML = input4.value ;
  estado.innerHTML = input2.value ;
  textao.innerHTML = input5.value ;
  numero.innerHTML = input3.value ;

  principal2.style.display = "block"

  body.style.backgroundImage = 'url("${radioinput1}.jpg")'
  body.style.backgroundImage = 'url("${radioinput2}.jpg")'
  body.style.backgroundImage = 'url("${radioinput3}.jpg")'
  e.preventDefault()
}
btn2.addEventListener('click' , Clique ,)