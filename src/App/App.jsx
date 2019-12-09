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
  }
}

toggleLogin=(bool) => {
  this.setState({isLoggedIn:bool})
}

  render() {
    const { isLoggedIn } = this.state
    return (
      <main>
        <Nav toggleLogin={this.toggleLogin} isLoggedIn={isLoggedIn} />
        <article className="main_signin-body">
          {!isLoggedIn && (
            <UserForm 
              toggleLogin={this.toggleLogin} 
            />
          )}
          {isLoggedIn && <h1>You're logged in!</h1>}
        </article>
        <Footer />
      </main>
    );
  }
}

export default App
