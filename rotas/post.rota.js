const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const postMid = require('../middleware/validarPost.middleware')
const { Post } = require('../models')

const posts = {}

router.post('/', postMid)
router.put('/', postMid)

router.get('/', async (req, res) => {
    const posts = await Post.findAll()
    res.json({posts: posts})
})

router.get('/:id', async (req, res) => {
    const post = await Post.findByPk(req.params.id)
    res.json({posts: post})
})

router.put('/', async (req, res) => {
    const id = req.query.id
    const post = await Post.findByPk(id)
    if (post){
        post.nome = req.body.nome
        post.descricao = req.body.descricao
        post.preco = req.body.preco
        await post.save()
        res.json({msg: "Produto atualizado com sucesso!"})
    }else{
        res.status(400).json({msg: "produto não encontrado!"})
    }
})

router.delete('/', async (req, res) => {
    const id = req.query.id
    const post = await Post.findByPk(id)
    if (post){
        await post.destroy()
        res.json({msg: "Produto deletado com sucesso!"})
    }else{
        res.status(400).json({msg: "Produto não encontrado!"})
    }
})

router.post('/', async (req, res) => {
    const post = await Post.create(req.body)
    res.json({msg: "Produto adicionado com sucesso!"})
})



module.exports = router