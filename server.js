const http = require('http')

const server = http.createServer((req, res) => {
  res.send('t63 Component Library')
})

server.listen(3000)