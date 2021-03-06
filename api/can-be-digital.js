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
  const query = type ? { isManual: true, canBeDigital: true, isDummy: false, type: type, partOf: '' } : { isManual: true, canBeDigital: true, isDummy: false, partOf: '' }
  logger('info', ['api', 'can-be-digital', 'type', type || 'any'])
  try {
    const count = await logs.countDocuments(query)
    logger('info', ['api', 'can-be-digital', 'success', count])
    response.json({ total: count })
  } catch (error) {
    logger('error', ['api', 'can-be-digital', error])
    response.status(500)
    response.send(error)
  }
}
