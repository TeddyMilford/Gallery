import Discover from "./Discover";
import { Route, Switch } from "react-router-dom";
import ArtworkDetail from "./ArtworkDetail";
import Gallery from "./Gallery";

function Content({ artCollection, favorites, addToFavorites }) {
  return (
    <Switch>
      <Route path="/home/discover">
        <Discover
          artCollection={artCollection}
          addToFavorites={addToFavorites}
          favorites={favorites}
        />
      </Route>
      <Route path="/details/:id">
        <ArtworkDetail />
      </Route>
      <Route path="/home/gallery">
        <Gallery
          favorites={favorites}
          addToFavorites={addToFavorites}
        />
      </Route>
    </Switch>
  );
}

export default Content;
