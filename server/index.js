const express = require("express");
const router = require('./routes/routes')
const db = require('./model-mysql/index');



const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));



app.use("/api/user", router);







app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
