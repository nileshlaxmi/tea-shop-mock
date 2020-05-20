import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getTea } from "../../store/tea/action";
import "./style.css";
import genericImg from "../../resources/images/images.png";
import backBtn from "../../resources/icons/icon-back-grey.svg";

class ViewTea extends Component {
  componentDidMount() {
    const teaId = this.getTeaId();
    if (teaId) this.props.getTea(teaId);
  }

  getTeaId = () => {
    const { match } = this.props;
    return match && match.params && match.params.uid;
  };

  render() {
    const { history, teaObject } = this.props;
    return (
      <div className="tea-outer-container">
        <div className="tea-inner-container">
          <div className="tea-text">
            <img src={backBtn} onClick={() => history.push("/")} />
            <div className="desc">
              <div className="item"><label>Name : </label>{teaObject.name}</div>
              <div className="item"><label>Price</label>{teaObject.price}</div>
              <div className="item"><label>Description</label>{teaObject.description}</div>
            </div>
          </div>
          <div className="tea-image">
            <img src={teaObject.url ? teaObject.url : genericImg} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  teaObject: state.tea.teaObject || {},
});

const mapDispatchToProps = {
  getTea,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ViewTea)
);
