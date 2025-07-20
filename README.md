# Orbital Blog Application

This project is a modern blog application that used to be live, an esoteric collection of articles and artwork with a spotlight on contemporary Southeast Asian music culture and the forces that provoke our works. It features a React.js frontend, an Express.js backend, and content managed via Contentful CMS. It's designed to display various types of articles, including featured posts, general articles, and album reviews, with a focus on a smooth user experience and maintainable code.

## Table of Contents

* [Features](#features)
* [Technologies Used](#technologies-used)
* [Project Structure](#project-structure)
* [Setup and Installation](#setup-and-installation)
    * [Prerequisites](#prerequisites)
    * [Contentful Configuration](#contentful-configuration)
    * [Local Setup](#local-setup)
    * [Remote Setup (VS Code Remote - SSH)](#remote-setup-vs-code-remote---ssh)
* [Running the Application](#running-the-application)
    * [Development Mode](#development-mode)
    * [Production Mode](#production-mode)
* [API Endpoints](#api-endpoints)
* [Contributing](#contributing)
* [License](#license)

---

## Features

* **Dynamic Content Display:** Fetches and displays various types of articles (featured, general, album reviews) from Contentful.
* **Responsive Design:** Adapts to different screen sizes for optimal viewing on desktop and mobile devices.
* **Sticky Navigation Bar:** A navigation bar that becomes sticky on scroll for easy access.
* **Image Lazy Loading/Reveal:** Images fade in as they scroll into the viewport for a smoother loading experience.
* **Google Analytics Integration:** Tracks page views for analytics purposes.
* **RESTful API:** A robust Express.js backend serving content to the frontend.
* **Content Management System (CMS):** Content is managed externally via Contentful, allowing for easy updates without code changes.

## Technologies Used

### Frontend
* **React.js:** A JavaScript library for building user interfaces.
* **React Router DOM:** For declarative routing in React applications.
* **Axios:** A promise-based HTTP client for making API requests.
* **ReactGA:** A Google Analytics module for React applications.
* **CSS:** For styling and layout.

### Backend
* **Node.js:** JavaScript runtime environment.
* **Express.js:** A fast, unopinionated, minimalist web framework for Node.js.
* **Contentful:** A headless CMS used for content delivery.
* **Body-parser:** Node.js middleware for parsing incoming request bodies.
* **CORS:** Node.js middleware for enabling Cross-Origin Resource Sharing.

### Development Tools
* **npm / Yarn:** Package managers for Node.js.
* **Git:** Version control system.
* **VS Code Remote - SSH:** For remote development capabilities.

## Project Structure

The project follows a standard React application structure with a clear separation of concerns for frontend and backend code.├── public/                # Static assets for the frontend
├── src/
│   ├── assets/            # Images, fonts, global styles
│   ├── components/        # Reusable UI components (e.g., Header, Footer)
│   ├── pages/             # Top-level components representing application pages
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Blog/          # Blog-specific components (BlogPost, FeaturedPost, PostList)
│   │   └── ...
│   ├── services/          # API calls, Contentful client setup (blogservice.js, contentfulClient.js)
│   ├── App.js             # Root React component, handles routing
│   └── index.js           # Entry point for the React app
├── server/                # Express.js backend code
│   ├── routes/            # API route definitions (blogsroutes.js)
│   ├── service/           # Backend services (blogservice.js, contentfulClient.js)
│   └── app.js             # Main Express server configuration
├── .env                   # Environment variables
├── package.json           # Project dependencies and scripts
└── README.md              # This file

Setup and InstallationPrerequisitesBefore you begin, ensure you have the following installed on your development machine (and remote server if applicable):Node.js (LTS version recommended)npm (comes with Node.js) or YarnGitContentful Account: You'll need a Contentful account and access to a space with your blog content models.Contentful ConfigurationCreate a .env file in the server/ directory (or your project root if it's a monorepo) and add your Contentful credentials:CONTENTFUL_SPACE_ID=your_contentful_space_id
CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token

Replace your_contentful_space_id and your_contentful_access_token with your actual Contentful Space ID and Content Delivery API access token. These are used in contentfulClient.js.Local SetupClone the repository:git clone [your-repository-url]
cd [your-project-folder]

Install Backend Dependencies:cd server
npm install # or yarn install

Install Frontend Dependencies:cd ../ # Go back to the project root if you were in 'server'
cd client # Or whatever your React app's folder is named
npm install # or yarn install

(Adjust client to your actual frontend folder name if different).Remote Setup (VS Code Remote - SSH)If you plan to develop on a remote server using VS Code's Remote - SSH extension:Install VS Code Remote - SSH Extension: In VS Code, install the "Remote - SSH" extension.SSH Access: Ensure you have SSH access to your remote server (IP, username, SSH key/password).Node.js, npm/Yarn, Git on Remote: Make sure Node.js, npm/Yarn, and Git are installed on your remote server.Connect to Remote Host:Open VS Code's Remote Explorer (monitor icon on the left sidebar).Click + in "SSH TARGETS" and enter ssh username@your_remote_server_ip.Connect to the host in a new window.Clone and Open Project:Open a terminal in the remote VS Code window.Navigate to your desired directory on the remote server.Clone your Git repository: git clone [your-repository-url]Close the remote connection, then re-open the newly cloned project folder on the remote server using "Open Folder in New Window" from the Remote Explorer.Install Dependencies on Remote: Follow the "Install Backend Dependencies" and "Install Frontend Dependencies" steps from the Local Setup section, but run the commands in the VS Code terminal connected to your remote server.Running the ApplicationDevelopment ModeIn development, you'll typically run the backend and frontend separately.Start the Backend Server:Open a terminal, navigate to the server/ directory, and run:cd server
npm start

The backend server will run on http://localhost:5000 (or the port specified by your PORT environment variable).Start the React Development Server:Open a new terminal, navigate to your React app's directory (e.g., client/), and run:cd client
npm start

The React development server will typically open your application in your browser at http://localhost:3000. It will proxy API requests to your Express backend.Production ModeFor production, you'll build the React app and serve it directly from your Express server.Build the React Frontend:Navigate to your React app's directory (e.g., client/) and run:cd client
npm run build

This will create a build/ folder containing the optimized production build of your React app.Start the Production Server:Navigate to the server/ directory and run:cd server
NODE_ENV=production npm start

The Express server will now serve the static files from the build/ directory and handle all API requests. Your application will be accessible on the port your server is listening on (e.g., http://your-server-ip:5000).API EndpointsThe Express backend provides the following API endpoints:GET /api/article/post/all: Retrieves all blog posts.GET /api/article/post/:type: Retrieves all posts of a specific type.:type can be featured, album-review, or art.Example: /api/article/post/featuredGET /api/article/post/:type/:slug: Retrieves a single post of a specific type by its slug.:type can be featured, album-review, or art.:slug is the unique identifier for the post.Example: /api/article/post/art/my-first-art-postContributingFeel free to fork the repository, create a new branch, and submit pull requests.Fork the repository.Create your feature branch (git checkout -b feature/AmazingFeature).Commit your changes (git commit -m 'Add some AmazingFeature').Push to the branch (git push origin feature/AmazingFeature).Open a Pull Request.LicenseDistributed under the MIT License. See LICENSE for more information.