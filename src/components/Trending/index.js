import { Component } from "react";
import Cookies from "js-cookie";

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
import { Button, H1, Image, P, ScreenCenterDiv, StyledLoader } from "../Home/styledComponents";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

class Trending extends Component {
  state = {
    resultItems: [],
    apiStatus: apiStatusConstants.initial,
  };

  componentDidMount() {
    this.fetchItems();
  }

  fetchItems = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });
    const jwtToken = Cookies.get("jwt_token");
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const response = await fetch(
      "https://apis.ccbp.in/videos/trending",
      options
    );
    if (response.ok) {
      let data = await response.json();
      let modifiedData = data.videos;
      modifiedData = modifiedData.map((video) => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
        viewCount: video.view_count,
        publishedAt: video.published_at,
      }));
      this.setState({
        resultItems: modifiedData,
        apiStatus: apiStatusConstants.success,
      });
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  renderTrendingVideos = (dark) => {
    const { resultItems, apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.success:
        return resultItems.length === 0 ? (
          <ScreenCenterDiv>
            <Image
              noVideo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <H1 dark={dark}>No Search results found</H1>
            <P dark={dark}>Try different key words or remove search filter</P>
            <Button onClick={this.fetchItems} retry>
              Retry
            </Button>
          </ScreenCenterDiv>
        ) : (
          <ResultItems>
            {resultItems.map((video) => (
              <TrendingVideo key={video.id} details={video} />
            ))}
          </ResultItems>
        );

      case apiStatusConstants.failure:
        return (
          <ScreenCenterDiv>
            <Image
              noVideo
              src={
                dark
                  ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                  : "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              }
              alt="no videos"
            />
            <H1 dark={dark}>Oops! Something Went Wrong</H1>
            <P dark={dark}>
              We are having some trouble to complete your request.
            </P>
            <P dark={dark}>Please try again.</P>
            <Button onClick={this.fetchItems} retry>
              Retry
            </Button>
          </ScreenCenterDiv>
        );

      case apiStatusConstants.inProgress:
        return (
          <ScreenCenterDiv className="loader-container" data-testid="loader">
            <StyledLoader
              dark={dark}
              type="ThreeDots"
              color="#ffffff"
              height="50"
              width="50"
            />
          </ScreenCenterDiv>
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {(value) => (
          <Layout>
            <OuterContainer>
              <Header dark={value.dark}>
                <TrendingLogo dark={value.dark}>
                  <StyledIcon />
                </TrendingLogo>
                <Heading dark={value.dark}>Trending</Heading>
              </Header>
              <Content dark={value.dark}>{this.renderTrendingVideos(value.dark)}</Content>
            </OuterContainer>
          </Layout>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Trending;
