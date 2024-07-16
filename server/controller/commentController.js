const {getAll,add} = require('../models/Comment')
module.exports = {
    getAllComment: async function (req, res)  {
      getAll(req.params.product_id, (err,result)=> {
        if (err) {
            res.send(err)
        } 
        else{
            res.send(result)
        }
      })
    },
    addComment: async function (req, res)  {
        add( req.body, (err,result)=> {
        if (err) {
            res.send(err)
        } 
        else{
            res.send(result)
        }
      })
    }
}