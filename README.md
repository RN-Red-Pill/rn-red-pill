# rn-red-pill

## Overview

This project is a boilerplate developed for creating fast startup. The README file contains instructions for setting up and running the project in your local development environment.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 20 or above)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Creating Project

To use `npx rn-red-pill`, follow these steps:

1. Open your terminal.

2. Run the following command:
```sh
npx rn-red-pill
```

3. Follow the prompts to select a project template and specify a name for your project.

4. Once you've made your selections, the CLI will generate your project using the chosen template and project name.

5. Go into your directory. 
```sh
cd your-app-name
```

6. Install the packages
```sh
yarn or npm i
```

7. Start the project.
```sh
yarn start
```
8. If the project starts in development build, in your terminal press "s" to swith to "Expo Go".

## After crating project set up Firebase:
1. Create a Firebase project or use an existing one.
2. Go to Project Settings from the Firebase console.
3. In the General tab, select Firebase SDK Snippet for Web app.
4. From the Firebase SDK Snippet section, copy the contents of GoogleService-Info.plist.
5. Create a file named GoogleService-Info.plist inside root directory and paste the content.
