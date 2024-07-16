const express = require("express");
const app = express();
const router = require('./router/userRouter')
const productRouter = require('./router/productRouter')
const commentRouter= require('./router/commentRouter')
const cors = require("cors");
const PORT = 8080;
const connection  = require('./database/db')

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user',router)
app.use('/api/product',productRouter);
app.use('/api/comment',commentRouter);


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
