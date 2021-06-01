//Se desestructura una funcionalidad del paquete express que se llama Router.
const { Router } = require('express');
const { getUsuarios, postUsuarios, putUsuarios, patchUsuarios, deleteUsuarios } = require('../controllers/usuarios');
//Se instancia una variable con las propiedades de la función que se obtuvo.
const router = Router();

//Método Get
router.get('/', getUsuarios);
//Método Post.
router.post('/', postUsuarios);
//Método Put. 
    //Se agrega el ID como un parámetro en la ruta.
router.put('/:id', putUsuarios);
//Método Patch.
router.patch('/', patchUsuarios);
//Método Delete.
router.delete('/', deleteUsuarios);







module.exports = router;