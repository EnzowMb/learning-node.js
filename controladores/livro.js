const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletarLivro } = require("../servicos/livro")

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

        //Verifica se tem alguma id && verifica se é um numero ou não:
        //Number(2) -> 2 -> true
        // Number("batata") -> NaN -> false
        if (id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            res.status(422) //Algum dado enviado não é consistente com que a aplicação espera
            res.send("Id inválido")
        }

    } catch (error) {
        res.status(500) //Caso der erro, retorne o erro 500, que é erro do servidor
        res.send(error.messsage) //Deve sempre retornar alguma coisa com .send
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body //O req.body retorna o q vc inserido, ou seja, os parametros dentro do JSON
        
        if (req.body.nome) { //Verifica se o campo nome existe
            insereLivro(livroNovo)
            res.status(201)
            res.send("Livro inserido com sucesso")
        } else {
            res.status(422)
            res.send("O campo nome é obrigatorio")
        }

    } catch (error) {
        res.status(500)
        res.send(error.messsage)
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const body = req.body

            modificaLivro(body, id)
            res.send("Item modificado com sucesso")
        } else {
            res.status(422) //Algum dado enviado não é consistente com que a aplicação espera
            res.send("Id inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.messsage)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deletarLivro(id)
            res.send("Livro deletado com sucesso")
        } else {
            res.status(422) //Algum dado enviado não é consistente com que a aplicação espera
            res.send("Id inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.messsage)
    }
}

module.exports = { //Exporta o arquivo e deixar aberto para outras pessoas checarem
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}