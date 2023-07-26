const express = require("express") //É uma função que CRIA um servidor EXPRESS

const rotaLivro = require("./rotas/livro")

const app = express() //Aqui criou de fato uma aplicação EXPRESS e colocou na constante app

app.use(express.json()) //Agora nossa aplicação aceita receber bodys do tipo JSON

app.use('/livros', rotaLivro)

const port = 8000 //Está dizendo qual vai ser a porta do locahost, o 3000 é o front
//Com react e o 8000 é o back com Node

app.listen(port, () => { //Escute a porta 8000 porque pode chegar requisições, pedidos de usuarios por lá.
    console.log(`Escutando a porta ${port}`)
})