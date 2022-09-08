# phase-3-project: Chicago Art Gallery

Demo: https://www.youtube.com/watch?v=FAO6ZUOWgT8
Hosted Website: https://loopdeluce.github.io/gallery-frontend/

## Pitch

Login to your user account, browse the art of The Art Institute of Chicago and save your favorites to your account

Will be using The Art Insistute of Chicago's API: https://api.artic.edu/docs/#introduction

## Setup

To download the dependencies for the frontend and backend, run:

```console
$ cd server
$ bundle install
$ cd ..
$ cd client
$ npm install
$ cd ..
```

You can run the Sinatra API by running:

```console
$ cd server
$ shotgun -p 4200
$ cd ..
```

You can run the React app by running:

```console
$ cd client
$ npm start
$ cd ..
```

As a user I can..

On the landing page:

- Login into my account
- Create a new account

Once logged in...

- Browse all art from The Art Institute of Chicago
- Click on a piece of art to see more details
- Favorite a piece of art in the browsing page or in the artwork details page
- View all of my favorited artwork
- Unfavorite any piece of artwork I have favorited in the browsing page, artwork details page, or favorites page
- Change my username
- Log out and be directed back to to the landing page

## Wireframe Sketch

<img src='./GallerySketches.jpeg' width=700>
