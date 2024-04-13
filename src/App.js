import { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Gaming from "./components/Gaming";
import Video from "./components/Video";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

import ThemeContext from "./context/ThemeContext";

class App extends Component {
  state = { dark: false };

  changeTheme = () => {
    this.setState((prevState) => ({ dark: !prevState.dark }));
  };

  logOut = () => {
    Cookies.remove("jwt_token");
  };

  render() {
    const { dark } = this.state;
    return (
      <ThemeContext.Provider
        value={{ dark, changeTheme: this.changeTheme, logOut: this.logOut }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/video/:id" component={Video} />
          <Route exact path="bad-path" component={NotFound} />
          <Redirect to="bad-path" />
        </Switch>
      </ThemeContext.Provider>
    );
  }
}
export default App;
