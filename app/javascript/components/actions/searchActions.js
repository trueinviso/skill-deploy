import { constants } from './constants'

function setSearch(query) {
  return {
    type: constants.SET_SEARCH,
    query: query
  }
}

export {
  setSearch
}

