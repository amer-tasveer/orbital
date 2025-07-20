const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const BlogpostRouter = require('./routes/blogsroutes'); 

const app = express();

//  Middleware Configuration 

app.use(cors());

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

// API Routes
app.use('/api/article', BlogpostRouter);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'build')));

    // For any other GET request not handled by previous middleware/routes,
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });
} else {
    console.log('Server running in development mode. Frontend served by React Dev Server.');
}

// --- Server Listener ---
const port = process.env.PORT || 5000; // Use port from environment variable or default to 5000

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
