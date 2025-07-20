# Orbital Blog Application

This project is a modern blog application that used to be live, an esoteric collection of articles and artwork with a spotlight on contemporary Southeast Asian music culture and the forces that provoke our works. It features a React.js frontend, an Express.js backend, and content managed via Contentful CMS. It's designed to display various types of articles, including featured posts, general articles, and album reviews, with a focus on a smooth user experience and maintainable code.

## Table of Contents

* [Features](https://www.google.com/search?q=%23features)

* [Technologies Used](https://www.google.com/search?q=%23technologies-used)

* [Project Structure](https://www.google.com/search?q=%23project-structure)

* [Setup and Installation](https://www.google.com/search?q=%23setup-and-installation)

  * [Prerequisites](https://www.google.com/search?q=%23prerequisites)

  * [Contentful Configuration](https://www.google.com/search?q=%23contentful-configuration)

  * [Local Setup](https://www.google.com/search?q=%23local-setup)

* [Running the Application](https://www.google.com/search?q=%23running-the-application)

  * [Development Mode](https://www.google.com/search?q=%23development-mode)

  * [Production Mode](https://www.google.com/search?q=%23production-mode)

* [API Endpoints](https://www.google.com/search?q=%23api-endpoints)

* [Contributing](https://www.google.com/search?q=%23contributing)

* [License](https://www.google.com/search?q=%23license)

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

The project follows a standard React application structure with a clear separation of concerns for frontend and backend code.

my-react-app/
├── public/                # Static assets for the frontend
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


## Setup and Installation

### Prerequisites

Before you begin, ensure you have the following installed on your development machine (and remote server if applicable):

* **Node.js** (LTS version recommended)

* **npm** (comes with Node.js) or **Yarn**

* **Git**

* **Contentful Account:** You'll need a Contentful account and access to a space with your blog content models.

### Contentful Configuration

Create a `.env` file in the `server/` directory (or your project root if it's a monorepo) and add your Contentful credentials:

CONTENTFUL_SPACE_ID=your_contentful_space_id
CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token


Replace `your_contentful_space_id` and `your_contentful_access_token` with your actual Contentful Space ID and Content Delivery API access token. These are used in `contentfulClient.js`.

### Local Setup

1. **Clone the repository:**
2. **Install Backend Dependencies:**
3. **Install Frontend Dependencies:**
  
## Running the Application

### Development Mode

In development, you'll typically run the backend and frontend separately.

1. **Start the Backend Server:**
Open a terminal, navigate to the `server/` directory, and run: `cd server npm start.`
The backend server will run on `http://localhost:5000` (or the port specified by your `PORT` environment variable).

2. **Start the React Development Server:**
Open a **new terminal**, navigate to your React app's directory (e.g., `client/`), and run: `cd client npm run build.`
This will create a `build/` folder containing the optimized production build of your React app.

2. **Start the Production Server:**
Navigate to the `server/` directory and run: `cd server NODE_ENV=production npm start`
The Express server will now serve the static files from the `build/` directory and handle all API requests. Your application will be accessible on the port your server is listening on (e.g., `http://your-server-ip:5000`).


## API Endpoints

The Express backend provides the following API endpoints:

* **`GET /api/article/post/all`**: Retrieves all blog posts.

* **`GET /api/article/post/:type`**: Retrieves all posts of a specific type.

* `:type` can be `featured`, `album-review`, or `art`.

* Example: `/api/article/post/featured`

* **`GET /api/article/post/:type/:slug`**: Retrieves a single post of a specific type by its slug.

* `:type` can be `featured`, `album-review`, or `art`.

* `:slug` is the unique identifier for the post.

* Example: `/api/article/post/art/my-first-art-post`

## Contributing

Feel free to fork the repository, create a new branch, and submit pull requests.

1. Fork the repository.

2. Create your feature branch (`git checkout -b feature/AmazingFeature`).

3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).

4. Push to the branch (`git push origin feature/AmazingFeature`).

5. Open a Pull Request.

## License

Distributed under the MIT License. See `LICENSE` for more information.
