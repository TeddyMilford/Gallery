import React from "react";
import HomeNav from "./HomeNav";
import Content from "./Content";
import SearchBar from "./SearchBar";

function HomePage({ artCollection, favorites, addToFavorites }) {
  // console.log(favorites);
  return (
    <>
      <HomeNav />
      <SearchBar />
      <Content
        artCollection={artCollection}
        favorites={favorites}
        addToFavorites={addToFavorites}
      />
    </>
  );
}

export default HomePage;
