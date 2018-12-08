const fastify = require('fastify')()
const server = require('./server')

fastify.register(server, err => {
  if (err) throw err
})

function start () {
  fastify.listen(process.env.PORT || 3001, err => {
    if (err) throw err
    console.log(`server listening on ${fastify.server.address().port}`)
  })
}

function close () {
  fastify.close(err => {
    if (err) throw err
    console.log(`server stopped listening listening on ${fastify.server.address().port}`)
  })
}

module.exports = {
  start,
  close
}
