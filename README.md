# React WebApp - Favourite Dogs

This repository is a react webapp that presents a gallery of 6 random dog images from https://random.dog/woof.json. It allows the user to choose one (or more) as favorite dogs. If the user doesn’t like any of the six images, one can click on refresh/next button to get 6 new images. The user can click on favourites button to view its favourite images. This website is a flexbox gallery and hence rearranges itself correctly for mobile screens.

## Prerequisites

This webapp requires [Node.js](https://nodejs.org/) v14+ to run. Therefore before you start, please make sure you have Node.js installed in your system.

## Installation

Clone the git repository in your system and then cd into project root directory. 
```bash
$ git clone https://github.com/RashikaAggarwal/react-favourite-dogs.git
$ cd react-favourite-dogs
```

Install the dependencies and devDependencies inside the app.
```sh
npm i
```

### Development mode
```sh
npm start
```
It runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Production Release
```sh 
npm run build
```
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

##Unit Testing

This repository contains unit test cases which provide the industry standard code coverage. The test cases can be executed using following command:

```sh
npm test
```
It launches the test runner in the interactive watch mode.

## RoadMap

- Better Designing of the React WebApp using advanced syting features.
- Styling the images on events like focused, clicked etc. to enhance the user interaction.
- Implementation of React redux for maintaining the states effectively.
- Implementation of Loaders while waiting for the component to render the images.


