const fs = require("fs")

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livroFiltrado = livros.filter(livro => livro.id === id )[0]
    //SEMPRE VAI RETORNAR UMA LISTA DE 1(UM) ELEMENTO
    //ESSE CARA SE ENCONTRA NO INDICE 0
    //VAI SER UMA LISTA ASSIM: [ {id: 2, nome: "livro irado"} ]

    return livroFiltrado
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const novaListaDeLivros = [ ...livros, livroNovo ]
    //ESSE CONCEITO DE COLOCAR [ ...listaAntiga, listaNova], onde os ...Nome é qual
    //lista vc quer incluir algo, e o , livroNovo é o q vc vai inserir
    //Isso chama spread

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro
}