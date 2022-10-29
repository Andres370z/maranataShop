const express=require("express")
const router=express.Router();
const {getProducts, nuevoProducto, getProductoPorId, actualizaProducto, borraProducto} = require("../controllers/productControllers") //Traemos la respuesta json desde el controlador

router.route('/productos').get(getProducts)//Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(nuevoProducto);//establecemos ruta para crear un nuevo producto
router.route('/producto/:id').get(getProductoPorId); //pasra que pruebe su producto por id
router.route('/producto/:id').put(actualizaProducto); //creacion de la ruta para actualizar
router.route('/producto/:id').delete(borraProducto);//borara un producto
module.exports=router;