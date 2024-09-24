# Kanban Board React Application
A simple and interactive Kanban board built with React that allows users to organize tasks based on various groupings and orderings. It features dynamic task cards, custom hooks, and API integration for fetching initial data.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

![Kanban-board](https://i.ibb.co/jkMKdc5/Screenshot-24-9-2024-133350-kanban-board-eight-iota-vercel-app.jpg)

This project is a Kanban board application built using React. It provides a flexible way to manage tasks by allowing users to group and sort tasks based on different criteria like status, user, and priority. It also uses a custom hook for managing click events outside the component to close dropdown menus.

## Features
- Dynamic Grouping and Sorting: Group tasks by status, user, or priority and sort them by title or priority.
- Interactive UI: Display tasks in cards with dynamic coloring and user initials.
- API Integration: Fetches initial data from an external API.
- Custom Hooks: Use of custom hooks for handling outside click events.
- Responsive Design: The UI is styled with a combination of Tailwind CSS (converted to custom CSS) for responsive and modern design.
  
## Installation
- Clone the repository:
  
  ```bash
  git clone https://github.com/Vidit-Kushwaha/kanban-board.git
  cd kanban-board
  ```
  
- Install dependencies:
  
  ```bash
  npm install
  ```
  
- Run the application:
  ```bash
  npm start
  ```
Open the application in your browser at http://localhost:3000.

## Usage

- Once the app is running, you'll see a Kanban board with different columns representing groupings.
- Use the "Display" settings in the navbar to change the grouping and sorting of tasks.
- Tasks are displayed as cards with the task title, status, and priority.

## Components
`Kanban`
The main component that displays the Kanban board. It uses state to manage the current grouping and ordering of tasks.

`Navbar`
Component containing the grouping and sorting options. Uses the useOutsideClick hook to close the dropdown when clicking outside.

`Card`
Displays individual tasks with relevant information like title, status, priority, and user initials. It also handles random color assignment for user icons.

`Tag`
Displays tags related to the task.

`Title`
Displays the title of each group (e.g., "Backlog", "In Progress") and the number of tasks in that group.

## API Integration
The app fetches data from the following API:

Endpoint: https://api.quicksell.co/v1/internal/frontend-assignment


## Contributing
Contributions are welcome! To contribute, please fork the repository, create a new branch with your changes, and submit a pull request.

- Fork the repository.
- Create a new branch with your feature: git checkout -b feature-branch.
- Commit your changes: git commit -m 'Add some feature'.
- Push to the branch: git push origin feature-branch.
- Open a pull request.
  
## License
This project is licensed under the MIT License. See the LICENSE file for details.
