import React from "react";
import { Link } from "react-router";

import Navbar from "../components/Navbar";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;

    const containerStyle = {
      marginTop: "60px"
    };

    return (
      <div>
        <Navbar />
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-md-12">

              {this.props.children}

            </div>
          </div>
        </div>
      </div>

    );
  }
}
