const Productos = require('../models/ProductosModel')

class ProductosController{

    static async getAllProductos(req, res)
    {
       try{
            const productos = await Productos.findAll();
            res.json(productos);
       } catch (error)
       {
        res.status(500)
        .json({error: error.message})
       }
    }
    
    static async createProductos(req, res)
    {
        try
        {
            const productos = await Productos.create(req.body);
            res.status(201).json(productos);
        }catch(error)
        {
            res.status(500).json({error: error.message});
        }
      
    }

    static async getProductosById(req, res)
    {
        try{
            const Productos = await Productos.findById(req.params.id);
            if(!Productos)
            {
                return res.status(404).json({message: "Product not found!"});
            }
            return res.json(productos);
        }catch(error)
        {
            res.status(500).json({error: error.message});
        }
    }

    static async updateProductos(req, res){
        
        try{
        const Productos = await Productos.update(req.params.id, req.body);
        if(!Productos)
        {
            return res.status(404).json({message: "Product not found"})
        }
        return res.json(productos);
        }catch(error){
            res.status(500).json({error: error.message});

        }
    }
    static async deleteProductos(req, res)
    {
        try{
            const Productos = await Productos.delete(req.params.id);
            if(!Productos)
            {
                return res.status(404).json({message: "Product not found!"});
            }
            return res.json({message: "Producto delete"});
        }catch(error)
        {
            res.status(500).json({error: error.message});
        }
    }
    
}

module.exports = ProductosController;