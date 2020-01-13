import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    // axios
    //   .get("https://api.github.com/users")
    //   .then(res => console.log(res.data));
    this.setState({ loading: true });

    const res = await axios.get("https://api.github.com/users");

    // console.log(res.data);
    this.setState({ users: res.data, loading: false });
  }
  render() {
    // const name = "Rajib Paul";
    // const loading = false;
    // const showName = true;
    return (
      <div className='App'>
        <Navbar title='Github Finder' />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
