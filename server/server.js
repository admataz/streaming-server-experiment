const path = require('path')
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
    let count = []
    request.req.on('data', d=>{
      console.log(d.length)
    })
    // console.log(request.req)
    reply.send(request.req)
  })


  next()
}