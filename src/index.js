const express = require("express");
const userRoutes = require('./routes/user')

const app = express();
const port = 3000;

app.use(express.json());
app.use(userRoutes);


app.listen(port, () => console.log('server is running at port 3000'))