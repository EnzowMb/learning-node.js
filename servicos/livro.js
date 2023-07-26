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

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))

    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id) //Vai procurar qual livro tem o id que foi recebido por parametro

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }
    //Esta seguindo a seguinte logica, de acordo com o exemplo:
    // livrosAtuais[indiceModificado] -> {id: "2", nome: "livro irado"}
    // modificacoes -> {nome: "nome mucho legal"}
    //Atraves do ... (spread) ele vai pegar o q tem digitado nos livrosAtuais e vai modificar de acordo com as modificacoes aplicadas
    //E se n tinha antes, ELE VAI CRIAR!
    //Se já existe, ELE MODIFICA

    livrosAtuais[indiceModificado] = conteudoMudado
    //Ele pega o objeto conteudoMudado, aonde foi criado a string q tem a modificacao
    //E atribui ao indice de onde achou a ID do livro, fazendo assim a mudança
    //Apenas o const conteudoMudado acima não basta pra modificar o arquivo, tem q atribuir depois

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deletarLivro(id) {
    let livros = JSON.parse(fs.readFileSync("livros.json"))

    const livrosFiltrados = livros.filter(livro => livro.id !== id)
    //Vai filtrar todos os livros que não tem a id q vc passou por parametro, ou seja, tirar, deletar ele !

    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletarLivro
}