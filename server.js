const express = require('express');
const app = express();

const hbs=require('hbs');

hbs.registerPartials(__dirname + '/views/partial');

app.set('view engine', 'hbs'); 

app.get('/',(req,res)=>{
   res.render('home',{

   }); 
  
});
app.use(express.static(__dirname+'/Public'));

app.listen(3000,()=>{
    console.log('Escuchando peticiones en el puerto 3000');
});
