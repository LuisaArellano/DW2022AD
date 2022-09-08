
const express = require('express');
const { read } = require('fs');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'Public')));  // va a estar disponible en la carpeta Public

// def de la app
app.get('/bigote', (request, response) =>{
    console.log('Hola mundo');
    response.send('<h1>Hola mundo</h1>')

});

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'views', 'index.html'));
    
})
//prueba query
app.get('/prueba1', (req, res)=>{
    console.log(req.query)
    res.send("datos enviados por query"+req.query.name)
})

//prueba params
app.get('/prueba2/:name/:age',(req,res)=>{
    console.log(req.params)
    console.log(req.query)
    res.send("datos enviados por params"+req.params.name)

})
app.post('/prueba3',(req,res) =>{
    console.log(req.body);
    res.send("datos recibidos")

});

//lanzar la app
app.listen(8080,()=>{
    console.log("Servidor en línea");

});
   



