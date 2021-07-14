const router = require('express').Router()
const Todo = require('../models/todo')

router.get("/",async(req,res)=>{
    const AllTodo  = await Todo.find() 
    res.render('index', { todo: AllTodo})
    
})

module.exports = router