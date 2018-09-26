import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

import './App.scss'

import SearchBar from './Components/SearchBar'
import DataList from './Components/DataList'
import Menu from './Components/Menu'
import Content from './Components/Content'

import HomePage from './Pages/Home'
import AboutPage from './Pages/About'
import ArticlePage from './Pages/Article'

const Router = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/article' component={ArticlePage} />
    <Route path='/about' component={AboutPage} />
  </Switch>
)

class App extends Component {
  state = {
  }

  render() {
    return (
      <BrowserRouter>
        <div className='main'>
          <Menu />
          <div className='content'>
            <Router />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
