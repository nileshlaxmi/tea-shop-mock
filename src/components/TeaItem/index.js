import React from "react";
import "./style.css";
import genericImg from "../../resources/images/images.png";
import { withRouter } from "react-router-dom";

const TeaItem = ({ item, history }) => {
  return (
    <div className="tea-item" onClick={() => history.push('/tea-item')}>
      {item && (
        <div className="img-card">
          <img src={item.url ? item.url : genericImg} alt={item.name} />
          <div className="container">
            <p>{item.name}</p>
            <p>Price {item.price}</p>
            <p>Description {item.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(TeaItem);
