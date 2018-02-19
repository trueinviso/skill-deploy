import { combineReducers } from 'redux'
import { activeRole, activeType } from './jobFilterReducers'
import { jobs } from './fetchJobReducers'
import { activeNavLink } from './navLinkReducers'
import { search } from './searchReducers'

const JobApp = combineReducers({
  activeRole,
  activeType,
  activeNavLink,
  search,
  jobs
})

export default JobApp
