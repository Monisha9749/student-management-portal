import React from "react";
import "./StudentManagement.css";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const StudentManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="header">
        <div className="header-content">
          <h1 className="title">Student Management Portal</h1>
          <p className="subtitle">
            Register today for smarter student information management.
          </p>
          <button
            className="shop-btn"
            onClick={() => navigate("/signup")} 
          >
            Sign In
          </button>
        </div>
        <img src={logo} alt="Student Registration" className="large-logo" />
      </div>
    </div>
  );
};

export default StudentManagement;
