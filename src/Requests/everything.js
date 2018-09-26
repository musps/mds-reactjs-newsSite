import { buildQuery, makeQuery } from '../Providers/api'

// Default value
const dCriteria = 'reactjs'
const dFrom = '2018-08-26'
const dLanguage = 'fr'

const buildUri = (sCriteria = dCriteria, sFrom = dFrom, sLanguage = dLanguage) => {
  const uri = `/v2/everything?q=${sCriteria}&from=${sFrom}&language=${sLanguage}&sortBy=publishedAt`
  return buildQuery(uri)
}

const everythingRequest = async (sCriteria = dCriteria, sFrom = dFrom, sLanguage = dLanguage) => {
  const uri = buildUri(sCriteria, sFrom, sLanguage)
  const data = await makeQuery(uri)
    .exec()
    .then(resp => resp.data.articles)
    .catch(() => [])

  return data
}

export default everythingRequest
