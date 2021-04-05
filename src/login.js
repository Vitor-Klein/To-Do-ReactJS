import React, { Component } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Routing from './Routing';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      isLoggedIn: false
    }
  }

  componentDidMount() {
    if (localStorage.getItem("user_data")) {
      this.setState({
        username: JSON.parse(localStorage.getItem("user_data")).username,
        password: JSON.parse(localStorage.getItem("user_data")).password,
        isLoggedIn: true
      });
    }
    else {
      console.log("Silahkan login!");
    }
  }

  login = () => {
    let user_data = { username: this.state.username, password: this.state.password }
    localStorage.setItem("user_data", JSON.stringify(user_data));
    this.setState({ isLoggedIn: true });
  }

  logout = () => {
    localStorage.removeItem("user_data");
    this.setState({ username: "", password: "", isLoggedIn: false });
  }

  render() {

    return (
      <div style={{ margin: "20px" }}>

        {this.state.isLoggedIn ?
          <Link to="/" type="button" onClick={this.logout} style={{ padding: "7px", backgroundColor: "gray", color: "white", textDecoration: "none", borderRadius: "50px", border: "none", display: "inline-block", marginTop: "10px" }}>Logout</Link>
          :
          <React.Fragment>
            <label>Username: </label><input type="text" placeholder="Input username.." value={this.state.username} onChange={(e) => { this.setState({ username: e.target.value }) }} />
            <br />
            <label>Password: </label><input type="password" placeholder="Input password.." value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }} />
            <br />
            <Link to="/home" type="button" onClick={this.login} style={{ padding: "7px", backgroundColor: "gray", color: "white", textDecoration: "none", borderRadius: "50px", border: "none", display: "inline-block", marginTop: "10px" }}>Login</Link>
          </React.Fragment>

        }

        <Routing username={this.state.isLoggedIn ? this.state.username : ""} />

      </div >
    );
  }
}

export default Login;