import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import App from './App'
import Video from './Video'
import Presentation from './Presentation'
import logo from '../images/logo.png'

class Site extends Component {
  render() {
    return (
      <div className="Site">
        <header className="site-header">
          <a href="/#">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <nav className="navigation">
            <a href="#/app"><div id="to-app" className="click"></div></a>
            <a href="#/video"><div id="to-video" className="click"></div></a>
            <a href="#/"><div id="to-share" className="click"></div></a>
            <a href="/#"><div id="to-menu" className="click"></div></a>
          </nav>
        </header>
        <div className="content">
          <HashRouter>
            <div>
              <Route path="/" component={ Presentation }/>
              <Route path="/app" component={ App } />
              <Route path="/video" component={ Video } />
            </div>
          </HashRouter>
        </div>
        <footer></footer>
      </div>
    )
  }
}

export default Site