# LinkedIn Clone

Demo link https://linkedin.evansmeja.tk

**_Built using React JS, Redux, Python Django, Firebase & Styled-Components_** within a week. My first project after improving my React JS skills referencing a tutorial on YouTube by _'Clever Programmer'_. Added some features apart from the tutorial on my own like:

- Post like functionality
- Mobile responsiveness
- Created My own Backend with Python Django
- Hosted on Cpanel

## Features and Fuctionality

- Login using Google (Firebase Authentication)
- Create a new post
- Share photos and videos (React player for videos)
- Like posts
- Realtime update likes and posts
- Auto authenticate user on refresh
- Sign Out

## How to test it

1. Clone this repo
1. Install all the dependencies
   ```bash
   npm i
   ```
1. Setup Firebase

   - Create Firebase account
   - Create a new project
   - Create a web app for that
   - Copy your config from there

     - Select config option
     - Paste those config inside firebase/config.js file

   - Setup authentication using Google

1. Tweak code as you like
1. Let's build the optimized version

   ```bash
   npm run build
   ```

1. **Now for hosting on Firebase lets config Firebase locally**

   - Install Firebase CLI
   - Login to Firebase

     ```bash
     firebase login
     ```

   - Initialize Firebase

     ```bash
     firebase init
     ```

   - Select hosting in the menu
   - Select your respective project from the list
   - Select 'build' as your hosting directory and other options as you want
   - Let's deploy our clone and make it live

     ```bash
     firebase deploy
     ```

## Future Plans

- Might add more login methods
- Post deleting functionality
- Add comments on post
