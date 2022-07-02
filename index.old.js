const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  switch(req.url){
    case '/hello':
      res.write('Hola Mundo!!')
      res.end();
      break;
    case '/goodbye':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Adios Mundo!!');
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'})
      res.write('No se pudo encontrar la pagina')
      res.end();
      break;
  }

});

server.listen(port, hostname, ()=>{
  console.log(`Sever started on port ${port}`)
});