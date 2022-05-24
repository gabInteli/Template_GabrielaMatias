function Soma(){ 
  var num1 = Number(document.getElementById("numero1").value)
  var num2 = Number(document.getElementById("numero2").value)
  var soma = num1 + num2
  document.getElementById("resultado").innerHTML = soma
}

function Subtracao(){
  var num1 = Number(document.getElementById("numero1").value)
  var num2 = Number(document.getElementById("numero2").value)
  var subtracao = num1 - num2
  document.getElementById("resultado").innerHTML = subtracao
}

function Multiplicacao(){
  var num1 = Number(document.getElementById("numero1").value)
  var num2 = Number(document.getElementById("numero2").value)
  var multiplicacao = num1 * num2
  document.getElementById("resultado").innerHTML = multiplicacao
}

function Divisao(){
  var num1 = Number(document.getElementById("numero1").value)
  var num2 = Number(document.getElementById("numero2").value)
  var divisao = num1 / num2
  document.getElementById("resultado").innerHTML = divisao
}

function DivisaoInt(){
  var num1 = Number(document.getElementById("numero1").value)
  var num2 = Number(document.getElementById("numero2").value)
  var divisaoInt = Math.round(num1/num2);
  document.getElementById("resultado").innerHTML = divisaoInt
}

function Resto(){
  var num1 = Number(document.getElementById("numero1").value)
  var num2 = Number(document.getElementById("numero2").value)
  var resto = num1 % num2;
  document.getElementById("resultado").innerHTML = resto
}