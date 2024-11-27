const express = require('express');
const path = require('path');

const app = express();
const port = 5000; // Ensure this is the correct port

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the homepage (login.html or index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // You can change this to index.html if you prefer
});

// Handle POST requests for signing up (email submission)
app.post('/signup', express.json(), (req, res) => {
    const email = req.body.email;
    console.log(`Email submitted: ${email}`);
    // Process the email (store it or perform other tasks)
    res.json({ message: 'Thank you for signing up!' });  // Send a response back
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
