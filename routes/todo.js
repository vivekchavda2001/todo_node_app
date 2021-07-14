const router = require('express').Router();
const Todo = require('../models/todo')


//routes

router.post("/add/todo",(req,res)=>{
    const { todo } = req.body;
    const newTodo = new Todo({todo})
    console.log(todo,":Data");
    newTodo.save()
    .then(()=>{
        console.log("Succesfully added");
        res.redirect("/")
    })
    .catch((err) => console.log(err));
})

    .get("/delete/todo/:_id", (req, res) => {
        const { _id } = req.params;
        Todo.deleteOne({ _id })
            .then(() => {
                console.log("Deleted Todo Successfully!");
                res.redirect("/");
            })
            .catch((err) => console.log(err));
    });
module.exports = router;