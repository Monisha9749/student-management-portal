import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentManagement from "./components/StudentManagement";
import SignUp from "./components/SignUp";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      {/* Navbar always on top */}
      <Navbar />

      {/* Route content below Navbar */}
      <Routes>
        <Route path="/" element={<StudentManagement />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
