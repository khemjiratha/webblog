let express = require('express')
let bodyParser = require('body-parser')
const {sequelize} = require('/.models')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

require('./route')(app)

app.get('/status', function (req,res){
    res.send('Hello nodejs server eiei khemjira')
})

app.get('/hello/:name', function(req,res){
    console.log('hello - ' + req.params.name)
    res.send('say hello with ' + req.params.name)
})

let port = 8081

sequelize.sync({force: false}.then(() =>{
    app.listen(port, function(){
        console.log('server runing on ' + port)
})

}) )