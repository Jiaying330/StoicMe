# StoicMe

StoicMe is a simple web application designed to display a random stoic quote and its author each time the user visits or refreshes the homepage. Built with Express and EJS templating, the app fetches quotes from the [Stoicism Quote API](https://github.com/tlcheah2/stoic-quote-lambda-public-api) and displays them in a minimalistic user interface.

## Features

- **Random Stoic Quotes**: Fetches a random stoic quote and its author every time the homepage is refreshed.
- **Responsive Design**: Adaptable design for both desktop and mobile viewing.
- **Simple Navigation**: A single clickable link to refresh the quote displayed.

## Technologies Used

- **Node.js**: JavaScript runtime environment that executes JavaScript code server-side.
- **Express.js**: Web application framework for Node.js, designed for building web applications and APIs.
- **EJS**: Embedded JavaScript templating engine.
- **Axios**: Promise based HTTP client for the browser and Node.js.
- **CSS**: Stylesheets for styling the webpage.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the latest version of Node.js and npm installed on your system. You can check your Node.js and npm version with the following commands:

```bash
node --version
npm --version
```

### Installation
1. Clone the repository:
```bash
git clone https://github.com/Jiaying330/StoicMe.git
cd StoicMe
```

2. Install the necessary package:
```bash
npm install
```
3. Start the application
```bash
node index.js
```
The server will start running on http://localhost:3000. Open your browser and visit this URL to see the application in action.

### Usage
Simply visit the root URL (http://localhost:3000). The application will fetch a random stoic quote and display it along with the author's name. To see another quote, click on the "Enlight Me" link or refresh the page.

## Contribution
Contributions are welcome, and any contributions you make are greatly appreciated. If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!
