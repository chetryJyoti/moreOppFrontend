import React, { useState } from "react";
import "./home.css";
import { getCurrentUserName } from "../../auth";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Index";

import Slider from "../../components/Slider/Slider";
import Card from "../../components/common/card/Card";

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
      <Card/>
    </div>
  );
};
export default Home;
