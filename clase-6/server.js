// const { count } = require('console')
const express = require('express')
const { Server } = require('http')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1> Bienvenidos al servidor express</h1>  ')
})

let count = 0

app.get('/visitas', (req, res) => {
    count ++
    
    res.send(`Visitas ${count}`)
})

app.get('/fyh', (req, res) => {
    const fyh = new Date()
    const hora= fyh.getHours()
    const minutos = fyh.getMinutes()
    const segundos = fyh.getSeconds()

       res.send(`La fecha y hora es: ${hora} horas - ${minutos} minutos - ${segundos} segundos`)
})


const PORT = 4000


const server = app.listen(PORT, () => {

    console.log(`Escuchando en el puerto: ${PORT}`)

})


server.on('error', err => console.log(err)) // si al ejecutar hay algun error, mostraria el string