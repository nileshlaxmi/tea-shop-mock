import React from "react";
import "./style.css";
import genericImg from "../../resources/images/images.png";
import { withRouter } from "react-router-dom";

const TeaItem = ({ item, history }) => {
  const {uid} = item;
  return (
    item && (
      <div className="tea-item" onClick={() => history.push(`/tea-item/${uid}`)}>
        <div className="img-card">
          <img src={item.url ? item.url : genericImg} alt={item.name} />
          <div className="container">
            <p>{item.name}</p>
            <p>{item.price} Rs</p>
            <p className="ellipsis" title={item.description}>
              {item.description}
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default withRouter(TeaItem);
