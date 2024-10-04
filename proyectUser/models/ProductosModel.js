const pool = require('../config/db');

class productos{

    static async findAll(){
        const result = await pool.query('SELECT * FROM productos');
        return result.rows;
    }

    static async create(data)
    {
        const {producto, precio, stock_minimo, stock_maximo, existencias, SKU } = data; 
        const result = await pool.query('INSERT INTO productos(producto, precio, stock_minimo, stock_maximo, existencias, SKU) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
            [producto, precio, stock_minimo, stock_maximo, existencias, SKU]

        );
        return result.rows[0];
    }

    static async findById(id)
    {
        const result = await pool.query('SELECT * FROM productos where id = $1',[id]);
        return result.rows[0];
    }

    static async update(id, data)
    {
        const {producto, precio, stock_minimo, stock_maximo, existencias, SKU} = data;
        const result = await pool.query
        ('UPDATE productos SET nombre = $1, producto = $2, precio = $3, stock_minimo = $4, stock_maximo = $5, existencias = $6, SKU = $7, update_at = current_timestamp where id = $3 and delete_at = null RETURNING *',
        [producto, precio, stock_minimo, stock_maximo, existencias, SKU, id]);
        return result.rows[0];

    }
 
    static async delete(id)
    {
        const result = await pool.query('DELETE FROM productos set delete_at now() where id = $1 RETURNING *',[id]);
        return result.rows[0];
    }

}



module.exports = productos;