const mongoose=require("mongoose")
const conectaBaseDatos = () =>{
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true//escribe bien
    }).then(con=>{
        console.log(`Base de datos conetada con el servidor: ${con.connection.host}`)
    }).catch(con=>{
        console.log(`No se conecto a la base de datos`)
    })
}
module.exports = conectaBaseDatos;