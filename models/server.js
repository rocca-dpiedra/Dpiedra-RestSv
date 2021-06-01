
//Se importa la biblioteca express.
const express = require('express')
//Se importa la biblioteca Cors, que permite proteger en cierta forma el servidor.
//Definiendo listas blancas o negras para procesar las peticiones.
const cors = require('cors')

//Se declara la clase servidor.
class Server {

    //Se declara el objeto constructor de la clase.
    constructor() {
        //Se instancia el objeto express.
        this.app = express();
        //Se instancia el puerto 
        this.puerto = process.env.PORT;

        //rutas que manejará el servidor.
        this.usuariosRuta = '/api/usuarios';

        //Acá se añaden los middlewares. (Añaden funcionalidades a mi web server.)
        this.middleware();
        //Se llama el método que obtiene o dispara las rutas.
        this.routes();
    }

    //Se declaran los métodos Middleware.
    middleware() {
        //Se utiliza un middleware, que implementa cors para realizar protección sencilla.
        this.app.use( cors() )
        //Lectura y Parseo del Body.
        this.app.use( express.json() ); //Tratará de convertir cualquier información recibida a un JSON

        //Se utiliza un middleware, para servir cóntenido que está en la carpeta pública.
        this.app.use( express.static('public') );
    }

    //Se declara un método para obtener las rutas.
    routes() {
        //Se realiza el efecto de un middleware, para importar las rutas que tenemos en el archivo: routes/user.js
        this.app.use(this.usuariosRuta,require( '../routes/usuarios' ) );
    }

    listen() {
        this.app.listen(this.puerto, () => {
            console.log('Servidor corriendo en puerto: ', this.puerto );
        })
    }          
}



module.exports = Server;