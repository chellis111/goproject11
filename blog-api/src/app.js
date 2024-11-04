const express = require ("express");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const blogRouter = require("./routes/blogRoutes");
const app = express();


//global middleware configuration for json data
app.use(express.json());

// global middleware configuration for cookie parser
app.use(cookieParser());

// global middleware for routes configuration
app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/blogs", blogRouter);

// Server health check
app.get("/", (req, res) => {
    res.json({ message: "Server is up and running" });
});


module.exports = app;