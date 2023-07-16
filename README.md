# tweet-cards

This project is a little web-application enabling you to work with tweet-cards.
Project was created using [Create React App](https://create-react-app.dev/).

## Table of Contents

- [Installation](#installation)
- [Features](#features):
  [Routing](#routing)||[TweetCard](#TweetCard)||[Pagination](#Pagination)||[Backend](#Backend)||[Filter](#Filter)
- [Contributing](#contributing)
- [Contact](#contact)

## Installation

To install and run this project locally, please follow these steps:

1. Clone this repository to your local machine
2. Install the required dependencies using `npm install`
3. Comment or disable "React.StrictMode" in index.js.
4. Remove BrowserRouter's "basename="/tweet-cards"" prop in index.js.
5. Run server using "npm start"

## Features

## Routing

The application implements routing using React Router. We have two pages: Home
page "./" and Tweets page "/tweets". If the user accesses a non-existent route,
they will be redirected to the Home page "./".

## TweetCard

"/tweets" page renders list of tweet-cards of differend users. Tweet-card shows
user's avatar, number of tweets and followers. Also, there is a follow/unfollow
button on each card, so you can follow preferred user. After button click a
request is sent to the server, and the number of followers for the
corresponding user increases by 1. Upon pressing the button again, an unfollow
action is triggered.

## Pagination

The tweet-cards page features pagination. Upon the initial page load, 3
tweet-cards are loaded. You can load the next group of tweet-cards using the
'Load More' button.

## Backend

For the functionality of this application, a custom backend with user data was
created using the [mockapi.io UI service](https://mockapi.io/).

## Filter

All tweet-cards, which are rendered on the page can be filtered using
dropdown-menu with 3 options: "show all"-(default option), "follow" and
"followings". Note, that if you choose, for example "follow" option and you
click unfollow button, this user will be unfollowed, but still remains in
"follow" list until filter changes or page is reloaded. This was done so that
the user can see exactly who they unfollowed, and if it was done mistakenly,
they can follow them back.

## Technologies Used

This project was created using the following technologies:

- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [React](https://react.dev/)
- [Create React App](https://create-react-app.dev/)
- [Styled Components](https://styled-components.com/)
- [Styled System](https://styled-system.com/)
- [Axios](https://axios-http.com/docs/intro)
- [prop-types](https://github.com/facebook/prop-types)

## Contributing

Contributions to this project are welcome! To contribute, please follow these
steps:

1. Fork this repository
2. Create a new branch for your changes
3. Make your changes and commit them
4. Push your changes to your forked repository
5. Submit a pull request to this repository

Please ensure that your changes are well-tested and follow the existing code
style and best practices.

## Contact

If you have any questions or feedback about this project, please feel free to
contact me at [yu.hamster.pl@gmail.com].
