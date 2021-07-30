import React, { useState } from "react";
import "./User.css";
const User = (props) => {
  const { name, picture, email, phone } = props.data;
  const addHandler = props.addHandler;
  const fullName = name.title + " " + name.first + " " + name.last;
  const [number, setNumber] = useState(" ");
  const showNumber = () => {
    setNumber(phone);
  };

  return (
    <div className="user">
      <div className="user-img">
        <img src={picture.medium} alt={fullName} />
      </div>
      <div className="user-details">
        <h4>
          Name: {fullName}
          <br />
          Email: {email}
          <br />
          Phone: {number}
          <br />
          <button onClick={showNumber}>show number</button>
          <button onClick={() => addHandler(fullName)}>add me</button>
        </h4>
      </div>
    </div>
  );
};
export default User;
