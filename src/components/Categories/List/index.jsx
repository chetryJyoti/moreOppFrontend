import React from "react";
import ListItem from "./ListItem";
import './styles.css'

const List = ({list,images}) => {
  return (
    <div className="list-wrap">
      {list.map((item) => (
        <ListItem key={item.hId} item={item} images={images} />
      ))}
      
    </div>
  );
};

export default List;
