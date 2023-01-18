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
      <div className="userProfile">
        <div>
         <div className="userContent">
         <h3>Hello, {userDetail.username}</h3>
          <img
            src="https://xsgames.co/randomusers/avatar.php?g=male"
            alt="dummy user"
          ></img>
          <p>FirstName: {userDetail.firstName}</p>
          <p>Lastname:{userDetail.lastName}</p>
          <p>Email:{userDetail.email}</p>
          {/* <p>Authority:{userDetail.authorities[0].authority}</p> */}
         </div>
          <button onClick={() => loginPage()}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Index;
