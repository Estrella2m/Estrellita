const express = require('express');
const ProductosController = require('../controllers/ProductosController');

const routers = express.Router();

routers.get('/Productos', ProductosController.getAllProductos);
routers.get('/Productos/:id', ProductosController.getProductosById);
routers.post('/productos',ProductosController.createProductos);
routers.put('/productos/:id', ProductosController.updateProductos);
routers.delete('/productos/:id', ProductosController.deleteProductos);


module.exports = routers;