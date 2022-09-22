const fp = require('fastify-plugin')
const mercurius = require('mercurius')
const { schema } = require('../graphQl/schema')
const { resolvers } = require('../graphQl/resolvers')

module.exports = fp(async function (fastify) {
  fastify.register(mercurius, {
    schema,
    resolvers,
    graphiql: true
  })
})
