import React, { Component } from 'react'
import "./App.scss"
import { Nav } from '../Nav/Nav'
import { Signin } from '../Signin/Signin'
import { UserProfile } from '../UserProfile/UserProfile'

export class App extends Component {
constructor() {
  super()
  this.state = {
    isLoggedIn:false,
    userName:''
  }
}

  render() {
    return (
      <main>
        <Nav />
        {
          !this.state.isLoggedIn &&
          <Signin />
        }
        {
          this.state.isLoggedIn && 
          <UserProfile />
        }
      </main>
    )
  }
}

export default App
