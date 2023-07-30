const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const song = require('./api/song')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json({extend: false}))
app.use('/api/song', song)

const port = 12306
app.listen(port, (error) => {
  console.log(`server running on ${port}`)
})

module.exports = app
