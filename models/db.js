import { pool } from '../config/config.js'


async function getProducts() {
    const [Product] = await pool.query(`
    SELECT * FROM 
    products 
    `)
    return Product
}
async function getProduct(id) {
    const [Product] = await pool.query(`
    SELECT * FROM products WHERE id = ?
    `, [id])
    return Product
}

async function deleteProduct(id){
    const [Product] = await pool.query(`
    DELETE FROM products WHERE id = ?
    `, [id])
}
// console.log(await getProducts())




export  {getProducts, getProduct, deleteProduct}