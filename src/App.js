import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import "./App.css";

class App extends Component {
  render() {
    // const name = "Rajib Paul";
    // const loading = false;
    // const showName = true;
    return (
      <div className='App'>
        <Navbar title='Github Finder' />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
