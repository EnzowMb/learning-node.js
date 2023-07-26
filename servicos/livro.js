const fs = require("fs")

function getTodosLivros() {
    JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livroFiltrado = livros.filter(livro => livro.id === id )[0]
    //SEMPRE VAI RETORNAR UMA LISTA DE 1(UM) ELEMENTO
    //ESSE CARA SE ENCONTRA NO INDICE 0
    //VAI SER UMA LISTA ASSIM: [ {id: 2, nome: "livro irado"} ]

    return livroFiltrado
}

module.exports = {
    getTodosLivros,
    getLivroPorId
}