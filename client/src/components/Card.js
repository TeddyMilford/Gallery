import React, { useState } from "react";

function Card({ piece, addToFavorites, favorites }) {
  const [cardFavorited, setCardFavorited] = useState(false);

  let title = piece.title;
  let image = piece.img_link;
  let artist = piece.artist;
  let url = `https://www.artic.edu/iiif/2/${image}/full/843,/0/default.jpg`;

  // const tog = watchData.find((c) => {
  //   return c.id === coin.id;
  // });

  const tog = favorites.find((c) => {
    return c.id === piece.id;
  });

  // let favoriteButtonSyntax = cardFavorited ? "♥ Favorited" : "♡ Favorite";

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={url}
        alt="Sunset in the mountains"
        // width={4}
      ></img>
      <div className="px-6 pt-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {artist != null ? artist : "Unknown"}
        </p>
      </div>
      <div
        onClick={(event) => {
          // setCardFavorited(!cardFavorited);
          addToFavorites(piece, event);
        }}
        className="px-6 pb-2 flex justify-end"
        id="favorite"
      >
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tog ? "♥ Favorited" : "♡ Favorite"}
        </span>
      </div>
    </div>
  );
}

export default Card;
