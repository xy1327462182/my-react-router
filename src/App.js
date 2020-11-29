import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'

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
      User id is {props.match.params.id}
      User id is {id}
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

function NotFount() {
  return (
    <div className="NotFount">
      NotFount
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
            <Route path="/" exact={true} component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/user/profile" component={UserProfile} />
            <Route path="/user/:id" component={User} />
            <Route path="/notfount" component={NotFount} />
            <Redirect to="/notfount" />
        </Router>
      </div>
    )
  }
}

export default App
