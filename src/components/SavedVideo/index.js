import { Component } from "react";

import ThemeContext from "../../context/ThemeContext";

import {
  OuterContainer,
  Header,
  TrendingLogo,
  StyledIcon,
  Content,
  Heading,
  ResultItems,
} from "./styledComponents";
import Layout from "../Layout";
import TrendingVideo from "../TrendingVideo";
import { H1, Image, P, ScreenCenterDiv } from "../Home/styledComponents";
import SavedVideoContext from "../../context/SavedVideoContext";

class Trending extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(value) => (
          <SavedVideoContext.Consumer>
            {(saved) => (
              <Layout>
                {saved.savedVideos.length === 0 ? (
                  <ScreenCenterDiv>
                    <Image
                      noVideo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <H1 dark={value.dark}>No saved videos found</H1>
                    <P dark={value.dark}>
                      You can save your videos while watching them
                    </P>
                  </ScreenCenterDiv>
                ) : (
                  <OuterContainer>
                    <Header dark={value.dark}>
                      <TrendingLogo dark={value.dark}>
                        <StyledIcon />
                      </TrendingLogo>
                      <Heading dark={value.dark}>Saved Videos</Heading>
                    </Header>
                    <Content dark={value.dark}>
                      <ResultItems>
                        {saved.savedVideos.map((video) => (
                          <TrendingVideo key={video.id} details={video} />
                        ))}
                      </ResultItems>
                    </Content>
                  </OuterContainer>
                )}
              </Layout>
            )}
          </SavedVideoContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Trending;
