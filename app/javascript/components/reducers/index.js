import { combineReducers } from 'redux'
import { activeRole, activeType } from './jobFilterReducers'
import { jobs } from './fetchJobReducers'
import { activeNavLink } from './navLinkReducers'

const JobApp = combineReducers({
  activeRole,
  activeType,
  activeNavLink,
  jobs
})

export default JobApp
