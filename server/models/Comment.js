const connection = require('../database/db')
module.exports ={
    getAll: async function (product_id,callback) {
        const sql = 'SELECT * FROM comment WHERE product_id = ?'
        connection.query(sql,product_id, (err, result) => {
            callback(err,result)
        })
    },
    add: async function (comment, callback) {
        const sql = 'INSERT INTO comment SET ?'
        connection.query(sql, comment, (err, result) => {
            callback(err, result)
        })
    }
}