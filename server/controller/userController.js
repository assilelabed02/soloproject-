const {add,update} = require('../models/User')

module.exports = {
    addOne: async (req,res)=>{
        add(req.body,function (err,result) {
            if (err) {
                res.send(err);
            }
            else{
                res.send(result)
            }
        })
    },
    updateUser: async (req,res)=>{
        update(req.params.id, req.body, function (err, result) {
            if (err) {
                res.send(err);
            }
            else{
                res.send(result)
            }
        })
    }
}