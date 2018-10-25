# react-node-twitter-login

Demo application that shows how implement Twitter login with React on frontend and Node.js/Express on backend that is implementing REST API.

# About

This application was created as material that is described in the [blog post](https://medium.com/@robince885/how-to-do-twitter-authentication-with-react-and-restful-api-e525f30c62bb).
For creating React app we have used [create-react-app](https://github.com/facebookincubator/create-react-app).

# What you need to install

* [Node.js](https://nodejs.org/en/)
* [create-react-app](https://github.com/facebookincubator/create-react-app)
* [Gulp](http://gulpjs.com/)
* [MongoDB](https://www.mongodb.com/)

# How To Start Application?

* Start MongoDB - our application expects that there is `twitter-demo` database in MongoDB
* Go to [frontend](https://github.com/GenFirst/react-node-twitter-login/tree/master/frontend) folder
    * `npm install`
    * `npm start`
* Put Twitter app secret and key in _backend/.twitter_credentials.env_ like:
```
HACKDAY_TWITTER_KEY="..."
HACKDAY_TWITTER_SECRET="..."
```
* Then cd into _backend_ and run `source .twitter_credentials.env_`
* Go to [backend](https://github.com/GenFirst/react-node-twitter-login/tree/master/backend) folder
    * `npm install`
    * `gulp develop`

# License

react-node-twitter-login is released under [MIT License](https://opensource.org/licenses/MIT).

