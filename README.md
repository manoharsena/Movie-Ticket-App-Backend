# MOVIE TICKET APPLICATION - BACKEND

This repository contains the backend code for **Movie Ticket Bookiing Application**. It's built using Node.js with Express for the server, MongoDB as the database.


## Tech Stack

- **Node.js**: Runtime environment for running JavaScript on the server side.
- **Express.js**: Web application framework for building APIs and web servers.
- **MongoDB**: NoSQL database for storing user data and shortened URLs.
- **JWT (JSON Web Tokens)**: Used for authentication and authorization.
- **bcrypt**: Library for hashing passwords.


## Backend Deployment

The backend is deployed on Render at [Click Here](https://movie-ticket-app-backend.onrender.com/).

## Frontend

The frontend of this application is built separately and deployed on Netlify. You can find the live demo [Click Here](https://movie-ticket-app-fe.netlify.app/), and the corresponding GitHub repository [Click Here](https://github.com/manoharsena/Movie-Ticket-App-Frontend.git).

## Setup Instructions

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Set up environment variables:
   - Create a `.env` file based on `.env.example` and fill in the required values.
4. Start the server: `npm start`
5. The server should now be running locally.

## API Endpoints

- **POST /api/user/register**: Register a new user.
- **POST /api/user/login**: Login existing user.
- **GET /api/user/listallusers**: Get all registered users.
- **POST /api/user/forgotpassword**: Request password reset.
- **PUT /api/user/resetpassword**: Reset user password.
- **POST /api/user/shorturl/:email**: Generate a short URL for a given user email.
- **GET /api/user/shortid/:shortUrl**: Redirect to the original URL associated with the short URL.
- **GET /api/user/geturlcounts**: Get analytics on URL clicks.
