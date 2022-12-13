import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { getCurrentUserName } from "../../auth";
import logo from "../../assets/logo.png";
import Navbar from "../Navbar/Index";
import Sidebar from "../Sidebar/Index";

import Slider from "../Slider/Slider";
import Card  from "../card/Card";

const Home = () => {
  //   const [userName,getUserName]=useState([]);

  //  getUserName(getCurrentUserName);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="home">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Slider />
      <Card />
      
    </div>
  );
};
export default Home;
