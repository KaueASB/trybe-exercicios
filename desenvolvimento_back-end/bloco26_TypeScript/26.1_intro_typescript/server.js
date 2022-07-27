const express = require('express')

const app = express()

app.use(express())

app.get('/', (_req, res) => {
  res.send('Aqui')
})

app.listen(3000, () => console.log('Rodando na porta 3000'));