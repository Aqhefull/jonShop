import React, { Component } from 'react'
//Redux
import { connect } from "react-redux";

//Components
import Input from "../ui/Input";
import Select, { SelectOption } from "../ui/Select";
import Button from "../ui/Button";
import Chip from "../ui/Chip";

class CheckoutForm extends Component {
  state = {
    firstNameErr: '',
    lastNameErr: '',
    emailErr: '',
    postalCodeErr: '',
    phoneNumberErr: '',
    cardNumberErr: '',
    securityCodeErr: '',
    expDateErr: ''
  }
  checkRegexp = (regexp, target, name, text) => {
     if (!regexp.test(target.value)) {
       this.setState({ [name]: text });
     } else {
       this.setState({ [name]: "" });
     }
  }
  handleValid = (target) => {
    switch (target.id) {
      case "firstName":
        this.checkRegexp(/^[a-z ,.'-]{3,}$/g, target, 'firstNameErr', "Minimum 3 symbols")
        break;
      case "lastName":
          this.checkRegexp(/^[a-z ,.'-]{3,}$/g, target, 'lastNameErr', "Minimum 3 symbols")
        break;
      case "email":
        this.checkRegexp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g, target, 'emailErr', "Invalid email. Must be test@site.com")
        break;
      case "postalCode":
        this.checkRegexp(/^\d{5,}$/g, target, 'postalCodeErr', "Minimum 5 numbers")
        break;
      case "phoneNumber":
        this.checkRegexp(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/g, target, 'phoneNumberErr', "Invalid phone. Must be (123) 456 7899")
        break;
      case "cardNumber":
        this.checkRegexp(/[0-9]{16}/g, target, 'cardNumberErr', "Invalid card number")
        break;
      case "securityCode":
        this.checkRegexp(/^[0-9]{3,3}$/g, target, 'securityCodeErr', "Invalid security code")
        break;
      case "expDate":
        this.checkRegexp(/^\d{2}\/\d{2}$/g, target, 'expDateErr', "Invalid expiration date must be 01/23")
        break;
      default:
        break;
    }
  }

  render() {
    const {
      firstNameErr,
      lastNameErr,
      emailErr,
      postalCodeErr,
      phoneNumberErr,
      cardNumberErr,
      securityCodeErr,
      expDateErr
    } = this.state;
    return (
      <div className="checkout-form">
        <div className="form-section">
          <span className="form-section-title">
            <Chip className="form-section-chip" text="1" /> PERSONAL
            INFORMATION
          </span>
          <div className="form-row">
            <div className="col-md-6">
              <Input
                id="firstName"
                error={firstNameErr}
                placeholder="Elon"
                type="text"
                label="First Name"
                getInputTarget={this.handleValid}
                required
              />
            </div>
            <div className="col-md-6">
              <Input
                id="lastName"
                error={lastNameErr}
                placeholder="Musk"
                type="text"
                label="Last Name"
                getInputTarget={this.handleValid}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-12">
              <Input
                id="email"
                error={emailErr}
                placeholder="elon@spacex.com"
                type="email"
                label="Email"
                getInputTarget={this.handleValid}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6">
              <Select
                id="chooseCountry"
                label="Country"
                className="Select-type-input"
                onSelectChange={() => {}}
              >
                <SelectOption name="USA" />
                <SelectOption name="Ukraine" />
              </Select>
            </div>
            <div className="col-md-6">
              <Input
                id="postalCode"
                error={postalCodeErr}
                placeholder="10001"
                type="text"
                label="Postal Code"
                getInputTarget={this.handleValid}
                pattern="^[0-9]+$"
                maxLength="5"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-12">
              <Input
                id="phoneNumber"
                error={phoneNumberErr}
                placeholder="(123) 456 7899"
                type="tel"
                label="Phone Number"
                getInputTarget={this.handleValid}
                pattern="^[0-9]+$"
                maxLength="10"
              />
            </div>
          </div>
        </div>
        <div className="form-section">
          <span className="form-section-title">
            <Chip className="form-section-chip" text="2" /> PAYMENTS DETAILS
          </span>
          <div className="form-row">
            <div className="col-md-12">
              <Input
                id="cardNumber"
                error={cardNumberErr}
                placeholder="0000 – 0000 – 0000 – 0000"
                type="text"
                label="Credit Card Number"
                getInputTarget={this.handleValid}
                pattern="^[0-9]+$"
                maxLength="16"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6">
              <Input
                id="securityCode"
                error={securityCodeErr}
                placeholder="***"
                type="text"
                label="Security code"
                getInputTarget={this.handleValid}
                pattern="^[0-9]+$"
                maxLength="3"
                required
              />
            </div>
            <div className="col-md-6">
              <Input
                id="expDate"
                error={expDateErr}
                placeholder="MM / YY"
                type="text"
                label="Expiration date"
                getInputTarget={this.handleValid}
                pattern="^[0-9, /]+$"
                maxLength="5"
                required
              />
            </div>
          </div>
          <div className="form-row checkout-submit">
            <Button color="green" value="Complete Purchase" />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(CheckoutForm);