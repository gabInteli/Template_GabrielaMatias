function Notas() {
  var notas = [1, 2, 5, 10, 20, 50, 100];
  var num1 = Number(document.getElementById("numero1").value);

  for (var i = 0; i < notas.length; i++) {
    if (num1 >= notas[i]) {
      var nota1 = notas[i];
    }
  }
  var numN = num1 / nota1;
  var resto = num1 % nota1;
  console.log(Math.floor(numN) + " notas de : " + nota1);
  console.log(resto);

  if (resto != 0) {
    for (var i = 0; i < notas.length; i++) {
      if (resto >= notas[i]) {
        var nota2 = notas[i];
      }
    }
    var numO = resto / nota2;
    var resto1 = resto % nota2;
    console.log(Math.floor(numO) + " notas de : " + nota2);
    console.log(resto1);

    if (resto1 != 0) {
      for (var i = 0; i < notas.length; i++) {
        if (resto1 >= notas[i]) {
          var nota3 = notas[i];
        }
      }
      var numP = resto1 / nota3;
      var resto2 = resto1 % nota3;
      console.log(Math.floor(numP) + " notas de : " + nota3);
      console.log(resto2);
    }

    if (resto2 != 0) {
      for (var i = 0; i < notas.length; i++) {
        if (resto2 >= notas[i]) {
          var nota4 = notas[i];
        }
      }
      var numQ = resto2 / nota4;
      var resto3 = resto2 % nota4;
      console.log(Math.floor(numQ) + " notas de : " + nota4);
      console.log(resto3);
    }
    if (resto3 != 0) {
      for (var i = 0; i < notas.length; i++) {
        if (resto3 >= notas[i]) {
          var nota5 = notas[i];
        }
      }
      var numR = resto3 / nota5;
      var resto4 = resto3 % nota5;
      console.log(Math.floor(numR) + " notas de : " + nota5);
      console.log(resto4);
    }
  }

  (document.getElementById("resultado").innerHTML =
    "<p>" + Math.floor(numN) + " notas de : " + nota1 + "</p><br>" +
    "<p>" + Math.floor(numO) + " notas de : " + nota2 + "</p><br>"+
    "<p>" + Math.floor(numP) + " notas de : " + nota3 + "</p><br>"+
    "<p>" + Math.floor(numQ) + " notas de : " + nota4 + "</p><br>"+
    "<p>" + Math.floor(numR) + " notas de : " + nota5 + "</p><br>")
}
