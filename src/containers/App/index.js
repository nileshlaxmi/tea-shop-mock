import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Dashboard from "../Dashboard";
import "../../resources/css/common.css";
import ViewTea from "../../components/ViewTea";

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/tea-item" component={ViewTea} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
