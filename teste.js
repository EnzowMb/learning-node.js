const fs = require("fs") //fs significa file system - ferramenta para manipular arquivos
//Este fs tem a capacidade de ler arquivos

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json")) //essa readFileSync tem justamente essa propriedade de ler arquivos
//JSON.parse é transformar para um formato de arquivo JSON
const novoDado = { id: '3', nome: 'Livro mais que demais'}

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado])) //Os ... informa que é pra colocar tudo o que tem em dados atuais
//Escreve uma lista nova com os dados atuais e tambem com o novo dado
// O JSON.stringify é o inverso de JSON.parse, ou seja, pega o JSON e transforma em texto

console.log(JSON.parse(fs.readFileSync("livros.json")))