class Artwork < ActiveRecord::Base
  has_many :favorites
  has_many :users, through: :artworks

  def self.fetchOneThousandRandomArtworks
    self.all.shuffle.take(50)
  end
end

