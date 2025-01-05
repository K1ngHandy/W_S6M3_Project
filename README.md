# NASA APOD

## Side Effects Module Project

This will be a two-module project. In it, you will consume the NASA API to fetch the "Astronomy Photo Of The Day" or APOD. Once you fetch the data, you will build a few components that will render different pieces of data in your interface.

In the second module (in the [README_DAY_TWO](./README_DAY_TWO.md) file), you will re-style your app using Styled Components.

## Introduction

In this project, you will build an application to show the NASA photo of the day. You will start from scratch and build the entire app. You don't have any design specs to follow for this project, so start by building a basic wireframe first. Make the wireframe simple initially since you don't know what data you'll get back from NASA. 

When you do get the data back, there may be more or less than you expected, so your design plans may change. That's totally fine and very normal in the real world. Just make the proper adjustments and move forward! 

This is a really fun project, and one to show your family and friends when you've finished. Have some fun with it!

## Instructions

### Task 1: Setup

- [x] Create a forked copy of this project.
- [x] Clone your OWN version of the repository in your terminal
- [x] Download project dependencies by running `npm install`
- [x] Start up the app using `npm run dev`
- [x] Implement the project on the `main` branch, committing changes regularly.
- [x] Push commits: `git push origin main`.

### Task 2: Planning

- [x] If you want, this is the time to make a simple design spec (look up ["simple wireframes"](https://www.google.com/search?q=simple+wireframes) to find resources & examples). **A pen & paper sketch (or outline) is often the fastest way to start your planning.**
- [x] Once you have a design plan in mind, break down the designs into individual components.
- [x] Plan which components will hold state, what data each needs from props (if any), and where you will make your data fetch.

## Task 3: File structure

- [x] Take a look at your planned components. Create the folders and files you need for each component.
- [x] Leave most of the components blank for now - you need to get your data from the API before you can build the components.

## Task 4: Fetching the data

- [x] Inside `frontend/components/App.js` add state for the data you'll get from NASA.
- [x] Add an effect hook to handle the API call side effect after the first render of App.
- [x] Go to the [NASA APOD API docs](https://api.nasa.gov/#apod) and learn how to make the API call.
- [x] Using the endpoint given in the docs, fetch the data using `axios`, which is already installed in the project.
- [x] In your `.then()` make sure to `console.log` the response so you can look at the shape of the data. 😃
- [x] Before you add your data to state, make sure your effect hook has a dependencies array. Otherwise, you will start an **infinite loop, and you will exceed the API rate limits of the DEMO_KEY and need to request a real API key.**

**Notes on the NASA API**

1. If the photo url is NOT a photo, you will need to learn how to display a video in a React app on your own, OR fetch the APOD from a different date.

2. You don't need an API key other than the DEMO_KEY unless you go over the API request limits:
    - Hourly Limit: 30 requests per IP address per hour
    - Daily Limit: 50 requests per IP address per day

3. If you need to request an API key, **do not push it to GitHub** along with your code. This is a security risk!

4. As an "emergency" alternative to the NASA API, you can make GET requests to `http://localhost:9009/api/apod?api_key=DEMO_KEY`.

## Task 5: Consuming the data

- [x] Once you have made the call correctly, and logged the data, add the data to the state property you built.
- [x] Build out your other components. Compose your UI, and then pass the data to your children components via props so you can render it on the DOM.

**Pro Tips**

1. You may run into an error where your components try to access object properties before your data is finished being fetched - ie. `Cannot read property 'url' of undefined`. This means that the data you passed as props is undefined when you expected it to be an object. You can fix this by simply adding something like this to any component that needs to read data from your state object:

    ```js
    // Display a loading message while the data is fetching
    if (!something) return <h3>Loading...</h3>;

    // Display your component as normal after the data has been fetched
    return (
      {/* your normal JSX here */}
    );
    ```

2. Read through the API docs carefully. As a developer, you will read through many technical docs, so start now to try and understand them.

### Task 6: Stretch (Optional!)

- [x] Notice the optional query param `date`? You can pass a different date in your url to get the APOD from a different date. Add a date dropdown or a date picker that allows you to select a different date and see that APOD. This will be quite a bit of work, but it will be a fantastic exercise to go through a little more complicated logic and interaction in your app. This is also a very common type of interaction, so it would be good to try this out.

## Submission Format

- [x] Submit a link to your github repo in your learning platform.

-----

## Part II - [Advanced Styling](./README_DAY_TWO.md)
