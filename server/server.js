const path = require('path')
const fs = require('fs')
const fastifyStatic = require('fastify-static')

module.exports = function (fastify, opts, next) {

fastify.addContentTypeParser('*', function (req, done) {
  done()
})


fastify.register(fastifyStatic, {
  root: path.join(__dirname, '../', 'public')
})

fastify.get('/upload', function (req, reply) {
  reply.sendFile('upload.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
})

  fastify.get('/', (req, reply) => {
    reply.send({
      hello: 'world'
    })
  })

  fastify.post('/submit', (request, reply) => {
    const f = fs.createWriteStream('./test.jpg')
    // we can pipe the request to a file
    // I was hoping we could stream upload from the browser - but that's not possible yet
    request.req.pipe(f)
    reply.send({uploaded: true})
  })


  next()
}