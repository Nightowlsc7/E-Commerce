const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes')


const db = require('./model-mysql/index');



const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));



app.use("/api/user", userRoutes);






app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
