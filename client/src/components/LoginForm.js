import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginForm({ existingUsers, handleLogin, fetchUserFavoriteArtworks }) {
  const [usernameField, setUsernameField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const history = useHistory();

  function onLogin(e) {
    e.preventDefault();

    const authenticatedUser = existingUsers.find(
      (existingUser) =>
        (existingUser.username === usernameField) &
        (existingUser.password === passwordField)
    );
    if (authenticatedUser !== undefined) {
      console.log(authenticatedUser);
      handleLogin(authenticatedUser);
      fetchUserFavoriteArtworks(authenticatedUser);
      setUsernameField("");
      setPasswordField("");
      history.push(`/home/discover`);
    } else {
      alert(
        "Incorrect username and password combination! Our usernames and passwords are case sensitive. Please try again!"
      );
    }
  }

  return (
    <div className="h-screen flex bg-grey-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Log in to your account 🔐
        </h1>

        <form onSubmit={(e) => onLogin(e)}>
          <div>
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="username"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 bg-slate-50`}
              id="username"
              placeholder="Your Username"
              onChange={(e) => {
                setUsernameField(e.target.value);
              }}
            />
          </div>
          <div>
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 bg-slate-50`}
              id="password"
              placeholder="Your Password"
              onChange={(e) => {
                setPasswordField(e.target.value);
              }}
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
              type="submit"
              onClick={(e) => {}}
              className={`bg-green py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark`}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
