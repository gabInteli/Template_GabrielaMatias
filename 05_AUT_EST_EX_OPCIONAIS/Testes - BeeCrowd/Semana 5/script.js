/*Leia quatro números (N1, N2, N3, N4), cada um deles com uma casa decimal, correspondente às quatro notas de um aluno. Calcule a média com pesos 2, 3, 4 e 1, respectivamente, para cada uma destas notas e mostre esta média acompanhada pela mensagem "Media: ". Se esta média for maior ou igual a 7.0, imprima a mensagem "Aluno aprovado.". Se a média calculada for inferior a 5.0, imprima a mensagem "Aluno reprovado.". Se a média calculada for um valor entre 5.0 e 6.9, inclusive estas, o programa deve imprimir a mensagem "Aluno em exame.".

No caso do aluno estar em exame, leia um valor correspondente à nota do exame obtida pelo aluno. Imprima então a mensagem "Nota do exame: " acompanhada pela nota digitada. Recalcule a média (some a pontuação do exame com a média anteriormente calculada e divida por 2). e imprima a mensagem "Aluno aprovado." (caso a média final seja 5.0 ou mais ) ou "Aluno reprovado.", (caso a média tenha ficado 4.9 ou menos). Para estes dois casos (aprovado ou reprovado após ter pego exame) apresente na última linha uma mensagem "Media final: " seguido da média final para esse aluno.*/


function teste() {

    var A = parseFloat(document.getElementById("A").value);
    var B = parseFloat(document.getElementById("B").value);
    var C = parseFloat(document.getElementById("C").value);
    
    
    var lista = [A, B, C];

    lista.sort(function(a,b){
        return a-b;
    });
    
    A = lista[2];
    B = lista[1];
    C = lista[0];
    
      if(lista[2]>= lista[0]+lista[1]){
            console.log("NAO FORMA TRIANGULO");
        }
        else if(lista[2]*lista[2] == (lista[1]*lista[1])+(lista[0]*lista[0])){
            console.log(" TRIANGULO RETANGULO");
        }
        else if(lista[2]*lista[2] > (lista[1]*lista[1])+(lista[0]*lista[0])){
            console.log("TRIANGULO OBTUSANGULO");
        }
        else if(lista[2]*lista[2] < (lista[1]*lista[1])+(lista[0]*lista[0])){
            console.log("TRIANGULO ACUTANGULO");
        }
        
        if (lista[0] == lista[1] == lista[2]){
            console.log("TRIANGULO EQUILATERO");
        }
        
        if (lista[0] == lista[1] || lista[0] == lista[2] || lista[1] == lista[2]){
            console.log("TRIANGULO ISOSCELES");
        }
}