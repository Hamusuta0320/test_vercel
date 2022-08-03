const express = require("express")
const port = 80
const app = express()
app.get('/', (req, res)=> {
  res.send('Hello Wo')
})
app.listen(port, ()=> {
  console.log(`Express start at ${port}`)
})