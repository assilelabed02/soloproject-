const express = require('express');
const productRouter = express.Router();
const {getAllProducts,getOneProduct,addProduct,updateProduct,removeProduct} = require('../controller/productController');

productRouter.get('/getall', getAllProducts);
productRouter.get('/getone/:id', getOneProduct);
productRouter.post('/post',addProduct)
productRouter.put('/put/:id', updateProduct)
productRouter.delete('/delete/:id', removeProduct);






module.exports = productRouter;