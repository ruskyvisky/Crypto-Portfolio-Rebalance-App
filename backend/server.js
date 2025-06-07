const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var cors = require("cors");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());
app.use((_, res) =>{
res.send({
message: 'Not found!'
})
});
app.listen(3000, (req, res)=>{
console.log("Server is listening on port 3000");
})