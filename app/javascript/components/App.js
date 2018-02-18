import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from './Nav'
import Main from './Main'

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Nav />
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App
