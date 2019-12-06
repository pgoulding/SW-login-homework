import React, { Component } from 'react'

export class Signin extends Component {
  constructor() {
    super()
    this.state = {
      username:'',
      password:''
    }
  }


  handleChange =(e) => {
    const {name, value} = e.target
    this.setState({[name]:value})
  }

  submitUserLogin = () => {

  }

  render() {
    return (
      <form className="signin_form-main">
        <input
          onChange={this.handleChange}
          value={this.state.username}
          name="username"
          className="signin_input-username"
        />
        <input 
          onChange={this.handleChange}
          value={this.state.password}
          name="password"
          className="signin_input-password"
        />
        <button
          onClick={this.submitUserLogin}
          className="signin_button-submit"
        >
          Login
        </button>
        
      </form>
    )
  }
}

export default Signin

