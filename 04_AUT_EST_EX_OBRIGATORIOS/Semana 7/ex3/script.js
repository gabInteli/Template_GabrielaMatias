function verificar(){
    var numeros = document.getElementById("phoneNumber").value
    var listaNumeros = numeros.split("");
    
    if(listaNumeros[0] == "(" && listaNumeros[3] == ")" && listaNumeros[9] == "-"){
        window.alert("Número inserido corretamente")
    }
    else{
        window.alert("Por favor, insira os números no seguinte formato: (DDD)XXXXX-XXXX")
    }
}