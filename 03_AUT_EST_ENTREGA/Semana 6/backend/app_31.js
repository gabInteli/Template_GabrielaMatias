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


// CRUD = INFO (Criar, Ler, Atualizar e Deletar)
// Retorna todos registros (é o R do CRUD - Read)
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

// Insere um registro (é o C do CRUD - Create)
app.post('/infoInsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO Informacao (title, id, completed) VALUES ('" + req.body.title + "', 33, false)";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close(); // Fecha o banco
  res.end();
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/infoUpdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE Informacao SET Telefone = '" + req.body.Telefone + "' WHERE idInfo = '" + req.body.idInfo + "'" ;
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});


// CRUD = IDIOMA (Visualizar e Atualizar)
// Retorna todos registros (é o R do CRUD - Read)
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

// Atualiza um registro (é o U do CRUD - Update)
app.post('/idiomaUpdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE Idioma SET Idioma = '" + req.body.Idioma + "' WHERE idIdioma = '" + req.body.idIdioma + "'" ;
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
      res.end();
  });
  db.close(); // Fecha o banco
});

// CRUD = CURSOS (Visualizar e Atualizar)
// Retorna todos registros (é o R do CRUD - Read)
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

// CRUD = CURSOS (Visualizar)
// Retorna todos registros (é o R do CRUD - Read)
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

// CRUD = EXPERIÊNCIA (Visualizar)
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