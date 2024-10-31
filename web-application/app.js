const express = require("express");
const workingHoursMiddleware = require("./middleware");
const path = require("path");
const app = express();

// Set EJS as the templating engine
app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname, "public"))); // Serve static files like CSS

// Use the middleware globally
app.use(workingHoursMiddleware);

// Define routes
app.get("/", (req, res) => res.render("home"));
app.get("/services", (req, res) => res.render("services"));
app.get("/contact", (req, res) => res.render("contact"));

const PORT = 3000;
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});