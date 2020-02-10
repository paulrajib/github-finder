import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

// const element = <FontAwesomeIcon icon={faGithub} />;

//const Navbar = props => {
const Navbar = ({ title }) => {
  //render() {
  return (
    <div className='navbar bg-primary'>
      {/* <h1>{element} NavBar</h1> */}
      <h1>
        <i className='fa fa-github'></i>
        {/* <FontAwesomeIcon icon={faGithub} />  */}
        <span> </span>
        {title}
      </h1>
    </div>
  );
  //}
};

Navbar.defaultProps = {
  title: "Github Finder"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;
