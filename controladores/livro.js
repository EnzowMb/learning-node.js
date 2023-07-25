function getLivros(req, res) {
        try {
            res.send("Olá Mundo!")
        } catch (error) {
            res.status(500) //Caso der erro, retorne o erro 500, que é erro do servidor
            res.send(error.messsage) //Deve sempre retornar alguma coisa com .send
        }
}

module.exports = { //Exporta o arquivo e deixar aberto para outras pessoas checarem
    getLivros
}