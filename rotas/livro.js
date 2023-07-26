const { Router } = require("express") //Ferramenta do Express para criar ROTAS
const {getLivros, getLivro, postLivro, patchLivro, deleteLivro} = require("../controladores/livro")

const router = Router()

router.get('/', getLivros) //O '/' seria o path, o caminho que vc esta criando

router.get('/:id', getLivro) //O :id pega o id do livro

router.post('/', postLivro)

router.patch('/:id', patchLivro)

router.delete('/:id', deleteLivro)

module.exports = router //Exporta  o router para os outros arquivos que querem usa-ló