/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import loginSvg from "../../assets/loginSvg.svg";
import logo from "../../assets/logo.png";
import React from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { getCurrentUser, Userlogin } from "../../services/userService";
import { doLogin, getCurrentUserDetail, getCurrentUserName, getUserRole, setUser } from "../../auth";

const Login = () => {
  const [pwd, setPwd] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (pwd === "Password") {
      setIcon(eye);
      setPwd("text");
    } else {
      setIcon(eyeOff);
      setPwd("Password");
    }
  };

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };
  //setting user login
  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualValue,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("loginData:", loginDetail);
    if (
      loginDetail.username.trim() === "" ||
      loginDetail.password.trim() === ""
    ) {
      //
    //  console.log("userdetail:", getCurrentUserDetail());
    //  console.log("currentUSERName:",getCurrentUserName());
    //  console.log("authority:",getUserRole());
   
      toast.error("username or password is required", {
        position: "top-right",
        autoClose: 500,
      });
    } else {
      //submit the data to server to generate token
      Userlogin(loginDetail)
        .then((data) => {
          console.log("token:", data.token);
          //saving the data to localstorage
          doLogin(data.token, () => {
            console.log("logindata stored to localstorage");
            //redirect user to home page
          });
          // current user login data
          getCurrentUser()
            .then((user) => {
              console.log("current-user:", user);
              setUser(user);
              //redirecting to user to home page
              setTimeout(() => {
                navigateToHome();
              }, 600);
            })
            .catch((error) => {
              console.log("current_user_error:", error);
              toast.error("invalid credentials!", {
                position: "top-right",
                autoClose: 500,
              });
            });

          toast.success("login success!", {
            position: "top-right",
            autoClose: 500,
          });
        })
        .catch((error) => {
          // console.log("somthing went wrong:", error.response.status);
          toast.error("invalid credentials!!", {
            position: "top-right",
            autoClose: 500,
          });
        });
    }
  };

  return (
    <div className="page">
      <img className="loginSvg" src={loginSvg} alt="Signup svg image"></img>
      <div className="cover">
        <div className="Login">
          <form onSubmit={handleFormSubmit}>
            <h1>Login</h1>
            <div className="cover2">
              <p>Username</p>
              <input
                type="text"
                placeholder="abc123"
                value={loginDetail.username}
                onChange={(e) => handleChange(e, "username")}
              />
              <div className="nano">
                <p>Password</p>
                <input
                  type={pwd}
                  placeholder="Enter Password"
                  value={loginDetail.password}
                  onChange={(e) => handleChange(e, "password")}
                />
                <span onClick={handleToggle}>
                  <Icon icon={icon} size="1.5em" />
                </span>
              </div>
            </div>
            <div className="login-btn">
              <button>Login</button>
            </div>
          </form>
        </div>
        <Link to="../forgotPassword" style={{ textDecoration: "none" }}>
          <span>Forgot Password</span>
        </Link>
        <p>
          Dont’t have a account ?
          <Link to="../signUp" style={{ textDecoration: "none" }}>
            <span className="line">Sign Up</span>
          </Link>
        </p>
        {/* <div className="Home1">
          <Link to={"/"}>
            <h2>Back to Home</h2>
          </Link>
        </div> */}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
export default Login;
