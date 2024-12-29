# Find & Lost Items

## Purpose
"Find & Lost Items" is a web application designed to help individuals report and recover lost items. It provides a platform for users to post lost items, report found items, and initiate recovery actions. The app aims to bridge the gap between those who have lost something valuable and those who find it, promoting a community-driven approach to lost and found services.

## Live URL
[Find & Lost Items - Live Demo](ttps://found-lost-items.netlify.app) *

## Key Features
- **Post Lost Items**: Users can easily create a post to report lost items with a description, location, and photo.
- **Found Items**: Users can also post found items and mark them for recovery or claim them as their own.
- **Item Recovery**: The application allows users to report the recovery of an item, including location and date of recovery.
- **User Authentication**: Secure user authentication with email and password for posting items and managing profiles.
- **Item Details Page**: View detailed information about items, including description, image, and status (Lost/Found).
- **Responsive Design**: Fully responsive layout for both desktop and mobile users.
- **SweetAlert Notifications**: Real-time user notifications for actions such as posting, recovering, or claiming items.

## Tech Stack
- **Frontend**:
  - React.js for building the UI components.
  - Tailwind CSS for styling.
  - React Router for navigation.
  - SweetAlert2 for notifications.
  - React DatePicker for selecting recovery dates.

- **Backend**:
  - Express.js with Node.js for building the API.
  - MongoDB for data storage.
  - Axios for making API requests securely.

- **Authentication**:
  - Firebase Authentication for user login and registration.

## NPM Packages Used
- `react`: React library for building user interfaces.
- `react-router-dom`: For routing and navigation in React applications.
- `axios`: Promise-based HTTP client for making requests to the backend.
- `sweetalert2`: For elegant and customizable alerts.
- `react-datepicker`: For date selection functionality in the recovery form.
- `tailwindcss`: For utility-first CSS styling.
- `firebase`: Firebase for authentication and real-time data handling.

## Setup Instructions

### 1. Clone the repository:
```bash
git https://github.com/programming-hero-web-course2/b10a11-client-side-jasminaramim.git
