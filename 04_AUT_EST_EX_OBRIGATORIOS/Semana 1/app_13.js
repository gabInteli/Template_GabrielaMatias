// Recursos
var express = require('express'); // Recurso para Express - para instalar o Express: npm install express --save

// Definições da URL do endpoint
var hostname = '127.0.0.1';
var port = 3013;

// Cria o servidor
var app = express();

app.get('/', (req, res) => {
	req.query.nome
	res.write("<html><head><meta charSet='utf-8'/></head><div style='><div style='margin-top=50px; align-self: center;'><img style='margin-left: 600px; width:100px; height:100px; border-radius:50px;' src='https://media-exp1.licdn.com/dms/image/C4E03AQFLyA6PL2iddA/profile-displayphoto-shrink_800_800/0/1645549370937?e=1656547200&v=beta&t=V5qPbamN91hWFMCDsE5pmlm_SPRgTJgx679-jaeeozw'/><h1 style='text-align:center;'>Gabriela Rodrigues Matias</h1><div/><hr><div><p style='text-align:center;'><strong>Endereco:</strong>Rua M.M.D.C, 80 - Apto. 917 - Sao Paulo - SP <br> <strong>Telefone: </strong> (15) 99716-5061 <br><strong>Email:</strong> matias.r.gabriela@gmail.com </p><hr><h2 style='text-align:center;'>Resumo</h2><p style='text-align:justify; margin-left:200px; margin-right:200px;'>Atualmente atuando na área de Diretoria Tecnológica da Civics Educação e Líder de Engenharia e Dados na área de Tecnologia do Instituto Semear.Formada como Técnica em Eletrônica, possuo conhecimentos referentes à essa área como: Lógica e linguagens de programação, Inglês Técnico, Instalações Elétricas. Ademais, tenho ampla base em informática, com conhecimentos  referentes à Datilografia, Microsoft Excel (incluindo Sistema de Macros e VBA), Microsoft Word e Photoshop CS4. Possuo habilidades em atividades que necessitam de organização, comunicação. Cumpre ainda ressaltar que sempre respeito os critérios do ambiente.	Atualmente cursando Engenharia da Computação no Instituto de Tecnologia e Liderança (INTELI), e capacitada em desenvolvimento Front end Junior com conhecimento nas linguagens de HTML, CSS, JavaScript e noções de Back-end com Node.js, assim como frameworks de javascript como React.js. Além disso, atuo como uma das organizadoras voluntárias do Projeto Jovens do Futuro, um subprojeto oriundo do Projeto Constituição na Escola.</p></div><hr><h2 style='text-align:center;'>Formação:</h2><p style='text-align:center;'><strong>Técnico em Eletrônica</strong><br>ETEC Guaracy Silveira</p><p style='text-align:center;'><strong>Engenharia da Computação</strong>Cursando Atualmente<br>Instituto de Tecnologia e Liderança</p><h2 style='text-align:center;'>Cursos Complementares:</h2><p style='text-align:center;'><strong>MASTERTECH</strong><br>Academia de Introdução em Backend (Python e Django) e Frontend: Introdução a HTML, CSS e JavaScript,Lógica de Programação.</p><p style='text-align:center;'><strong>Informática</strong><br>Pacote Office Completo, Datilografia e Photoshop CS4</p></div></html>")
	res.end(); 
});

// Inicia o servidor
app.listen(port, hostname, () => {
	console.log('Servidor rodando em http://' + hostname + ':' + port);
})




