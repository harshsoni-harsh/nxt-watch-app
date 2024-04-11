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
    searchResults: [
      {
        channel: {
          name: "CyberEye",
          profileImageUrl:
            "https://assets.ccbp.in/frontend/react-js/nxt-watch/cyber-eye-img.png",
        },
        id: "330f1c47-2608-452a-ad65-e0d9b159d00c",
        publishedAt: "Apr 23, 2020",
        thumbnailUrl:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/things-conference-2-img.png",
        title: "The Things Conference India 2019 | After Movie",
        viewCount: "23K",
      },
      {
        channel: {
          name: "CyberEye",
          profileImageUrl:
            "https://assets.ccbp.in/frontend/react-js/nxt-watch/cyber-eye-img.png",
        },
        id: "9420a07a-df83-419e-a46e-ed308103e829",
        publishedAt: "Apr 23, 2020",
        thumbnailUrl:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/things-conference-cyber-eye-img.png",
        title:
          "Avinash Dara, CyberEye | Smart Campus - A Deployment Perspective | The Things Virtual Conference",
        viewCount: "23K",
      },
      {
        channel: {
          name: "The Things Network",
          profileImageUrl:
            "https://assets.ccbp.in/frontend/react-js/nxt-watch/the-things-network-img.png",
        },
        id: "f163fd54-0f08-4cc1-a5aa-308f27132cc6",
        publishedAt: "Oct 23, 2019",
        thumbnailUrl:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/things-conference-2-img.png",
        title: "The Things Conference India 2019 After Movie",
        viewCount: "2.6K",
      },
    ],
    apiStatus: apiStatusConstants.success,
  };

  closePopup = () => {
    this.setState({ popupOpen: false });
  };

  search = (e) => {
    this.setState({ searchVal: e.target.value });
  };

  componentDidMount() {
    // this.fetchItems();
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
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default Home;
