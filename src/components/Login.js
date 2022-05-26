import React, { useContext, useState } from "react";
import { ContextProvider } from "../Global/Context";

const Login = () => {
  const { login, closeForm } = useContext(ContextProvider);

  const closeLogin = (e) => {
    const className = e.target.getAttribute("class");
    if (className === "login") {
      closeForm();
    }
  };

  const [state, setState] = useState({
    register: true,
    login: false,
  });

  const formsToggle = () => {
    setState({
      ...state,
      register: !state.register,
      login: !state.login,
    });
  };

  return (
    <>
      {login ? (
        <div className="login" onClick={closeLogin}>
          <div className="login__container">
            {state.register ? (
              <div className="login__form">
                <form>
                  <h2>Facebook Registration Form</h2>
                  <div className="login__form__inputs">
                    <input
                      type="text"
                      name="username"
                      className="login__input"
                      placeholder="username..."
                    />
                  </div>
                  <div className="login__form__inputs">
                    <input
                      type="email"
                      name="email"
                      className="login__input"
                      placeholder="email..."
                    />
                  </div>
                  <div className="login__form__inputs">
                    <input
                      type="password"
                      name="password"
                      className="login__input"
                      placeholder="create password..."
                    />
                  </div>
                  <div className="login__form__inputs">
                    <input type="submit" value="Registration" />
                  </div>
                  <div className="login__form_text">
                    <span onClick={formsToggle}>You have already account?</span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="login__form">
                <form>
                  <h2>Facebook Login Form</h2>
                  <div className="login__form__inputs">
                    <input
                      type="email"
                      name="email"
                      className="login__input"
                      placeholder="email..."
                    />
                  </div>
                  <div className="login__form__inputs">
                    <input
                      type="password"
                      name="password"
                      className="login__input"
                      placeholder="create password..."
                    />
                  </div>
                  <div className="login__form__inputs">
                    <input type="submit" value="Login" />
                  </div>
                  <div className="login__form_text">
                    <span onClick={formsToggle}>Please registraion here?</span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Login;
