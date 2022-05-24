function calcularAltura(){
    var vInicial = document.getElementById("vInicial").value
    var gravidade = 10

    var tInicial = vInicial/gravidade
    document.getElementById("tempoSubida").innerHTML = tInicial

    var hMax = (Math.pow(vInicial,2)/(gravidade*2))
    document.getElementById("hMax").innerHTML = hMax
}