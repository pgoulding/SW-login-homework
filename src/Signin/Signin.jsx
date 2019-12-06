import React, { Component } from 'react'
import './Signin.scss'
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
      <div className="signin_component-main">
        <form className="signin_form-main">
          <label>
            UserName:
          <input
            onChange={this.handleChange}
            value={this.state.username}
            placeholder="User Name"
            name="username"
            className="signin_input-username"
          />
          </label>
          <label>
            Password:
          <input
            onChange={this.handleChange}
            value={this.state.password}
            placeholder="password"
            type="password"
            name="password"
            className="signin_input-password"
          />
          </label>
          <button
            onClick={this.submitUserLogin}
            className="signin_button-submit"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Signin

