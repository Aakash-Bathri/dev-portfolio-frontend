# Friendly Dev Frontend

Welcome to the frontend of the **Friendly Dev** project! This modern web application is built with the latest technologies to provide a fast, responsive, and interactive user experience.

**Deployed on**: [Website](https://dev-portfolio-frontend.vercel.app/)

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [TailwindCSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Mock Backend**: [JSON Server](https://github.com/typicode/json-server)

## 🛠️ Getting Started

### Prerequisites

Ensure you have **Node.js** installed on your machine.

### Installation

Navigate to the project directory and install dependencies:

```bash
npm install
```

## 📜 Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm start`

Locally previews the production build. Useful for testing the build before deployment.

### `npm run typecheck`

Runs TypeScript type checking to ensure code reliability.

### `npm run json-server`

Starts a mock backend API using `json-server` on [http://localhost:8000](http://localhost:8000).\
This is used for simulating API responses during development.

## 📂 Project Structure

- `app/`: Contains the main source code.
  - `components/`: Reusable UI components.
  - `routes/`: Page definitions and layouts.
  - `routes.ts`: Route configuration and nesting logic.
  - `types.ts`: TypeScript definitions for the project.
- `data/`: Stores mock data for `json-server`.
- `public/`: Static assets like images and icons.

## ✨ Key Features

### Dynamic Routing

The application leverages **React Router 7** for efficient client-side routing.

- **Nested Layouts**: Uses layout routes to share UI like navigation bars across multiple pages while keeping specific pages (like the landing page) distinct.
- **Route Params**: Handles dynamic paths for project details (`projects/:id`) and blog posts (`blog/:slug`).

### CMS Integration

The frontend is designed to consume content from a headless CMS (Strapi).

- **Data Types**: Strong typing ensures that data fetched from the CMS matches the expected structure.
- **Rich Content**: Supports rendering markdown content and optimized images.

### Component Architecture

Built with modularity in mind using **React 19**.

- **Reusable Components**: UI elements like `ProjectCard`, `PostCard`, and `Navbar` are isolated for reuse.
- **Tailwind Styling**: Components are styled using utility classes for consistency and ease of maintenance.

## 🔍 Code Deep Dive

Here is an overview of the critical files that power the application:

### `app/routes.ts`

This file defines the routing configuration using React Router 7's config-based approach.

- **Layouts**: It separates the application into different layouts:
  - `routes/layouts/home.tsx`: Dedicated layout for the landing page.
  - `routes/layouts/main.tsx`: Standard layout for internal pages (About, Projects, Contact, etc.).
- **Route Definitions**: Maps URL paths (e.g., `/about`) to their corresponding component files.

### `app/types.ts`

Holds the TypeScript definitions to maintain type safety across the application, especially when interacting with external data.

- **`StrapiProject`**: Defines the shape of project data fetched from the CMS (title, description, images, etc.).
- **`StrapiPost`**: Defines the structure for blog posts, including slugs and excerpts.
- **`StrapiResponse<T>`**: A generic wrapper type for handling array responses from the API.

### `app/components/`

Key functional components include:

- **`Navbar.tsx`**: The main navigation header.
- **`Hero.tsx`**: The prominent hero section on the homepage.
- **`ProjectCard.tsx` & `PostCard.tsx`**: Presentational components for displaying individual items in a list.
- **`FeaturedProjects.tsx` & `LatestPost.tsx`**: Sections that aggregate and display highlighted content.
