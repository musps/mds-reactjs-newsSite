import { buildQuery, makeQuery } from './../api'

// Default value
const dCriteria = 'reactjs'
const dFrom = '2018-08-26'
const dLanguage = 'fr'

const _uri = (sCriteria = dCriteria, sFrom = dFrom, sLanguage = dLanguage) => {
  const uri = `/v2/everything?q=${sCriteria}&from=${sFrom}&language=${sLanguage}&sortBy=publishedAt`
  return buildQuery(uri)
}

const everythingRequest = async (sCriteria = dCriteria, sFrom = dFrom, sLanguage = dLanguage) => {
  const uri = _uri(sCriteria, sFrom, sLanguage)
  const data = await makeQuery(uri).exec().then((resp) => {
    return resp.data.articles
  }).catch((err) => {
    return []
  })
  // Return data.
  return data
}

export default everythingRequest
