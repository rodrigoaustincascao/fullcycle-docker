const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'node',
    password: 'node',
    database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)





app.get('/', (req, res) => {

    connection.query(`INSERT INTO people (name) VALUES ('Docker - Desafio 02'), ('Rodrigo'), ('Full Cycle')`)

    connection.query(`SELECT name FROM people`, (error, results, fields) => {
        if (error) throw error;
        res.send(`
        <h1>Full Cycle Rocks!!</h1>
        <ol>

            ${!!results.length ? results.map(el => `<li>${el.name}</li>`).join('') : ''}
        </ol>
        `)
    })
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})