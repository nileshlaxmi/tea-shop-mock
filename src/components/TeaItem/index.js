import React from "react";
import "./style.css";
import genericImg from "../../resources/images/images.png";
import deleteImg from "../../resources/icons/delete.svg";
import addImg from "../../resources/icons/add.svg";
import { withRouter } from "react-router-dom";

const TeaItem = ({ item, history, deleteTea }) => {
  const { uid } = item;
  return (
    item && (
      <div className="tea-item">
        <div className="img-card">
          <img
            src={item.url ? item.url : genericImg}
            alt={item.name}
            onClick={() => history.push(`/tea-item/${uid}`)}
          />
          <div className="container">
            <p>{item.name}</p>
            <p>Rs {item.price}</p>
            {/* <p className="description ellipsis" title={item.description}>
              {item.description}
            </p> */}
            <div className="options">
              {/* <img src={addImg} alt="Add" /> */}
              <img
                src={deleteImg}
                alt="Delete"
                onClick={() => deleteTea(item.uid)}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default withRouter(TeaItem);
