import axios, { CancelToken } from 'axios'

export const apiKey = 'bd1c937634764244b515bbf431bacdac'
export const endpoint = 'https://newsapi.org';

export const buildQuery = (uri) => endpoint + uri + '&apiKey=' + apiKey

export const makeQuery = (uri) => {
  const request = () => (axios
    .get(uri)
    .then((resp) => {
      return resp
    })
    .catch((err) => {
      console.log('makeQuery', err)
      return []
    })
  )

  return {
    exec: () => request()
  }
}
