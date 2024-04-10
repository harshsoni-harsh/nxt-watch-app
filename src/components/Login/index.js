import { Component } from "react";
import Cookies from "js-cookie";

import ThemeContext from "../../context/ThemeContext";
import {
  OuterDiv,
  InnerDiv,
  Image,
  Label,
  Input,
  ShowPassword,
  Label2,
  Button,
  ErrorMsg,
} from "./styledComponents";

class Login extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    const jwtToken = Cookies.get("jwt_token");
    const { history } = this.props;
    if (jwtToken) history.replace("/");
    this.state = {
      showPassword: false,
      username: "",
      password: "",
      errorMsg: "",
    };
  }

  changeUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  togglePassword = (e) => {
    this.setState({ showPassword: e.target.checked });
  };

  submitForm = async (e) => {
    e.preventDefault();
    this.setState({ errorMsg: "" });
    const { username, password } = this.state;
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok) {
      this.setCookie(data.jwt_token);
    } else {
      this.setState({ errorMsg: "*".concat(data.error_msg) });
    }
  };

  async setCookie(token) {
    Cookies.set("jwt_token", token);
    const { history } = this.props;
    history.replace("/");
  }

  render() {
    const { username, password, showPassword, errorMsg } = this.state;
    return (
      <ThemeContext.Consumer>
        {(value) => (
          <OuterDiv as="form" dark={value.dark}>
            <InnerDiv dark={value.dark}>
              <Image
                src={
                  value.dark
                    ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                }
              />
              <Label dark={value.dark} htmlFor="username">
                USERNAME
              </Label>
              <Input
                dark={value.dark}
                id="username"
                value={username}
                onChange={this.changeUsername}
                placeholder="Username"
              />
              <Label dark={value.dark} htmlFor="password">
                PASSWORD
              </Label>
              <Input
                dark={value.dark}
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={this.changePassword}
                placeholder="Password"
              />
              <ShowPassword>
                <Input
                  dark={value.dark}
                  id="showPassword"
                  type="checkbox"
                  checked={showPassword}
                  onChange={this.togglePassword}
                />
                <Label2 dark={value.dark} htmlFor="showPassword">
                  Show Password
                </Label2>
              </ShowPassword>
              <Button type="submit" onClick={this.submitForm}>
                Login
              </Button>
              <ErrorMsg>{errorMsg}</ErrorMsg>
            </InnerDiv>
          </OuterDiv>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Login;
