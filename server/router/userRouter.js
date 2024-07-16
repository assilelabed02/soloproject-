const { addOne,updateUser} = require('../controller/userController');
const express = require('express');
const  router = express.Router();

router.post('/addone', addOne);

router.put('/update/:id',updateUser);



module.exports = router;