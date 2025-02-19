const express = require('express'); 
const hostname = '127.0.0.1';
const port = 3031;
const sqlite3 = require('sqlite3').verbose(); 
const app = express();
const DBPATH = 'dbCurriculo.db';
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static("../frontend"));
app.use(express.json())

/* Definição dos endpoints */

// GET - Informações Principais (Contato, Email, e Resumo)
app.get('/Informacao', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

var db = new sqlite3.Database(DBPATH); // Abre o banco
var sql = 'SELECT * FROM Informacao ORDER BY idInfo COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close(); // Fecha o banco
});



// GET - Idiomas (Idioma, Nível)
app.get('/Idioma', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

var db = new sqlite3.Database(DBPATH); // Abre o banco
var sql = 'SELECT * FROM Idioma ORDER BY idIdioma COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close(); // Fecha o banco
});


// GET - Cursos (Nome, Tema)
app.get('/Curso', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

var db = new sqlite3.Database(DBPATH); // Abre o banco
var sql = 'SELECT * FROM Curso ORDER BY idCurso COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close(); // Fecha o banco
});

// GET - Formacao (Nome, Instituição, Tempo de Formação)
app.get('/Formacao', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

var db = new sqlite3.Database(DBPATH); // Abre o banco
var sql = 'SELECT * FROM Formacao ORDER BY idFormacao COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close(); // Fecha o banco
});

// Retorna todos registros (é o R do CRUD - Read)
app.get('/Experiencia', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

var db = new sqlite3.Database(DBPATH); // Abre o banco
var sql = 'SELECT * FROM Experiencia ORDER BY idExperiencia COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close(); // Fecha o banco
});


/* Inicia o servidor */
app.listen(port, hostname, () => {
  console.log(`BD server running at http://${hostname}:${port}/`);
});