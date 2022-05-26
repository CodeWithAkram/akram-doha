import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Leftbar from "./components/Leftbar";
import Context from "./Global/Context";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";

function App() {
  const [state, setState] = useState(false);
  const [current, setCurrent] = useState({});
  const openChat = (user) => {
    setState(true);
    setCurrent(user);
  };
  const closeChat = () => {
    setState(false);
  };

  return (
    <>
      <Context>
        <Navbar />
        <Login />
        <UserProfile />
      </Context>
      <div className="container">
        <Leftbar />
        <Posts />
      </div>
    </>
  );
}

export default App;
