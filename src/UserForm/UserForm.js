import React, { Component } from "react";
import SigninForm from "../SigninForm/SigninForm";
import UserProfile from "../UserProfile/UserProfile";

export class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      street: "",
      addressState: "",
      zipCode: "",
      phoneNumber: ""
    };
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      step,
      username,
      firstName,
      lastName,
      street,
      addressState,
      zipCode,
      phoneNumber
    } = this.state;

    const values = {
      firstName,
      lastName,
      username,
      street,
      addressState,
      zipCode,
      phoneNumber
    };

    switch (step) {
      case 1:
        return (
          <div className="signin_form-main">
            <SigninForm
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        )

      case 2:
        return  (
          <div className="signin_form-main">
            <UserProfile 
              nextStep={this.nextStep}
              previousStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
              />
          </div>
        )
      
        case 3: 
          return (
            <div>
              <h1>ConfirmDetails</h1>
            </div>
          )
        
      default:
        break;
    }
  }
}

export default UserForm;
