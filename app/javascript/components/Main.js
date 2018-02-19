import React from 'react'
import { Switch, Route } from 'react-router-dom'
import JobBoardContainer from './JobBoardContainer'
import SavedJobs from './SavedJobs'
import Profile from './Profile'

function Main() {
  return(
    <main>
      <Switch>
        <Route exact path='/' component={JobBoardContainer} />
        <Route path='/jobs' component={JobBoardContainer} />
        <Route path='/favorite_jobs' component={SavedJobs} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </main>
  );
}

export default Main
