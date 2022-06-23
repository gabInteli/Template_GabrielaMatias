function Calcular(){
    var qtdAlunos = Number(document.getElementById("qtdAlunos").value)
    var notasProva = (document.getElementById("notasProva").value).split(",")
    var notasTrabalho = (document.getElementById("notasTrabalho").value).split(",")

    
    class Aluno{
    constructor(
        nome,
        notaProva,
        notaTrabalho,
        media, 
    ){
        this.nome = nome;
        this.notaProva = notaProva;
        this.notaTrabalho = notaTrabalho;
        this.media = media;
    }
    }

    var listaAlunos = []

    console.log(qtdAlunos) 
    console.log(notasProva)
    console.log(notasTrabalho)
    
    for (var i = 0; i <= qtdAlunos -1; i++){
        var aluno = new Aluno(
            `aluno${i}`,
            Number(notasProva[i]),
            Number(notasTrabalho[i]),
            ((Number(notasProva[i])*2)+(Number(notasTrabalho[i])*3))/2
        )
        
        console.log(aluno)
        // aluno.nome = `aluno${i}`
        // aluno.notaProva = notasProva[i]
        // aluno.notaTrabalho = notasTrabalho[i]

        listaAlunos.push(aluno)
        }
       console.log(listaAlunos) 

       var valorProva = 0
       var valorTrabalho = 0

    for (var j = 0; j < notasProva.length; j++){
        valorProva += Number(notasProva[j])
    }

    for (var k = 0; k < notasTrabalho.length; k++){
        valorTrabalho += Number(notasTrabalho[k])
    }

        console.log(valorProva)

        var mediaProva = valorProva/qtdAlunos
        var mediaTrabalho = valorTrabalho/qtdAlunos
        var mediaGeral = (mediaProva + mediaTrabalho)/ 2
        console.log(mediaProva)
        console.log(mediaTrabalho)

        document.getElementById('mediaGeral').innerHTML = mediaGeral
        document.getElementById('mediaTrabalhos').innerHTML = mediaProva
        document.getElementById('mediaProvas').innerHTML = mediaTrabalho

        var maiorTrabalho = Math.max(...notasTrabalho)
        document.getElementById('maiorTrabalho').innerHTML = maiorTrabalho
        console.log(maiorTrabalho)

        var menorTrabalho = Math.min(...notasTrabalho)
        document.getElementById('menorTrabalho').innerHTML = menorTrabalho
        console.log(menorTrabalho)

        var maiorProva = Math.max(...notasProva)
        document.getElementById('maiorProva').innerHTML = maiorProva
        console.log(maiorProva)

        var menorProva = Math.min(...notasProva)
        document.getElementById('menorProva').innerHTML = menorProva
        console.log(menorProva)
    
   }
