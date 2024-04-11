import { Component } from "react";

import Layout from "../Layout";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

class Gaming extends Component {
  state = { state: apiStatusConstants.initial };

  render() {
    return <Layout>"gaming"</Layout>;
  }
}

export default Gaming;
