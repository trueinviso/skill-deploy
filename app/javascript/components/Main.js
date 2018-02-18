import React from 'react'
import { Switch, Route } from 'react-router-dom'
import JobBoard from './JobBoard'
import SavedJobs from './SavedJobs'

function Main() {
  return(
    <main>
      <Switch>
        <Route exact path='/' component={JobBoard} />
        <Route path='/jobs' component={JobBoard} />
        <Route path='/favorite_jobs' component={SavedJobs} />
      </Switch>
    </main>
  );
}

export default Main
