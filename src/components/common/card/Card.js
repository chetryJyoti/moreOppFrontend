import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { RiAncientPavilionLine } from 'react-icons/ri';
import { TbCertificate } from 'react-icons/tb';
import { BiTimeFive } from 'react-icons/bi';
import { SiHackthebox } from 'react-icons/si';
import { RiUser6Line } from 'react-icons/ri';
import { FaSchool } from 'react-icons/fa';
import { IoSchoolSharp } from 'react-icons/io5';
import { IoSchoolOutline } from 'react-icons/io5';


import './card.css';
const Card = () => {
    return (
        <div className="newCard">
            <div className="newCard1">
                <h4>Looking for more opportunities</h4>

                {/* Internships */}
                <div className='hack'>
                    <div className='hack1'>
                        <h6>Apply For Internships</h6>
                        <Link to='/internship'>
                            <span>Explore All</span>
                        </Link>
                    </div>
                    <div className="contented">
                        <div className="hack3">
                            <div className="hack4">
                                <FaMoneyBillAlt className="svg_icons" />
                                <p>Paid</p>
                            </div>
                        </div>
                        <div className="hack3">
                            <div className="hack4">
                                <RiAncientPavilionLine className="svg_icons" />
                                <p>Virtual</p>
                            </div>
                        </div>
                        <div className="hack3">
                            <div className="hack4">
                                <TbCertificate className="svg_icons" />
                                <p>Certificate</p>
                            </div>
                        </div>
                        <div className="hack3">
                            <div className="hack4">
                                <BiTimeFive className="svg_icons" />
                                <p>Part Time</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/*Hackathons*/}
                <div className='hack'>
                    <div className='hack1'>
                        <h6>Participate in Hackathons</h6>
                        <Link to='/hackathon'>
                            <span>Explore All</span>
                        </Link>
                    </div>
                    <div className="contented">
                        <div className="hack3">
                            <div className="hack4">
                                <SiHackthebox className="svg_icons" />
                                <p>Remote</p>
                            </div>
                        </div>
                        <div className="hack3">
                            <div className="hack4">
                                <SiHackthebox className="svg_icons" />
                                <p>College hacks</p>
                            </div>
                        </div>
                        <div className="hack3">
                            <div className="hack4">
                                <SiHackthebox className="svg_icons" />
                                <p>Prize money</p>
                            </div>
                        </div>
                        <div className="hack3">
                            <div className="hack4">
                                <SiHackthebox className="svg_icons" />
                                <p>Free Entry</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scholarships */}
                <div className='hack'>
                    <div className='hack1'>
                        <h6>Apply For Scholarships</h6>
                        <Link to='../scholarship'>
                            <span>Explore All</span>
                        </Link>
                    </div>
                    <div className="contented">
                        <div className="hack3">
                            <div className="hack4">
                                <RiUser6Line className="svg_icons" />
                                <p>All</p>
                            </div>
                        </div>
                        <div className="hack3">
                            <div className="hack4">
                                <FaSchool className="svg_icons" />
                                <p>School Student</p>
                            </div>
                        </div>
                        <div className="hack3">
                            <div className="hack4">
                                <IoSchoolSharp className="svg_icons" />
                                <p>College Student</p>
                            </div>
                        </div>
                        <div className="hack3">
                            <div className="hack4">
                                <IoSchoolOutline className="svg_icons" />
                                <p>Undergraduate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
