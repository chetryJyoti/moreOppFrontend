import React  from "react";
import { Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import SingUp from './components/SingUp/SingUp';
import Forgot from "./components/Forgot/Forgot";
import Home from './pages/Home/Home';
import Admin from "./components/Admin/Admin";
import Hackathon from "./pages/Hackathon";
import Internship from "./pages/Internships";
import Scholarship from "./pages/Scholarships";
import About from "./pages/About/About";
import UserProfile from "./components/UserProfile"


const App=()=>{
return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SingUp />} />
        <Route path="/userProfile" element={<UserProfile/>}/>
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