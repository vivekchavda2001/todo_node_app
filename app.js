const express = require('express')
const mongoose = require('mongoose')
const app = express();

mongoose.connect("mongodb+srv://vivekchavda:123@cluster0.sbq38.mongodb.net/Todo_app?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.set('view engine', 'ejs')


app.use(require('./routes/todo'))
app.use(require('./routes/index'))
app.listen(process.env.PORT || 3000,()=>console.log("Server Started on 3000"))