var express = require('express');
var router = express.Router();
const sqlHelper = require('../utils/to-SQL-string-helper');
// var sqlHelper = new ToSQLStringHelper();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'rest_tuto_2'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM instituicoes', function (err, rows, fields) {
        if (err) console.log(err);
        console.log('The solution is: ', rows);
        res.json(rows);
    });
});

router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    var sql = "SELECT *  FROM instituicoes WHERE id_instituicoes = '" + id + "'";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Deleted" + id);
        res.status(200);
        res.json(result);
    });
});

router.post('/', function(req, res, next) {
    var table = "instituicoes";
    var body = req.body;
    console.log(sqlHelper.save(table, body));
    connection.query(sqlHelper.save(table, body), function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        res.status(200);
        res.send(req.body);
    });
});

router.put('/:id', function(req, res, next) {
    Book.findById(req.params.id, (err, book) => {
        book.title = req.body.title;
        book.author = req.body.author;
        book.save();
        res.json(book);
    });
});

router.delete('/:id', function(req, res, next) {
    var id = req.params.id;
    console.log("Deleting: " + id);
    var sql = "DELETE FROM instituicoes WHERE id_instituicoes = '" + id + "'";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Deleted" + id);
        res.status(200);
        res.send("Deletado");
    });
    console.log("Deleted" + id);
});

module.exports = router;
