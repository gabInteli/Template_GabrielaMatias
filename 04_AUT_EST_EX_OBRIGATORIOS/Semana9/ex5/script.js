function Calcular(){
    var num1 = document.getElementById("termo").value
    var num2 = document.getElementById("termo2").value
    var listaPrimos = []

    for(var i = num1; i< num2; i++){
        if (numeroPrimo(i)){
            listaPrimos.push(i);
          }
    }

    InfoDigito.innerHTML = listaPrimos
}

function numeroPrimo(numero) {
    for(var i = 2; i < numero; i++)
      if(numero % i === 0) {
          return false
      };
    return numero > 1;
}