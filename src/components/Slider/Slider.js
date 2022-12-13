import React from 'react'
import Img1 from '../../assets/img1.jpg';
import Img2 from '../../assets/img2.jpg';
import Img3 from '../../assets/img3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './slider.css'



const Slider = () => {
    return (
        <div className='clide'>
            <div id="carouselExampleControls" className="carousel slide clide" data-ride="carousel">
                <div className="carousel-inner clide">
                    <div className="carousel-item active">
                        <img className="d-block w-100 clide" src={ Img1 } alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 clide" src={ Img2 } alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 clide" src={ Img3 } alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    {/* <span className="sr-only">Previous</span> */}
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    {/* <span clasName="sr-only">Next</span> */}
                </a>
            </div>
        </div>
    )
}

export default Slider;
