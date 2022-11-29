import React from "react";
import { Link } from "react-router-dom";
import './forgot.css';
import { useState } from "react";
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

const Forgot = () => {

    const [pass, setPass] = useState('password');
    const [ion, setIon] = useState(eyeOff);

    const handleToggle = () => {
        if (pass === 'Password') {
            setIon(eye);
            setPass('text');
        }
        else {
            setIon(eyeOff);
            setPass('Password');
        }
    }

    return (
        <div className="page">
            <div className="Forgot">
                <h1>
                    Forgot Password
                </h1>
                <div className="fro-email">
                    <div className="for-go">
                        <label for="email"><b>Enter a Email</b></label>
                        <input type="text" placeholder="Email" name="email" equired />
                    </div>
                    <div className="for-go">
                        <label for="email"><b>New Password</b></label>
                        <input type={pass} placeholder="Enter New Password"/>
                        <span onClick={handleToggle} ><Icon icon={ion} size='1.5em' /></span>

                    </div>
                    <div className="reset">
                        <button>Reset password</button>
                        {/* <span onClick={handleToggle} ><Icon icon={icon} size='1.5em' /></span> */}
                    </div>
                    <div className="back-login">
                            <p>Or</p>
                            <Link to='../Login'>
                                <span>
                                    Login
                                </span>
                            </Link>
                        </div>
                </div>
            </div>


        </div>
    );

}

export default Forgot;