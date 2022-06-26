import express from 'express'
import { conectar, agregarProducto } from './src/mysql_conector.js'
//import { render } from 'pug'
const app   =  express() //iniciamos express
//Iniciamos servidor
app.listen ('8000', function(){
    console.log("aplicacion iniciada en el puerto 8000")
})

//Configuracion de Pug
app.set ('views', './vistas')
app.set ('view engine', 'pug')
//configuracion de archivos estaticos
app.use(express.static('./vistas'))
app.use(express.static('./src'))
app.use(express.static('./css'))

app.get('/', function(req, res){
    //res.send('aplicacion iniciada todo va bien')
    //conectar()
    res.render('index', {titulo:'MiTienda: Ventas', dato: 'Texto renderizado desde pug'})
})

app.get('/agregarProducto/:nombre/:precio/:stock', function(req, res){
    let nombre = req.params.nombre
    let precio = req.params.precio
    let stock  = req.params.stock
    
    agregarProducto(nombre, precio, stock)
    res.redirect('/')

    console.log(nombre, precio, stock)
})