import React, { useContext } from "react";
import { ContextProvider } from "../Global/Context";
import { MdFeedback } from "react-icons/md";

const UserProfile = () => {
  const { profile, closeProfile } = useContext(ContextProvider);

  const closeUserProfile = (e) => {
    const className = e.target.getAttribute("class");
    if (className === "user__profile") {
      closeProfile();
    }
  };

  return (
    <>
      {profile ? (
        <div className="user__profile" onClick={closeUserProfile}>
          <div className="user__profile_body">
            <div className="user__profile__area">
              <div className="user__profile__avatar">
                <img src="/images/akram.jpeg" />
              </div>
              <div className="user__profile__name">Akram Khan</div>
            </div>
            <div className="user__profile__feedback">
              <div className="user__profile__feed">
                <span className="feedback__circle">
                  <MdFeedback className="feedback" />
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default UserProfile;
