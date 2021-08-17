const http = require('http');

//console.log('hola mundo');

http.createServer((req, res) => {
   // console.log(req);
   res.setHeader('Content-Disposition','attachment; filename=lista.csv')
    res.writeHead(200,{'Content-Type':'application/csv'})
   /*  const elemento={
        id:1,
        nombre:'carlos',
        ciudad:'otavalo'
    }
    res.write(JSON.stringify(elemento)); */
    res.write('id, nombre\n');
    res.write('1, Julio\n');
    res.write('2, Cesar\n');
    res.end();
}).listen(8080);
console.log('corriendo en el puerto',8080);
console.log('http://localhost:8080');