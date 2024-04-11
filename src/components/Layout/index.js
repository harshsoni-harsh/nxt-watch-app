import Cookies from "js-cookie";
import { withRouter } from "react-router-dom";

import ThemeContext from "../../context/ThemeContext";
import {
  Image,
  Button,
  InnerContainer,
  NavContainer,
  OuterContainer,
  Body,
  StyledHamburger,
  StyledLogout,
} from "./styledComponents";
import SideNav from "../SideNav";

const Layout = (props) => {
  const logout = () => {
    const { history } = props;
    Cookies.remove("jwt_token");
    history.replace("/login");
  };
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <OuterContainer>
          <NavContainer dark={value.dark}>
            <Image
              logo
              src={
                value.dark
                  ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              }
            />
            <InnerContainer>
              <Button icon onClick={value.changeTheme}>
                {value.dark ? (
                  <Image icon dark={value.dark} src="/icons/light-mode.svg" />
                ) : (
                  <Image icon dark={value.dark} src="/icons/dark-mode.svg" />
                )}
              </Button>
              <Image
                profile="true"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              />
              <Button hamburger>
                <StyledHamburger dark={value.dark} />
              </Button>
              <Button dark={value.dark} logout onClick={logout}>
                Logout
              </Button>
              <Button logoutIcon onClick={logout}>
                <StyledLogout dark={value.dark} />
              </Button>
            </InnerContainer>
          </NavContainer>
          <Body dark={value.dark}>
            <SideNav />
            {props.children}
          </Body>
        </OuterContainer>
      )}
    </ThemeContext.Consumer>
  );
};

export default withRouter(Layout);
