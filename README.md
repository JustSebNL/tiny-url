README.md

# tiny-url

This is a URL shortening application built with Next.js, Node, React, Redux, Express, MySQL, OpenAI's GPT3.5 / GPT 4, Tailwind CSS, and Supertokens. Users can create an account, log in, create short URLs, and upgrade to a premium plan.

## Setup

1. Clone the repository and navigate into the project directory.
2. Install dependencies with `npm install`.
3. Set up the .env file with your API keys and settings. See the .env file for reference.
4. Start the application with `npm start`.

## Usage

1. Navigate to the login page and create an account or log in with Google, Microsoft, Apple, or GitHub.
2. Once logged in, navigate to the main page and enter a URL to be shortened.
3. Your short URL will be displayed. You can view all your created short URLs in your profile.
4. To upgrade to the premium plan, navigate to the premium plan page and enter your payment information.

## Redux Store

To manage the application state, this project utilizes Redux. The Redux store is created in the `src/store.js` file. Actions and reducers for user authentication and URL shortening are implemented in the store. To access the store and dispatch actions, use the `useSelector` and `useDispatch` hooks provided by the `react-redux` library.

## Backend Server

The backend server for this project is built with Node and Express. It handles user authentication and URL shortening requests. The server code can be found in the `src/server/index.js` file. To start the server, run `npm start` in the project directory.

## Tailwind CSS

This project uses Tailwind CSS for styling. The CSS file with the Tailwind styles can be found in `src/styles/tailwind.css`. To apply the styles, import this file in the pages where you want to use Tailwind CSS classes.
