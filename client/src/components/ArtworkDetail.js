import { useHistory } from "react-router-dom";

function ArtworkDetail({ artworkDetails }) {
  const history = useHistory();

  const cardFavorited = true;
  const favoriteButtonSyntax = cardFavorited ? "♥ Favorited" : "♡ Favorite";

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={artworkDetails.thumbnail.alt_text}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={`https://www.artic.edu/iiif/2/${artworkDetails.image_id}/full/843,/0/default.jpg`}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {artworkDetails.title !== null
                ? artworkDetails.title
                : "Unknown Title"}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center justify-start">
                <span className="text-gray-600 ml-3 font-normal text-lg">
                  {artworkDetails.date_display !== null
                    ? artworkDetails.date_display
                    : "Unknown Date"}
                </span>
              </span>
              <span className="flex ml-4 pl-3 py-1 border-l-2 border-gray-200 space-x-2s">
                <span className="flex items-center justify-start">
                  <span className="text-gray-600 ml-3 font-normal text-lg">
                    {artworkDetails.artist_display !== null
                      ? artworkDetails.artist_display
                      : "Unknown Artist"}
                  </span>
                </span>
              </span>
            </div>
            <p className="leading-relaxed pb-3 italic">
              {artworkDetails.medium_display !== null
                ? artworkDetails.medium_display
                : "Unknown Medium"}
            </p>
            <p className="leading-relaxed">
              {artworkDetails.thumbnail.alt_text !== null
                ? artworkDetails.thumbnail.alt_text
                : "No artwork description listed"}
            </p>
            <div className="flex mt-6  pb-5 border-b-2 border-gray-100 mb-5"></div>
            <div className="flex justify-between">
              <button
                className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                onClick={() => history.push("/home/discover")}
              >
                Back to Discover Page
              </button>
              <button className="flex ml-auto text-gray-500 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded">
                {favoriteButtonSyntax}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArtworkDetail;
