import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { listTea, deleteTea } from "../../store/tea/action";
import TeaItem from "../../components/TeaItem";
import "./style.css";

class TeaList extends Component {
  componentDidMount() {
    this.props.listTea();
  }

  deleteTea = (uid) => {
    this.props.deleteTea(uid);
  }

  render() {
    const { listTeaAr } = this.props;
    return (
      <div className="tea-list-container">
        {listTeaAr &&
          listTeaAr.map((item, index) => {
            return (
              <Fragment key={index}>
                <TeaItem item={item} deleteTea={this.deleteTea}/>
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
  deleteTea
};

export default connect(mapStateToProps, mapDisPatchToProps)(TeaList);
