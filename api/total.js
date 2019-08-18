const mongo = require('../lib/mongo')
const logger = require('../lib/logger')

function getParams (url) {
  const list = url.split('/')
  return {
    type: list[3]
  }
}

module.exports = async (request, response) => {
  const db = await mongo()
  const logs = db.collection(process.env.MONGODB_COLLECTION)
  const params = getParams(request.url)
  const { type } = params
  const query = type ? { type: type, partOf: '' } : { partOf: '' }
  logger('info', ['api', 'total', 'type', type || 'any'])
  try {
    const count = await logs.countDocuments(query)
    logger('info', ['api', 'total', 'success', count])
    response.json({ total: count })
  } catch (error) {
    logger('error', ['api', 'total', error])
    response.status(500)
    response.send(error)
  }
}
