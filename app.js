require('dotenv').config();

const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+ '/views/partials')

//Servir contenido estatico
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home',{
        nombre: 'Matias Marenna',
        titulo: 'Ahora soy node backender'
    })
})

app.get('/hola-mundo', function (req, res) {
  res.send('Hello World desde ruta alternativa')
})

app.get('/generic', function (req, res) {
  res.render('generic')
})

app.get('/elements', function (req, res) {
  res.render('elements')
})

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})