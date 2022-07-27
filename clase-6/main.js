const http = require('http')

const server = http.createServer((req, res)=>{
    res.end('Hola Mundo')
})

const createServer = server.listen(8080, ()=>{
    //console.log(server.address())
    console.log(`Escuchando en el puerto: ${server.address().port}`)
})
