import React from "react";
import "./styles.css";
// import s1 from "../../../../assets/s1.jpg";
const ListItem = ({ item,images }) => {
  return (
    <div className="listItem-wrap">
      <div className="listItem-img">
        <a href={item.linkToRegister}>
          <div>
          <img src={item.bannerImgLink} alt="" /> 
           {/* <img src={images} alt=""/> */}
          </div>
          
        </a>
      </div>
      <div>
        <header>
          <h4>{item.title }</h4>
          <p>{item.description}</p>
          <h6>Last date to register:{item.lastDayToRegister}</h6>
          <div>{item.eligibility && <h6>Eligibility:{item.eligibility}</h6> }</div>
        </header>
        <footer>
          <p>
            <span>active: </span>
            {item.active.toString()}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ListItem;

