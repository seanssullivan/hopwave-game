Hopwave - A chill driving game with a vaporwave aesthetic where you can relax and listen to music. Built using Express, React, Three.js and Tone.js.

You have the option to enjoy the default music provided or you can also connect to your Spotify premium account to listen to a vaporwave playlist.

This project is hosted on https://lhl-hopwave.herokuapp.com/

![HopWave - Homepage](https://gyazo.com/2601217e7c61f934747ed9cfed440c50.gif)

![HopWave - Game](https://gyazo.com/04b9878654b3777713670eb7e0f0ada0.gif)

## Getting started

1 - Fork this repository, then clone your fork of this repository.
2 - Install dependencies by running the `npm install` command.
3 - In order to take advantage of the included Spotify Web Player SDK you must have a Spotify premium account and register for a client ID in Spotify's developer dashboard.
4 - Within the apps settings, on Spotify developer dashboard, you must add a redirect URI of `http://localhost:3000`.
5 - Create an .env file from the .env.example given and insert your client ID from Spotify.
6 - Start the web server using the `npm start` command. The app will be served at `http://localhost:3000`.
7 - Go to `http://localhost:3000` in your browser.
8 - Chill out.

## Dependencies

- Express
- lerp
- react
- react-postprocessing
- react-three-fiber
- sass
- three
- tone
