import React, { Component } from 'react'
import "./App.scss"
import { Nav } from '../Nav/Nav'
import { Signin } from '../Signin/Signin'
import { UserProfile } from '../UserProfile/UserProfile'
import { Footer } from '../Footer/Footer'

export class App extends Component {
constructor() {
  super()
  this.state = {
    isLoggedIn:false,
    userName:''
  }
}

toggleLogin=(bool) => {
  console.log(bool)
  this.setState({isLoggedIn:bool})
} 

  render() {
    return (
      <main>
        <Nav 
          toggleLogin={this.toggleLogin}
          isLoggedIn={this.state.isLoggedIn}
        />
        {
          !this.state.isLoggedIn &&
          <Signin />
        }
        {
          this.state.isLoggedIn && 
          <UserProfile />
        }
        <Footer />
      </main>
    )
  }
}

export default App
