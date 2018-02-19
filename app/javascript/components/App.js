import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from './Nav'
import Main from './Main'
import configureStore from './store/configureStore'
import { fetchJobsIfNeeded } from './actions/jobFetchActions'

class App extends React.Component {
  render() {
    let store = configureStore()

    return(
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Nav />
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
