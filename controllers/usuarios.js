//Se obtiene la característica de respuesta, del paquete express.
const { request, response } = require('express');

const getUsuarios = (req = request, res = response ) => {
    //Se crea una variable que obtiene las funcionalidades del objeto Query de la clase Express
    const query = req.query;

    res.json({
        msg: 'Se recibió una consulta de tipo Get, con los siguientes parámetros: ',
        query //Se hace la impresión de los parámetros en pantalla.
    })
}

const postUsuarios = ( req, res = response ) => {
    //Una variable que captura los valores de la request y los asigna.
    const body = req.body; //Al momento de hacer el request, en el body se incluyen los parámetros o valores a consultar.

    res.json({
        msg: 'Se ha recibido una solicitud de Post con la siguiente información: ',
        body

    })
};
const putUsuarios =( req, res = response ) => {
    //Se crea una variable que obtiene su valor del parámetro que se espera en la URL.
    const id = req.params.id;

    res.json({
        msg: 'Se ha recibido una solicitud de PUT con el siguiende id: ',
        id
    })
};
const patchUsuarios =( req, res = response ) => {
    res.json({
        msg: 'Se realizó exitosamente el Patch sobre el API - Desde el controlador.'
    })
};
const deleteUsuarios =( req, res = response ) => {
    res.json({
        msg: 'Se realizó exitosamente el Delete sobre el API - Desde el controlador.'
    })
};


module.exports = {
    getUsuarios,
    postUsuarios,
    putUsuarios,
    patchUsuarios,
    deleteUsuarios,
}