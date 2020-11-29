import React from 'react'
import { HashRouter as Router, Route } from './react-router-dom'

function Home() {
  return (
    <div className="Home">
      Home
    </div>
  )
}

function About() {
  return (
    <div className="About">
      About
    </div>
  )
}

function User(props) {
  return (
    <div className="User">
      User
    </div>
  )
}

function UserProfile() {
  return (
    <div className="UserProfile">
      UserProfile
    </div>
  )
}

function NotFound() {
  return (
    <div className="NotFound">
      NotFound
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Route />
        </Router>
      </div>
    )
  }
}

export default App
