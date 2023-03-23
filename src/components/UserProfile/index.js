import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./style.css";

const Index = () => {
  const initializeState = () => {
    console.log("i:", JSON.parse(localStorage.getItem("user")));
    return JSON.parse(localStorage.getItem("user")) ?? 0;
  };
  const [userDetail, setuserDetail] = useState(initializeState());

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setuserDetail(user);
    }
  }, []);

  const doLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  let navigate = useNavigate();
  const loginPage = () => {
    let path = "/login";
    doLogout();
    navigate(path);
  };

  return (
    <>
      <Navbar />
      <div className="profile_main">
        <div className="pic">
          <img
            className="pic_img"
            src="https://xsgames.co/randomusers/avatar.php?g=male"
            alt="dummy user"
          ></img>
          <div className="pic_name">
            <h3>{userDetail.username}</h3>
            <div className="pic_userEmail">
              <p>
                {userDetail.firstName} {userDetail.lastName}
              </p>
              <p>{userDetail.email}</p>
            </div>
          </div>
        </div>

        <div className="edu">
          <div className="edu_boundary">
            <div className="edu_heading">
              <h4>Education:</h4>
              <div className="edu_add">
                <span>+</span>
              </div>
            </div>
            <div className="edu_content">
              <ul>
                <li>Jorhat Engineering College</li>
                <li>Rd Junior College</li>
                <li>Rd English Academy</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="edu">
          <div className="edu_boundary">
            <div className="edu_heading">
              <h4>Skills:</h4>
              <div className="edu_add">
                <span>+</span>
              </div>
            </div>
            <div className="edu_content">
              <ul>
                <li>Java</li>
                <li>Python</li>
                <li>SpringBoot</li>
                <li>React js</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="edu">
          <div className="edu_boundary">
            <div className="edu_heading">
              <h4>Experience:</h4>
              <div className="edu_add">
                <span>+</span>
              </div>
            </div>
            <div className="edu_content">
              <ul>
                <li>Intern at Automovill Technologies Pvt Ltd </li>
                
              </ul>
            </div>
          </div>
        </div>

        <div className="edu">
          <div className="edu_boundary">
            <div className="edu_heading">
              <h4>Projects:</h4>
              <div className="edu_add">
                <span>+</span>
              </div>
            </div>
            <div className="edu_content">
              <ol>
                <li>Opportunity finder website</li>
                <li>Task management webpage using MERN</li>
                <li>Flutter ticket booking app</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="edu">
          <div className="edu_boundary">
            <div className="edu_heading">
              <h4>Certifications:</h4>
              <div className="edu_add">
                <span>+</span>
              </div>
            </div>
            <div className="edu_content">
              <ol>
                <li>Into to python programming issued by udemy</li>
                <li>Data Analytics using Python issued by Coursera</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
