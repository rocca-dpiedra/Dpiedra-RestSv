//En este proyecto se buscará trabajar con un servidor Express, orientado o identificado en clases.
//1- Se importa el paquete para manejo de rutas "path"
require('dotenv').config();

//2- Se importa un objeto de la clase servidor.
const Server = require('./models/server');

//3- Se declara un objeto de tipo servidor.
const servidor = new Server();

servidor.listen();