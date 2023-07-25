const { getTodosLivros } = require("../servicos/livro")

function getLivros(req, res) {
        try {
            const livros = getTodosLivros()
            res.send(livros)
        } catch (error) {
            res.status(500) //Caso der erro, retorne o erro 500, que é erro do servidor
            res.send(error.messsage) //Deve sempre retornar alguma coisa com .send
        }
}

module.exports = { //Exporta o arquivo e deixar aberto para outras pessoas checarem
    getLivros
}