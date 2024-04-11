import { Component } from "react";

import ThemeContext from "../../context/ThemeContext";

import {
  OuterContainer,
  Header,
  TrendingLogo,
  StyledIcon,
  Content,
  Heading,
} from "./styledComponents";
import Layout from "../Layout";

class Trending extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(value) => (
          <Layout>
            <OuterContainer>
              <Header>
                <TrendingLogo>
                  <StyledIcon />
                </TrendingLogo>
                <Heading>Trending</Heading>
              </Header>
              <Content></Content>
            </OuterContainer>
          </Layout>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Trending;
