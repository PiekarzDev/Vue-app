console.log('Siema!')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/karol', (req, res) => {
  res.send({
    message: 'Witaj Swiecie!'
  })
})

app.listen(process.env.PORT || 8080)
