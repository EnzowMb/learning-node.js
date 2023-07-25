const { Router } = require("express") //Ferramenta do Express para criar ROTAS
const {getLivros} = require("../controladores/livro")

const router = Router()

router.get('/', getLivros) //O '/' seria o path, o caminho que vc esta criando

router.post('/', (req, res) => {
    res.send('Tipo POST')
})

router.patch('/', (req, res) => {
    res.send('Tipo PATCH')
})

router.delete('/', (req, res) => {
    res.send('Tipo DELETE')
})

module.exports = router //Exporta  o router para os outros arquivos que querem usa-ló