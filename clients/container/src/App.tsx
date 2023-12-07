import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";
import Admin from "./pages/Admin";
import DashboardLayout from "./layouts/Layout";

const App = () => (
  <>
  <Router>
    <Routes>
      <Route path='/dashboard' element={<DashboardLayout/>}>
        <Route path='/dashboard' element={<Admin/>} />
      </Route>
    </Routes>
  </Router>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
