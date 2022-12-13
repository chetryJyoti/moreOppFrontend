import React  from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Login/Login';
import SingUp from './components/SingUp/SingUp';
import Forgot from "./components/Forgot/Forgot";
import Home from './components/Home/Home';
import Admin from "./components/Admin/Admin";
import Hackathon from "./components/Hackathons/Hackathon";
import Internship from "./components/Internships/Internship";
import Scholarship from "./components/Scholarships/Scholarship";
import About from "./components/About/About";

const App=()=>{
return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SingUp />} />
        <Route path="/forgotPassword" element={<Forgot />} />
        <Route path='/admin' element ={<Admin/>}/>
        <Route path="/hackathon" element={<Hackathon/>} />
        <Route path="/internship" element={<Internship/>} />
        <Route path="/scholarship" element={<Scholarship/>} />
        <Route path="/about" element={<About/>}/>
    </Routes>
)
}
export default App;