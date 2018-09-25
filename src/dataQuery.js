import React, { Component } from 'react'
import axios, { CancelToken } from 'axios'

const endpoint = 'https://opendata.paris.fr/api/records/1.0/search/'
const uriByName = (criteria) => `${endpoint}?dataset=liste_des_prenoms_2004_a_2012&q=${criteria}&rows=30&facet=sexe&facet=annee&facet=prenoms`

export const queryByName = (criteria) => {
  const source = CancelToken.source()
  const request = () => axios.get(uriByName(criteria), {
    cancelToken: source.token
  }).then((resp) => {
    const results = resp.data.records
    return results.map(({fields}) => ({
      ...fields
    }))
  }).catch((err) => [])

  return {
    cancelRequest: () => source.cancel(),
    exec: () => request()
  }
}
