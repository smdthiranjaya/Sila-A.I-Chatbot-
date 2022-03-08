const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send('<meta http-equiv="refresh" content="0; URL="/>')
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Creator: Hashx")
  })
}

module.exports = keepAlive
