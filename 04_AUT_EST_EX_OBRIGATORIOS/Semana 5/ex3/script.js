function atuar() {
    var num1 = (document.getElementById("numero1").value);
    var arrayNum = num1.split(",")
    var posicao = 0;
    console.log(arrayNum)

    var foco = arrayNum[posicao];
    var resultado = 0;
    var arrayOrder = arrayNum.sort((a,b)=>a-b);
    for(var i = 0; i < arrayNum.length; i++ ){
        if(arrayNum[i] == foco){
            resultado = i + 1;
        };
    };    
        document.getElementById("listaOrdenada").innerHTML = arrayOrder
    
        document.getElementById("valorFoco").innerHTML = `Foco = ${foco} <br> Posição na Lista Ordenada = ${resultado}º`   
  
}
