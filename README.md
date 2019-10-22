# React Native Meteor Boilerplate

This is a React Native app which uses Meteor as its backend. It should be used as a sample boilerplate for starting a new app of your own.

Updates:

- expo 35.0.0
- react-native 0.59.8
- meteor 1.8.2-rc.0 (which supports typescript naturally <https://github.com/meteor/meteor/pull/10610>)
- typescript supported
- meteor-client-bundler 0.6.0

## Quick Start

1. Install all the dependencies:

		$ npm install

2. Start the API server:

		$ npm run api

3. Start the app with Expo:

		$ npm start

or

4. Run the app in simulator/emulator:

		$ npm run ios

		$ npm run android

> **Note:** The API URL is configured to `http://localhost:3000` by default. If you would like to change that, be sure to visit the official `README.md` file of [Meteor Client Bundler](https://github.com/Urigo/meteor-client-bundler) for detailed instructions.

## Facebook, Twitter and Google logins

You have to set custom URI scheme prefix in `app.json`, and `main.js` on Meteor backend. Then, you can use `Meteor.loginWith<service>` of `accounts-<service>` packages without any extra `react-native` or `expo` plugins.

## Reference

<https://medium.com/@ardatan/connecting-react-native-and-meteor-w-o-any-3rd-party-library-in-2018-3e784d33acb0>

<https://blog.meteor.com/leverage-the-power-of-meteor-with-any-client-side-framework-bfb909141008>

### License

MIT
