const http = require('http');

const server = http.createServer( (req, res) => {
    res.write('hola Mundo!');
    res.end();
})

server.listen(8081);
console.log('Escuchando en puerto 8081');