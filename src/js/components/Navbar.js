import React from "react";

export default class Navbar extends React.Component {
  render() {

    const NavStyle = {
      height: "50px"
    };

    return (
      <nav class="navbar navbar-inverse" style={ NavStyle }>
        <div class="navbar-header">
          <div class="container-fluid">
              <div class="navbar-header">
                  <a class="navbar-brand" href="#">
                      <img src="http://1.bp.blogspot.com/-MkpqYVRXVDI/VbAkrianG7I/AAAAAAAAAzc/qPwGRarjrKo/s1600/paint.png"
                          height="100%" />
                  </a>
                  <span class="navbar-brand">Paint</span>
              </div>
          </div>
        </div>
      </nav>
    );
  }
}
