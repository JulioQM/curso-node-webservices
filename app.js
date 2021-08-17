require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;
//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) { });

// servir contenido estatico
app.use(express.static('templated-roadtrip'));
app.get('/', (req, res) => {
    res.render('home', {
        titulo: 'Curso de NodeJs',
        nombre: 'JC Quinchiguango'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        titulo: 'Curso de NodeJs',
        nombre: 'JC Quinchiguango'
    });
});

app.get('/generics', (req, res) => {
    res.render('generics', {
        titulo: 'Curso de NodeJs',
        nombre: 'JC Quinchiguango'
    });
});
/* app.get('/usuario', (req, res) => res.send('Bienvenido al login de usuario'));
app.get('/generic', (req, res) => res.sendFile(__dirname + '/templated-roadtrip/generic.html'));
app.get('/elements', (req, res) => res.sendFile(__dirname + '/templated-roadtrip/elements.html')); 
app.get('*', (req, res) => res.sendFile(__dirname + '/public/404.html'));
 */
app.listen(port, () => {
    console.log(`corriendo en la ruta: http://localhost:${port}`);
});

