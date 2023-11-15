//requiero express
const express = require('express')
//requiero pat para manipular las rutas
const path = require('path')
// app guarda las funcionalidades de express
const app = express()

//levanto el servidor  en el puerto 3001
//cambiando el puerto establecido por render:
const port = process.env.PORT||3001
//PORT guarda el puerto que utilice Render y en el caso contrario se utilizará nuestro puerto 3001.
app.listen(port,()=>console.log(`Servidor corriendo en el puerto ${port}`))


// defino la raiz/ de donde estoy parado, luego ./views...
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'))//linkeo el home.html a la raiz
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});
// path public guarda la ruta hasta public(mi directorio)
const pathPublic = path.resolve(__dirname,'./public')//__dirname representa el directorio actual del archivo en el que se encuentra este código.


// funcion para usar/servir mis archivos estaticos desde el directorio(pathPublic)
app.use(express.static(pathPublic))