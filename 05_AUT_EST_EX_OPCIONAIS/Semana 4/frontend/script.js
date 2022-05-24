var Disciplina = {
    nomeDisciplina:"",
    pesoGrif:1,
    pesoSons:1,
    pesoCorv:1,
    pesoLufa:1,
    listaNotas:[],
    geraNotas: function(nrNotas) {
        for(var j=0; j < nrNotas; j++){
            var notaAleatorio = Math.floor(Math.random() * 11) ;
            this.listaNotas.push(notaAleatorio)
        }
    },
    
    calculaMediaDisciplina: function(){
        var total=0;
        for(var i=0; i< this.listaNotas.length; i++){
        total += this.listaNotas[i]
        };
        return(total/this.listaNotas.length)
    }
    }

var CasaHogwarts={
    nomeCasa:"",
    nrCasa:0, 
    mediaDisciplinas:0,
    listaDisciplina:[], 
    addDisciplina: function(disciplina){
        this.listaDisciplina.push(listaDisciplina)
    }, 
    calcularMedia: function(){
        for(var l=0; l<this.listaDisciplina.length;l++){
            var mediaDis = this.listaDisciplina[l].calculaMediaDisciplina();
            if (this.nrCasa == 1){
                mediaDis = mediaDis*this.listaDisciplina[l].pesoGrif
            }
            else if (this.nrCasa == 2){
                mediaDis = mediaDis * this.listaDisciplina[l].pesoSons
            }
            else if (this.nrCasa == 3){
                mediaDis = mediaDis * this.listaDisciplina[l].pesoCorv
            }
            else {
                mediaDis = mediaDis * this.listaDisciplina[l].pesoLufa
            }
        }
    },
}



function adicionarDisciplina(){
    var disciplina= Object.create(Disciplina)
    disciplina.nomeDisciplina = document.getElementById("nomeDisciplina").value
    disciplina.pesoGrif= Number(document.getElementById("pesoGrif").value)
    disciplina.pesoSons= Number(document.getElementById("pesoSons").value)
    disciplina.pesoCorv= Number(document.getElementById("pesoCorv").value)
    disciplina.pesoLufa= Number(document.getElementById("pesoLufa").value)
    disciplina.geraNotas(50)
    grifinoria.addDisciplina(disciplina)
    sonserina.addDisciplina(disciplina)
    corvinal.addDisciplina(disciplina)
    lufaLufa.addDisciplina(disciplina)
}

function calcular(){
    grifinoria.calcularMedia();
    sonserina.calcularMedia();
    corvinal.calcularMedia();
    lufaLufa.calcularMedia();
}

function geraJSON(){
    document.getElementById("outJSON").textContent = JSON.stringify(grifinoria)
}

var grifinoria = Object.create(CasaHogwarts)
var sonserina = Object.create(CasaHogwarts)
var corvinal = Object.create(CasaHogwarts)
var lufaLufa = Object.create(CasaHogwarts)

grifinoria.nomeCasa ='Grifinória'
grifinoria.nrCasa = 1

sonserina.nomeCasa ='Sonserina'
sonserina.nrCasa = 2

corvinal.nomeCasa ='Corvinal'
corvinal.nrCasa = 3

lufaLufa.nomeCasa = "Lufa Lufa"
lufaLufa.nrCasa = 4