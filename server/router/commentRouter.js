const express = require('express');
const commentRouter = express.Router();
const {getAllComment,addComment} = require('../controller/commentController')

commentRouter.get('/getall/:product_id',getAllComment)
commentRouter.post('/add/',addComment)

module.exports = commentRouter;