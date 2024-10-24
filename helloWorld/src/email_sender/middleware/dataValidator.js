// Define the dataValidator middleware
const dataValidator = (req, res, next) => {
    const { email, message } = req.body;

    // Basic validation for email and message
    if(!email || !message){
        return res.status(400).json({ message: 'Email and message are required' });
    }

    // Process to the next middleware if valid
    next();
};

module.exports = dataValidator; // Export the middleware