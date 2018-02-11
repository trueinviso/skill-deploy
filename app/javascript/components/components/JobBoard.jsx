import 'babel-polyfill'

import React from 'react'
import { Provider } from 'react-redux'
import JobListContainer from '../containers/JobListContainer'
import JobRoleLink from '../containers/JobRoleLink'
import JobTypeLink from '../containers/JobTypeLink'
import configureStore from '../store/configureStore'

class JobBoard extends React.Component {

  render() {
    const { roles, types, link, jobs, favorites } = this.props
    //let store = configureStore({ items: jobs })
    let store = configureStore()

    return(
      <Provider store={store}>
        <div className="jobs-index__wrapper row">
          <div className="small-12 columns">
            <JobFilters roles={roles} types={types} link={link} />
            <JobListContainer favorites={favorites} />
          </div>
        </div>
      </Provider>
    );
  }
}

function JobFilters(props) {
  return(
    <div className="jobs-index__tag-list">
      <ul>
        <JobRoleList roles={props.roles} />
        <JobTypeList types={props.types} />
      </ul>
    </div>
  );
}

function JobRoleList(props) {
  function renderRole(role) {
    return <JobRoleLink key={role.id} role={role} />
  }

  return(
    props.roles.map((role) => {
      return renderRole(role)
    })
  );
}


function JobTypeList(props) {
  function renderType(type) {
    return <JobTypeLink key={type.id} type={type} />
  }

  return(
      props.types.map((type) => {
        return renderType(type)
      })
  );
}

export default JobBoard
