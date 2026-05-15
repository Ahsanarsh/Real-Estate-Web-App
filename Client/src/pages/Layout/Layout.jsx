import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import HomePage from "../homepage/HomePage";
import "./layout.scss";

export const Layout = () => {
  return (
    <div className="Layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
