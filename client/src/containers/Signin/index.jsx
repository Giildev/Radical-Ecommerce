// Dependencies
import React, { Component } from "react";
import RegisterForm from "../../components/RegisterForm/";

// Components & Containers
import "./style.css";

class Signin extends Component {
  constructor(props) {
    super(props);

    // set the initial component state:
    this.state = {
      errors: {},
      user: {
        email: "",
        name: "",
        password: ""
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   **/
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   **/
  processForm(event) {
    // prevent default action. in this case, action is the from submission event
    event.preventDefault();

    // create a string from an HTTP body message
    const name = encodeURIComponent(this.state.user.name);
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `name=${name}&email=${email}&password=${password}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open("post", "/routes/register");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        console.log("The form is valid");
      } else {
        // failure

        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.sumary = xhr.response.message;

        this.setState({
          errors 
        });
      }
    });

    xhr.send(formData);
  }

  /**
   * Render the component.
   **/
  render() {
    return (
      <div>
        <RegisterForm
          onSubmit={this.processForm}
          onChange={this.changeUser}
          errors={this.state.errors}
          user={this.state.user}
        />
      </div>
    );
  }
}

export default Signin;
