const express = require('express');
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const produtoMid = require('../middleware/validarProduto.middleware');
const { Produto } = require('../models');

const produtos = {}

router.post('/', produtoMid)
router.put('/', produtoMid)


router.get('/', async (req, res) => {
    const produtos = await Produto.findAll()
    res.json({produtos: produtos})
})

router.get('/:id', async (req, res) => {
    const produto = await Produto.findByPk(req.params.id)
    res.json({produtos: produto})
})

router.put('/', async (req, res) => {
    const id = req.query.id
    const produto = await Produto.findByPk(id)
    if (produto){
        produto.nome = req.body.nome
        produto.descricao = req.body.descricao
        produto.preco = req.body.preco
        await produto.save()
        res.json({msg: "Produto atualizado com sucesso!"})
    }else{
        res.status(400).json({msg: "produto não encontrado!"})
    }
})


router.post('/', async (req, res) => {
    const Produto = await Produto.create(req.body)
    res.json({msg: "Produto adicionado com sucesso!"})
})



router.delete('/', async (req, res) => {
    const id = req.query.id
    const produto = await Produto.findByPk(id)
    if (produto){
        await produto.destroy()
        res.json({msg: "Produto deletado com sucesso!"})
    }else{
        res.status(400).json({msg: "Produto não encontrado!"})
    }
})


module.exports = router