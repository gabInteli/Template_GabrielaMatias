function Calcular(){
    var numero = (document.getElementById("valor").value);
    var resultado = document.getElementById("InfoDigito");
    var total = 0
    var lista = numero.split("")
    console.log(lista)

    for(var i = 0; i < lista.length ; i++){
        total = total + Number(lista[i])
        console.log(total)
    }

    resultado.innerHTML = total
}