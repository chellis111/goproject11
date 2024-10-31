# Web Application with Time-Based Access Restriction

This project is a basic web application built using Node.js and Express. It has three main pages: Home, Our Services, and Contact Us, which are accessible only during working hours (Monday to Friday, 9 AM to 5 PM).

## Table of Contents

- Project Structure
- Setup
- Features
- Middleware Functionality
- License

## Project Structure

```
WEB-APPLICATION/
├── public/
│   └── styles.css          # Optional CSS file for styling
├── views/
│   ├── home.ejs            # Home page
│   ├── services.ejs        # Our Services page
│   └── contact.ejs         # Contact Us page
├── app.js                  # Main application file
├── middleware.js           # Middleware for time-based access restriction
├── package.json
└── README.md
```

## Setup

### 1.Clone the repository:

```
git clone <repository_url>
cd my-web-app
```

### 2.Install dependencies:

```
npm install
```

### 3.Run the application:

```
node app.js
```

4.Open your browser and go to http://localhost:3000 to access the application.

## Features

- Three Pages: The application has three main pages:

  - Home (/): The main landing page with a welcome message.

  - Our Services (/services): Provides details about services.
  - Contact Us (/contact): Contact information and email address.

- Navigation Bar: Each page contains a navigation bar with links to the other pages and a logout link.

- Time-Based Access Restriction: Access is restricted to working hours (Monday to Friday, 9 AM - 5 PM) using middleware.

## Middleware Functionality

The middleware in middleware.js restricts access to the application outside of working hours.

```
const workingHoursMiddleware = (req, res, next) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
  const currentHour = currentDate.getHours();

  const isWorkingDay = currentDay >= 1 && currentDay <= 5;
  const isWorkingHour = currentHour >= 9 && currentHour < 17;

  if (isWorkingDay && isWorkingHour) {
    next(); // Proceed to the next middleware or route handler
  } else {
    res.send("Our website is only available Monday to Friday, from 9 AM to 5 PM.");
  }
};

module.exports = workingHoursMiddleware;
```

## How It Works

- Route Restrictions: The middleware checks if the current time is within the working hours.
- Access Message: If outside working hours, a message informs the user that access is restricted.

## License

This project is open-source and available under the MIT License.
