function Calcular(){
    var numero = document.getElementById("valor").value
    var resultado = document.getElementById("InfoDigito")

    var lista = numero.split("")

    if (lista[1]%2 != 0){

        resultado.innerHTML="Ímpar"

    } 

    else if (lista[1]%2 == 0){
        resultado.innerHTML="Par"
    }
}