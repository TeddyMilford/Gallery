class ArtworkController < ApplicationController

  get "/artworks" do
    Artwork.all.to_json
  end

  delete "/artworks/:id" do
    find_artwork
    @artwork.destroy
    @artwork.to_json

  end

  private

  def find_artwork
    @artwork = Artwork.find(params[:id])
  end
  
  
end

