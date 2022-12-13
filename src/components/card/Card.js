import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './card.css';
const Card = () => {
    return (
        <div className='test'>
            <h3>Looking for oppourtunities ??? </h3>
            <div className="test2">
                <div className="container">
                    <div className="ard">
                        <div className="body">
                            <Link to="../scholarship" style={{ textDecoration: "none" }}>
                                <pre>
                                    <h2>internships</h2>
                                </pre>
                            </Link>
                        </div>
                    </div>
                    <div className="ard">
                        <div className="body">
                            <Link to="../internship" style={{ textDecoration: "none" }}>
                                <pre>
                                    <h2>scholarships</h2>
                                </pre>
                            </Link>
                        </div>
                    </div>
                    <div className="ard">
                        <div className="body">
                            <Link to="../hackathon" style={{ textDecoration: "none" }}>
                                <pre>
                                    <h2>hackathons</h2>
                                </pre>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
