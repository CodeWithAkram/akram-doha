import React, { useState, useEffect } from "react";

const Leftbar = () => {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/users?id=1`);
    const data = await res.json();
    console.log(setUsers(data));
 
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <div className="leftbar">
        {users.map((info) => (
          <div className="leftbar__list" key={info.id}>
            <div className="leftbar__list__img">
              <img src="/images/akram.jpeg" alt={info.name} />
            </div>
            <div className="leftbar__list__username">{info.username}</div>
            <div className="leftbar__list__name">{info.name}</div>
            <div className="leftbar__list__name">{info.email}</div>
            <div className="leftbar__list__name">{info.phone}</div>
             <div className="leftbar__list__name">{info.address.street}, {info.address.city}</div>
             <div className="leftbar__list__name">{info.website}</div>
             <div className="leftbar__list__name">{info.company.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Leftbar;
