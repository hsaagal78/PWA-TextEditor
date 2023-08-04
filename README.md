# PWA-TextEditor

As a software developer, my objective is to create and manage notes or code snippets seamlessly, regardless of my internet connectivity. This functionality is crucial in ensuring that I can consistently access and retrieve these notes for future use.

# Table of contents

- [Application Setup](#Application Setup)
- [Install the dependencies](#Install_the_dependencies)
- [Webpack Configuration](#Webpack_Configuration)
- [IndexedDB Integration](#IndexedDB_Integration)
- [Installation and Service Worker](#Installation_and_Service_Worker)
- [Getting Started](#Getting_Started)
- [Technologies Used](#Technologies_Used)
- [License](#License)
- [Contact](#Contact)
- [Pictures](#Pictures)


## Acceptance Criteria

### Application Setup
- When I open my application in my editor, I should see a client-server folder structure.
- When I run `npm start` from the root directory, the application should start up the backend and serve the client.


### Installation and Service Worker
- When I click on the "Install" button, I should be able to download the web application as an icon on my desktop.
- When I load the web application, I should have a registered service worker using workbox.
- When I register a service worker, my static assets should be pre-cached upon loading, including subsequent pages and static assets.

### Deployment
- When I deploy to Heroku, I should have proper build scripts for a webpack application:

## Getting Started

1. Clone this repository, https://github.com/hsaagal78/PWA-TextEditor
2. Navigate to the root directory of the project.
3. Run `npm install` to install the required dependencies.
4. Run `npm start` to start the application and launch the client and server.


## Technologies Used

- JavaScript
- Webpack
- IndexedDB
- Service Workers
- Workbox
- Heroku

## License

![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)

This project is licensed under the Apache 2.0 license.
## Contact

For any inquiries, please contact me at hsagal78@gmail.com

## Pictures