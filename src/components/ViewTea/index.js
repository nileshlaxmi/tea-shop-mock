import React from "react";
import { withRouter } from "react-router-dom";

const ViewTea = ({ history }) => {
  debugger
  return (
    <div>
      Tea
      <button onClick={() => history.push("/")}>Back</button>
    </div>
  );
};

export default withRouter(ViewTea);
