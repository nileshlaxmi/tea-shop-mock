import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { listTea } from "../../store/tea/action";
import TeaItem from "../../components/TeaItem";
import "./style.css";

class TeaList extends Component {
  componentDidMount() {
    this.props.listTea();
  }

  render() {
    const { listTeaAr } = this.props;
    return (
      <div className="tea-list-container">
        {listTeaAr &&
          listTeaAr.map((item, index) => {
            return (
              <Fragment key={index}>
                <TeaItem item={item} />
              </Fragment>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listTeaAr: state.tea.listTeaAr || [],
  };
};

const mapDisPatchToProps = {
  listTea,
};

export default connect(mapStateToProps, mapDisPatchToProps)(TeaList);
