# React POCs

This repository has lot of react projects which i learnt from several resources and practised(Learn by Doing).
To work with react we need react library,

[Official React Website](https://reactjs.org/docs/getting-started.html)

[CDN React Url](https://reactjs.org/docs/cdn-links.html)

Here, We are going to create a react app without using npm as we all know if we use npm it creates all the necessary files. But we should know which files are mainly required to start our react app.

The following files and libraries required to create our react app,

1. index.html - main file to render the html
2. Support for ES6 - modern way of writing javasript
3. webpack - packing all our css files
4. Root component - main component 
5. react-hot-loader => this will apply changes immediately in the browser

**Process:**
1. Create a folder
2. pointed to this folder in command prompt and run this command: npm init -y => Creates package file
    - This creates package.json file
3. **[Optional]** To push this change in git => git init => initiatilze the repository 
4. Create a public folder => All public files accessible
   4.1: Create a index.html file
   4.2: Add sample code in it
   ![image](https://user-images.githubusercontent.com/29816449/203939020-5e2ae761-916d-48b0-a493-210cdbae3c92.png)

6. Create a src folder => actual react code should be place it here

**Note:** This repository is never ending one and adds lots of functionality and this helps others to learn it from this repository.

## **Multiple ways to setup react application,**

### **1. First way is to use CDN Directly.**

    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>

    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

### **2.Install through npm for this install nodejs**

**syntax and command:** 
- **Option 1:**  npm init react-app <appName>
- **Option 2:** npx create-react-app <appName>

**Example:**  npm init react-app webApp

**Note:** If you want to clone this then first follow the steps to configure GIT in your local machine and then clone this repository.
Here we use this version 2.28.0 and 64 Bit  

### **3. Install node modules before your run the application**

**Command:** npm install

### **4. Build the solution after install node modules**

**Command:** npm build

### **5. Start your react application**

**Command:** npm start

### 6. Once you finished your application and ready to deploy then you have to run the following command and it builds the file which is for deployment code.

**Command:** npm run build

## **React Resources**

**Youtube Resources**

[KnowledgeHut upGrad](https://www.youtube.com/watch?v=aq-fCtg_gG4)

[TeluguSkillhub react projects playlist](https://www.youtube.com/playlist?list=PLWnZ0qt0PImVah3_dz1ZXjaONqbwWTgDT)


**Scrimba Resources**
- React learning and sample project
    - (https://scrimba.com/learn/learnreact)
    - (https://scrimba.com/learn/reactmovie)
    - (https://scrimba.com/learn/reactgame)

[**ES6+ Resource**]
(https://scrimba.com/learn/introtoes6)

**Note**: Code base you refererred in this repository is not my own... Learn by doing from other learning materials.
