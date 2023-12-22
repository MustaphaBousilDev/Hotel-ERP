import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";
import Admin from "./pages/Admin";
import DashboardLayout from "./layouts/Layout";
import { LayoutProvider } from "./components/hooks/useLayouts";
import './i18n';
import Home from "./pages/Home";
//tasks 
import {Add,Tasks,Config,Raport} from './pages/tasks'


const App:React.FC = () => (
  <LayoutProvider>
  <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/dashboard' element={<DashboardLayout/>}>
        <Route path='/dashboard' element={<Admin/>} />
        <Route path='/dashboard/tasks' element={<Tasks/>} />
        <Route path='/dashboard/tasks/add' element={<Add/>} />
        <Route path='/dashboard/tasks/config' element={<Config/>} />
        <Route path='/dashboard/tasks/report' element={<Raport/>} />
      </Route>
    </Routes>
  </Router>
  </LayoutProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
