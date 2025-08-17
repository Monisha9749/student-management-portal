import React, { useState } from "react";
import "./SignUp.css";
import UserCard from "./UserCard";

const SignUp = ({ onRegister }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [registeredUser, setRegisteredUser] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); 
  };

  const validateForm = () => {
    const { name, email, password } = form;
    const newErrors = {};

    if (!name || name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters long";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must be at least 8 characters, include an uppercase, lowercase, number, and special character";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (onRegister) onRegister(form);

    setRegisteredUser({ name: form.name, email: form.email });
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label>
          Name <span className="required">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}

        <label>
          Email <span className="required">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}

        <label>
          Password <span className="required">*</span>
        </label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className={errors.password ? "input-error" : ""}
        />
        {errors.password && <p className="error-text">{errors.password}</p>}

        <button type="submit" className="save-btn">
          Register
        </button>
      </form>

      {registeredUser && (
        <UserCard name={registeredUser.name} email={registeredUser.email} />
      )}
    </div>
  );
};

export default SignUp;
