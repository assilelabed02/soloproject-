const connection = require('../database/db.js');
module.exports ={
    getAll:async (callback)=>{
        const sql = 'SELECT * FROM product'
        connection.query(sql, (err, result) => {
            callback(err, result)
        })
    },
    getOne:async (id,callback)=>{
        const sql = 'SELECT * FROM product WHERE id =?'
        connection.query(sql, [id], (err, result) => {
            callback(err, result)
        })
    },
    add:async (newProduct,callback)=>{
        const sql = 'INSERT INTO product SET ?'
        connection.query(sql, newProduct, (err, result) => {
            callback(err, result)
        })
    },
    update:async (id, updatedProduct, callback)=>{
        const sql = 'UPDATE product SET ? WHERE id =?'
        connection.query(sql, [updatedProduct, id], (err, result) => {
            callback(err, result)
        })
    },
    remove:async (id, callback)=>{
        const sql = 'DELETE FROM product WHERE id =?'
        connection.query(sql,id, (err, result) => {
            callback(err, result)
        })
    }
}