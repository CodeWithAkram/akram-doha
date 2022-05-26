import React, { useState, useEffect } from "react";
import { FaRegThumbsUp, FaRegCommentAlt, FaShareAlt } from "react-icons/fa";
const ShowPost = () => {
  const [state, setState] = React.useState([]);

  const getUser = async () => {
    const url = process.env.REACT_APP_USERS_API;
    const res = await fetch(url);
    const data = await res.json();
    console.log(setState(data));
   
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="show">
      {state.map((user) => (
        <div key={user.id} className="empty">
          <div className="show__header">
            <div className="show__header-img">
              <img src="/images/akram.jpeg" alt={user.name} />
            </div>
            <div className="show__header-name">{user.username}</div>
          </div>
          <div className="show__body">
            <div className="show__body-text">{user.name}</div>
            <div className="show__body-text">{user.email}</div>
            <div className="show__body-text">{user.phone}</div>
            <div className="show__body-text">
              {user.address.street}, {user.address.city}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowPost;
