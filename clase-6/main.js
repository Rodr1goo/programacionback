const http = require('http')

const server = http.createServer((req, res)=>{
    const Hora = new Date().getHours()
    if(6<=Hora && Hora<=12) {
        res.end('<h1>Buen día</h1>')
    } else if(13<=Hora && Hora<=19){
        res.end('<h1>Buenas tardes</h1>')
    } else if(20<=Hora && Hora<=5){
        res.end('<h1>Buenas noches</h1>')
    }
})

const createServer = server.listen(8080, ()=>{
    //console.log(server.address())
    console.log(`Escuchando en el puerto: ${server.address().port}`)
})
