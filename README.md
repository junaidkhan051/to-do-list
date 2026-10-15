# To-Do List

A lightweight task manager built with **HTML, CSS, and vanilla JavaScript**. It supports task priorities, completion tracking, local browser storage, and a dark-mode toggle.

<p align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Storage-localStorage-6D28D9?style=flat-square" alt="localStorage" />
</p>

## Features

- Add tasks with **High**, **Medium**, or **Low** priority
- Mark tasks as complete or active
- Delete tasks when they are no longer needed
- Save tasks in browser `localStorage` so they remain after a refresh in the same browser; task text is rendered as text rather than HTML
- Toggle between light and dark visual themes
- Add tasks using the Enter key and use accessible labels on task action buttons
- Responsive, dependency-free front-end

## Tech Stack

- **HTML5** for structure
- **CSS3** for layout, priority labels, and theme variables
- **JavaScript** for task operations and persistence
- **Web Storage API** for local persistence

## Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/junaidkhan051/to-do-list.git
   cd to-do-list
   ```
2. Open `index.html` in a modern browser.
3. Start adding tasks. No build tools or package installation are required.

## Project Structure

```text
to-do-list/
├── index.html   # Task input and list interface
├── style.css    # Layout, priorities, and theme styling
└── script.js    # Task state, actions, and localStorage
```

## Current Scope

This is a **client-side demo**. Tasks are stored in the current browser only; there is no account system, cloud sync, or shared database.

## Roadmap

- Add task editing and filtering (All / Active / Completed)
- Add due dates and sorting by priority
- Persist the selected theme
- Add keyboard-friendly controls and automated tests
- Add automated tests for task actions and malformed stored data

## Author

**Junaid Khan** · [GitHub](https://github.com/junaidkhan051) · [LinkedIn](https://www.linkedin.com/in/junaid-khan-46b765319/)
