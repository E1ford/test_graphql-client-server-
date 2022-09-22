const fp = require('fastify-plugin')

module.exports = fp(async function (fastify) {
  fastify.register(require('@fastify/cors'), () => {
    return (req, callback) => {
      const corsOptions = { origin: true };
      if (/^localhost$/m.test(req.headers.origin)) corsOptions.origin = false
      callback(null, corsOptions)
    }
  })
})
