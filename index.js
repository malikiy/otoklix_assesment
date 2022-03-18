const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const otoRouter = require("./simpleCrudOto/router");

const app = express()
app.use(cors())
app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use("/api/oto", otoRouter);

app.listen(3000, () => {
    console.log('server running on localhost:3000');
  })