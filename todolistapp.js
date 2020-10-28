const express = require("express")
const app = express()

//Página principal da aplicação
app.get("/", function(req, res){
  res.sendFile(__dirname + "/html/home.html")
})

//Inclua para usar o css da pasta
app.use(express.static(__dirname + '/css'));

//Essa linha sempre tem de estar no fim do arquivo
app.listen(8080, function(){console.log("Servidor rodando na URL: http://localhost:8080")})
