import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { getCurrentUserName } from "../../auth";
import logo from "../../assets/logo.png";
import Navbar from "../Navbar/Index";
import Sidebar from "../Sidebar/Index";

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
    </div>
  );
};
export default Home;
