require 'Pry'

class UserController < ApplicationController

  get '/users' do
    User.all.to_json
  end


  get '/users/:id' do
    find_user

    if params.include?("include_artworks")
      @user.to_json(include: :artworks)
    else
      @user.to_json
    end

  end

  post '/users' do
    user = User.create(user_params)
    user.to_json
  end

  patch '/users/:id' do
    find_user

    updated_user = @user.update(user_params)
    updated_user.to_json
  end

  patch '/users/:id/favorite' do
    find_user

    updated_user = @user.remove_favorites(artwork)
    updated_user.to_json
  end

  delete '/users/:id' do 
    user = User.find(params[:id])
    user.destroy
    user.to_json
  end


  private

  def find_user
    @user = User.find(params[:id])
  end

  def user_params
    allowed_params = %w(username first_name password)
    params.select{|param, value| allowed_params.include?(param)}
  end

end