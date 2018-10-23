const express = require('express')
const app = express()
const cakes = require('./data.json')

app.get('/cake', (req, res) => {
  res.send("🍰")
})

app.get('/cakes/:id', (req,res) => {
  const num = req.params.id
  for (var i = 0; i < cakes.length; i++) {
    if (cakes[i].id == num) {

      res.json({cake: cakes[i]})
    }
  }
})

app.listen(5000, () => console.log('server is running on 5000'))
