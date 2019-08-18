const mongo = require('../lib/mongo')
const logger = require('../lib/logger')

function getParams (url) {
  const list = url.split('/')
  return {
    type: list[3],
    status: list[4]
  }
}

module.exports = async (request, response) => {
  const db = await mongo()
  const logs = db.collection(process.env.MONGODB_COLLECTION)
  const params = getParams(request.url)
  const { type, status } = params
  let query = type ? { type: type.toLowerCase() } : {}
  logger('info', ['api', 'parts', 'type', type || 'any'])
  query = status ? Object.assign({}, query, { status: status.toLowerCase() }) : query
  logger('info', ['api', 'parts', 'status', status || 'any'])
  try {
    const count = await logs.countDocuments(query)
    logger('info', ['api', 'parts', 'success', count])
    response.json({ total: count })
  } catch (error) {
    logger('error', ['api', 'parts', error])
    response.status(500)
    response.send(error)
  }
}
