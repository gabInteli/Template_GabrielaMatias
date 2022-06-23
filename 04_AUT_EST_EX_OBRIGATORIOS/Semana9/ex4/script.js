function Calcular(){
    var termo = Number(document.getElementById('termo').value);
    var resultado = document.getElementById('InfoDigito');
    var lista = [];

    var a = 0;
    var b = 1;
    var f = 1;

    for (var i = 0; i < termo ; i++) {

        lista.push(f);
        f = a + b;
        a = b;
        b = f;
    }

   resultado.innerHTML = lista;
 }