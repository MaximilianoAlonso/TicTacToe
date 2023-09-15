const express = require("express");
const app = express()
const port = 3000;

app.use(express.static(__dirname + "/public"));

app.use( (req,res) => {
    res.sendFile(__dirname + "/index.html")
})


app.listen(port, () => console.log("Servidor de express levantado en el puerto "+port));