const app = require('express')();
const consign = require('consign');
const knex = require('knex');
const knexfile = require('../knexFile');

// TODO: Criar chaveamento dinâmico
app.db = knex(knexfile.test);

consign({ cwd: 'src', verbose: false })
    .include('./config/middlewares.js')
    .then('./services')
    .then('./routes')
    .then('./config/routes.js')
    .into(app);

app.get('/', (req, res) => res.status(200).send())

// Bloco de código para analise de consulta/erro de banco
// app.db
//     .on('query', (query) => {
//         console.log({
//             sql: query.sql,
//             bindings: query.bindings ? query.bindings.join(',') : ''
//         });
//     })
//     .on('query-response', (response) => console.log(response))
//     .on('error', (error) => console.log(error))

module.exports = app;