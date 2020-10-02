# Send Mail 

Implementation of sending notification email with [Nodemailer](https://nodemailer.com/about/).

# Video Tutorial

[Sending Mail Notification from Node JS - Any mail extension (.com/ .net/ .io/ etc)](#)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Software you need to install:-
- Visual Studio Code at [Visual Studio Code](https://code.visualstudio.com/)
 - or you can choose any Code Editor to your liking
- Node.js at [Node.org](https://nodejs.org/en/download/)

```
// Visual Studio Code Installation
Go to Visual Studio Code link above and choose download according to your machine type (choose the **stable** version):-
- Window, go for Windows Installer
- MacOS, go for MacOS Installer
- Linux, go for Linux Installer

// Node.js Installation
Go to Node.org link above and choose your machine type (Please choose the **LTS download version** instead of the Current version):-
- Window, go for Windows Installer
- MacOS, go for MacOS Installer
```

### Installing

Please follow the step below to get the system running

1. After download or git repo the Project file. Place your Project folder anywhere in your system (doesn't matter where actually)
2. Open your Code Editor (Visual Studio Code or any other code editor)
3. Go to your Terminal in Visual Studio Code or open CMD - Command Prompt, manuver to where your Project folder located and do the following installation:- (make sure you already inside your Project folder. Eg: C:\parentFolder\ProjectFolder) in order to get the final version running properly

- Install all dependencies required (as stated in package.json)

```
in your Terminal or CMD, it's gonna look like this:-
C:\sendMail\final\>npm install
```

- Once installation finishes with no errors. Then start the project:-

```
C:\sendMail\final\>npm start
```

## Important Notes

1. This project contain 2 main folders:-
 - starter (contain starter codes and files needed)
 - final (contain a complete working web app - finished code)
2. This project aims to teach you how to implement a sending of email notification with Nodemailer.
3. This project will not cover the part of designing and implementing or coding of the UI.

## Step By Step Guides

- [ ] create a starter folder
- [ ] npm init
- [ ] instal dependencies
  - [ ] nodemon
  - [ ] express
  - [ ] dotenv
  - [ ] nodemailer
- [ ] create & setup `index.js`
- [ ] create & setup home routes
  - [ ] create & setup `GET` home route
    - [ ] create a function to handle render of HOME page
    - [ ] render HOME page
  - [ ] create & setup `POST` home route
    - [ ] setup errorMessage handler
    - [ ] create & setup send notification email
      - [ ] setup Gmail API at [Google Console API](https://console.developers.google.com/)
        - [ ] get `client id`
        - [ ] get `client secret`
      - [ ] setup callback connection at [OAuth 2.0 Playground](https://developers.google.com/oauthplayground/)
        - [ ] in *Step 1: Select & suthorize APIs*, input `scope` to `https://mail.google.com/` and `click` button `Authorize APIs`
        - [ ] in *Step 2: Exchange authorization code for tokens *, `set` or `check` `auto-refresh` token to `true`
      - [ ] *OPTIONAL* setup dedicated or other email extension other than gmail (Eg: .com/ .net/ .io/ etc)
    - [ ] re-render HOME page

## Deployment

No additional support on how to deploy on live system for this project.

## Built With

* [EJS](https://ejs.co/) (Front-end Framework)
* [Node](https://nodejs.org/en/) JS (Back-end Framework)

## Authors

* [Lalapolalaa Newb](https://lalapolalaanewb.com)

## Acknowledgments

These are some of the online sources which I learnt from. You may do so as well.

* [Jonas Schmedtmann](https://www.youtube.com/channel/UCNsU-y15AwmU2Q8QTQJG1jw)
* [Academind](https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w)
* [Online Tutorials](https://www.youtube.com/channel/UCbwXnUipZsLfUckBPsC7Jog)
* [Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)
* [DevEd](https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q)
* [Web Dev Simplifies](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw)
* [DesignCourse](https://www.youtube.com/channel/UCVyRiMvfUNMA1UPlDPzG5Ow)
* [Coding Addict](https://www.youtube.com/channel/UCMZFwxv5l-XtKi693qMJptA)
* [The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg)

