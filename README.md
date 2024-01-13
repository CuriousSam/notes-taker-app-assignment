# Notes Taker

Welcome to Notes Taker, the seamlessly intuitive and feature-rich application designed to elevate your note-taking experience. Whether you're a student, professional, or creative mind, Notes Taker is your go-to solution for capturing ideas, staying organized, and unlocking your productivity potential. This project uses `ReactJS` as frontend, `NodeJS` as backend framework and `MongoDB` as the database.

## Requirements

- `node >= 20.0.0`
- `npm >= 10.2.3`
- `MongodDB (remote or local)`

## Usage
  1. Clone the repository

    $ git clone https://github.com/OverloadedSam/notes-taker-app-assignment.git

  2. Navigate to the locations below and execute the command npm install.

    $ cd notes-taker-app-assignment/client/
    $ cd notes-taker-app-assignment/server

  3. Install project dependencies (For both client and server).

    $ npm install

## Configure App
Prior to starting the app (client and server), ensure that you configure the necessary environment variables.

### 1. Environment variables for server
Create a `.env` file at `notes-taker-app-assignment/server/` directory and set the following environment variables.

    PORT="8000"
    DB_CONNECTION_URI="Your mongodb database connection string"
    SALT="10"
    ACCESS_TOKEN_SECRET="Secret for token. Set a value to random long string"

### 2. Environment variables for client
Create a `.env` file at `notes-taker-app-assignment/client/` directory and set the following environment variables.

    VITE_BASE_API_URL="Set this to the backend url" // e.g: http://localhost:8000/api


## Running The Project For Development
### Run server (Node API) (PORT: 8000)

    $ cd server/ // go to server directory
    $ npm run dev // run backend with hot reloading.
    // or you can run the backend with ts-node
    $ ts-node src/server.ts

### Run client (Vite + React app) (PORT: 3000)

    $ cd client/ //go to client directory
    $ npm run dev

## Building For Production
Before initiating the production build, ensure that you have correctly configured the URLs for the client and server environment variables.

### Build Client
Navigate to the `notes-taker-app-assignment/client/` directory and run the following command to build the client.

    $ npm run build

After a successful build process, you'll find the built code within the `notes-taker-app-assignment/client/dist/` directory.

### Build Server
Navigate to the `notes-taker-app-assignment/server/` directory and run the following command to build the client.

    $ npm run build

After a successful build process, you'll find the built code within the `notes-taker-app-assignment/server/dist/` directory.

## Deploy to Render
While this project is compatible with various platforms such as AWS, GCP, or Heroku, we have chosen to deploy it on Render due to its user-friendly interface and cost-free nature

1. Sign up for a Render account at [Render](https://render.com/).
2. To deploy the server, create a new web service by navigating to `New > Web Service` in the menu.
3. For deploying the client, create a new static site by navigating to `New > Static Site` in the menu.

## Dependencies (Tech Stack)

| Client Side Dependencies       | Server Side Dependencies      |
| ------------------------------ | ------------------------------ |
| @emotion/react: ^11.11.3       | bcrypt: ^5.1.1                |
| @emotion/styled: ^11.11.0       | cors: ^2.8.5                   |
| @hookform/resolvers: ^3.3.4     | dotenv: ^16.3.1                |
| @mui/icons-material: ^5.15.4    | express: ^4.18.2               |
| @mui/lab: ^5.0.0-alpha.160      | helmet: ^7.1.0                 |
| @mui/material: ^5.15.4          | jsonwebtoken: ^9.0.2           |
| @reduxjs/toolkit: ^2.0.1        | mongoose: ^8.0.4               |
| react: ^18.2.0                 | morgan: ^1.10.0                |
| react-dom: ^18.2.0              | yup: ^1.3.3                    |
| react-hook-form: ^7.49.3        |                               |
| react-hot-toast: ^2.4.1         |                               |
| react-markdown: ^9.0.1          |                               |
| react-redux: ^9.0.4             |                               |
| react-router-dom: ^6.21.2       |                               |
| react-simplemde-editor: ^5.2.0  |                               |
| yup: ^1.3.3                     |                               |

| Client Side Dev Dependencies   | Server Side Dev Dependencies   |
| ------------------------------ | ------------------------------ |
| @types/node: ^20.11.0          | @types/bcrypt: ^5.0.2          |
| @types/react: ^18.2.43          | @types/cors: ^2.8.17            |
| @types/react-dom: ^18.2.17      | @types/express: ^4.17.21        |
| @typescript-eslint/eslint-plugin: ^6.14.0 | @types/jsonwebtoken: ^9.0.5    |
| @typescript-eslint/parser: ^6.14.0 | @types/morgan: ^1.9.9          |
| @vitejs/plugin-react: ^4.2.1    | @types/node: ^20.11.0           |
| eslint: ^8.55.0                | nodemon: ^3.0.2                |
| eslint-plugin-react-hooks: ^4.6.0 | ts-node: ^10.9.2               |
| eslint-plugin-react-refresh: ^0.4.5 | typescript: ^5.3.3            |
| typescript: ^5.2.2              | typescript: ^5.3.3             |
| vite: ^5.0.8                   |                               |
