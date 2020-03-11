const express = require('express')

let app = express()

app.get('/message', function(req, res) {

  res.send('Hello World!')

})


app.get('/hour', function(req, res) {
  const hour = {
    text: new Date().toISOString(),
  }

  res.send(hour)
})


app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
