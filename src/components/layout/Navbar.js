import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// const element = <FontAwesomeIcon icon={faGithub} />;

export class Navbar extends Component {
  render() {
    return (
      <div className='navbar bg-primary'>
        {/* <h1>{element} NavBar</h1> */}
        <h1>
          <FontAwesomeIcon icon={faGithub} /> NavBar
        </h1>
      </div>
    );
  }
}

export default Navbar;
