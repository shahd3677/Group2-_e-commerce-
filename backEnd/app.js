const express = require('express');
const app = express();
const port = 3000;
const productpath = require('./routers/products')

/// middalware express.json() ////
app.use(express.json())
app.use('/api/products', productpath)


app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
