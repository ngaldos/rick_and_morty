const express = require ('express');
//const middleware = require('./src/middleware');
const routes = require('./src/routes/index');

const PORT = process.env.PORT || 3001;


const server = express();
server.use(express.json());
server.use('/rickandmorty', routes);

server.listen(PORT, () => {
    console.log('servidor escuchando en el puerto ',PORT);
});
server.get('/', (req, res) => {
    res.status(200).send('<h3>nico el mas capo ronga</h3>')
})
/*
server.get('/home', (req, res) => {
    res.status(200).send('<h1>EL HECHIZEROOOO</h1>')
 })*/
 module.exports = server;