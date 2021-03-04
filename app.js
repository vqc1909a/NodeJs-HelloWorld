const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  return res.send("Hola perro")
})
app.get('/other', (req, res) => {
  return res.send("Other")  
})

app.use('/', (req, res) => {
  return res.send("Pagina no encontrada");
})
app.listen(port, (req, res) => {
  console.log(`Run on port ${port}`)
})