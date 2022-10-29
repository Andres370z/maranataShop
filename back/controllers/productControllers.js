const productos = require("../models/productos");
const producto = require("../models/productos");
const fetch = (url)=> import('node-fetch').then(({default:fetch}) => fetch(url));//Usurpamos el required
//para ver la lista de productos
exports.getProducts= async(req,res,next) =>{
    const productos = await producto.find();
    res.status(200).json({
    success:true,
    cantidad: producto.length,//trae la cantidad de productos que exisen
    productos
    })
}

// ver un producto por id 

exports.getProductoPorId = async(req,res,next) =>{
    const buscaproducto = await producto.findById(req.params.id)//respeta la cantidad de caracteres de id 12 caracteres
    if (!buscaproducto){
        return res.status(404).json({
            success: false,
            message: "Ese producto no lo encontre"
        })
    }
    res.status(200).json({
        success:true,
        message: "Aqui esta el producto que buscas",
        buscaproducto
    })
}

//creas un nuevo producto
exports.nuevoProducto = async (req,res,next) => {
    const product = await productos.create(req.body);//productos viene de Models producto.js

    res.status(201).json({
        success: true,
        message: "producto agrgado a la base de datos",
        product
    })

}
//actualiza un producto
exports.actualizaProducto = async (req,res,next) =>{
    let buscaproducto = await producto.findById(req.params.id)//variable a actualizar
    if (!buscaproducto){//lo que pasa si el objeto no existe
        return res.status(404).json({
            success: false,
            message: "Ese producto no lo encontre"
        })
    }
    //si si existe ejecute esto
    product = await producto.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators:true
    })//tespuesta de exito
    res.status(200).json({
        success: true,
        message: "Producto actualizado",
        product
        
    })
    
    
}
//para borrae un producto
exports.borraProducto = async (req,res,next) =>{
    const buscaproducto = await producto.findById(req.params.id)//variable a actualizar
    if (!buscaproducto){//lo que pasa si el objeto no existe
        return res.status(404).json({
            success: false,
            message: "Ese producto no lo encontre"
        })
    }
    await buscaproducto.remove();//le decimos a const que es buscaProducto que lo elimine de la base de datos 
    res.status(200).json({
        success: true,
        message: "producto eliminado de manera exitosa"
    })
}
//ver todos los productos 
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err=> console.error(err))
}   
//verProductos(); vi los productos sin necesidad de ir al postman
// ver por id 
function verProductosPorId(id){
    fetch('http://localhost:4000/api/producto/'+ id)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err=> console.error(err))

}
//verProductosPorId('63589d981083d08d9b395ed3'); //probamos con el metodo id