import React from "react";
import appContext from '../appContext';
import { apiBaseUrl } from '../config';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      authToken: null,
      currentUserId: null,
    };
  }

  loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      const res = await fetch(`${apiBaseUrl}/users/token`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
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
      <div className="login-container">
        <form onSubmit={this.loginUser}>
          <h2>Log In</h2>
          <input
            //type="text"
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

          <button type="submit">Log In</button>
        </form>
      </div>
    )  
  }
}

const LoginFormWithContext = (props) => {
  return (
    <appContext.Consumer>
      {value => <LoginForm {...props} updateContext={value.updateContext} />}
    </appContext.Consumer>
  );
}

export default LoginFormWithContext;

