const express = require('express')

const app = express()

app.get('/', function(req, res)
{
  res.send('Hola Mundo, tercer mensaje!!')
}
)

app.listen(3000)
