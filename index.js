const express = require('express')
const favicon = require('express-favicon');

const path = require('path')

const app = express()

app.set('view engine', 'pug')



app.set('views', path.join(__dirname, 'views'));

app.use('/views', express.static(path.join(__dirname, 'views')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'public','css')));
app.use('/js', express.static(path.join(__dirname, 'public','js')));

app.get('/' , (req, res)=>{
    res.render('index',{})
})

app.get('/quienes-somos' , (req, res)=>{
    res.render('quienes-somos',{})
})

app.get('/skills' , (req, res)=>{
    res.render('skills',{})
})

app.get('/portafolio' , (req, res)=>{
    res.render('portafolio',{})
})

app.get('/contacto' , (req, res)=>{
    res.render('contacto',{})
})

app.listen(9000, () => {
    console.log('Escuchando en el puerto ' + 9000)
})

