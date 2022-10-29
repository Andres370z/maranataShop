const mongoose = require("mongoose")
//CREAMOS ESTE ESQUEMA
const productosSquema = mongoose.Schema({
    nombre:{
        type: String,
        required:[true,"por favor registra primero del producto"],
        trim:true,
        maxLengt: [120, "El nombre del producto no excede los 120 caracteres"]
    },
    precio:{
        type: Number,
        required:[true, "Poor favor registra el precio del prodcuto"],
        maxLengt: [8, "El precio no puede estar por encima de 99.999.999"],
        default: 0.0
    },
    decripcion:{
        type: String,
        required:[true, "por favor registra una descripcio para tu producto"]
    },
    calificacion:{
        type: Number,
        default: 0
         
    },
    imagen: [
        {
            public_id:{
                type: String,
                required:true
            },
            url:{
                type:String,
                required: true

            }
        }
    ],
    categoria:{
        type: String,
        required:[true, "Por favor elige la categoria del producto "],
        enum:{
            values:[
                "Arepas",
                "Empanadas",
                "Acompañamientos en bebidas",
                "Tamales",
                "Tortas",
                "Chatarras"
                
            ]

        }
    },
    vendedor: {
        type: String,
        required:[true,"Por favor difgita el vendedor del producto"]
    },
    inventario:{
        type: Number,
        required:[true, "Registra el stock del producto"],
        maxLengt: [5, "la cantidad maxima es de 99999"],
        default: 0

    },
    numeroCalificaciones:{
        type: Number,
        default: 0

    },
    opiniones:[
        {
            nombreCliente:{
                type:String,
                required: true
            },
            rating:{
                type: Number,
                required: true

            },
            comentarios: {
                type:String,
                required: true
            }
        }
    ],
    fechaCreacion:{
        type:Date,
        default: Date.now
    }

    
})
module.exports = mongoose.model("Producto", productosSquema)