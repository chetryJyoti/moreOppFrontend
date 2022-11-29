import React  from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Login/Login';
import SingUp from './components/SingUp/SingUp';
import Forgot from "./components/Forgot/Forgot";
import Home from './components/Home/Home';
import Admin from "./components/Admin/Admin";

const App=()=>{
return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SingUp />} />
        <Route path="/forgotPassword" element={<Forgot />} />
        <Route path='/admin' element ={<Admin/>}/>
    </Routes>
)
}
export default App;