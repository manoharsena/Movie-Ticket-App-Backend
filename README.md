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
Admin User
- **POST /admin/signup**: Register a new admin.
- **POST /admin/login**: Admin user login.
- **GET /admin/**: Get all registered admin users.
- **GET /admin/:id**: Get admin user detail by id.

User
- **POST /user/signup**: Register a new user.
- **POST /user/login**: Login user.
- **GET /user/**: Get all registered users.
- **GET /user/:id**: Get user detail by id.
- **PUT /user/:id**: Update user detail by id.
- **DELETE /user/:id**: Delete user detail by id.
- **GET /bookings/:id**: Get booking details of user by id.

Movies
- **GET /movie/**: Get all movie details.
- **GET /movie/:id**: Get movie detail by id.
- **POST /movie/**: Add new movie details.

Booking
- **GET /booking/:id**: Get booking details by id.
- **POST /booking/**: Create a new booking.
- **DELETE /booking/:id**: Delete booking by id.