const express = require("express") //É uma função que CRIA um servidor EXPRESS

const rotaLivro = require("./rotas/livro")
const rotaFavorito = require("./rotas/favorito")

const cors = require("cors")

const app = express() //Aqui criou de fato uma aplicação EXPRESS e colocou na constante app
app.use(cors({ origin: "*" }))
//O CORS - Cross-origin Resource Sharing - é um mecanismo usado para adicionar cabeçalhos 
//HTTP que informam aos navegadores para permitir que uma aplicação Web 
//seja executada em uma origem e acesse recursos de outra origem diferente.

// Esse * simboliza que todas as origens estao permitidas para fazer requisições

app.use(express.json()) //Agora nossa aplicação aceita receber bodys do tipo JSON

app.use('/livros', rotaLivro)
app.use('/favoritos', rotaFavorito)

const port = 8000 //Está dizendo qual vai ser a porta do locahost, o 3000 é o front
//Com react e o 8000 é o back com Node

app.listen(port, () => { //Escute a porta 8000 porque pode chegar requisições, pedidos de usuarios por lá.
    console.log(`Escutando porta ${port}`)
})