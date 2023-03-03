import express from "express";

const app = express();
app.use('/', (req,res) =>{
    res.send('hola mundo')
})



const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
   console.log(`Servidor funcionando desde puerto ${PORT}`);
});