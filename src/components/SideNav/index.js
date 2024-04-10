import { AiFillHome } from "react-icons/ai";
import { GiGamepad } from "react-icons/gi";
import { FaFireAlt } from "react-icons/fa";
import { BsCloudDownload } from "react-icons/bs";

import { withRouter } from "react-router-dom";

import ThemeContext from "../../context/ThemeContext";
import {
  NavTab,
  OuterContainer,
  P,
  InnerContainer,
  Socials,
  Image,
} from "./styledComponents";

const SideNav = (props) => {
  const { match } = props;
  let { path } = match;
  path = path.split("/")[1];
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <OuterContainer>
          <InnerContainer>
            <NavTab selected={path === ""} href="/">
              <AiFillHome />
              <P selected={path === ""}>Home</P>
            </NavTab>
            <NavTab selected={path === "trending"} href="/trending">
              <FaFireAlt />
              <P selected={path === "trending"}>Trending</P>
            </NavTab>
            <NavTab selected={path === "gaming"} href="/gaming">
              <GiGamepad />
              <P selected={path === "gaming"}>Gaming</P>
            </NavTab>
            <NavTab selected={path === "saved-videos"} href="/saved-videos">
              <BsCloudDownload />
              <P selected={path === "saved-videos"}>Saved videos</P>
            </NavTab>
          </InnerContainer>
          <InnerContainer bottom>
            <P>CONTACT US</P>
            <Socials>
              <Image src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png" />
              <Image src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png" />
              <Image src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png" />
            </Socials>
            <P comment>Enjoy! Now to see your channels and recommendations!</P>
          </InnerContainer>
        </OuterContainer>
      )}
    </ThemeContext.Consumer>
  );
};

export default withRouter(SideNav);
