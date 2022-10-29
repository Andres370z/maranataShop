const app=require("./app")
const conectaBaseDatos = require("./config/dataBaseConnection");
//Setear el archivo
const dotenv=require("dotenv");
dotenv.config({path: 'back/config/config.env'})
//Procedemos a configurar base de datos
conectaBaseDatos();
//Llamamos al servidor
const server = app.listen(process.env.PORT,()=>{
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})
