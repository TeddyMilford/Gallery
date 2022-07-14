// import logo from "./logo.svg";
import "../App.css";

import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import LoginForm from "./LoginForm";
import NewUserForm from "./NewUserForm";
import HomePage from "./HomePage";

function App() {
  const [authenticatedUser, setAuthenticatedUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [artCollection, setArtCollection] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:4200//users")
      .then((r) => r.json())
      .then((allUserData) => setAllUsers(allUserData));

    fetch("http://127.0.0.1:4200/artworks")
      .then((response) => response.json())
      .then((data) => {
        setArtCollection(data);
      });
  }, []);

  function handleLogin(user) {
    setAuthenticatedUser(user);
  }

  function fetchUserFavoriteArtworks(authenticatedUser) {
    return fetch(
      `http://127.0.0.1:4200/users/${authenticatedUser.id}?include_artworks`
    )
      .then((response) => response.json())
      .then((userData) => setFavorites(userData.artworks));
  }

  function postNewUser(newUser) {
    fetch("http://127.0.0.1:4200/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((r) => r.json())
      .then((newUser) => handleLogin(newUser));
  }

  function addToFavorites(piece, e) {
    if (e.target.innerText === "♥ Favorited") {
      console.log(authenticatedUser.first_name + " unfavorited " + piece.title);
      fetch()
        .then((response) => response.json())
        .then((data) => console.log(data));
    }

    if (e.target.innerText === "♡ Favorite") {
      console.log(authenticatedUser.first_name + " favorited " + piece.title);
    }
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/login">
          <LoginForm
            existingUsers={allUsers}
            handleLogin={handleLogin}
            fetchUserFavoriteArtworks={fetchUserFavoriteArtworks}
          />
        </Route>
        <Route path="/signup">
          <NewUserForm existingUsers={allUsers} postNewUser={postNewUser} />
        </Route>
        <Route path="/home">
          <HomePage
            artCollection={artCollection}
            favorites={favorites}
            addToFavorites={addToFavorites}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
