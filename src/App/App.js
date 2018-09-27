import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import moment from 'moment'

import './App.scss'

import Menu from '../Components/Menu'

import HomePage from '../Pages/Home'
import AboutPage from '../Pages/About'
import ArticlePage from '../Pages/Article'

const Router = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/article" component={ArticlePage} />
    <Route path="/about" component={AboutPage} />
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
