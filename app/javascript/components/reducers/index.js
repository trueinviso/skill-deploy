import { combineReducers } from 'redux'
import { activeRole, activeType } from './jobFilterReducers'
import { jobs } from './fetchJobReducers'
import { activeNavLink } from './navLinkReducers'
import { search } from './searchReducers'
import { thumbnail } from './thumbnailReducers'
import { user } from './userReducers'

const JobApp = combineReducers({
  activeRole,
  activeType,
  activeNavLink,
  search,
  thumbnail,
  user,
  jobs
})

export default JobApp
