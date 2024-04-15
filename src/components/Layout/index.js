import Cookies from "js-cookie";
import { withRouter } from "react-router-dom";
import Popup from "reactjs-popup";

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
  Model,
  ModelButtonDiv,
  CancelBtn,
  ConfirmBtn,
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
              <Popup
                modal
                trigger={
                  <Button type="button" dark={value.dark} logout>
                    Logout
                  </Button>
                }
              >
                {(close) => (
                  <Model dark={value.dark}>
                    <p>Are you sure you want to logout?</p>
                    <ModelButtonDiv dark={value.dark}>
                      <CancelBtn dark={value.dark} onClick={close}>Cancel</CancelBtn>
                      <ConfirmBtn dark={value.dark} onClick={logout}>Confirm</ConfirmBtn>
                    </ModelButtonDiv>
                  </Model>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <Button logoutIcon>
                    <StyledLogout dark={value.dark} />
                  </Button>
                }
              >
                {(close) => (
                  <Model>
                    <p>Are you sure you want to logout?</p>
                    <ModelButtonDiv>
                      <CancelBtn onClick={close}>Cancel</CancelBtn>
                      <ConfirmBtn onClick={logout}>Confirm</ConfirmBtn>
                    </ModelButtonDiv>
                  </Model>
                )}
              </Popup>
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
