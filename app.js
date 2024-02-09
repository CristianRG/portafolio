// importamos express para las rutas de nodejs
const express = require('express')
const path = require('path')



const app = express();

app.use(express.static('public'))

// la primera ruta de nuestro portafolio web
app.get('/', (req, res) => {
    // obtenemos el path de la ubicación del documento html
    const html = path.join(__dirname, 'src', 'views', 'index.html')
    // devolver el documento html
    res.sendFile(html);
})

// en caso de ingresar a una ruta que no existe
app.use((req, res) => {
    res.status(404).send('404 Not Found');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000. http://localhost:3000');
})