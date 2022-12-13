import React, { useState } from 'react'
import Navbar from "../Navbar/Index";
import Sidebar from "../Sidebar/Index";
import Components from './Components';

import BookData from '../../Data.json';
import 'bootstrap/dist/css/bootstrap.min.css';


const Hackathon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='hack'>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Components placeholder='Enter Hackathon name...'  data={BookData}/>
    </div>
  )
}

export default Hackathon
