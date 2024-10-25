const express = require("express")
const produtoRota = require('./rotas/produto.rota')

const app = express()

app.use(express.json())

app.use('/produtos', produtoRota)

app.get('/', (req, res) => {
    res.json({msg: "Hello from Express!"})
})

app.listen(8080, () => {
  console.log("Servidor pronto na porta 8080");
});