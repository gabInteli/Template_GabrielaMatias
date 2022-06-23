function Calcular(){
    var nomes = (document.getElementById("nomes").value);
    var resultado = document.getElementById("InfoDigito");
    var total = 0
    var lista = nomes.split(",")

    console.log(lista)

    resultado.innerHTML = lista.sort()
}