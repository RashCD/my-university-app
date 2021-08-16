# My University List App

- [My University List App](#my-university-list-app)
  - [Introduction](#introduction)
  - [How to run the project](#how-to-run-the-project)
    - [Running the server](#running-the-server)
    - [Running the client web](#running-the-client-web)
    - [Running a test](#running-a-test)
    - [Dependencies used](#dependencies-used)
  - [Objective of this project](#objective-of-this-project)
  - [Additional Objective](#additional-objective)
  - [Screenshot](#screenshot)

<br />
<br />
<br />

---

## Introduction

University List App that have function to search by university name or country of origin. \
This also include other additional information for that particular university such as their website & domain

## How to run the project

This project is created using create-react-app (ReactJS) for the frontend and ExpressJS for the backend. \
Both the backend and frontend uses Typescript code.
This project uses node & npm. Make sure you have installed this previously. \
This project contains 2 part, the server & the client

### Running the server

To run the server, make sure you are on the root directory of the app. Then simply run the following command. It will run on `localhost:3001`

```
npm install && npm run server
```

### Running the client web

To run the client app, make sure you are in the `client` folder and the command below. The project will start on `localhost:3000` port

```
cd client
npm install
npm start
```

### Running a test

To run a test suites, simply run the following script. Testing are done using built in react-testing-library.

```
cd client
npm run test
```

### Dependencies used

Backend

- ExpressJS for API, including filesystem `fs` and cookie `cookie-parser`
- yup for schema validation

Frontend

- axios for data fetching
- react-query for caching request & response
- scss for styling, clsx for merging class names
- react-hook-form to manage form usage
- react-table for displaying data in a table form, with sorting function enable
- yup for form schema validation
- react-testing library for testing suites

## Objective of this project

- [x] Have a page containing a list of universities. Show at least university name, country and website.
- [x] Search feature where the user can search by name or / and country.
- [x] Have a subscription feature where users can enter an email and store the data in a json file in the app directory.
- [x] Duplicated email should not be allowed and input must be validated.
- [x] A header/navbar for user to navigate between pages.
- [x] Handle 404 pages if routes are not available.
- [x] Error handling for any error, expected and unexpected.

## Additional Objective

- [x] List can be sorted by name or country.
- [x] Have a login and registration feature. Login and registration must have a validation on the input.
- [ ] Registered user can add favorite uni and see the list of favorites in one page.

<br />
<br />

## Screenshot

---

<img src="../my-university-app/screenshot/MobilePages.png" width="300" />

<img src="../my-university-app/screenshot/LandingPage.png" width="400" />

<img src="../my-university-app/screenshot/LandingPage_with_table.png" width="400" />

<img src="../my-university-app/screenshot/LoginPage.png" width="400" />

<img src="../my-university-app/screenshot/ProfilePage.png" width="400" />
