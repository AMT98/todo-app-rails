# Full-Stack To-Do List App

A **Full-Stack To-Do List Application** built with **Ruby on Rails**, **ReactJS**, **TailwindCSS**, and **PostgreSQL**. It allows users to **sign up**, **login**, **create**, **edit**, **delete**, and **view tasks**. This app is designed to help you learn full-stack development with Rails and React.

---

## Technologies Used

- **Ruby on Rails** (Backend)
- **ReactJS** (Frontend)
- **TailwindCSS** (Styling)
- **PostgreSQL** (Database)
- **JWT** (Authentication)

---

## Features

- **User Authentication**: Secure sign-up and login.
- **Task Management**: Create, read, update, and delete tasks.
- **Responsive Design**: Optimized for both desktop and mobile using TailwindCSS.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:
- **Ruby** (2.7+)
- **Rails** (6.0+)
- **Node.js** and **npm**
- **PostgreSQL**

### Installation

1. Clone the repository:
   bash
    git clone https://github.com/AMT98/todo-app-rails.git
    cd todo-app

2. Install dependencies:

  bash
    bundle install
    yarn install

3. Set up the database:

  bash
    rails db:create
    rails db:migrate

4. Start the Rails server:

  bash
    rails server

5. Run Webpack in Development Mode:

  bash
    ./bin/webpack-dev-server

6. Open http://localhost:3000 in your browser.

### Authentication
User authentication is handled with JWT. After signing up or logging in, the token is stored in localStorage and included in API requests for secure access.