import ThemeContext from "../../context/ThemeContext";
import {
  Image,
  Button,
  InnerContainer,
  NavContainer,
  OuterContainer,
  Body,
} from "./styledComponents";
import SideNav from "../SideNav";

const Layout = (props) => (
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
            <Image src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" />
            <Button logout onClick={value.logOut}>
              Logout
            </Button>
          </InnerContainer>
        </NavContainer>
        <Body>
          <SideNav />
          {props.children}
        </Body>
      </OuterContainer>
    )}
  </ThemeContext.Consumer>
);

export default Layout;
