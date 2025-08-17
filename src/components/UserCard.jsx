import React from "react";
import "./UserCard.css";

const UserCard = ({ name, email }) => {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;
