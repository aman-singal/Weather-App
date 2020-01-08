const express = require('express');
const app = express();
const cityRoute = require('./api');


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/public' , express.static( __dirname + "/public"));
console.log( __dirname + "/public");
// app.set('view engine' , 'hbs');

app.use('/checking'  , cityRoute);
// app.get('/' , (req,res)=>{
//     res.render('index')
// })
// app.get('/weather' , (req,res)=>{
//     res.render('weather');
// })






app.use('/' , (req,res)=>{
    res.send('<h1> ::: 404 NOT FOUND ::: </h1>')
})
app.listen(1200, ()=>{
    console.log("Server Up and Running http://localhost:1200/");
})

