import React from 'react';
import appContext from '../appContext';
import { apiBaseUrl } from '../config';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      authToken: null,
      currentUserId: null,
    };
  }

  registerUser = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    try {
      const res = await fetch(`${apiBaseUrl}/users`, {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw res;

      const {
        token,
        user: { id },
      } = await res.json();

      this.setState(
        { authToken: token, currentUserId: id }, 
        () => {
          const { authToken, currentUserId } = this.state;
          this.props.updateContext(authToken, currentUserId);
        },
      );
    } catch (err) {
      console.error(err);
    }
  };

  update = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <form onSubmit={this.registerUser}>
        <h2>Register</h2>
        <input
          type="text"
          value={username}
          onChange={this.update}
          name="username"
          placeholder="Enter Username"
        />
        <input
          type="password"
          value={password}
          onChange={this.update}
          name="password"
          placeholder="Enter Password"
        />

        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

const RegistrationFormWithContext = (props) => {
  return (
    <appContext.Consumer>
      {value => <RegistrationForm {...props} updateContext={value.updateContext} />}
    </appContext.Consumer>
  );
}

export default RegistrationFormWithContext;
