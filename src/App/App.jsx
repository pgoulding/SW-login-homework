import React, { Component } from 'react'
import "./App.scss"
import { Nav } from '../Nav/Nav'
import { UserProfile } from '../UserProfile/UserProfile'
import { Footer } from '../Footer/Footer'
import SigninForm from '../SigninForm/SigninForm'
import UserForm from '../UserForm/UserForm'

export class App extends Component {
constructor() {
  super()
  this.state = {
    isLoggedIn:false,
    userName:''
  }
}

toggleLogin=(bool) => {
  this.setState({isLoggedIn:bool})
} 

  render() {
    const { isLoggedIn } = this.state
    return (
      <main>
        <Nav 
          toggleLogin={this.toggleLogin}
          isLoggedIn={isLoggedIn}
        />
        {
          !isLoggedIn &&
          <UserForm />
        }
        {
          isLoggedIn && 
          <UserProfile />
        }
        <Footer />
      </main>
    )
  }
}

export default App
