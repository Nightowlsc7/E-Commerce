const express = require("express");
const userRoutes = require('./routes/routes')
require('./model-mysql/index');


const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));



app.use("/api/user", userRoutes);






app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
