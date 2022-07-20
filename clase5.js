const fs = require ('fs')

const moment = require ('moment')

const calcularFecha = (fecha) => {
    const hoy = moment().format("DD/MM/YYYY");
    const hoy1 = moment().format("L");
    console.log(hoy)
    console.log(hoy1)


}

(calcularFecha)


