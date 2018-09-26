import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.scss'

import Menu from '../Components/Menu'

import HomePage from '../Pages/Home'
import AboutPage from '../Pages/About'
import ArticlePage from '../Pages/Article'

const Router = () => (
  <Switch>
    <Route exact path="/mds-reactjs-newsSite/" component={HomePage} />
    <Route path="/mds-reactjs-newsSite/article" component={ArticlePage} />
    <Route path="/mds-reactjs-newsSite/about" component={AboutPage} />
  </Switch>
)

const App = () => (
  <BrowserRouter>
    <div className="main">
      <Menu />
      <div className="content">
        <Router />
      </div>
    </div>
  </BrowserRouter>
)

export default App
