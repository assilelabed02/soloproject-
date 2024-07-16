const { error } = require('console');
const {getAll,getOne,add,update,remove} = require('../models/Product')
module.exports ={
    getAllProducts: async (req,res)=>{
        getAll(async function  (err,result) {
            if (err) {
                res.send(error.message);
            }
            else {
                res.send(result)
            }
            
        })
    
    },
    getOneProduct: async (req,res)=>{
    getOne(req.params.id,async function (err,result) {
        if (err) {
            console.error(err)
        }
        else {
        const sql = 'UPDATE product SET? WHERE id =?'
                connection.query(sql, [updatedProduct, id], (err, result) => {
                    callback(err, result)
                }).send(result)
        }
    })
    },
    addProduct: async (req,res)=>{
        add(req.body,async function (err,result) {
            if (err) {
                console.error(err)
            }
            else {
                res.send(result)
            }
        })
    },
    updateProduct: async (req,res)=>{
        update(req.params.id, req.body,async function (err,result) {
      if (err) {
        res.send(err)
      }
      else{
        res.send(result)
      }
        })
    },
    removeProduct: async (req,res)=>{
        remove(req.params.id,async function (err,result) {
            if (err) {
                console.error(err)
            }
            else {
                res.send(result)
            }
        })
    }
}