# Simple Todo

## Introduction
A frontend-only web service for efficiently managing daily tasks and goals. Please note that this is a client-side application and tasks will not persist after page refresh.

## Key Features
- Intuitive task management (Add/Delete/Complete)
- Real-time task status notifications
- Task filtering system
- Simple checklist interface

## Tech Stack
- Next.js
- TypeScript
- Recoil (State Management)
- Emotion (Styling)
- Jest & React Testing Library (Testing)

## Getting Started
```bash
# Install dependencies
yarn install

# Run development server (http://localhost:3000)
yarn dev

# Run tests
yarn test

# Build for production
yarn build
```

## User Guide
### Task Management
- Keep tasks concise within 20 characters
- Active tasks are limited to 10 for efficient management
- Completed tasks are marked with checkboxes
- Tasks are stored in memory and will be cleared upon browser refresh

### Filter Options
- All: View all tasks
- To do: View active tasks
- Done: View completed tasks
