import React from "react";
import Card from "./Card";

function Gallery({ favorites, addToFavorites, getArtworkDetails }) {
  let deck;

  if (favorites.length === 0) {
    deck = <h1>You have don't have any favorites yet!</h1>;
  } else {
    deck = favorites.map((piece) => {
      return (
        <Card
          key={piece.id}
          piece={piece}
          addToFavorites={addToFavorites}
          favorites={favorites}
          getArtworkDetails={getArtworkDetails}
        />
      );
    });
  }
  return (
    <div>
      <div className="flex flex-wrap gap-x-8 gap-y-6 justify-center">
        {deck}
      </div>
    </div>
  );
}

export default Gallery;
