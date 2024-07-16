const connection = require('../database/db')
module.exports = {
    add: async (newUser,callback)=>{
        const sql = 'INSERT INTO user SET ?'
        connection.query(sql,newUser, (err, result) => {
            callback(err,result)
        })
    },
    update: async (id,newUser,callback) => {
        const sql = `UPDATE user SET ? WHERE id = ${id}`
        connection.query(sql,[newUser,id], (err, result) => {
            callback(err, result)
        })
    },
}