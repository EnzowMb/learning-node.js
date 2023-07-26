const { getTodosLivros, getLivroPorId } = require("../servicos/livro")

function getLivros(req, res) {
        try {
            const livros = getTodosLivros()
            res.send(livros)
        } catch (error) {
            res.status(500) //Caso der erro, retorne o erro 500, que é erro do servidor
            res.send(error.messsage) //Deve sempre retornar alguma coisa com .send
        }
}

function getLivro(req, res) {
    try {
        const id = req.params.id //pega os parametros que estão na URL
        const livro = getLivroPorId(id)
        res.send(livro)
    } catch (error) {
        res.status(500) //Caso der erro, retorne o erro 500, que é erro do servidor
        res.send(error.messsage) //Deve sempre retornar alguma coisa com .send
    }
}

module.exports = { //Exporta o arquivo e deixar aberto para outras pessoas checarem
    getLivros,
    getLivro
}