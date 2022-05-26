import React, { createContext, useState } from "react";
export const ContextProvider = createContext();

const Context = (props) => {
  const [profile, setProfile] = useState(false);
  const [login, setLogin] = useState(false);

  const openProfile = () => {
    setProfile(true);
  };

  const closeProfile = () => {
    setProfile(false);
  };

  const openForm = () => {
    setLogin(true);
  };

  const closeForm = () => {
    setLogin(false);
  };

  return (
    <>
      <ContextProvider.Provider
        value={{
          login,
          openForm,
          closeForm,
          profile,
          openProfile,
          closeProfile,
        }}
      >
        {props.children}
      </ContextProvider.Provider>
    </>
  );
};

export default Context;
