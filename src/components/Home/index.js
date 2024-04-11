import { IoMdClose } from "react-icons/io";
import { Component } from "react";
import { IoSearch } from "react-icons/io5";
import Cookies from "js-cookie";
import Loader from "react-loader-spinner";

import {
  Banner,
  Div,
  Image,
  OuterContainer,
  BannerContent,
  Button,
  Content,
  SearchBox,
  Input,
  SearchResults,
} from "./styledComponents";

import ThemeContext from "../../context/ThemeContext";
import VideoCard from "../VideoCard";
import Layout from "../Layout";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

class Home extends Component {
  state = {
    popupOpen: true,
    searchVal: "",
    searchResults: [],
    apiStatus: apiStatusConstants.success,
  };

  closePopup = () => {
    this.setState({ popupOpen: false });
  };

  search = (e) => {
    this.setState({ searchVal: e.target.value });
  };

  componentDidMount() {
    this.fetchItems();
  }

  fetchItems = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });
    const { searchVal } = this.state;
    const jwtToken = Cookies.get("jwt_token");
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };
    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchVal}`,
      options
    );
    if (response.ok) {
      const data = await response.json();
      const modifiedData = data.videos.map((o) => ({
        channel: {
          name: o.channel.name,
          profileImageUrl: o.channel.profile_image_url,
        },
        id: o.id,
        publishedAt: o.published_at,
        thumbnailUrl: o.thumbnail_url,
        title: o.title,
        viewCount: o.view_count,
      }));
      console.log(modifiedData);
      this.setState({
        searchResults: modifiedData,
        apiStatus: apiStatusConstants.success,
      });
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  renderSearchResults = () => {
    const { searchResults, apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.success:
        return (
          <SearchResults>
            {searchResults.map((video) => (
              <VideoCard key={video.id} details={video} />
            ))}
          </SearchResults>
        );
      case apiStatusConstants.failure:
        return null;
      case apiStatusConstants.inProgress:
        return (
          <div className="loader-container" data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
          </div>
        );
      default:
        return null;
    }
  };

  render() {
    const { popupOpen, searchVal } = this.state;
    return (
      <ThemeContext.Consumer>
        {(value) => (
          <Layout>
            <OuterContainer>
              {popupOpen && (
                <Banner>
                  <Div>
                    <Image src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
                    <Button close onClick={this.closePopup}>
                      <IoMdClose />
                    </Button>
                    <BannerContent>
                      But Nxt Watch Premium prepaid plans with UPI
                    </BannerContent>
                    <Button>GET IT NOW</Button>
                  </Div>
                </Banner>
              )}
              <Content dark={value.dark}>
                <SearchBox dark={value.dark}>
                  <Input
                    value={searchVal}
                    onChange={this.search}
                    type="search"
                    placeholder="Search"
                    dark={value.dark}
                  />
                  <Button dark={value.dark} search>
                    <IoSearch />
                  </Button>
                </SearchBox>
                {this.renderSearchResults()}
              </Content>
            </OuterContainer>
          </Layout>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default Home;
