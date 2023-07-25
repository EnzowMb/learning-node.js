const fs = require("fs")

function getTodosLivros() {
    JSON.parse(fs.readFileSync("livros.json"))
}

module.exports = {
    getTodosLivros
}